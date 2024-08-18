"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const score = searchParams.get('score') || 0;

  return (
    <div className="container">
      <h1>Quiz Result</h1>
      <h2>Your Score: {score}</h2>
      <Link href="/">
        <button>Go Home</button>
      </Link>
    </div>
  );
}
