"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="min-h-screen bg-[#F4F8FF] flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 w-16 h-16 rounded-2xl bg-[#0B1F3A] flex items-center justify-center">
        <span className="text-[#E8A020] font-black text-2xl">E</span>
      </div>
      <p className="text-red-500 text-sm font-bold tracking-widest uppercase mb-3">오류 발생</p>
      <h1 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight mb-3">
        일시적인 오류가 발생했어요
      </h1>
      <p className="text-[#5C6B7E] text-sm tracking-tight mb-8 max-w-xs">
        잠시 후 다시 시도해주세요. 문제가 계속되면 카카오 채널로 문의해주세요.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={reset}
          className="inline-flex items-center justify-center bg-[#0B1F3A] text-white font-bold px-6 py-3 rounded-full text-sm tracking-tight hover:bg-[#1B3D6E] transition-colors"
        >
          다시 시도
        </button>
        <Link
          href="/"
          className="inline-flex items-center justify-center bg-[#E8A020] text-[#0B1F3A] font-bold px-6 py-3 rounded-full text-sm tracking-tight hover:bg-[#F0B429] transition-colors"
        >
          홈으로 돌아가기
        </Link>
      </div>
    </main>
  );
}
