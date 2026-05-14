"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#services", label: "서비스" },
  { href: "#pricing",  label: "요금제" },
  { href: "#process",  label: "진행 방식" },
  { href: "/contact",  label: "문의하기" },
];

export default function Header() {
  const [isOpen, setIsOpen]     = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B1F3A]/97 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-[70px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-[#E8A020] rounded-lg flex items-center justify-center">
              <span className="text-[#0B1F3A] font-black text-base">M</span>
            </div>
            <span className="font-bold text-white text-lg tracking-tight">
              마케팅<span className="text-[#E8A020]">파트너</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-white font-medium text-sm transition-colors tracking-tight"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-[#E8A020] text-[#0B1F3A] text-sm font-bold px-5 py-2.5 rounded-full hover:bg-[#F0B429] transition-colors tracking-tight"
            >
              무료 상담 신청
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="메뉴"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B1F3A] border-t border-white/10 px-4 py-5">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/80 font-medium py-1.5 tracking-tight"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#E8A020] text-[#0B1F3A] text-sm font-bold px-5 py-3 rounded-full text-center mt-2 tracking-tight"
              onClick={() => setIsOpen(false)}
            >
              무료 상담 신청
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
