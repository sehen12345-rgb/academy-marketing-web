"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, Play, AtSign, Eye, Users, Zap } from "lucide-react";

/* ── 카운터 훅 ── */
function useCounter(target: number, duration = 1600, decimals = 0) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(decimals ? parseFloat(start.toFixed(decimals)) : Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration, decimals]);

  return { count, ref };
}

/* ── KPI 수치 ── */
const kpis = [
  { icon: Eye,        label: "릴스 누적 조회수", value: 1235,  unit: "만+", color: "#E8A020", decimals: 0 },
  { icon: TrendingUp, label: "단일 최고 조회수", value: 891,   unit: "만",  color: "#F0B429", decimals: 0 },
  { icon: AtSign,     label: "스레드 누적 조회", value: 192.8, unit: "만",  color: "#E8A020", decimals: 1 },
  { icon: Users,      label: "스레드 팔로워",    value: 1.4,   unit: "만",  color: "#F0B429", decimals: 1 },
];

/* ── 채널별 콘텐츠 바 차트 데이터 ── */
const barData = [
  { label: "릴스 #1", sublabel: "단일 최고 기록", value: 891,   max: 891,  platform: "reels",  badge: "🏆" },
  { label: "스레드",   sublabel: "누적 총 조회수",  value: 232,   max: 891,  platform: "thread", badge: null },
  { label: "릴스 #2", sublabel: "조회수",          value: 119,   max: 891,  platform: "reels",  badge: null },
  { label: "릴스 #3", sublabel: "조회수",          value: 70.1,  max: 891,  platform: "reels",  badge: null },
  { label: "릴스 #4", sublabel: "조회수",          value: 64.3,  max: 891,  platform: "reels",  badge: null },
  { label: "스레드",   sublabel: "30일 조회수",     value: 39,    max: 891,  platform: "thread", badge: null },
];

/* ── 플랫폼 비율 도넛 대체 (간단 비율 바) ── */
const platformShare = [
  { label: "릴스",   value: 1235, total: 1235 + 232, color: "#E8A020", icon: Play },
  { label: "스레드", value: 232,  total: 1235 + 232, color: "#60A5FA", icon: AtSign },
];

const platformColor = {
  reels:  { bar: "from-[#E8A020] to-[#F5C842]", text: "text-[#E8A020]", badge: "bg-[#E8A020]/15 text-[#E8A020]" },
  thread: { bar: "from-[#3B82F6] to-[#60A5FA]", text: "text-[#60A5FA]", badge: "bg-blue-500/15 text-blue-300" },
};

/* ── 바 차트 아이템 ── */
function BarItem({ item, delay }: { item: typeof barData[0]; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const pct = (item.value / item.max) * 100;
  const c = platformColor[item.platform as keyof typeof platformColor];

  return (
    <div ref={ref} className="group">
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${c.badge}`}>
            {item.platform === "reels" ? "릴스" : "스레드"}
          </span>
          <span className="text-white/70 text-sm font-semibold tracking-tight">{item.label}</span>
          {item.badge && <span className="text-xs">{item.badge}</span>}
          <span className="text-white/30 text-xs tracking-tight hidden sm:inline">{item.sublabel}</span>
        </div>
        <span className={`font-black text-sm tracking-tight ${c.text}`}>
          {item.value}만
        </span>
      </div>
      {/* 바 트랙 */}
      <div className="h-2.5 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          className={`h-full rounded-full bg-gradient-to-r ${c.bar} relative`}
        >
          {/* 바 끝 글로우 */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white/40 blur-sm" />
        </motion.div>
      </div>
    </div>
  );
}

export default function AchievementsSection() {
  const kpiRefs = [
    useCounter(1235, 1800, 0),
    useCounter(891,  1600, 0),
    useCounter(192.8,1600, 1),
    useCounter(1.4,  1400, 1),
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#080F1E] relative overflow-hidden">
      {/* 배경 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(circle,#E8A020 1px,transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <div className="absolute top-0 right-0 w-[500px] h-[300px] bg-[#E8A020] opacity-[0.04] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[300px] bg-blue-600 opacity-[0.04] rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14"
        >
          <div>
            <span className="inline-flex items-center gap-2 bg-[#E8A020]/15 text-[#E8A020] text-xs font-bold px-3 py-1.5 rounded-full mb-4 border border-[#E8A020]/20 tracking-widest uppercase">
              <Zap size={11} /> 누적 대행 성과
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              숫자로 보는
              <br />
              <span className="text-[#E8A020]">실제 운영 결과</span>
            </h2>
          </div>
          <p className="text-white/35 text-sm tracking-tight max-w-xs text-right leading-relaxed hidden sm:block">
            직접 운영·관리한 계정의<br />실측 데이터입니다
          </p>
        </motion.div>

        {/* KPI 4개 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {kpis.map((kpi, i) => {
            const Icon = kpi.icon;
            const { count, ref } = kpiRefs[i];
            return (
              <motion.div
                key={kpi.label}
                initial={{ opacity: 0, y: 20, scale: 0.92 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                ref={ref}
                className="bg-white/[0.04] border border-white/[0.08] rounded-2xl p-5 hover:bg-white/[0.07] transition-colors"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 bg-[#E8A020]/15 rounded-lg flex items-center justify-center">
                    <Icon size={15} className="text-[#E8A020]" />
                  </div>
                  <TrendingUp size={13} className="text-emerald-400 opacity-70" />
                </div>
                <div className="font-black text-white tracking-tight leading-none mb-1"
                  style={{ fontSize: "clamp(1.6rem,4vw,2.2rem)" }}>
                  {kpi.decimals ? count.toFixed(kpi.decimals) : count.toLocaleString()}
                  <span className="text-[#E8A020]">{kpi.unit}</span>
                </div>
                <div className="text-white/35 text-xs tracking-tight">{kpi.label}</div>
              </motion.div>
            );
          })}
        </div>

        {/* 메인 컨텐츠: 바 차트 + 플랫폼 비율 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">

          {/* 바 차트 (2/3) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 bg-white/[0.03] border border-white/[0.08] rounded-2xl p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div>
                <p className="text-white/30 text-[11px] font-bold tracking-widest uppercase mb-1">콘텐츠별 조회수</p>
                <h3 className="text-white font-black text-lg tracking-tight">채널 성과 비교</h3>
              </div>
              <div className="flex items-center gap-3 text-[11px]">
                <span className="flex items-center gap-1.5 text-white/40">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#E8A020]" />릴스
                </span>
                <span className="flex items-center gap-1.5 text-white/40">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#60A5FA]" />스레드
                </span>
              </div>
            </div>

            <div className="space-y-4">
              {barData.map((item, i) => (
                <BarItem key={i} item={item} delay={0.15 + i * 0.12} />
              ))}
            </div>

            <div className="mt-5 pt-4 border-t border-white/[0.06] flex items-center justify-between">
              <span className="text-white/25 text-xs tracking-tight">단위: 만 (10,000)</span>
              <span className="text-white/25 text-xs tracking-tight">최대: 891만</span>
            </div>
          </motion.div>

          {/* 플랫폼 비율 + 총합 (1/3) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="flex flex-col gap-4"
          >
            {/* 총 조회수 */}
            <div className="bg-gradient-to-br from-[#E8A020] to-[#F5C842] rounded-2xl p-6 relative overflow-hidden flex-1">
              <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/15 rounded-full" />
              <div className="absolute -right-2 bottom-2 w-14 h-14 bg-white/10 rounded-full" />
              <div className="relative">
                <p className="text-[#0B1F3A]/60 text-xs font-bold tracking-widest uppercase mb-2">총 누적 조회수</p>
                <div className="text-[#0B1F3A] font-black leading-none tracking-tight mb-1"
                  style={{ fontSize: "clamp(2rem,5vw,2.8rem)" }}>
                  1,235만+
                </div>
                <p className="text-[#0B1F3A]/50 text-sm font-semibold tracking-tight">릴스 + 스레드 합산</p>
              </div>
            </div>

            {/* 플랫폼 비율 */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-2xl p-5">
              <p className="text-white/30 text-[11px] font-bold tracking-widest uppercase mb-4">플랫폼 비율</p>

              {/* 스택 바 */}
              <div className="h-3 rounded-full overflow-hidden flex mb-4">
                {platformShare.map((p) => (
                  <motion.div
                    key={p.label}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(p.value / p.total) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: p.label === "릴스" ? 0.2 : 0.5, ease: [0.22,1,0.36,1] }}
                    style={{ backgroundColor: p.color }}
                  />
                ))}
              </div>

              <div className="space-y-3">
                {platformShare.map((p) => {
                  const Icon = p.icon;
                  const pct = Math.round((p.value / p.total) * 100);
                  return (
                    <div key={p.label} className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-5 h-5 rounded-md flex items-center justify-center" style={{ backgroundColor: p.color + "25" }}>
                          <Icon size={10} style={{ color: p.color }} />
                        </div>
                        <span className="text-white/55 text-sm tracking-tight">{p.label}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-white/30 text-xs">{p.value}만</span>
                        <span className="font-black text-sm tracking-tight" style={{ color: p.color }}>{pct}%</span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 메모 */}
            <div className="bg-white/[0.03] border border-white/[0.08] rounded-xl p-4">
              <p className="text-white/25 text-[11px] leading-relaxed tracking-tight">
                * 위 수치는 실제 운영 계정의<br />
                측정 데이터 기준입니다.<br />
                성과는 학원별로 달라질 수 있습니다.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
