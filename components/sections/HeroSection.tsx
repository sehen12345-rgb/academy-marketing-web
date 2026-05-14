"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Play, AtSign, Users, Heart } from "lucide-react";

const highlights = [
  "광고비 포함 올인원 가격",
  "학원 전문 마케팅",
  "원스톱 통합 관리",
];

/* 성과 카드 데이터 */
const statCards = [
  {
    icon: Play,
    platform: "릴스",
    label: "단일 영상 최고 조회수",
    value: "891만",
    sub: "views",
    featured: true,  // 크게 강조
  },
  {
    icon: Play,
    platform: "릴스",
    label: "조회수",
    value: "119만",
    sub: "views",
  },
  {
    icon: Play,
    platform: "릴스",
    label: "조회수",
    value: "70.1만",
    sub: "views",
  },
  {
    icon: AtSign,
    platform: "스레드",
    label: "누적 조회수",
    value: "192.8만",
    sub: "views",
  },
  {
    icon: Users,
    platform: "스레드",
    label: "팔로워",
    value: "1.4만",
    sub: "followers",
  },
  {
    icon: Heart,
    platform: "스레드",
    label: "누적 반응",
    value: "1.3만",
    sub: "reactions",
  },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#0B1F3A]">
      {/* 배경 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "56px 56px",
          }}
        />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-[#1A56DB] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E8A020] opacity-[0.07] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-10">

          {/* ── 왼쪽: 텍스트 ── */}
          <div className="flex-1 lg:max-w-[500px]">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <span className="inline-flex items-center gap-2 border border-[#E8A020]/40 text-[#E8A020] text-sm font-semibold px-4 py-2 rounded-full mb-7 tracking-tight bg-[#E8A020]/10">
                <span className="w-1.5 h-1.5 bg-[#E8A020] rounded-full animate-pulse" />
                학원 마케팅 전문 대행사
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-[2.6rem] sm:text-[3.4rem] lg:text-[3.8rem] font-black text-white leading-[1.1] tracking-tight mb-6"
            >
              학원 마케팅,
              <br />
              <span className="text-[#E8A020]">이제 전문가에게</span>
              <br />
              맡기세요
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="text-base sm:text-lg text-white/55 leading-relaxed mb-8 tracking-tight"
            >
              웹페이지·SNS·네이버·당근 광고까지
              <br />
              학원에 딱 맞는 마케팅을 한 곳에서 해결합니다.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="flex flex-wrap gap-x-5 gap-y-2 mb-9"
            >
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-1.5 text-white/70 text-sm font-medium tracking-tight">
                  <CheckCircle size={13} className="text-[#E8A020] shrink-0" />
                  {item}
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E8A020] text-[#0B1F3A] font-black px-7 py-3.5 rounded-full hover:bg-[#F0B429] transition-colors text-base tracking-tight shadow-lg shadow-[#E8A020]/20"
              >
                무료 상담 신청 <ArrowRight size={16} />
              </Link>
              <Link
                href="#services"
                className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors text-base tracking-tight"
              >
                서비스 보기
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 flex flex-wrap gap-7 border-t border-white/10 pt-8"
            >
              {[
                { value: "8가지",    label: "서비스 라인업" },
                { value: "광고비 포함", label: "올인원 가격제" },
                { value: "24시간",   label: "견적서 발송" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-lg font-black text-[#E8A020] tracking-tight">{s.value}</div>
                  <div className="text-[11px] text-white/35 tracking-tight mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── 오른쪽: 숫자 카드 따따따땅 ── */}
          <div className="flex-1 w-full lg:max-w-[440px]">

            {/* 상단 레이블 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-1 h-4 bg-[#E8A020] rounded-full" />
              <span className="text-white/40 text-xs font-semibold tracking-widest uppercase">실제 운영 성과</span>
            </motion.div>

            {/* 카드 그리드 */}
            <div className="grid grid-cols-2 gap-3">

              {/* 891만 — 대형 featured 카드 (2칸) */}
              <motion.div
                initial={{ opacity: 0, y: 28, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.55 }}
                className="col-span-2 relative bg-gradient-to-br from-[#E8A020] to-[#F0B429] rounded-2xl p-5 overflow-hidden"
              >
                {/* 배경 장식 */}
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full" />
                <div className="absolute -right-1 -bottom-6 w-16 h-16 bg-white/10 rounded-full" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 bg-[#0B1F3A]/20 rounded-lg flex items-center justify-center">
                        <Play size={12} className="text-[#0B1F3A]" fill="currentColor" />
                      </div>
                      <span className="text-[#0B1F3A]/70 text-xs font-bold tracking-tight">릴스 · 단일 최고 기록</span>
                    </div>
                    <span className="text-[10px] bg-[#0B1F3A]/15 text-[#0B1F3A] font-black px-2 py-0.5 rounded-full">🏆 TOP</span>
                  </div>
                  <div className="text-[#0B1F3A] font-black tracking-tight leading-none" style={{ fontSize: "clamp(2.6rem, 7vw, 3.8rem)" }}>
                    891만
                  </div>
                  <div className="text-[#0B1F3A]/60 text-sm font-semibold mt-1 tracking-tight">조회수</div>
                </div>
              </motion.div>

              {/* 나머지 5개 카드 */}
              {statCards.slice(1).map((card, i) => {
                const Icon = card.icon;
                return (
                  <motion.div
                    key={card.value}
                    initial={{ opacity: 0, y: 24, scale: 0.88 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 270,
                      damping: 24,
                      delay: 0.72 + i * 0.12,
                    }}
                    className="bg-white/[0.06] border border-white/10 rounded-2xl p-4 hover:bg-white/[0.09] transition-colors"
                  >
                    <div className="flex items-center gap-1.5 mb-2.5">
                      <div className="w-5 h-5 bg-[#E8A020]/20 rounded-md flex items-center justify-center">
                        <Icon size={10} className="text-[#E8A020]" />
                      </div>
                      <span className="text-white/35 text-[10px] font-semibold tracking-tight">{card.platform}</span>
                    </div>
                    <div className="text-[#E8A020] font-black tracking-tight leading-none text-2xl sm:text-3xl">
                      {card.value}
                    </div>
                    <div className="text-white/40 text-[11px] font-medium mt-1 tracking-tight">{card.label}</div>
                  </motion.div>
                );
              })}
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.5 }}
              className="text-white/20 text-[11px] text-right mt-3 tracking-tight"
            >
              실제 운영 계정 기준
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
