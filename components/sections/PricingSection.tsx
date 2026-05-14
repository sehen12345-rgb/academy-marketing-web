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
      "블로그 포스팅 월 4건 (공장형)",
      "네이버 플레이스 CPC 광고",
      "당근 지역 광고",
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
      "웹페이지 제작",
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
    <section id="pricing" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-amber-50 text-amber-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            요금제
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            투명하고 합리적인 가격
          </h2>
          <p className="text-slate-500 text-lg">
            광고비 포함 올인원 가격으로 운영됩니다.
            <br />
            숨겨진 비용 없이 처음부터 끝까지 명확하게.
          </p>
        </motion.div>

        {/* Plans */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-2xl p-8 flex flex-col relative ${
                plan.highlight
                  ? "bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105"
                  : "bg-white border border-slate-200"
              }`}
            >
              {plan.highlight && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-4 py-1.5 rounded-full">
                  추천
                </span>
              )}

              <div className="mb-6">
                <h3 className={`font-bold text-xl mb-1 ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlight ? "text-blue-200" : "text-slate-500"}`}>
                  {plan.desc}
                </p>
              </div>

              <div className="mb-6">
                <span className={`text-4xl font-bold ${plan.highlight ? "text-white" : "text-slate-900"}`}>
                  {plan.price}
                </span>
                <span className={`text-base ${plan.highlight ? "text-blue-200" : "text-slate-500"}`}>
                  {plan.period}
                </span>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2.5">
                    <Check
                      size={16}
                      className={`mt-0.5 shrink-0 ${plan.highlight ? "text-blue-200" : "text-blue-600"}`}
                    />
                    <span className={`text-sm ${plan.highlight ? "text-blue-100" : "text-slate-600"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className={`flex items-center justify-center gap-2 font-semibold py-3.5 rounded-xl transition-colors ${
                  plan.highlight
                    ? "bg-white text-blue-600 hover:bg-blue-50"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }`}
              >
                <MessageCircle size={16} />
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-slate-400 text-sm mt-8"
        >
          * 광고 상품의 경우 광고비 규모에 따라 가격이 달라질 수 있습니다. 무료 상담을 통해 정확한 견적을 받아보세요.
        </motion.p>
      </div>
    </section>
  );
}
