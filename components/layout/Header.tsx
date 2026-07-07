"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services",      label: "서비스" },
  { href: "#pricing",       label: "요금제" },
  { href: "#testimonials",  label: "후기" },
  { href: "#process",       label: "진행 방식" },
  { href: "/contact",       label: "문의하기" },
];

export default function Header() {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);
  const [bannerOn, setBannerOn]   = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem("bannerDismissed")) setBannerOn(true);
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const dismissBanner = () => {
    sessionStorage.setItem("bannerDismissed", "1");
    setBannerOn(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* 긴급성 띠 배너 */}
      {bannerOn && (
        <div className="bg-[#E8A020] text-[#0B1F3A] text-xs sm:text-sm font-bold tracking-tight relative">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-center gap-2 text-center">
            <span className="animate-pulse">🔥</span>
            <span>이번 달 신규 계약 <span className="underline underline-offset-2">2자리</span> 남았습니다</span>
            <span className="hidden sm:inline text-[#0B1F3A]/60">—</span>
            <Link href="/contact" className="hidden sm:inline underline underline-offset-2 hover:text-[#0B1F3A]/70 transition-colors">
              지금 바로 상담 신청 →
            </Link>
            <button
              onClick={dismissBanner}
              aria-label="닫기"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-[#0B1F3A]/50 hover:text-[#0B1F3A] transition-colors"
            >
              <X size={14} />
            </button>
          </div>
        </div>
      )}

      <div
        className={`bg-white transition-all duration-300 ${
          scrolled ? "shadow-md shadow-black/8" : "shadow-sm shadow-black/5"
        }`}
      >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-[68px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#E8A020] rounded-lg flex items-center justify-center shadow-sm">
              <span className="text-[#0B1F3A] font-black text-sm">E</span>
            </div>
            <span className="font-bold text-[#0B1F3A] text-lg tracking-tight">
              에듀<span className="text-[#E8A020]">플로우</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#4A5568] hover:text-[#0B1F3A] font-medium text-sm transition-colors tracking-tight"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-2.5">
            <a
              href="https://open.kakao.com/o/sFi0Tvyi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-[#FEE500] text-[#3A1D1D] text-sm font-bold px-4 py-2.5 rounded-full hover:bg-[#F5DC00] transition-colors tracking-tight shadow-sm"
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#3A1D1D">
                <path d="M12 3C6.477 3 2 6.477 2 11c0 2.89 1.657 5.424 4.162 6.962-.178.667-.647 2.415-.742 2.789-.118.463.17.457.358.332.147-.097 2.34-1.594 3.287-2.238.626.09 1.27.137 1.935.137 5.523 0 10-3.477 10-8C22 6.477 17.523 3 12 3z"/>
              </svg>
              카톡 상담
            </a>
            <Link
              href="/contact"
              className="bg-[#0B1F3A] text-white text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#1A3A6B] transition-colors tracking-tight shadow-sm"
            >
              무료 상담 신청
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-[#0B1F3A] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="메뉴"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-5 shadow-lg">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#0B1F3A] font-medium py-1.5 tracking-tight text-sm"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://open.kakao.com/o/sFi0Tvyi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#FEE500] text-[#3A1D1D] text-sm font-bold px-5 py-3 rounded-full text-center mt-2 tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#3A1D1D">
                <path d="M12 3C6.477 3 2 6.477 2 11c0 2.89 1.657 5.424 4.162 6.962-.178.667-.647 2.415-.742 2.789-.118.463.17.457.358.332.147-.097 2.34-1.594 3.287-2.238.626.09 1.27.137 1.935.137 5.523 0 10-3.477 10-8C22 6.477 17.523 3 12 3z"/>
              </svg>
              카카오톡 빠른 상담
            </a>
            <Link
              href="/contact"
              className="bg-[#0B1F3A] text-white text-sm font-bold px-5 py-3 rounded-full text-center tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              무료 상담 신청
            </Link>
          </nav>
        </div>
      )}
      </div>
    </header>
  );
}
