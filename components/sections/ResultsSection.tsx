"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Eye, TrendingUp, Users, Heart } from "lucide-react";

/* ─── 카운터 훅 ─── */
function useCounter(target: number, duration = 1800) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return { count, ref };
}

/* ─── 핵심 수치 ─── */
const kpis = [
  { icon: Eye,       value: 1235, unit: "만+", label: "릴스 총 조회수",   color: "#E8A020" },
  { icon: TrendingUp,value: 891,  unit: "만",  label: "단일 릴스 최고치", color: "#F0B429" },
  { icon: Users,     value: 1.4,  unit: "만",  label: "스레드 팔로워",    color: "#E8A020", decimal: true },
  { icon: Heart,     value: 1.3,  unit: "만+", label: "스레드 총 반응",   color: "#F0B429", decimal: true },
];

/* ─── 이미지 카드 데이터 ─── */
const reels = [
  { src: "/results/reels-4.jpg", views: "891만", label: "릴스", highlight: true },
  { src: "/results/reels-2.jpg", views: "119만", label: "릴스", highlight: false },
  { src: "/results/reels-3.jpg", views: "70.1만", label: "릴스", highlight: false },
  { src: "/results/reels-1.jpg", views: "64.3만", label: "릴스", highlight: false },
];

const threads = [
  { src: "/results/threads-1.jpg", views: "192.8만", label: "스레드 조회수", wide: true },
  { src: "/results/threads-2.jpg", views: "39만",    label: "스레드 조회수", wide: false },
];

/* ─── 카드 컴포넌트 ─── */
function ResultCard({
  src, views, label, highlight, delay, wide,
}: {
  src: string; views: string; label: string;
  highlight?: boolean; delay: number; wide?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.82, y: 32 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6, scale: 1.03 }}
      className={`relative rounded-2xl overflow-hidden shadow-2xl shadow-black/40 cursor-pointer ${
        highlight ? "ring-2 ring-[#E8A020] ring-offset-4 ring-offset-[#0B1F3A]" : ""
      } ${wide ? "col-span-2 sm:col-span-1" : ""}`}
    >
      {/* 이미지 */}
      <div className={`relative w-full ${wide ? "aspect-[4/3]" : "aspect-[9/14]"} bg-[#0F2D52]`}>
        <Image
          src={src}
          alt={`${label} ${views} 조회수`}
          fill
          className="object-cover"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 25vw"
        />
        {/* 그라디언트 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      {/* 배지 */}
      <div className="absolute top-3 left-3">
        <span className="bg-[#0B1F3A]/80 backdrop-blur-sm text-[#E8A020] text-xs font-bold px-2.5 py-1 rounded-full border border-[#E8A020]/30">
          {label}
        </span>
      </div>

      {/* 조회수 */}
      <div className="absolute bottom-0 left-0 right-0 p-4">
        {highlight && (
          <span className="inline-block bg-[#E8A020] text-[#0B1F3A] text-[10px] font-black px-2 py-0.5 rounded-full mb-2 tracking-wide">
            🏆 최고 기록
          </span>
        )}
        <div className="flex items-end gap-1.5">
          <Eye size={13} className="text-white/60 mb-0.5" />
          <span className="text-white text-xs font-medium">조회수</span>
        </div>
        <div className={`font-black tracking-tight leading-none mt-0.5 ${
          highlight ? "text-[#E8A020] text-3xl sm:text-4xl" : "text-white text-2xl sm:text-3xl"
        }`}>
          {views}
        </div>
      </div>
    </motion.div>
  );
}

/* ─── 메인 섹션 ─── */
export default function ResultsSection() {
  const kpi0 = useCounter(1235);
  const kpi1 = useCounter(891);
  const kpi2 = useCounter(14); // 1.4만 → 14000
  const kpi3 = useCounter(13); // 1.3만 → 13000

  const counters = [kpi0, kpi1, kpi2, kpi3];

  return (
    <section className="py-20 sm:py-28 bg-[#060F1E] relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #E8A020 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#E8A020] opacity-[0.04] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* 섹션 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 bg-[#E8A020]/15 text-[#E8A020] text-sm font-bold px-4 py-2 rounded-full mb-5 border border-[#E8A020]/25 tracking-tight">
            <span className="w-2 h-2 bg-[#E8A020] rounded-full animate-pulse" />
            실제 운영 성과
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            숫자로 증명하는
            <br />
            <span className="text-[#E8A020]">마케팅 실력</span>
          </h2>
          <p className="text-white/40 text-lg tracking-tight">
            직접 운영해서 만들어낸 실제 결과물입니다
          </p>
        </motion.div>

        {/* KPI 카운터 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {kpis.map((kpi, i) => {
            const Icon = kpi.icon;
            const { count, ref } = counters[i];
            return (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white/[0.04] border border-white/10 rounded-2xl p-5 sm:p-6 text-center hover:bg-white/[0.07] transition-colors"
              >
                <div className="w-10 h-10 bg-[#E8A020]/15 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon size={18} className="text-[#E8A020]" />
                </div>
                <div className="font-black text-white tracking-tight" style={{ fontSize: "clamp(1.6rem, 4vw, 2.4rem)" }}>
                  <span ref={ref}>
                    {kpi.decimal ? (count / 10).toFixed(1) : count.toLocaleString()}
                  </span>
                  <span className="text-[#E8A020]">{kpi.unit}</span>
                </div>
                <div className="text-white/40 text-xs sm:text-sm mt-1 tracking-tight">{kpi.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* 릴스 결과 */}
        <div className="mb-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-1 h-8 bg-[#E8A020] rounded-full" />
            <div>
              <span className="text-[#E8A020] text-xs font-bold tracking-widest block">REELS</span>
              <span className="text-white font-black text-lg tracking-tight">릴스 조회수</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {reels.map((r, i) => (
              <ResultCard key={r.src} {...r} delay={i * 0.1} />
            ))}
          </div>
        </div>

        {/* 스레드 결과 */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-1 h-8 bg-[#E8A020] rounded-full" />
            <div>
              <span className="text-[#E8A020] text-xs font-bold tracking-widest block">THREADS</span>
              <span className="text-white font-black text-lg tracking-tight">스레드 운영 성과</span>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 max-w-2xl">
            {threads.map((t, i) => (
              <ResultCard key={t.src} {...t} delay={i * 0.12} />
            ))}
          </div>
        </div>

        {/* 하단 멘트 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-white/30 text-sm tracking-tight">
            위 성과는 실제 운영 계정의 스크린샷입니다 · 결과는 학원별 상황에 따라 달라질 수 있습니다
          </p>
        </motion.div>
      </div>
    </section>
  );
}
