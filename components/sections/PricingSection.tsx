"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, MessageCircle, Zap, Shield, Crown } from "lucide-react";

const plans = [
  {
    icon: Zap,
    name: "SNS 스타터",
    desc: "브랜드 블로그로 온라인 존재감을 만들 학원",
    highlight: false,
    badge: null,
    features: [
      "경쟁 학원 키워드·포지셔닝 분석",
      "브랜드 블로그 개설 및 세팅 (최초 1회)",
      "블로그 포스팅 주 3회 (월 12건, 키워드 최적화)",
      "댓글·DM 관리",
      "월간 성과 리포트",
    ],
    cta: "스타터 견적 문의",
  },
  {
    icon: Shield,
    name: "통합 성장",
    desc: "블로그 + 스토리 + 광고를 한 번에 운영할 학원",
    highlight: true,
    badge: "가장 인기",
    features: [
      "스타터 플랜 전체 포함",
      "학부모 타겟 콘텐츠 전략 수립",
      "브랜드 스토리 콘텐츠 기획·제작",
      "네이버 플레이스 CPC 광고 운용",
      "주간 성과 보고서",
      "전담 매니저 1:1 배정",
      "브랜드 블로그 세팅 / 디자인 제작 별도 문의",
    ],
    cta: "무료 상담 신청",
  },
  {
    icon: Crown,
    name: "브랜드 프리미엄",
    desc: "지역 1등 포지셔닝을 목표로 하는 학원",
    highlight: false,
    badge: null,
    features: [
      "통합 성장 플랜 전체 포함",
      "학원 홈페이지 제작 (모바일 최적화)",
      "네이버 파워링크 광고",
      "플레이스 상위 노출 관리",
      "카카오 채널 개설·운영",
      "지역 맘카페 바이럴 기획",
      "월 2회 전략 미팅 (화상)",
    ],
    cta: "프리미엄 견적 문의",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#F4F8FF] relative overflow-hidden">
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
          className="text-center mb-14"
        >
          <span className="inline-block bg-[#E8A020]/15 text-[#C47D0A] text-sm font-semibold px-4 py-2 rounded-full mb-4 tracking-tight border border-[#E8A020]/30">
            서비스 플랜
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] mb-4 tracking-tight">
            학원 규모에 맞는 <span className="text-[#E8A020]">맞춤 플랜</span>
          </h2>
          <p className="text-[#5C6B7E] tracking-tight">
            가격은 학원 상황에 따라 달라집니다 — 상담 후 정확한 견적을 드립니다
          </p>
        </motion.div>

        {/* 플랜 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`rounded-2xl flex flex-col relative transition-shadow ${
                  plan.highlight
                    ? "bg-[#0B1F3A] shadow-2xl shadow-[#0B1F3A]/30 ring-2 ring-[#E8A020]/60"
                    : "bg-white border border-[#D6E6FF] shadow-sm hover:shadow-lg hover:shadow-[#0B1F3A]/8"
                }`}
              >
                {plan.badge && (
                  <motion.span
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E8A020] text-[#0B1F3A] text-xs font-black px-4 py-1.5 rounded-full tracking-tight whitespace-nowrap shadow-lg"
                  >
                    🏆 {plan.badge}
                  </motion.span>
                )}

                <div className="p-7 flex flex-col flex-1">
                  {/* 아이콘 + 제목 */}
                  <div className="mb-6">
                    <div className={`w-11 h-11 rounded-2xl flex items-center justify-center mb-4 ${
                      plan.highlight ? "bg-[#E8A020]/20" : "bg-[#0B1F3A]/8"
                    }`}>
                      <Icon size={20} className={plan.highlight ? "text-[#E8A020]" : "text-[#0B1F3A]"} />
                    </div>
                    <h3 className={`font-black text-xl mb-1 tracking-tight ${plan.highlight ? "text-white" : "text-[#0B1F3A]"}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-xs tracking-tight ${plan.highlight ? "text-white/45" : "text-[#5C6B7E]"}`}>
                      {plan.desc}
                    </p>
                  </div>

                  {/* 가격 영역 */}
                  <div className={`rounded-xl px-4 py-3.5 mb-6 ${
                    plan.highlight ? "bg-white/8" : "bg-[#F4F8FF]"
                  }`}>
                    <p className={`text-[11px] font-bold mb-1 tracking-widest uppercase ${
                      plan.highlight ? "text-white/40" : "text-[#A8B8C8]"
                    }`}>견적</p>
                    <p className={`font-black text-lg tracking-tight ${
                      plan.highlight ? "text-[#E8A020]" : "text-[#0B1F3A]"
                    }`}>상담 후 맞춤 안내</p>
                    <p className={`text-[11px] mt-0.5 tracking-tight ${
                      plan.highlight ? "text-white/30" : "text-[#A8B8C8]"
                    }`}>학원 규모·지역·목표에 따라 결정</p>
                  </div>

                  {/* 기능 목록 */}
                  <ul className="space-y-2.5 mb-7 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check
                          size={14}
                          className={`mt-0.5 shrink-0 ${plan.highlight ? "text-[#E8A020]" : "text-[#1B3D6E]"}`}
                          strokeWidth={2.5}
                        />
                        <span className={`text-sm tracking-tight leading-snug ${
                          plan.highlight ? "text-white/80" : "text-[#5C6B7E]"
                        }`}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <Link
                    href="/contact"
                    className={`flex items-center justify-center gap-2 font-bold py-3.5 rounded-full transition-all tracking-tight text-sm ${
                      plan.highlight
                        ? "bg-[#E8A020] text-[#0B1F3A] hover:bg-[#F0B429] shadow-lg shadow-[#E8A020]/30"
                        : "bg-[#0B1F3A] text-white hover:bg-[#1B3D6E]"
                    }`}
                  >
                    <MessageCircle size={14} />
                    {plan.cta}
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 하단 안내 배너 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="bg-[#0B1F3A] rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div>
            <p className="text-white font-black text-lg tracking-tight mb-1">
              어떤 플랜이 맞는지 모르겠다면?
            </p>
            <p className="text-white/40 text-sm tracking-tight">
              무료 상담 30분 — 학원 현황 분석 후 최적 플랜과 예상 견적을 바로 드립니다
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8A020] text-[#0B1F3A] font-black px-6 py-3.5 rounded-full hover:bg-[#F0B429] transition-colors text-sm tracking-tight shadow-lg shadow-[#E8A020]/20 whitespace-nowrap shrink-0"
          >
            <MessageCircle size={14} />
            무료 상담 신청
          </Link>
        </motion.div>

        <p className="text-center text-[#A8B8C8] text-xs mt-5 tracking-tight">
          * 광고비는 실집행 금액 그대로 청구 · 대행 수수료 별도 없음 · VAT 10% 별도
        </p>

      </div>
    </section>
  );
}
