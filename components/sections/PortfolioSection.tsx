"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Eye, Play, Flame, Zap } from "lucide-react";

/* ── 데이터 ── */
const featured = {
  src: "/results/banner-5.jpg",
  views: "380만",
  sub: "+139만",
  label: "수능 동기부여",
};

const cards = [
  { src: "/results/banner-4.jpg", views: "64만",   label: "경희대 탈모남",      rot: "-2deg"  },
  { src: "/results/banner-1.jpg", views: "59.3만",  label: "면접 팁 릴스",       rot: "1.5deg" },
  { src: "/results/banner-3.jpg", views: "51만",   label: "경희대 엄친딸",      rot: "-1deg"  },
  { src: "/results/banner-2.jpg", views: "44만",   label: "합격 스토리",        rot: "2deg"   },
  { src: "/results/banner-6.jpg", views: "28.4만",  label: "성공방학 시리즈",    rot: "-1.5deg"},
];

/* ── 숫자 폭발 배지 ── */
function ViewBadge({ views, large }: { views: string; large?: boolean }) {
  return (
    <div className={`flex flex-col ${large ? "gap-1" : "gap-0.5"}`}>
      <div className="flex items-center gap-1.5">
        <Eye size={large ? 13 : 10} className="text-white/40" />
        <span className={`text-white/40 tracking-tight ${large ? "text-xs" : "text-[10px]"}`}>
          조회수
        </span>
      </div>
      <div
        className={`font-black tracking-tight leading-none ${
          large
            ? "text-[clamp(3rem,6vw,5rem)] text-[#E8A020]"
            : "text-[clamp(1.4rem,3vw,2rem)] text-white"
        }`}
        style={{
          textShadow: large ? "0 0 40px rgba(232,160,32,0.6), 0 0 80px rgba(232,160,32,0.3)" : "none",
        }}
      >
        {views}
      </div>
    </div>
  );
}

/* ── 소형 카드 ── */
function SmallCard({ src, views, label, rot, delay }: {
  src: string; views: string; label: string; rot: string; delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, y: 0, rotate: rot, scale: 1 }}
      whileHover={{ y: -10, rotate: "0deg", scale: 1.04, zIndex: 10 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ type: "spring", stiffness: 220, damping: 20, delay }}
      className="relative rounded-2xl overflow-hidden cursor-pointer flex-shrink-0 w-[140px] sm:w-[170px] lg:flex-1 group shadow-2xl shadow-black/50"
      style={{ transformOrigin: "center bottom" }}
    >
      <div className="relative w-full aspect-[9/14] bg-[#0F2040]">
        <Image
          src={src}
          alt={`${label} ${views} 조회수`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width:640px) 140px, (max-width:1024px) 170px, 20vw"
        />
        {/* 그라디언트 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
        {/* 호버 오버레이 */}
        <div className="absolute inset-0 bg-[#E8A020]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* 플랫폼 배지 */}
      <div className="absolute top-2.5 left-2.5">
        <span className="flex items-center gap-1 bg-black/60 backdrop-blur text-white/70 text-[10px] font-bold px-2 py-0.5 rounded-full border border-white/10">
          <Play size={7} fill="currentColor" /> 릴스
        </span>
      </div>

      {/* 조회수 */}
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <ViewBadge views={views} />
        <p className="text-white/40 text-[10px] mt-1 truncate">{label}</p>
      </div>

      {/* 호버 테두리 글로우 */}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#E8A020]/0 group-hover:ring-[#E8A020]/50 transition-all duration-300 pointer-events-none" />
    </motion.div>
  );
}

/* ── 메인 섹션 ── */
export default function PortfolioSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      className="py-16 sm:py-24 bg-[#080E1C] relative overflow-hidden"
    >
      {/* ── 배경 사선 레이어 ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* 점 그리드 */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #E8A020 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        {/* 대각선 스트라이프 */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, #E8A020 0px, #E8A020 1px, transparent 1px, transparent 40px)",
          }}
        />
        {/* 중앙 글로우 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-[#E8A020] opacity-[0.06] rounded-full blur-[100px]" />
        {/* 코너 악센트 */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-blue-600 opacity-[0.04] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#E8A020] opacity-[0.05] rounded-full blur-3xl translate-x-1/4 translate-y-1/4" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* ── 헤더 ── */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 bg-[#E8A020]/15 text-[#E8A020] text-xs font-black px-4 py-2 rounded-full mb-5 border border-[#E8A020]/30 tracking-widest uppercase">
              <Zap size={11} fill="currentColor" />
              실제 제작 포트폴리오
            </span>

            {/* 슬래시 타이틀 */}
            <h2 className="text-[clamp(2rem,5vw,3.4rem)] font-black text-white leading-[1.05] tracking-tight">
              <span className="block">이게 바로</span>
              <span className="block relative">
                <span className="relative z-10 text-[#E8A020]">우리가 만든 결과</span>
                {/* 밑줄 강조 */}
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: 1 } : {}}
                  transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute bottom-0 left-0 right-0 h-[4px] bg-[#E8A020]/40 rounded-full origin-left"
                />
              </span>
              <span className="block text-white/30 text-[clamp(0.9rem,2vw,1.2rem)] font-bold mt-2 tracking-normal">
                직접 기획·촬영·편집한 릴스 콘텐츠입니다
              </span>
            </h2>
          </motion.div>

          {/* 총합 카운터 */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ type: "spring", stiffness: 200, damping: 18, delay: 0.3 }}
            className="flex-shrink-0 text-right"
          >
            <div className="inline-block bg-[#E8A020]/10 border border-[#E8A020]/25 rounded-2xl px-6 py-4">
              <p className="text-[#E8A020]/60 text-[10px] font-black tracking-widest uppercase mb-1">총 조회수</p>
              <div
                className="font-black text-[2.4rem] leading-none tracking-tight text-white"
                style={{ textShadow: "0 0 30px rgba(232,160,32,0.4)" }}
              >
                <span className="text-[#E8A020]">800</span>만+
              </div>
            </div>
          </motion.div>
        </div>

        {/* ── 메인 피처드 카드 ── */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.94 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          whileHover={{ scale: 1.01 }}
          className="relative rounded-3xl overflow-hidden mb-4 sm:mb-5 cursor-pointer group"
          style={{
            boxShadow: "0 0 0 2px #E8A020, 0 0 40px rgba(232,160,32,0.25), 0 30px 60px rgba(0,0,0,0.6)",
          }}
        >
          {/* 이미지 */}
          <div className="relative w-full aspect-[21/9] sm:aspect-[21/8] bg-[#0A1830]">
            <Image
              src="/results/banner-5.jpg"
              alt="수능 동기부여 릴스 380만 조회수"
              fill
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="100vw"
            />
            {/* 좌측 & 하단 그라디언트 */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
          </div>

          {/* 상단 배지 */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2">
            <span className="flex items-center gap-1.5 bg-black/50 backdrop-blur-md text-white/80 text-xs font-bold px-3 py-1.5 rounded-full border border-white/15">
              <Play size={9} fill="currentColor" /> 인스타그램 릴스
            </span>
            <motion.span
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.8, repeat: Infinity }}
              className="flex items-center gap-1.5 bg-[#E8A020] text-[#0B1F3A] text-xs font-black px-3 py-1.5 rounded-full"
            >
              <Flame size={10} fill="currentColor" />
              최고 기록
            </motion.span>
          </div>

          {/* 좌측 조회수 — 폭발적 타이포 */}
          <div className="absolute bottom-5 left-5 sm:bottom-8 sm:left-8">
            <ViewBadge views={featured.views} large />
            <div className="flex items-center gap-2 mt-2">
              <span className="text-white/40 text-sm font-medium">다른 영상</span>
              <span
                className="text-white/70 text-2xl font-black tracking-tight"
                style={{ textShadow: "0 0 20px rgba(255,255,255,0.2)" }}
              >
                {featured.sub}
              </span>
            </div>
            <p className="text-white/40 text-sm mt-1 font-medium">{featured.label}</p>
          </div>

          {/* 우측 글로우 라벨 */}
          <div className="absolute right-5 bottom-5 sm:right-8 sm:bottom-8 text-right">
            <p className="text-white/20 text-xs tracking-widest uppercase font-bold">두 영상 합산</p>
            <div className="text-[#E8A020]/80 font-black text-2xl tracking-tight">519만 조회</div>
          </div>
        </motion.div>

        {/* ── 하단 5장 카드 행 ── */}
        <div className="relative">
          {/* 데스크탑: flex row */}
          <div className="hidden sm:flex items-end gap-3 lg:gap-4 pb-2">
            {cards.map((c, i) => (
              <SmallCard key={c.src} {...c} delay={0.15 + i * 0.07} />
            ))}
          </div>

          {/* 모바일: 가로 스크롤 */}
          <div
            className="sm:hidden flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-hide"
            style={{ WebkitOverflowScrolling: "touch" }}
          >
            {cards.map((c, i) => (
              <div key={c.src} className="snap-start flex-shrink-0">
                <SmallCard {...c} delay={0.1 + i * 0.06} />
              </div>
            ))}
          </div>

          {/* 모바일 스와이프 힌트 */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.8 }}
            className="sm:hidden text-white/25 text-xs text-center mt-2 tracking-tight"
          >
            ← 스와이프해서 더 보기 →
          </motion.p>
        </div>

        {/* ── 하단 신뢰 스트립 ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/[0.07] pt-6"
        >
          <div className="flex items-center gap-2.5">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <p className="text-white/35 text-sm tracking-tight">
              실제 운영 계정에서 직접 캡처한 조회수입니다
            </p>
          </div>
          <div className="flex items-center gap-6">
            {[
              { label: "단일 최고", value: "380만" },
              { label: "콘텐츠 수", value: "6개" },
              { label: "총 조회수", value: "800만+" },
            ].map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[#E8A020] font-black text-lg tracking-tight leading-none">{s.value}</div>
                <div className="text-white/25 text-[10px] mt-0.5 tracking-tight">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
