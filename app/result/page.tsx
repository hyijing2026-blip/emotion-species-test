import { Suspense } from "react";

import { ResultPageClient } from "@/components/result/result-page-client";

export default function ResultPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <ResultPageClient />
    </Suspense>
  );
}
