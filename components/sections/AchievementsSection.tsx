"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Play, AtSign, Users, Heart, Eye, Zap } from "lucide-react";

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

const reelsData = [
  { label: "릴스 #1", value: 891,  unit: "만", source: "릴스 조회수 4.jpg" },
  { label: "릴스 #2", value: 119,  unit: "만", source: "릴스 조회수 2.jpg" },
  { label: "릴스 #3", value: 70.1, unit: "만", source: "릴스 조회수 3.jpg" },
  { label: "릴스 #4", value: 64.3, unit: "만", source: "릴스 조회수.jpg"  },
];

const threadsData = [
  { icon: Eye,   label: "조회수 (누적)",  value: "192.8만" },
  { icon: Eye,   label: "조회수 (30일)", value: "39만"    },
  { icon: Heart, label: "반응 (누적)",   value: "1.3만"   },
  { icon: Heart, label: "반응 (30일)",  value: "2,857"   },
  { icon: Users, label: "팔로워",       value: "1.4만"   },
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
        <span className="text-[#C8821A] font-black text-sm tracking-tight">
          {item.value}{item.unit}
        </span>
      </div>
      <div className="h-2.5 bg-[#E2E8F0] rounded-full overflow-hidden">
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
  const c14   = useCounter(1.4,  1300, 1);
  const c13   = useCounter(1.3,  1300, 1);

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{
          backgroundImage: "radial-gradient(circle, #0B1F3A 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
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
            <Zap size={11} /> 실제 운영 성과
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight leading-tight">
            스크린샷으로 확인하는
            <br />
            <span className="text-[#E8A020]">실측 데이터</span>
          </h2>
          <p className="text-[#8B9BB4] text-sm mt-3 tracking-tight">
            아래 수치는 모두 실제 운영 계정에서 직접 캡처한 숫자입니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* ── 릴스 바 차트 ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#F7F9FC] border border-[#E2E8F0] rounded-2xl p-6"
          >
            <div className="flex items-center gap-2 mb-6">
              <div className="w-7 h-7 bg-[#E8A020]/15 rounded-lg flex items-center justify-center">
                <Play size={13} className="text-[#E8A020]" fill="#E8A020" />
              </div>
              <div>
                <p className="text-[#0B1F3A] font-black tracking-tight">릴스 조회수</p>
                <p className="text-[#8B9BB4] text-xs tracking-tight">스크린샷 기준 4개 콘텐츠</p>
              </div>
            </div>

            {/* 891만 Featured */}
            <div ref={c891.ref} className="bg-gradient-to-br from-[#E8A020] to-[#F5C842] rounded-xl p-4 mb-5 relative overflow-hidden">
              <div className="absolute -right-3 -top-3 w-16 h-16 bg-white/20 rounded-full" />
              <p className="text-[#0B1F3A]/60 text-[11px] font-bold tracking-widest uppercase mb-1">단일 최고 기록 🏆</p>
              <div className="text-[#0B1F3A] font-black leading-none tracking-tight" style={{ fontSize: "clamp(2rem,5vw,2.8rem)" }}>
                {c891.count}<span className="text-2xl">만</span>
              </div>
              <p className="text-[#0B1F3A]/50 text-xs mt-1 font-semibold tracking-tight">조회수 · 릴스 #1</p>
            </div>

            {/* 나머지 3개 바 */}
            <div className="space-y-4">
              {reelsData.slice(1).map((item, i) => (
                <ReelsBar key={item.label} item={item} delay={0.2 + i * 0.12} max={891} />
              ))}
            </div>
          </motion.div>

          {/* ── 스레드 지표 ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* 스레드 헤더 카드 */}
            <div className="bg-[#F7F9FC] border border-[#E2E8F0] rounded-2xl p-5">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-7 h-7 bg-[#1A56DB]/10 rounded-lg flex items-center justify-center">
                  <AtSign size={13} className="text-[#1A56DB]" />
                </div>
                <div>
                  <p className="text-[#0B1F3A] font-black tracking-tight">스레드 운영 지표</p>
                  <p className="text-[#8B9BB4] text-xs tracking-tight">스레드 조회수 1·2 기준</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {threadsData.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, scale: 0.92 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 280, damping: 24, delay: 0.15 + i * 0.08 }}
                      className={`bg-white border border-[#E2E8F0] rounded-xl p-3.5 ${i === 4 ? "col-span-2" : ""}`}
                    >
                      <div className="flex items-center gap-1.5 mb-2">
                        <Icon size={11} className="text-[#1A56DB]" />
                        <span className="text-[#8B9BB4] text-[10px] font-semibold tracking-tight">{item.label}</span>
                      </div>
                      <div className="text-[#0B1F3A] font-black text-xl tracking-tight leading-none">
                        {item.value}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* 스레드 조회수 카운터 */}
            <div ref={c1928.ref} className="bg-[#F7F9FC] border border-[#E2E8F0] rounded-2xl p-5">
              <p className="text-[#8B9BB4] text-[11px] font-bold tracking-widest uppercase mb-3">스레드 누적 조회수</p>
              <div className="flex items-end gap-4">
                <div>
                  <div className="text-[#1A56DB] font-black tracking-tight leading-none" style={{ fontSize: "clamp(1.8rem,4vw,2.4rem)" }}>
                    {c1928.count.toFixed(1)}<span className="text-xl">만</span>
                  </div>
                  <p className="text-[#A0AEC0] text-xs mt-1 tracking-tight">누적 기준</p>
                </div>
                <div className="flex-1 h-px bg-[#E2E8F0]" />
                <div className="text-right">
                  <div className="text-[#4A5568] font-black text-xl tracking-tight">39만</div>
                  <p className="text-[#A0AEC0] text-xs tracking-tight">최근 30일</p>
                </div>
              </div>
            </div>

            {/* 팔로워·반응 카운터 */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { ref: c14.ref, value: c14.count.toFixed(1), unit: "만", label: "팔로워", color: "text-[#E8A020]" },
                { ref: c13.ref, value: c13.count.toFixed(1), unit: "만", label: "누적 반응", color: "text-emerald-600" },
              ].map((item) => (
                <div key={item.label} ref={item.ref} className="bg-[#F7F9FC] border border-[#E2E8F0] rounded-xl p-4">
                  <p className="text-[#8B9BB4] text-[10px] font-bold tracking-widest uppercase mb-2">{item.label}</p>
                  <div className={`font-black text-2xl tracking-tight leading-none ${item.color}`}>
                    {item.value}<span className="text-base">{item.unit}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-[#A0AEC0] text-xs text-center mt-10 tracking-tight"
        >
          위 수치는 실제 운영 계정의 캡처 화면을 기반으로 합니다 · 성과는 학원별 상황에 따라 다를 수 있습니다
        </motion.p>
      </div>
    </section>
  );
}
