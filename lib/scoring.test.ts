import { describe, expect, test } from "vitest";

import { QUESTIONS } from "@/data/questions";
import { PERSONALITY_TYPES } from "@/data/personality-types";
import {
  calculateDimensionScores,
  calculateQuizResult,
  createEmptyDimensionScores,
  getDimensionBenchmarks,
  getDimensionExtents,
  matchPersonalityType,
  normalizeScores,
} from "@/lib/scoring";

describe("scoring", () => {
  test("creates empty dimension score map", () => {
    const scores = createEmptyDimensionScores();

    expect(Object.keys(scores)).toHaveLength(12);
    expect(Object.values(scores).every((value) => value === 0)).toBe(true);
  });

  test("accumulates raw scores from selected answers", () => {
    const scores = calculateDimensionScores({
      q1: "a",
      q2: "d",
      q3: "c",
    });

    expect(scores.anxiety).toBe(3);
    expect(scores.overthink).toBe(3);
    expect(scores.ego).toBe(2);
    expect(scores.rebellion).toBe(2);
    expect(scores.control).toBe(2);
    expect(scores.chaos).toBe(1);
  });

  test("normalizes question-bank min and max values into 0-100", () => {
    const extents = getDimensionExtents();
    const minProfile = normalizeScores(
      {
        anxiety: extents.anxiety.min,
        ego: extents.ego.min,
        chaos: extents.chaos.min,
        control: extents.control.min,
        overthink: extents.overthink.min,
        socialMask: extents.socialMask.min,
        rebellion: extents.rebellion.min,
        sensitivity: extents.sensitivity.min,
        detachment: extents.detachment.min,
        clinginess: extents.clinginess.min,
        sarcasm: extents.sarcasm.min,
        collapse: extents.collapse.min,
      },
      QUESTIONS,
    );
    const maxProfile = normalizeScores(
      {
        anxiety: extents.anxiety.max,
        ego: extents.ego.max,
        chaos: extents.chaos.max,
        control: extents.control.max,
        overthink: extents.overthink.max,
        socialMask: extents.socialMask.max,
        rebellion: extents.rebellion.max,
        sensitivity: extents.sensitivity.max,
        detachment: extents.detachment.max,
        clinginess: extents.clinginess.max,
        sarcasm: extents.sarcasm.max,
        collapse: extents.collapse.max,
      },
      QUESTIONS,
    );

    expect(minProfile.anxiety).toBe(0);
    expect(minProfile.control).toBe(0);
    expect(maxProfile.anxiety).toBe(100);
    expect(maxProfile.socialMask).toBe(100);
  });

  test("centers each dimension benchmark mean at 50", () => {
    const benchmarks = getDimensionBenchmarks();
    const centered = normalizeScores(
      {
        anxiety: benchmarks.anxiety.mean,
        ego: benchmarks.ego.mean,
        chaos: benchmarks.chaos.mean,
        control: benchmarks.control.mean,
        overthink: benchmarks.overthink.mean,
        socialMask: benchmarks.socialMask.mean,
        rebellion: benchmarks.rebellion.mean,
        sensitivity: benchmarks.sensitivity.mean,
        detachment: benchmarks.detachment.mean,
        clinginess: benchmarks.clinginess.mean,
        sarcasm: benchmarks.sarcasm.mean,
        collapse: benchmarks.collapse.mean,
      },
      QUESTIONS,
    );

    expect(centered.anxiety).toBe(50);
    expect(centered.detachment).toBe(50);
    expect(centered.socialMask).toBe(50);
  });

  test("matches the same personality when ideal profile is passed in", () => {
    const target = PERSONALITY_TYPES.find((item) => item.code === "NJZ");
    if (!target) throw new Error("Missing target personality");

    const matches = matchPersonalityType(target.idealProfile);

    expect(matches[0].code).toBe("NJZ");
    expect(matches[0].matchPercentage).toBe(100);
  });

  test("builds a full quiz result from completed answers", () => {
    const answers = Object.fromEntries(
      QUESTIONS.map((question) => [question.id, question.options[0].id]),
    );

    const result = calculateQuizResult(answers);

    expect(result.primaryType.code).toBeTruthy();
    expect(result.topMatches).toHaveLength(3);
    expect(result.matchPercentage).toBeGreaterThan(0);
    expect(result.shareText).toContain("情绪物种");
  });
});
