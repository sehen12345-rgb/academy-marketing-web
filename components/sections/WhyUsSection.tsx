"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, BarChart3, HeartHandshake, Hammer, CheckCircle2 } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "학원 전문 마케팅",
    detail: "학부모 심리·원생 모집 구조 특화",
    desc: "일반 대행사는 학부모 심리를 모릅니다. 에듀플로우는 교육 분야에만 집중합니다.",
    proof: "파트너 학원 23곳 운영 중",
    color: "bg-[#E8A020]/10",
    iconColor: "text-[#E8A020]",
  },
  {
    icon: Hammer,
    title: "대행사가 아닌 직접 실행사",
    detail: "외주 0%, 중간 마진 0원",
    desc: "콘텐츠 기획·촬영·편집·광고 집행까지 저희 팀이 직접 실행합니다.",
    proof: "릴스 891만 뷰 직접 제작",
    color: "bg-[#1A56DB]/8",
    iconColor: "text-[#1A56DB]",
  },
  {
    icon: BarChart3,
    title: "데이터로 증명하는 성과",
    detail: "매월 투명한 성과 리포트",
    desc: "채널별 조회수·클릭률·전환율을 매달 리포트로 보고합니다. 감이 아닌 숫자로 확인하세요.",
    proof: "평균 문의 8.3배 증가",
    color: "bg-emerald-500/8",
    iconColor: "text-emerald-600",
  },
  {
    icon: Zap,
    title: "광고비 포함 올인원 가격",
    detail: "광고비 별도 없음, 숨겨진 비용 없음",
    desc: "광고 운영비와 광고비를 한 금액에 포함합니다. 청구서 받고 놀라는 일이 없습니다.",
    proof: "후불제·위약금 0원",
    color: "bg-[#E8A020]/10",
    iconColor: "text-[#C8821A]",
  },
  {
    icon: HeartHandshake,
    title: "원스톱 통합 파트너십",
    detail: "웹·SNS·광고 한 팀이 원스톱",
    desc: "담당자가 바뀌거나, 여러 업체에 연락할 필요 없습니다. 한 팀이 처음부터 끝까지.",
    proof: "3개월 유지율 93%",
    color: "bg-blue-500/8",
    iconColor: "text-blue-600",
  },
];

const bigStats = [
  { value: "23+", label: "파트너 학원" },
  { value: "891만", label: "릴스 최고 조회수" },
  { value: "93%", label: "3개월 유지율" },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#F4F8FF] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #0B1F3A 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

          {/* ── 좌: 고정 패널 ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:sticky lg:top-24"
          >
            <span className="inline-block bg-white text-[#1B3D6E] text-sm font-semibold px-4 py-2 rounded-full mb-5 tracking-tight border border-[#D6E6FF] shadow-sm">
              왜 저희인가요?
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight leading-tight mb-6">
              학원 마케팅엔
              <br />
              전문가가 필요합니다
            </h2>
            <p className="text-[#5C6B7E] text-sm leading-relaxed tracking-tight mb-8">
              학원 원장님의 진짜 문제는 "마케팅 방법을 모르는 것"이 아닙니다. 믿을 수 있는 파트너가 없다는 것입니다. 에듀플로우는 다릅니다.
            </p>

            {/* 핵심 수치 3개 */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {bigStats.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-4 border border-[#D6E6FF] shadow-sm text-center">
                  <div className="text-[#E8A020] font-black text-xl tracking-tight leading-none mb-1">{s.value}</div>
                  <div className="text-[#5C6B7E] text-[10px] font-medium tracking-tight">{s.label}</div>
                </div>
              ))}
            </div>

            {/* 체크리스트 */}
            <div className="space-y-2">
              {["후불제 — 선납금 없음", "위약금 0원 — 자유로운 해지", "24시간 내 견적서 발송"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-[#0B1F3A] font-medium tracking-tight">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── 우: 이유 카드 목록 ── */}
          <div className="lg:col-span-3 space-y-3">
            {reasons.map((reason, index) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  whileHover={{ x: 4 }}
                  className="bg-white rounded-2xl border border-[#D6E6FF] p-5 flex gap-4 hover:border-[#0B1F3A]/20 hover:shadow-md transition-all duration-200"
                >
                  <div className={`w-12 h-12 ${reason.color} rounded-xl flex items-center justify-center shrink-0`}>
                    <Icon size={20} className={reason.iconColor} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="font-bold text-[#0B1F3A] tracking-tight text-sm">{reason.title}</h3>
                      <span className="text-[10px] font-bold text-[#8B9BB4] tracking-tight shrink-0 bg-[#F4F8FF] px-2 py-0.5 rounded-full border border-[#E2E8F0]">
                        {reason.detail}
                      </span>
                    </div>
                    <p className="text-[#5C6B7E] text-xs leading-relaxed tracking-tight mb-2">{reason.desc}</p>
                    <div className="flex items-center gap-1.5">
                      <CheckCircle2 size={11} className="text-emerald-500" />
                      <span className="text-[11px] text-emerald-700 font-bold tracking-tight">{reason.proof}</span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
