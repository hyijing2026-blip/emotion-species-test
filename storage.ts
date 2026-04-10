import { AnswersMap, QuizResult, StoredQuizResult, StoredQuizSession } from "@/types/quiz";

const QUIZ_SESSION_KEY = "emotion-species-session";
const QUIZ_RESULT_KEY = "emotion-species-result";

function isBrowser() {
  return typeof window !== "undefined";
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function isAnswersMap(value: unknown): value is AnswersMap {
  if (!isRecord(value)) return false;
  return Object.values(value).every((item) => typeof item === "string");
}

function isStoredQuizSession(value: unknown): value is StoredQuizSession {
  if (!isRecord(value)) return false;
  return typeof value.updatedAt === "string" && isAnswersMap(value.answers);
}

function isQuizResult(value: unknown): value is QuizResult {
  if (!isRecord(value)) return false;

  return (
    isRecord(value.primaryType) &&
    typeof value.primaryType.code === "string" &&
    typeof value.primaryType.name === "string" &&
    typeof value.matchPercentage === "number" &&
    isRecord(value.normalizedScores) &&
    isRecord(value.rawScores) &&
    Array.isArray(value.topMatches) &&
    Array.isArray(value.dominantDimensions) &&
    typeof value.shareText === "string"
  );
}

function isStoredQuizResult(value: unknown): value is StoredQuizResult {
  if (!isRecord(value)) return false;
  return typeof value.updatedAt === "string" && isQuizResult(value.result);
}

export function saveQuizSession(answers: AnswersMap) {
  if (!isBrowser()) return;

  const payload: StoredQuizSession = {
    answers,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(QUIZ_SESSION_KEY, JSON.stringify(payload));
}

export function loadQuizSession(): StoredQuizSession | null {
  if (!isBrowser()) return null;

  const raw = window.localStorage.getItem(QUIZ_SESSION_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!isStoredQuizSession(parsed)) {
      window.localStorage.removeItem(QUIZ_SESSION_KEY);
      return null;
    }

    return parsed;
  } catch {
    window.localStorage.removeItem(QUIZ_SESSION_KEY);
    return null;
  }
}

export function clearQuizSession() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(QUIZ_SESSION_KEY);
}

export function saveQuizResult(result: QuizResult) {
  if (!isBrowser()) return;

  const payload: StoredQuizResult = {
    result,
    updatedAt: new Date().toISOString(),
  };

  window.localStorage.setItem(QUIZ_RESULT_KEY, JSON.stringify(payload));
}

export function loadQuizResult(): StoredQuizResult | null {
  if (!isBrowser()) return null;

  const raw = window.localStorage.getItem(QUIZ_RESULT_KEY);
  if (!raw) return null;

  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!isStoredQuizResult(parsed)) {
      window.localStorage.removeItem(QUIZ_RESULT_KEY);
      return null;
    }

    return parsed;
  } catch {
    window.localStorage.removeItem(QUIZ_RESULT_KEY);
    return null;
  }
}

export function clearQuizResult() {
  if (!isBrowser()) return;
  window.localStorage.removeItem(QUIZ_RESULT_KEY);
}

export function resetQuizStorage() {
  clearQuizSession();
  clearQuizResult();
}
