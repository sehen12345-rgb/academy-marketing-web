import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "페이지를 찾을 수 없습니다 | 에듀플로우",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#F4F8FF] flex flex-col items-center justify-center px-4 text-center">
      <div className="mb-6 w-16 h-16 rounded-2xl bg-[#0B1F3A] flex items-center justify-center">
        <span className="text-[#E8A020] font-black text-2xl">E</span>
      </div>
      <p className="text-[#E8A020] text-sm font-bold tracking-widest uppercase mb-3">404</p>
      <h1 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight mb-3">
        페이지를 찾을 수 없어요
      </h1>
      <p className="text-[#5C6B7E] text-sm tracking-tight mb-8 max-w-xs">
        주소가 잘못됐거나 페이지가 이동됐을 수 있어요.
      </p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 bg-[#0B1F3A] text-white font-bold px-6 py-3 rounded-full text-sm tracking-tight hover:bg-[#1B3D6E] transition-colors"
        >
          홈으로 돌아가기
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 bg-[#E8A020] text-[#0B1F3A] font-bold px-6 py-3 rounded-full text-sm tracking-tight hover:bg-[#F0B429] transition-colors"
        >
          상담 문의하기
        </Link>
      </div>
    </main>
  );
}
