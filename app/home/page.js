"use client";

import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <h1>Welcome to the Quiz Game</h1>
      <Link href="/quiz">
        <button>Start Quiz</button>
      </Link>
    </>
  );
}
