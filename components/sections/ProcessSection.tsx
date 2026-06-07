"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "무료 상담",
    duration: "약 30분",
    real: "전화 한 통으로 시작합니다",
    desc: "지금 어떤 채널 쓰시는지, 월 예산은 어느 정도인지, 어떤 게 제일 급한지 — 판단 없이 들을게요.",
    note: "\"지금 당장 계약 안 해도 됩니다. 맞는지 아닌지부터 확인하세요.\"",
    color: "bg-[#E8A020]",
    textColor: "text-[#0B1F3A]",
  },
  {
    num: "02",
    title: "맞춤 제안서",
    duration: "24시간 이내",
    real: "다음 날 바로 견적서가 옵니다",
    desc: "학원 업종·지역·예산에 맞는 서비스 조합과 예상 성과 목표를 담아서 드립니다. 숨겨진 비용 없습니다.",
    note: "\"보내드린 견적서가 곧 계약서 금액입니다.\"",
    color: "bg-[#0B1F3A]",
    textColor: "text-white",
  },
  {
    num: "03",
    title: "계약 체결",
    duration: "당일 가능",
    real: "서류 복잡하지 않습니다",
    desc: "4대 보장이 명시된 표준 계약서 사인 한 번이면 끝입니다. 강요 없이, 원장님이 결정하시면 됩니다.",
    note: "\"계약 후 마음이 바뀌셔도 1개월 전 통보로 해지 가능합니다.\"",
    color: "bg-emerald-500",
    textColor: "text-white",
  },
  {
    num: "04",
    title: "세팅 & 시작",
    duration: "3~5 영업일",
    real: "조용히 준비하다 바로 실행합니다",
    desc: "계정 세팅, 채널 분석, 첫 콘텐츠 기획까지 완료 후 마케팅을 즉시 가동합니다. 원장님 손 안 탑니다.",
    note: "\"세팅 중에도 진행 상황 공유드립니다.\"",
    color: "bg-[#1A56DB]",
    textColor: "text-white",
  },
  {
    num: "05",
    title: "월간 성과 리포트",
    duration: "매월 정기",
    real: "숫자로 설명합니다, 변명 없이",
    desc: "조회수·클릭률·문의 수·전환율을 채널별로 정리해서 보내드립니다. 목표 미달이면 다음 달 전략을 바꿉니다.",
    note: "\"KPI 미달성 시 무료 재조정. 계약서에 명시되어 있습니다.\"",
    color: "bg-[#E8A020]",
    textColor: "text-[#0B1F3A]",
  },
];

function StepCard({ step, index }: { step: typeof steps[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex gap-5 items-start"
    >
      {/* 번호 + 연결선 */}
      <div className="flex flex-col items-center shrink-0">
        <div className={`w-11 h-11 ${step.color} rounded-full flex items-center justify-center shadow-sm`}>
          <span className={`${step.textColor} font-black text-sm`}>{step.num}</span>
        </div>
        {index < steps.length - 1 && (
          <motion.div
            className="w-px bg-[#E2E8F0] mt-2"
            initial={{ height: 0 }}
            animate={inView ? { height: "100%" } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 + 0.3 }}
            style={{ minHeight: "48px" }}
          />
        )}
      </div>

      {/* 내용 */}
      <div className="flex-1 pb-10">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <h3 className="font-black text-[#0B1F3A] text-base tracking-tight">{step.title}</h3>
          <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#F4F8FF] text-[#5C6B7E] border border-[#E2E8F0]">
            {step.duration}
          </span>
        </div>
        <p className="text-[#E8A020] text-xs font-bold tracking-tight mb-2">{step.real}</p>
        <p className="text-[#5C6B7E] text-sm leading-relaxed tracking-tight mb-3">{step.desc}</p>
        <div className="bg-[#F4F8FF] border border-[#D6E6FF] rounded-xl px-4 py-2.5 border-l-2 border-l-[#0B1F3A]">
          <p className="text-[#0B1F3A] text-xs font-bold italic tracking-tight">{step.note}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #0B1F3A 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* 좌: 헤더 고정 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:sticky lg:top-24"
          >
            <span className="inline-block bg-[#F4F8FF] text-[#1B3D6E] text-sm font-semibold px-4 py-2 rounded-full mb-5 tracking-tight border border-[#D6E6FF]">
              진행 방식
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight leading-tight mb-6">
              전화 한 통에서
              <br />
              결과 리포트까지
            </h2>
            <p className="text-[#5C6B7E] text-sm leading-relaxed tracking-tight mb-8">
              복잡하지 않습니다. 5단계가 전부입니다. 각 단계마다 원장님이 알아야 할 것, 저희가 해드리는 것을 투명하게 보여드립니다.
            </p>

            {/* 요약 수치 */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { val: "30분", desc: "첫 상담 소요 시간" },
                { val: "24h", desc: "견적서 발송 보장" },
                { val: "당일", desc: "계약 체결 가능" },
                { val: "매월", desc: "성과 리포트 제공" },
              ].map((s) => (
                <div key={s.val} className="bg-[#F4F8FF] border border-[#D6E6FF] rounded-xl p-4">
                  <div className="text-[#E8A020] font-black text-xl tracking-tight">{s.val}</div>
                  <div className="text-[#5C6B7E] text-xs mt-0.5 tracking-tight">{s.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 우: 타임라인 */}
          <div className="pt-2">
            {steps.map((step, index) => (
              <StepCard key={step.num} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
