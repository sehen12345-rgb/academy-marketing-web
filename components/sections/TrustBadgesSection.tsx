"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/* 파트너 학원 이름 목록 (업종 다양화) */
const academies = [
  "강남 영어 전문학원", "분당 수학학원", "목동 입시학원", "송파 미술학원",
  "판교 코딩학원", "서초 피아노학원", "노원 과학탐구학원", "마포 독서논술학원",
  "일산 영어유치원", "수원 논술학원", "인천 수학과학학원", "부산 입시전문학원",
  "대구 영재학원", "광주 예술학원", "대전 수학전문학원", "성남 영어회화학원",
];

/* 플랫폼 파트너 배지 */
const partners = [
  {
    name: "NAVER",
    label: "네이버 광고 파트너",
    color: "text-[#03C75A]",
    bg: "bg-[#03C75A]/8",
    border: "border-[#03C75A]/20",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M16.273 12.845L7.376 0H0v24h7.727V11.155L16.624 24H24V0h-7.727z" fill="#03C75A"/>
      </svg>
    ),
  },
  {
    name: "KAKAO",
    label: "카카오 광고 운용",
    color: "text-[#3A1D1D]",
    bg: "bg-[#FEE500]/20",
    border: "border-[#FEE500]/40",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#3A1D1D">
        <path d="M12 3C6.477 3 2 6.477 2 11c0 2.89 1.657 5.424 4.162 6.962-.178.667-.647 2.415-.742 2.789-.118.463.17.457.358.332.147-.097 2.34-1.594 3.287-2.238.626.09 1.27.137 1.935.137 5.523 0 10-3.477 10-8C22 6.477 17.523 3 12 3z"/>
      </svg>
    ),
  },
  {
    name: "META",
    label: "Meta 광고 운용",
    color: "text-[#1877F2]",
    bg: "bg-[#1877F2]/8",
    border: "border-[#1877F2]/20",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    ),
  },
];

export default function TrustBadgesSection() {
  const doubled = [...academies, ...academies];

  return (
    <section className="py-10 bg-white border-y border-[#E8EDF5] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* 좌: 라벨 */}
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-emerald-500" />
            <p className="text-[#5C6B7E] text-sm font-medium tracking-tight">
              현재 <span className="text-[#0B1F3A] font-black">23개 학원</span>이 에듀플로우와 함께하고 있습니다
            </p>
          </div>

          {/* 우: 파트너 배지 */}
          <div className="flex items-center gap-2">
            {partners.map((p) => (
              <div
                key={p.name}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-bold tracking-tight ${p.bg} ${p.border} ${p.color}`}
              >
                {p.icon}
                <span className="hidden sm:inline">{p.label}</span>
                <span className="sm:hidden">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 스크롤 마퀴 */}
      <div className="relative">
        {/* 좌우 페이드 */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-3 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
        >
          {doubled.map((name, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F4F8FF] border border-[#D6E6FF] text-[#0B1F3A] text-sm font-medium tracking-tight shrink-0"
            >
              <span className="w-1.5 h-1.5 bg-[#E8A020] rounded-full" />
              {name}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
