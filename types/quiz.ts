export const DIMENSION_KEYS = [
  "anxiety",
  "ego",
  "chaos",
  "control",
  "overthink",
  "socialMask",
  "rebellion",
  "sensitivity",
  "detachment",
  "clinginess",
  "sarcasm",
  "collapse",
] as const;

export type DimensionKey = (typeof DIMENSION_KEYS)[number];

export type DimensionDefinition = {
  key: DimensionKey;
  name: string;
  description: string;
  lowLabel: string;
  highLabel: string;
  scoreRangeHint: string;
};

export type QuestionEffect = {
  dimension: DimensionKey;
  score: number;
};

export type QuestionOption = {
  id: string;
  text: string;
  effects: QuestionEffect[];
};

export type Question = {
  id: string;
  title: string;
  options: QuestionOption[];
};

export type DimensionScores = Record<DimensionKey, number>;

export type PersonalityType = {
  code: string;
  slug: string;
  name: string;
  alias: string;
  subtitle: string;
  summary: string;
  tags: string[];
  socialStyle: string;
  trigger: string;
  conflictStyle: string;
  hiddenSkill: string;
  friendComment: string;
  roastLine: string;
  posterLine: string;
  idealProfile: DimensionScores;
};

export type AnswersMap = Record<string, string>;

export type PersonalityMatch = {
  code: string;
  name: string;
  slug: string;
  matchPercentage: number;
};

export type QuizResult = {
  primaryType: PersonalityType;
  matchPercentage: number;
  rawScores: DimensionScores;
  normalizedScores: DimensionScores;
  topMatches: PersonalityMatch[];
  dominantDimensions: DimensionKey[];
  shareText: string;
};

export type StoredQuizSession = {
  answers: AnswersMap;
  updatedAt: string;
};

export type StoredQuizResult = {
  result: QuizResult;
  updatedAt: string;
};
