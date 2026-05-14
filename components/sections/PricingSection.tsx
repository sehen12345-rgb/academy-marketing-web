"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, MessageCircle } from "lucide-react";

const plans = [
  {
    name: "스타터",
    desc: "SNS 시작이 처음이신 원장님께",
    price: "48만원",
    period: "/월",
    highlight: false,
    features: [
      "스레드 프로필 세팅 (최초 1회)",
      "리틀리 페이지 세팅",
      "주 3회 포스팅 (월 12회)",
      "댓글·DM 관리",
      "월 성과 리포트",
    ],
    cta: "상담 신청",
  },
  {
    name: "그로스",
    desc: "온라인 존재감을 키우고 싶은 학원",
    price: "상담 후",
    period: " 결정",
    highlight: true,
    features: [
      "스타터 플랜 전체 포함",
      "블로그 포스팅 월 4건",
      "네이버 플레이스 CPC 광고",
      "당근 지역 광고 운용",
      "주간 성과 보고서",
      "전담 매니저 배정",
    ],
    cta: "무료 상담 신청",
  },
  {
    name: "프리미엄",
    desc: "브랜드 포지셔닝이 필요한 학원",
    price: "상담 후",
    period: " 결정",
    highlight: false,
    features: [
      "그로스 플랜 전체 포함",
      "학원 홈페이지 제작",
      "프리미엄 블로그 포스팅",
      "네이버 파워링크 광고",
      "플레이스 상위 노출",
      "카페 바이럴 마케팅",
      "월 2회 전략 미팅",
    ],
    cta: "상담 신청",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#F4F8FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#E8A020]/15 text-[#C47D0A] text-sm font-semibold px-4 py-2 rounded-full mb-4 tracking-tight border border-[#E8A020]/30">
            요금제
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] mb-4 tracking-tight">
            투명하고 합리적인 가격
          </h2>
          <p className="text-[#5C6B7E] text-lg tracking-tight">
            광고비 포함 올인원. 숨겨진 비용 없이 명확하게.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-2xl p-8 flex flex-col relative ${
                plan.highlight
                  ? "bg-[#0B1F3A] shadow-xl shadow-[#0B1F3A]/30 scale-[1.03]"
                  : "bg-white border border-[#D6E6FF]"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E8A020] text-[#0B1F3A] text-xs font-black px-4 py-1.5 rounded-full tracking-tight">
                  추천
                </span>
              )}

              <div className="mb-6">
                <h3 className={`font-black text-xl mb-1 tracking-tight ${plan.highlight ? "text-white" : "text-[#0B1F3A]"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm tracking-tight ${plan.highlight ? "text-white/50" : "text-[#5C6B7E]"}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-black tracking-tight ${plan.highlight ? "text-[#E8A020]" : "text-[#0B1F3A]"}`}>
                  {plan.price}
                </span>
                <span className={`text-base tracking-tight ${plan.highlight ? "text-white/40" : "text-[#A8B8C8]"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check size={15} className={`mt-0.5 shrink-0 ${plan.highlight ? "text-[#E8A020]" : "text-[#1B3D6E]"}`} />
                    <span className={`text-sm tracking-tight ${plan.highlight ? "text-white/70" : "text-[#5C6B7E]"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`flex items-center justify-center gap-2 font-bold py-3.5 rounded-full transition-colors tracking-tight ${
                  plan.highlight
                    ? "bg-[#E8A020] text-[#0B1F3A] hover:bg-[#F0B429]"
                    : "bg-[#0B1F3A] text-white hover:bg-[#1B3D6E]"
                }`}
              >
                <MessageCircle size={15} />
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-[#A8B8C8] text-sm mt-8 tracking-tight"
        >
          * 광고 상품의 경우 광고비 규모에 따라 가격이 달라집니다. 무료 상담으로 정확한 견적을 받아보세요.
        </motion.p>
      </div>
    </section>
  );
}
