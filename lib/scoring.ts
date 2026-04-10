import { DIMENSION_KEYS, AnswersMap, DimensionKey, DimensionScores, PersonalityMatch, PersonalityType, Question, QuizResult } from "@/types/quiz";
import { QUESTIONS } from "@/data/questions";
import { PERSONALITY_TYPES } from "@/data/personality-types";
import { DIMENSIONS } from "@/data/dimensions";

type DimensionExtents = Record<DimensionKey, { min: number; max: number }>;
type DimensionBenchmarks = Record<DimensionKey, { min: number; max: number; mean: number }>;

export function createEmptyDimensionScores(): DimensionScores {
  return DIMENSION_KEYS.reduce(
    (acc, key) => {
      acc[key] = 0;
      return acc;
    },
    {} as DimensionScores,
  );
}

export function calculateDimensionScores(
  answers: AnswersMap,
  questions: Question[] = QUESTIONS,
): DimensionScores {
  const scores = createEmptyDimensionScores();

  for (const question of questions) {
    const selectedOptionId = answers[question.id];
    if (!selectedOptionId) continue;

    const option = question.options.find((item) => item.id === selectedOptionId);
    if (!option) continue;

    for (const effect of option.effects) {
      scores[effect.dimension] += effect.score;
    }
  }

  return scores;
}

export function getDimensionExtents(questions: Question[] = QUESTIONS): DimensionExtents {
  const extents = DIMENSION_KEYS.reduce(
    (acc, key) => {
      acc[key] = { min: 0, max: 0 };
      return acc;
    },
    {} as DimensionExtents,
  );

  for (const question of questions) {
    for (const key of DIMENSION_KEYS) {
      const scoresForKey = question.options.map((option) => {
        const effect = option.effects.find((item) => item.dimension === key);
        return effect?.score ?? 0;
      });

      extents[key].min += Math.min(...scoresForKey);
      extents[key].max += Math.max(...scoresForKey);
    }
  }

  return extents;
}

export function getDimensionBenchmarks(
  questions: Question[] = QUESTIONS,
): DimensionBenchmarks {
  const extents = getDimensionExtents(questions);
  const means = DIMENSION_KEYS.reduce(
    (acc, key) => {
      acc[key] = 0;
      return acc;
    },
    {} as Record<DimensionKey, number>,
  );

  for (const question of questions) {
    for (const key of DIMENSION_KEYS) {
      const scoresForKey = question.options.map((option) => {
        const effect = option.effects.find((item) => item.dimension === key);
        return effect?.score ?? 0;
      });

      means[key] += scoresForKey.reduce((sum, score) => sum + score, 0) / scoresForKey.length;
    }
  }

  return DIMENSION_KEYS.reduce(
    (acc, key) => {
      acc[key] = {
        ...extents[key],
        mean: Number(means[key].toFixed(4)),
      };
      return acc;
    },
    {} as DimensionBenchmarks,
  );
}

export function normalizeScores(
  rawScores: DimensionScores,
  questions: Question[] = QUESTIONS,
): DimensionScores {
  const benchmarks = getDimensionBenchmarks(questions);

  return DIMENSION_KEYS.reduce(
    (acc, key) => {
      const { min, max, mean } = benchmarks[key];
      const lowerSpan = mean - min;
      const upperSpan = max - mean;

      if (lowerSpan <= 0 && upperSpan <= 0) {
        acc[key] = 50;
        return acc;
      }

      if (rawScores[key] === mean) {
        acc[key] = 50;
        return acc;
      }

      const normalized =
        rawScores[key] > mean
          ? 50 + ((rawScores[key] - mean) / Math.max(upperSpan, 1)) * 50
          : 50 - ((mean - rawScores[key]) / Math.max(lowerSpan, 1)) * 50;

      acc[key] = Number(Math.max(0, Math.min(100, normalized)).toFixed(1));
      return acc;
    },
    {} as DimensionScores,
  );
}

function getIdealDimensionWeight(idealValue: number): number {
  return 1 + Math.abs(idealValue - 50) / 24;
}

function getCoreDimensionPenalty(score: number, idealValue: number): number {
  const intensity = Math.abs(idealValue - 50);

  if (intensity < 18) {
    return 0;
  }

  const allowedDiff = Math.max(10, 26 - intensity * 0.28);
  const extraMismatch = Math.abs(score - idealValue) - allowedDiff;
  const penaltyFactor = 0.28 + intensity / 90;

  return extraMismatch > 0 ? extraMismatch * penaltyFactor : 0;
}

export function getMatchPercentage(
  normalizedScores: DimensionScores,
  idealProfile: DimensionScores,
): number {
  let weightedDiff = 0;
  let maxWeightedDiff = 0;
  let corePenalty = 0;

  for (const key of DIMENSION_KEYS) {
    const weight = getIdealDimensionWeight(idealProfile[key]);
    const diff = Math.abs(normalizedScores[key] - idealProfile[key]);

    weightedDiff += Math.pow(diff, 1.15) * weight;
    maxWeightedDiff += Math.pow(100, 1.15) * weight;
    corePenalty += getCoreDimensionPenalty(normalizedScores[key], idealProfile[key]);
  }

  const similarity = 100 - (weightedDiff / maxWeightedDiff) * 100 - corePenalty;
  return Number(Math.max(0, Math.min(100, similarity)).toFixed(1));
}

export function matchPersonalityType(
  normalizedScores: DimensionScores,
  personalities: PersonalityType[] = PERSONALITY_TYPES,
): PersonalityMatch[] {
  return personalities
    .map((personality) => ({
      code: personality.code,
      name: personality.name,
      slug: personality.slug,
      matchPercentage: getMatchPercentage(normalizedScores, personality.idealProfile),
    }))
    .sort((a, b) => b.matchPercentage - a.matchPercentage);
}

export function getDominantDimensions(scores: DimensionScores, count = 3): DimensionKey[] {
  return [...DIMENSION_KEYS]
    .sort((a, b) => scores[b] - scores[a])
    .slice(0, count);
}

export function generateResultSummary(
  personality: PersonalityType,
  normalizedScores: DimensionScores,
): string {
  const dominant = getDominantDimensions(normalizedScores).map((key) => {
    const dimension = DIMENSIONS.find((item) => item.key === key);
    return dimension?.name ?? key;
  });

  return `${personality.summary} 你目前最突出的三项是${dominant.join("、")}，难怪整个人看起来像这类情绪物种的高配版本。`;
}

export function isQuizComplete(
  answers: AnswersMap,
  questions: Question[] = QUESTIONS,
): boolean {
  return questions.every((question) => Boolean(answers[question.id]));
}

export function calculateQuizResult(
  answers: AnswersMap,
  questions: Question[] = QUESTIONS,
  personalities: PersonalityType[] = PERSONALITY_TYPES,
): QuizResult {
  const rawScores = calculateDimensionScores(answers, questions);
  const normalizedScores = normalizeScores(rawScores, questions);
  const topMatches = matchPersonalityType(normalizedScores, personalities);
  const primaryMatch = topMatches[0];
  const primaryType = personalities.find((item) => item.code === primaryMatch.code);

  if (!primaryType) {
    throw new Error("Primary personality type not found");
  }

  return {
    primaryType,
    matchPercentage: primaryMatch.matchPercentage,
    rawScores,
    normalizedScores,
    topMatches: topMatches.slice(0, 3),
    dominantDimensions: getDominantDimensions(normalizedScores),
    shareText: generateShareText(primaryType, primaryMatch.matchPercentage),
  };
}

export function generateShareText(
  personality: PersonalityType,
  matchPercentage: number,
): string {
  return [
    `我测出来是「${personality.name}」(${matchPercentage}%)`,
    personality.posterLine,
    "来测测你属于哪一种当代互联网情绪物种。",
  ].join("｜");
}
