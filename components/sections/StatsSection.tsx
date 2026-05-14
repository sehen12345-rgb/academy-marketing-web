"use client";

import { motion } from "framer-motion";

const stats = [
  { value: "8가지", label: "서비스 라인업", desc: "웹부터 광고까지 원스톱" },
  { value: "100%", label: "광고비 투명 공개", desc: "숨겨진 추가 비용 없음" },
  { value: "48만원~", label: "SNS 월 운영 시작가", desc: "주 3회 포스팅 포함" },
  { value: "24h", label: "견적서 발송", desc: "상담 후 24시간 내 발송" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#E8A020] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: index * 0.07 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#0B1F3A] mb-1 tracking-tight">
                {stat.value}
              </div>
              <div className="text-[#0B1F3A] font-bold text-sm mb-0.5 tracking-tight">{stat.label}</div>
              <div className="text-[#0B1F3A]/60 text-xs tracking-tight">{stat.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
