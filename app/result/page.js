"use client";

import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ResultPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [score, setScore] = useState(0);

  useEffect(() => {
    if (searchParams) {
      const scoreParam = searchParams.get('score');
      setScore(scoreParam ? parseInt(scoreParam, 10) : 0);
    }
  }, [searchParams]);

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
