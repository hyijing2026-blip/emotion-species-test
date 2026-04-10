import { DIMENSIONS } from "@/data/dimensions";
import { PERSONALITY_TYPES } from "@/data/personality-types";
import { DimensionKey, DimensionScores, QuizResult } from "@/types/quiz";

type SerializedResult = {
  typeCode: string;
  matchPercentage: number;
  scores: DimensionScores;
};

function encodePayload(payload: SerializedResult): string {
  return encodeURIComponent(JSON.stringify(payload));
}

function decodePayload(value: string): SerializedResult | null {
  try {
    return JSON.parse(decodeURIComponent(value)) as SerializedResult;
  } catch {
    return null;
  }
}

export function createResultSearchParams(result: QuizResult): string {
  const params = new URLSearchParams();
  params.set(
    "data",
    encodePayload({
      typeCode: result.primaryType.code,
      matchPercentage: result.matchPercentage,
      scores: result.normalizedScores,
    }),
  );
  return params.toString();
}

export function readResultFromSearchParams(searchParams: URLSearchParams): Pick<
  QuizResult,
  "primaryType" | "matchPercentage" | "normalizedScores"
> | null {
  const encoded = searchParams.get("data");
  if (!encoded) return null;

  const payload = decodePayload(encoded);
  if (!payload) return null;

  const personality = PERSONALITY_TYPES.find((item) => item.code === payload.typeCode);
  if (!personality) return null;

  return {
    primaryType: personality,
    matchPercentage: payload.matchPercentage,
    normalizedScores: payload.scores,
  };
}

export function getDimensionChartData(scores: DimensionScores) {
  return DIMENSIONS.map((dimension) => ({
    key: dimension.key,
    label: dimension.name,
    value: scores[dimension.key],
  }));
}

export function getCompactDimensionHighlights(scores: DimensionScores) {
  return getDimensionChartData(scores)
    .sort((a, b) => b.value - a.value)
    .slice(0, 4);
}

export function buildCopyResultText(
  result: Pick<QuizResult, "primaryType" | "matchPercentage" | "normalizedScores">,
): string {
  const highlights = getCompactDimensionHighlights(result.normalizedScores)
    .map((item) => `${item.label}${Math.round(item.value)}`)
    .join(" / ");

  return [
    `我的结果是「${result.primaryType.name}」`,
    `${result.primaryType.subtitle}`,
    `匹配度 ${result.matchPercentage}%`,
    `高能维度: ${highlights}`,
    `吐槽认证: ${result.primaryType.roastLine}`,
    "仅供娱乐，不作为任何专业判断依据。",
  ].join("\n");
}

export function getDimensionValue(
  scores: DimensionScores,
  key: DimensionKey,
): number {
  return scores[key];
}
