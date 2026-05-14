"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Play, AtSign, Users, Heart, TrendingUp, Eye } from "lucide-react";

const highlights = [
  "광고비 포함 올인원 가격",
  "학원 전문 마케팅",
  "원스톱 통합 관리",
];

/* 마퀴 티커 아이템 (무한 반복용) */
const tickerItems = [
  { icon: "🎬", label: "릴스", value: "891만" },
  { icon: "🎬", label: "릴스", value: "119만" },
  { icon: "🎬", label: "릴스", value: "70.1만" },
  { icon: "🎬", label: "릴스", value: "64.3만" },
  { icon: "🧵", label: "스레드", value: "192.8만" },
  { icon: "🧵", label: "스레드", value: "39만" },
  { icon: "👥", label: "팔로워", value: "1.4만" },
  { icon: "❤️", label: "반응", value: "1.3만" },
];

/* 카드 그리드 데이터 */
const statCards = [
  /* 릴스 */
  { icon: Play,      platform: "릴스",    label: "조회수",        value: "119만",   color: "reels" },
  { icon: Play,      platform: "릴스",    label: "조회수",        value: "70.1만",  color: "reels" },
  { icon: Play,      platform: "릴스",    label: "조회수",        value: "64.3만",  color: "reels" },
  /* 스레드 누적 */
  { icon: AtSign,    platform: "스레드",  label: "누적 조회수",   value: "192.8만", color: "thread" },
  { icon: TrendingUp,platform: "스레드",  label: "30일 조회수",   value: "39만",    color: "thread" },
  /* 스레드 지표 */
  { icon: Users,     platform: "스레드",  label: "팔로워",        value: "1.4만",   color: "thread" },
  { icon: Heart,     platform: "스레드",  label: "누적 반응",     value: "1.3만",   color: "thread" },
  { icon: Heart,     platform: "스레드",  label: "30일 반응",     value: "2,857",   color: "thread" },
  /* 릴스 총합 */
  { icon: Eye,       platform: "릴스",    label: "총 누적 조회수", value: "1,235만+", color: "reels" },
];

const colorMap = {
  reels:  { bg: "bg-[#1A0A3A]/60", badge: "bg-purple-500/20 text-purple-300", icon: "text-purple-400" },
  thread: { bg: "bg-[#0A2A1A]/60", badge: "bg-emerald-500/20 text-emerald-300", icon: "text-emerald-400" },
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#0B1F3A]">
      {/* 배경 */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 opacity-[0.035]"
          style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "56px 56px" }}
        />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[400px] bg-[#1A56DB] opacity-10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#E8A020] opacity-[0.07] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28 w-full">
        <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-10">

          {/* ── 왼쪽: 텍스트 ── */}
          <div className="flex-1 lg:max-w-[480px] pt-2">
            <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
              <span className="inline-flex items-center gap-2 border border-[#E8A020]/40 text-[#E8A020] text-sm font-semibold px-4 py-2 rounded-full mb-7 tracking-tight bg-[#E8A020]/10">
                <span className="w-1.5 h-1.5 bg-[#E8A020] rounded-full animate-pulse" />
                학원 마케팅 전문 대행사
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-[2.6rem] sm:text-[3.4rem] lg:text-[3.6rem] font-black text-white leading-[1.1] tracking-tight mb-6"
            >
              학원 마케팅,
              <br />
              <span className="text-[#E8A020]">이제 전문가에게</span>
              <br />
              맡기세요
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.16 }}
              className="text-base sm:text-lg text-white/55 leading-relaxed mb-8 tracking-tight"
            >
              웹페이지·SNS·네이버·당근 광고까지
              <br />
              학원에 딱 맞는 마케팅을 한 곳에서 해결합니다.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
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
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="flex flex-wrap gap-3"
            >
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#E8A020] text-[#0B1F3A] font-black px-7 py-3.5 rounded-full hover:bg-[#F0B429] transition-colors text-base tracking-tight shadow-lg shadow-[#E8A020]/20">
                무료 상담 신청 <ArrowRight size={16} />
              </Link>
              <Link href="#services" className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-colors text-base tracking-tight">
                서비스 보기
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="mt-10 flex flex-wrap gap-7 border-t border-white/10 pt-8"
            >
              {[
                { value: "8가지", label: "서비스 라인업" },
                { value: "광고비 포함", label: "올인원 가격제" },
                { value: "24시간", label: "견적서 발송" },
              ].map((s) => (
                <div key={s.label}>
                  <div className="text-lg font-black text-[#E8A020] tracking-tight">{s.value}</div>
                  <div className="text-[11px] text-white/35 tracking-tight mt-0.5">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── 오른쪽: 성과 대시보드 ── */}
          <div className="flex-1 w-full lg:max-w-[500px]">

            {/* 헤더 레이블 */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="flex items-center gap-2 mb-3"
            >
              <div className="w-1 h-4 bg-[#E8A020] rounded-full" />
              <span className="text-white/40 text-[11px] font-bold tracking-widest uppercase">실제 운영 성과</span>
            </motion.div>

            {/* 마퀴 티커 */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="overflow-hidden mb-4 rounded-xl bg-white/[0.04] border border-white/10 py-2.5"
            >
              <div className="flex animate-marquee whitespace-nowrap">
                {[...tickerItems, ...tickerItems].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 px-4 text-sm">
                    <span>{item.icon}</span>
                    <span className="text-white/40 text-xs tracking-tight">{item.label}</span>
                    <span className="text-[#E8A020] font-black tracking-tight">{item.value}</span>
                    <span className="text-white/15 ml-3">·</span>
                  </span>
                ))}
              </div>
            </motion.div>

            {/* 🏆 Featured — 891만 */}
            <motion.div
              initial={{ opacity: 0, y: 28, scale: 0.88 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 22, delay: 0.55 }}
              className="relative bg-gradient-to-br from-[#E8A020] to-[#F5C842] rounded-2xl p-5 mb-3 overflow-hidden"
            >
              <div className="absolute -right-5 -top-5 w-28 h-28 bg-white/10 rounded-full" />
              <div className="absolute right-4 -bottom-8 w-20 h-20 bg-white/10 rounded-full" />
              <div className="relative flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-6 h-6 bg-[#0B1F3A]/25 rounded-lg flex items-center justify-center">
                      <Play size={11} className="text-[#0B1F3A]" fill="currentColor" />
                    </div>
                    <span className="text-[#0B1F3A]/65 text-xs font-bold tracking-tight">릴스 · 단일 영상 최고 기록</span>
                  </div>
                  <div className="text-[#0B1F3A] font-black leading-none tracking-tight" style={{ fontSize: "clamp(2.4rem,6vw,3.4rem)" }}>
                    891만
                  </div>
                  <div className="text-[#0B1F3A]/60 text-sm font-semibold mt-1 tracking-tight">조회수</div>
                </div>
                <div className="text-right">
                  <span className="inline-block bg-[#0B1F3A]/15 text-[#0B1F3A] text-xs font-black px-3 py-1.5 rounded-full tracking-tight">
                    🏆 TOP
                  </span>
                </div>
              </div>
            </motion.div>

            {/* 나머지 카드 3열 그리드 */}
            <div className="grid grid-cols-3 gap-2">
              {statCards.map((card, i) => {
                const Icon = card.icon;
                const c = colorMap[card.color as keyof typeof colorMap];
                return (
                  <motion.div
                    key={`${card.value}-${i}`}
                    initial={{ opacity: 0, y: 20, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 280,
                      damping: 24,
                      delay: 0.7 + i * 0.07,
                    }}
                    className={`${c.bg} border border-white/[0.08] rounded-xl p-3 hover:border-white/20 transition-colors`}
                  >
                    <div className="flex items-center gap-1 mb-2">
                      <Icon size={9} className={c.icon} />
                      <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded-full ${c.badge} tracking-tight`}>
                        {card.platform}
                      </span>
                    </div>
                    <div className="text-white font-black text-lg leading-none tracking-tight">
                      {card.value}
                    </div>
                    <div className="text-white/35 text-[10px] mt-1 tracking-tight leading-tight">{card.label}</div>
                  </motion.div>
                );
              })}
            </div>

            <motion.p
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.5 }}
              className="text-white/20 text-[10px] text-right mt-2.5 tracking-tight"
            >
              실제 운영 계정 기준
            </motion.p>
          </div>

        </div>
      </div>
    </section>
  );
}
