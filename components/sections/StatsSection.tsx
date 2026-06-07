"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: "23",   suffix: "+",   label: "파트너 학원",        desc: "현재 함께하는 학원 수",     ring: 100 },
  { value: "8.3",  suffix: "배",  label: "평균 문의 증가",     desc: "계약 3개월 평균 성과",      ring: 83  },
  { value: "93",   suffix: "%",   label: "3개월 유지율",       desc: "만족해서 계속 맡기는 비율", ring: 93  },
  { value: "24",   suffix: "h",   label: "견적서 발송",        desc: "상담 후 24시간 내 발송",    ring: 80  },
];

function RingStat({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const radius = 36;
  const circumference = 2 * Math.PI * radius;
  const pct = Math.min(stat.ring, 100) / 100;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative w-24 h-24">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 88 88">
          <circle cx="44" cy="44" r={radius} fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="5" />
          <motion.circle
            cx="44" cy="44" r={radius}
            fill="none"
            stroke="#E8A020"
            strokeWidth="5"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: circumference * (1 - pct) } : { strokeDashoffset: circumference }}
            transition={{ duration: 1.4, delay: index * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <span className="text-white font-black text-xl leading-none tracking-tight">{stat.value}</span>
            <span className="text-white/60 font-bold text-xs">{stat.suffix}</span>
          </div>
        </div>
      </div>

      <div className="text-center">
        <div className="text-white font-bold text-sm tracking-tight">{stat.label}</div>
        <div className="text-white/45 text-xs tracking-tight mt-0.5">{stat.desc}</div>
      </div>
    </motion.div>
  );
}

export default function StatsSection() {
  return (
    <section className="bg-[#0B1F3A] py-14 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #E8A020 1px, transparent 1px)",
            backgroundSize: "36px 36px",
          }}
        />
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-[#E8A020]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-blue-400/5 rounded-full blur-2xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {stats.map((stat, index) => (
            <RingStat key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
