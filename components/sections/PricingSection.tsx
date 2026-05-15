"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Check, MessageCircle, Zap, Gift, Users, Calendar, Star, Clock, ChevronDown, ChevronUp } from "lucide-react";

/* ── 패키지 ── */
const plans = [
  {
    name: "SNS 스타터",
    badge: null,
    desc: "SNS 마케팅을 처음 시작하는 학원",
    marketPrice: "98만원",
    price: "68만원",
    saving: "30만원 절감",
    period: "/월",
    adNote: null,
    highlight: false,
    features: [
      { text: "스레드 프로필 세팅 (최초 1회)", bold: false },
      { text: "리틀리 링크 페이지 세팅",       bold: false },
      { text: "주 3회 포스팅 (월 12건)",        bold: true  },
      { text: "댓글·DM 관리",                   bold: false },
      { text: "월간 성과 리포트",               bold: false },
    ],
    cta: "스타터 상담 신청",
  },
  {
    name: "통합 성장",
    badge: "🏆 가장 인기",
    desc: "SNS + 광고를 한 번에 운영할 학원",
    marketPrice: "320만원",
    price: "198만원",
    saving: "122만원 절감",
    period: "/월",
    adNote: "광고비 포함",
    highlight: true,
    features: [
      { text: "스타터 플랜 전체 포함",                bold: false },
      { text: "블로그 포스팅 월 4건 (키워드 최적화)", bold: true  },
      { text: "네이버 플레이스 CPC 광고 운용",        bold: true  },
      { text: "당근 지역 광고 (학원 주변 타겟)",       bold: true  },
      { text: "주간 성과 보고서",                      bold: false },
      { text: "전담 매니저 1:1 배정",                  bold: true  },
    ],
    cta: "무료 상담 신청",
  },
  {
    name: "브랜드 프리미엄",
    badge: null,
    desc: "지역 1등 포지셔닝을 목표로 하는 학원",
    marketPrice: "680만원",
    price: "398만원",
    saving: "282만원 절감",
    period: "/월",
    adNote: "광고비 포함",
    highlight: false,
    features: [
      { text: "통합 성장 플랜 전체 포함",        bold: false },
      { text: "학원 홈페이지 제작 (모바일 최적화)", bold: true  },
      { text: "프리미엄 블로그 포스팅 월 4건",    bold: true  },
      { text: "네이버 파워링크 광고",              bold: true  },
      { text: "플레이스 상위 노출 관리",           bold: true  },
      { text: "카페·커뮤니티 바이럴",             bold: true  },
      { text: "월 2회 전략 미팅 (화상)",          bold: false },
    ],
    cta: "프리미엄 상담 신청",
  },
];

/* ── 단품 서비스 ── */
const aLaCarteItems = [
  { name: "홈페이지 제작 (기본형)",  market: "400만원",  price: "200만원",  unit: "(일회성)", tag: "웹" },
  { name: "홈페이지 제작 (고급형)",  market: "800만원",  price: "450만원",  unit: "(일회성)", tag: "웹" },
  { name: "블로그 포스팅 공장형",    market: "10만원",   price: "7만원",    unit: "/건",      tag: "블로그" },
  { name: "블로그 포스팅 프리미엄",  market: "20만원",   price: "15만원",   unit: "/건",      tag: "블로그" },
  { name: "카페 바이럴",            market: "20만원",   price: "15만원",   unit: "/건",      tag: "바이럴" },
  { name: "플레이스 상위 노출",      market: "200만원",  price: "상담 후",  unit: "/월",      tag: "광고" },
  { name: "네이버 파워링크",         market: "별도",     price: "상담 후",  unit: "(광고비 포함)", tag: "광고" },
  { name: "당근 지역 광고",         market: "별도",     price: "상담 후",  unit: "(광고비 포함)", tag: "광고" },
];

/* ── 교육 대행 필수 프로모션 ── */
const promos = [
  {
    icon: Star,
    color: "bg-[#E8A020] text-[#0B1F3A]",
    border: "border-[#E8A020]/30",
    bg: "bg-[#E8A020]/5",
    title: "개원 특가",
    sub: "개원 6개월 이내 학원",
    desc: "새로 문을 연 학원을 위한 특별 지원 프로그램",
    benefit: "첫 3개월 20% 추가 할인",
    tag: "상시 운영",
  },
  {
    icon: Calendar,
    color: "bg-blue-600 text-white",
    border: "border-blue-200",
    bg: "bg-blue-50",
    title: "새학기 패키지",
    sub: "매년 2~3월 집중 모집 시즌",
    desc: "새학기 등록 시즌 전 계약 시 홈페이지 반값",
    benefit: "홈페이지 제작 50% 할인",
    tag: "시즌 한정",
  },
  {
    icon: Zap,
    color: "bg-purple-600 text-white",
    border: "border-purple-200",
    bg: "bg-purple-50",
    title: "입시 시즌 특가",
    sub: "매년 9~11월 수능 시즌",
    desc: "수능 앞두고 집중 마케팅이 필요한 학원",
    benefit: "당근+플레이스 광고 1개월 무료",
    tag: "시즌 한정",
  },
  {
    icon: Users,
    color: "bg-emerald-600 text-white",
    border: "border-emerald-200",
    bg: "bg-emerald-50",
    title: "원장님 소개 할인",
    sub: "지인 학원 소개 시",
    desc: "운영 중인 파트너 원장님이 소개하면 양측 혜택",
    benefit: "소개한 분 + 신규 학원 각 1개월 무료",
    tag: "상시 운영",
  },
  {
    icon: Clock,
    color: "bg-[#0B1F3A] text-white",
    border: "border-[#0B1F3A]/20",
    bg: "bg-[#0B1F3A]/5",
    title: "장기 약정 혜택",
    sub: "6개월 또는 12개월 계약",
    desc: "안정적인 장기 파트너십으로 더 큰 혜택",
    benefit: "6개월 5% ↑ · 12개월 10% 추가 할인",
    tag: "상시 운영",
  },
  {
    icon: Gift,
    color: "bg-red-500 text-white",
    border: "border-red-200",
    bg: "bg-red-50",
    title: "이달 선착순 특가",
    sub: "이번 달 신규 계약 3개 학원만",
    desc: "매달 3개 학원 한정으로 파격 혜택 제공",
    benefit: "1개월 무료 + 홈페이지 무료 제작",
    tag: "선착순 마감",
    urgent: true,
  },
];

/* ── 잔여 카운트다운 (데모) ── */
function UrgencyBadge() {
  const [remaining, setRemaining] = useState(2);
  useEffect(() => {
    const t = setTimeout(() => setRemaining(1), 8000);
    return () => clearTimeout(t);
  }, []);
  return (
    <motion.div
      animate={{ scale: [1, 1.04, 1] }}
      transition={{ duration: 1.6, repeat: Infinity }}
      className="inline-flex items-center gap-1.5 bg-red-500 text-white text-xs font-black px-3 py-1.5 rounded-full"
    >
      <span className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
      이번 달 잔여 {remaining}자리
    </motion.div>
  );
}

/* ── 단품 토글 ── */
function ALaCarteTable() {
  const [open, setOpen] = useState(false);
  const tagColors: Record<string, string> = {
    웹: "bg-purple-100 text-purple-700",
    블로그: "bg-blue-100 text-blue-700",
    바이럴: "bg-emerald-100 text-emerald-700",
    광고: "bg-[#E8A020]/15 text-[#C47D0A]",
  };
  return (
    <div className="mt-5 border border-[#D6E6FF] rounded-2xl overflow-hidden bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 hover:bg-[#F4F8FF] transition-colors"
      >
        <span className="font-bold text-[#0B1F3A] text-sm tracking-tight">단품 서비스 가격표 보기</span>
        {open ? <ChevronUp size={16} className="text-[#A8B8C8]" /> : <ChevronDown size={16} className="text-[#A8B8C8]" />}
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="border-t border-[#E8EDF3]">
              {/* 헤더 */}
              <div className="grid grid-cols-4 bg-[#F4F8FF] px-6 py-3">
                {["서비스", "시장가", "저희 가격", "단위"].map((h) => (
                  <p key={h} className="text-[11px] font-bold text-[#A8B8C8] tracking-widest uppercase">{h}</p>
                ))}
              </div>
              {aLaCarteItems.map((item, i) => (
                <div key={i} className={`grid grid-cols-4 items-center px-6 py-3.5 ${i % 2 === 0 ? "bg-white" : "bg-[#F4F8FF]/50"} border-t border-[#E8EDF3]`}>
                  <div className="flex items-center gap-2">
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${tagColors[item.tag]}`}>{item.tag}</span>
                    <span className="text-[#0B1F3A] text-sm font-medium tracking-tight">{item.name}</span>
                  </div>
                  <span className="text-[#A8B8C8] text-sm line-through tracking-tight">{item.market}</span>
                  <span className="text-[#E8A020] font-black text-sm tracking-tight">{item.price}</span>
                  <span className="text-[#A8B8C8] text-xs tracking-tight">{item.unit}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#F4F8FF] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
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
            요금제
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] mb-4 tracking-tight">
            시장가 대비 <span className="text-[#E8A020]">합리적인 가격</span>
          </h2>
          <p className="text-[#5C6B7E] tracking-tight">광고비 포함 올인원 · VAT 별도 · 숨겨진 비용 없음</p>
        </motion.div>

        {/* 플랜 카드 3열 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
          {plans.map((plan, index) => (
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
              {/* 배지 */}
              {plan.badge && (
                <motion.span
                  animate={{ y: [0, -3, 0] }}
                  transition={{ duration: 1.8, repeat: Infinity }}
                  className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#E8A020] text-[#0B1F3A] text-xs font-black px-4 py-1.5 rounded-full tracking-tight whitespace-nowrap shadow-lg"
                >
                  {plan.badge}
                </motion.span>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* 제목 */}
                <div className="mb-5">
                  <h3 className={`font-black text-xl mb-1 tracking-tight ${plan.highlight ? "text-white" : "text-[#0B1F3A]"}`}>
                    {plan.name}
                  </h3>
                  <p className={`text-xs tracking-tight ${plan.highlight ? "text-white/45" : "text-[#5C6B7E]"}`}>
                    {plan.desc}
                  </p>
                </div>

                {/* 가격 */}
                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`text-sm line-through tracking-tight ${plan.highlight ? "text-white/30" : "text-[#A8B8C8]"}`}>
                      시장가 {plan.marketPrice}
                    </span>
                    <span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded-full">
                      {plan.saving}
                    </span>
                  </div>
                  <div className="flex items-end gap-1">
                    <span className={`text-4xl font-black tracking-tight ${plan.highlight ? "text-[#E8A020]" : "text-[#0B1F3A]"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm mb-1 tracking-tight ${plan.highlight ? "text-white/40" : "text-[#A8B8C8]"}`}>
                      {plan.period}
                    </span>
                  </div>
                  {plan.adNote && (
                    <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 ${
                      plan.highlight ? "bg-[#E8A020]/20 text-[#E8A020]" : "bg-[#E8A020]/10 text-[#C47D0A]"
                    }`}>
                      {plan.adNote}
                    </span>
                  )}
                </div>

                {/* 기능 목록 */}
                <ul className="space-y-2.5 mb-7 flex-1">
                  {plan.features.map((f) => (
                    <li key={f.text} className="flex items-start gap-2.5">
                      <Check
                        size={14}
                        className={`mt-0.5 shrink-0 ${plan.highlight ? "text-[#E8A020]" : "text-[#1B3D6E]"}`}
                        strokeWidth={2.5}
                      />
                      <span className={`text-sm tracking-tight leading-snug ${
                        f.bold
                          ? plan.highlight ? "text-white font-semibold" : "text-[#0B1F3A] font-semibold"
                          : plan.highlight ? "text-white/60" : "text-[#5C6B7E]"
                      }`}>
                        {f.text}
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
          ))}
        </div>

        {/* 단품 토글 */}
        <ALaCarteTable />

        {/* 주석 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-[#A8B8C8] text-xs mt-4 tracking-tight"
        >
          * 광고비는 실집행 금액 그대로 청구 · 대행 수수료 별도 없음 · VAT 10% 별도
        </motion.p>

        {/* ── 프로모션 섹션 ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-20"
        >
          <div className="text-center mb-10">
            <span className="inline-block bg-red-50 text-red-500 text-sm font-bold px-4 py-2 rounded-full mb-4 tracking-tight border border-red-100">
              진행 중인 프로모션
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#0B1F3A] tracking-tight">
              교육 대행 필수 혜택 <span className="text-[#E8A020]">6가지</span>
            </h3>
            <p className="text-[#5C6B7E] text-sm mt-2 tracking-tight">해당되는 혜택은 중복 적용 가능합니다</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {promos.map((promo, i) => {
              const Icon = promo.icon;
              return (
                <motion.div
                  key={promo.title}
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className={`relative border ${promo.border} ${promo.bg} rounded-2xl p-5`}
                >
                  {/* 긴급 뱃지 */}
                  {promo.urgent && (
                    <div className="absolute -top-3 right-4">
                      <UrgencyBadge />
                    </div>
                  )}

                  {/* 태그 */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-9 h-9 rounded-xl ${promo.color} flex items-center justify-center shrink-0`}>
                      <Icon size={16} />
                    </div>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                      promo.urgent
                        ? "bg-red-100 border-red-200 text-red-600"
                        : "bg-white/70 border-[#D6E6FF] text-[#5C6B7E]"
                    }`}>
                      {promo.tag}
                    </span>
                  </div>

                  <h4 className="font-black text-[#0B1F3A] text-base mb-0.5 tracking-tight">{promo.title}</h4>
                  <p className="text-[#A8B8C8] text-[11px] mb-2 tracking-tight">{promo.sub}</p>
                  <p className="text-[#5C6B7E] text-xs mb-4 leading-relaxed tracking-tight">{promo.desc}</p>

                  <div className="border-t border-white/60 pt-3">
                    <p className="text-[10px] text-[#A8B8C8] mb-1 tracking-tight font-semibold uppercase">혜택</p>
                    <p className="text-[#0B1F3A] font-black text-sm tracking-tight">{promo.benefit}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* 하단 CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-10 bg-[#0B1F3A] rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
          >
            <div>
              <p className="text-white font-black text-lg tracking-tight mb-1">
                어떤 혜택이 적용되는지 확인해보세요
              </p>
              <p className="text-white/40 text-sm tracking-tight">
                무료 상담으로 학원 맞춤 견적서 + 적용 가능한 프로모션을 한 번에 확인
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#E8A020] text-[#0B1F3A] font-black px-6 py-3.5 rounded-full hover:bg-[#F0B429] transition-colors text-sm tracking-tight shadow-lg shadow-[#E8A020]/20 whitespace-nowrap"
                >
                  <Gift size={14} />
                  무료 견적 + 프로모션 확인
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
