"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, AtSign, Users, Heart, Eye, TrendingUp, MessageSquare, BarChart3, Repeat2 } from "lucide-react";

function useCounter(target: number, duration = 1500, decimals = 0) {
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

const bizStats = [
  {
    icon: MessageSquare,
    label: "파트너 학원 평균 문의 증가",
    value: "3.8배",
    sub: "계약 후 3개월 기준",
    note: "최고 성과 학원 기준 8배 달성",
    color: "text-[#E8A020]",
    bg: "bg-[#E8A020]/10",
    border: "border-[#E8A020]/20",
  },
  {
    icon: Users,
    label: "파트너 학원 평균 월 매출 증가",
    value: "+420만원",
    sub: "계약 후 3개월 기준",
    note: "수강료 평균 기준 · 학원 규모에 따라 다름",
    color: "text-emerald-600",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/20",
  },
  {
    icon: BarChart3,
    label: "광고비 대비 평균 ROI",
    value: "380%",
    sub: "광고비 집행 학원 평균",
    note: "광고비 포함 올인원 기준",
    color: "text-blue-600",
    bg: "bg-blue-500/10",
    border: "border-blue-500/20",
  },
  {
    icon: Repeat2,
    label: "3개월 계약 유지율",
    value: "93%",
    sub: "전체 파트너 학원 기준",
    note: "위약금 없는 자유 해지 구조",
    color: "text-purple-600",
    bg: "bg-purple-500/10",
    border: "border-purple-500/20",
  },
];

const reelsData = [
  { label: "릴스 #1", value: 891,  unit: "만" },
  { label: "릴스 #2", value: 119,  unit: "만" },
  { label: "릴스 #3", value: 70.1, unit: "만" },
  { label: "릴스 #4", value: 64.3, unit: "만" },
];

const threadsData = [
  { icon: Eye,   label: "스레드 누적 조회",  value: "192.8만" },
  { icon: Eye,   label: "스레드 30일 조회", value: "39만"    },
  { icon: Heart, label: "누적 반응",         value: "1.3만"   },
  { icon: Users, label: "팔로워",            value: "1.4만"   },
];

function ReelsBar({ item, delay, max }: { item: typeof reelsData[0]; delay: number; max: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const pct = (item.value / max) * 100;
  const isTop = item.value === max;

  return (
    <div ref={ref}>
      <div className="flex items-center justify-between mb-1.5">
        <div className="flex items-center gap-2">
          <Play size={10} className="text-[#E8A020]" fill="#E8A020" />
          <span className="text-[#4A5568] text-sm font-semibold tracking-tight">{item.label}</span>
          {isTop && <span className="text-[10px] bg-[#E8A020]/15 text-[#C8821A] font-bold px-2 py-0.5 rounded-full">🏆 최고</span>}
        </div>
        <span className="text-[#C8821A] font-black text-sm tracking-tight">{item.value}{item.unit}</span>
      </div>
      <div className="h-2 bg-[#E2E8F0] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1.1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-[#E8A020] to-[#F5C842]"
        />
      </div>
    </div>
  );
}

export default function AchievementsSection() {
  const c891  = useCounter(891,  1500, 0);
  const c1928 = useCounter(192.8, 1500, 1);

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #0B1F3A 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-[#E8A020]/10 text-[#C8821A] text-xs font-bold px-3 py-1.5 rounded-full mb-4 border border-[#E8A020]/25 tracking-widest uppercase">
            <TrendingUp size={11} /> 실제 파트너 학원 성과
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight leading-tight">
            과장 없이, 숫자로만
            <br />
            <span className="text-[#E8A020]">말하겠습니다</span>
          </h2>
          <p className="text-[#8B9BB4] text-sm mt-3 tracking-tight">
            파트너 학원 평균 수치입니다 · 학원 규모·지역·상황에 따라 결과는 다를 수 있습니다
          </p>
        </motion.div>

        {/* ── 비즈니스 성과 4개 카드 ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-5">
          {bizStats.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className={`bg-white border ${s.border} rounded-2xl p-5 flex flex-col gap-3`}
              >
                <div className={`w-9 h-9 ${s.bg} rounded-xl flex items-center justify-center`}>
                  <Icon size={16} className={s.color} />
                </div>
                <div>
                  <p className="text-[#8B9BB4] text-[11px] font-semibold tracking-tight mb-1">{s.label}</p>
                  <p className={`font-black text-3xl tracking-tight leading-none ${s.color}`}>{s.value}</p>
                  <p className="text-[#0B1F3A] text-xs font-semibold mt-1.5 tracking-tight">{s.sub}</p>
                </div>
                <p className="text-[#A8B8C8] text-[10px] tracking-tight border-t border-[#F0F4F9] pt-2.5">
                  * {s.note}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* ── 콘텐츠 성과 (증거) ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-[#F7F9FC] border border-[#E2E8F0] rounded-2xl p-6"
        >
          <p className="text-[#8B9BB4] text-[11px] font-bold tracking-widest uppercase mb-5">
            콘텐츠 성과 — 위 수치를 만든 실제 결과물
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* 릴스 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-[#E8A020]/15 rounded-lg flex items-center justify-center">
                  <Play size={11} className="text-[#E8A020]" fill="#E8A020" />
                </div>
                <div ref={c891.ref}>
                  <span className="text-[#0B1F3A] font-black text-sm tracking-tight">릴스 조회수</span>
                  <span className="text-[#8B9BB4] text-xs tracking-tight ml-2">단일 최고 {c891.count}만뷰</span>
                </div>
              </div>
              <div className="space-y-3.5">
                {reelsData.map((item, i) => (
                  <ReelsBar key={item.label} item={item} delay={0.1 + i * 0.1} max={891} />
                ))}
              </div>
            </div>

            {/* 스레드 */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-6 h-6 bg-[#1A56DB]/10 rounded-lg flex items-center justify-center">
                  <AtSign size={11} className="text-[#1A56DB]" />
                </div>
                <div ref={c1928.ref}>
                  <span className="text-[#0B1F3A] font-black text-sm tracking-tight">스레드 운영</span>
                  <span className="text-[#8B9BB4] text-xs tracking-tight ml-2">누적 {c1928.count.toFixed(1)}만 조회</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {threadsData.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="bg-white border border-[#E2E8F0] rounded-xl p-3.5">
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <Icon size={10} className="text-[#1A56DB]" />
                        <span className="text-[#8B9BB4] text-[10px] font-semibold tracking-tight">{item.label}</span>
                      </div>
                      <div className="text-[#0B1F3A] font-black text-xl tracking-tight leading-none">{item.value}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-[#A0AEC0] text-xs text-center mt-6 tracking-tight"
        >
          비즈니스 성과 수치는 파트너 학원 전체 평균이며, 콘텐츠 수치는 실제 운영 계정 캡처 기준입니다
        </motion.p>
      </div>
    </section>
  );
}
