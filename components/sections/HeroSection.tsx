"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const highlights = [
  "광고비 포함 투명한 가격",
  "학원 전문 마케팅 노하우",
  "원스톱 통합 운영",
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-100 rounded-full opacity-40 blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full border border-blue-100 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              학원 마케팅 전문 대행사
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-6"
          >
            학원 마케팅,
            <br />
            <span className="text-blue-600">이제 전문가에게</span>
            <br />
            맡기세요
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-8 max-w-2xl"
          >
            웹페이지 제작부터 SNS 운영, 네이버 광고까지
            <br className="hidden sm:block" />
            학원에 꼭 맞는 마케팅을 원스톱으로 해결해드립니다.
          </motion.p>

          {/* Highlights */}
          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-6 mb-10"
          >
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-2 text-slate-700 font-medium">
                <CheckCircle size={18} className="text-blue-600 shrink-0" />
                {item}
              </li>
            ))}
          </motion.ul>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors text-lg shadow-lg shadow-blue-200"
            >
              무료 상담 신청
              <ArrowRight size={20} />
            </Link>
            <Link
              href="#services"
              className="inline-flex items-center justify-center gap-2 border-2 border-slate-200 text-slate-700 font-semibold px-8 py-4 rounded-xl hover:border-blue-300 hover:text-blue-600 transition-colors text-lg"
            >
              서비스 둘러보기
            </Link>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 grid grid-cols-3 gap-6 max-w-lg"
        >
          {[
            { value: "8가지", label: "서비스 라인업" },
            { value: "100%", label: "광고비 투명 공개" },
            { value: "1곳", label: "원스톱 통합 관리" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-blue-600 mb-1">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
