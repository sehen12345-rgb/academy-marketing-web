"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Eye } from "lucide-react";

const highlights = [
  "광고비 포함 올인원 가격",
  "학원 전문 마케팅",
  "원스톱 통합 관리",
];

/* 오른쪽에 표시할 성과 카드 */
const resultCards = [
  {
    src: "/results/reels-4.jpg",
    views: "891만",
    label: "릴스",
    highlight: true,
    rotate: -2,
  },
  {
    src: "/results/reels-2.jpg",
    views: "119만",
    label: "릴스",
    highlight: false,
    rotate: 1.5,
  },
  {
    src: "/results/reels-3.jpg",
    views: "70.1만",
    label: "릴스",
    highlight: false,
    rotate: -1,
  },
  {
    src: "/results/threads-1.jpg",
    views: "192.8만",
    label: "스레드",
    highlight: false,
    rotate: 1,
    wide: true,
  },
  {
    src: "/results/reels-1.jpg",
    views: "64.3만",
    label: "릴스",
    highlight: false,
    rotate: -1.5,
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#0B1F3A]">
      {/* 배경 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-[#1A56DB] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E8A020] opacity-5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">

          {/* ── 왼쪽: 텍스트 ── */}
          <div className="flex-1 min-w-0 lg:max-w-[520px]">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline-flex items-center gap-2 border border-[#E8A020]/40 text-[#E8A020] text-sm font-semibold px-4 py-2 rounded-full mb-7 tracking-tight bg-[#E8A020]/10">
                <span className="w-1.5 h-1.5 bg-[#E8A020] rounded-full animate-pulse" />
                학원 마케팅 전문 대행사
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[2.6rem] sm:text-[3.4rem] lg:text-[3.8rem] font-black text-white leading-[1.1] tracking-tight mb-6"
            >
              학원 마케팅,
              <br />
              <span className="text-[#E8A020]">이제 전문가에게</span>
              <br />
              맡기세요
            </motion.h1>

            {/* Sub */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-base sm:text-lg text-white/55 leading-relaxed mb-8 tracking-tight"
            >
              웹페이지·SNS·네이버·당근 광고까지
              <br />
              학원에 딱 맞는 마케팅을 한 곳에서 해결합니다.
            </motion.p>

            {/* Highlights */}
            <motion.ul
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="flex flex-wrap gap-x-5 gap-y-2 mb-9"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-white/75 text-sm font-medium tracking-tight">
                  <CheckCircle size={14} className="text-[#E8A020] shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E8A020] text-[#0B1F3A] font-black px-7 py-3.5 rounded-full hover:bg-[#F0B429] transition-colors text-base tracking-tight shadow-lg shadow-[#E8A020]/20"
              >
                무료 상담 신청
                <ArrowRight size={17} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors text-base tracking-tight"
              >
                서비스 보기
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.55 }}
              className="mt-12 flex flex-wrap gap-7 border-t border-white/10 pt-8"
            >
              {[
                { value: "8가지",    label: "서비스 라인업" },
                { value: "광고비 포함", label: "올인원 가격제" },
                { value: "24시간",   label: "견적서 발송" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-lg sm:text-xl font-black text-[#E8A020] tracking-tight">{s.value}</div>
                  <div className="text-xs text-white/35 tracking-tight mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── 오른쪽: 성과 이미지 따따따땅 ── */}
          <div className="flex-1 w-full lg:max-w-[480px] relative">
            {/* 배경 글로우 */}
            <div className="absolute inset-0 bg-[#E8A020]/5 rounded-3xl blur-2xl scale-110 pointer-events-none" />

            <div className="relative grid grid-cols-2 gap-3">
              {resultCards.map((card, i) => (
                <motion.div
                  key={card.src}
                  initial={{ opacity: 0, scale: 0.65, y: 40 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 22,
                    delay: 0.5 + i * 0.18,
                  }}
                  whileHover={{ scale: 1.05, zIndex: 10 }}
                  className={`relative rounded-2xl overflow-hidden shadow-xl shadow-black/50 cursor-pointer
                    ${card.highlight ? "ring-2 ring-[#E8A020] ring-offset-2 ring-offset-[#0B1F3A]" : ""}
                    ${card.wide ? "col-span-2" : ""}
                  `}
                  style={{ rotate: `${card.rotate}deg` }}
                >
                  {/* 이미지 */}
                  <div className={`relative w-full ${card.wide ? "aspect-[2/1]" : "aspect-[9/13]"} bg-[#0F2D52]`}>
                    <Image
                      src={card.src}
                      alt={`${card.label} ${card.views} 조회수`}
                      fill
                      className="object-cover"
                      sizes="(max-width:1024px) 50vw, 25vw"
                    />
                    {/* 그라디언트 */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                  </div>

                  {/* 플랫폼 배지 */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="bg-[#0B1F3A]/80 backdrop-blur-sm text-[#E8A020] text-[10px] font-bold px-2 py-0.5 rounded-full border border-[#E8A020]/30 tracking-tight">
                      {card.label}
                    </span>
                    {card.highlight && (
                      <span className="ml-1 bg-[#E8A020] text-[#0B1F3A] text-[10px] font-black px-2 py-0.5 rounded-full tracking-tight">
                        🏆
                      </span>
                    )}
                  </div>

                  {/* 조회수 */}
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-1 mb-0.5">
                      <Eye size={10} className="text-white/50" />
                      <span className="text-white/50 text-[10px] tracking-tight">조회수</span>
                    </div>
                    <div className={`font-black tracking-tight leading-none ${
                      card.highlight ? "text-[#E8A020] text-2xl" : "text-white text-xl"
                    }`}>
                      {card.views}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 아래 레이블 */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="text-center text-white/25 text-xs mt-4 tracking-tight"
            >
              실제 운영 계정 스크린샷
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
}
