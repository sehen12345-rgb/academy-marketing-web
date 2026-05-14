"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "광고비 포함 투명한 가격",
  "학원 전문 마케팅",
  "원스톱 통합 관리",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-white">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-blue-50 rounded-full opacity-70 blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] bg-amber-50 rounded-full opacity-50 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-32 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full border border-blue-100 mb-7 tracking-tight">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              학원 마케팅 전문 대행사
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="text-[2.6rem] sm:text-[3.4rem] lg:text-[4rem] font-bold text-slate-900 leading-[1.15] tracking-tight mb-6"
          >
            학원 마케팅,
            <br />
            <span className="text-blue-600">이제 전문가에게</span>
            <br />
            맡기세요
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="text-lg sm:text-xl text-slate-500 leading-relaxed mb-8 tracking-tight"
          >
            웹페이지·SNS·네이버·당근 광고까지
            <br className="hidden sm:block" />
            학원에 딱 맞는 마케팅을 한 곳에서.
          </motion.p>

          {/* Highlights */}
          <motion.ul
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="flex flex-wrap gap-x-6 gap-y-2 mb-10"
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-1.5 text-slate-600 text-sm font-medium">
                <CheckCircle size={15} className="text-blue-500 shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.32 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-700 transition-colors text-base shadow-lg shadow-blue-200 tracking-tight"
            >
              무료 상담 신청
              <ArrowRight size={18} />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-700 font-semibold px-8 py-4 rounded-full hover:bg-slate-200 transition-colors text-base tracking-tight"
            >
              서비스 보기
            </Link>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 flex flex-wrap gap-8"
        >
          {[
            { value: "8가지", label: "서비스 라인업" },
            { value: "광고비 포함", label: "올인원 가격제" },
            { value: "24h", label: "견적서 발송" },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-2xl font-bold text-blue-600 tracking-tight">{stat.value}</div>
              <div className="text-sm text-slate-400 tracking-tight">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
