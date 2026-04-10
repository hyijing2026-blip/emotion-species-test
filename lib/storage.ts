import { AnswersMap, QuizResult, StoredQuizResult, StoredQuizSession } from "@/types/quiz";

const QUIZ_SESSION_KEY = "emotion-species-session";
const QUIZ_RESULT_KEY = "emotion-species-result";

function isBrowser() {
  return typeof window !== "undefined";
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
    return JSON.parse(raw) as StoredQuizSession;
  } catch {
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
    return JSON.parse(raw) as StoredQuizResult;
  } catch {
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
