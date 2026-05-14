"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "광고비 포함 올인원 가격",
  "학원 전문 마케팅",
  "원스톱 통합 관리",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#0B1F3A]">
      {/* Background texture */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#1A56DB] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E8A020] opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-36 w-full">
        <div className="max-w-3xl">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex items-center gap-2 border border-[#E8A020]/40 text-[#E8A020] text-sm font-semibold px-4 py-2 rounded-full mb-8 tracking-tight bg-[#E8A020]/10">
              <span className="w-1.5 h-1.5 bg-[#E8A020] rounded-full animate-pulse" />
              학원 마케팅 전문 대행사
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[2.8rem] sm:text-[3.8rem] lg:text-[4.5rem] font-black text-white leading-[1.1] tracking-tight mb-7"
          >
            학원 마케팅,
            <br />
            <span className="text-[#E8A020]">이제 전문가에게</span>
            <br />
            맡기세요
          </motion.h1>

          {/* Sub */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-lg sm:text-xl text-white/60 leading-relaxed mb-9 tracking-tight"
          >
            웹페이지·SNS·네이버·당근 광고까지
            <br className="hidden sm:block" />
            학원에 딱 맞는 마케팅을 한 곳에서 해결합니다.
          </motion.p>

          {/* Highlights */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="flex flex-wrap gap-x-6 gap-y-2.5 mb-10"
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-white/80 text-sm font-medium tracking-tight">
                <CheckCircle size={15} className="text-[#E8A020] shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.32 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-[#E8A020] text-[#0B1F3A] font-black px-8 py-4 rounded-full hover:bg-[#F0B429] transition-colors text-base tracking-tight shadow-lg shadow-[#E8A020]/20"
            >
              무료 상담 신청
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-base tracking-tight"
            >
              서비스 보기
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-20 flex flex-wrap gap-8 border-t border-white/10 pt-10"
        >
          {[
            { value: "8가지", label: "서비스 라인업" },
            { value: "광고비 포함", label: "올인원 가격제" },
            { value: "24시간", label: "견적서 발송" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-xl sm:text-2xl font-black text-[#E8A020] tracking-tight">{stat.value}</div>
              <div className="text-sm text-white/40 tracking-tight mt-0.5">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
