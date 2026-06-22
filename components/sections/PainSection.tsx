"use client";

import { motion } from "framer-motion";
import { X, Check, ArrowDown } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    label: "기",
    question: "마케팅 대행사, 써보셨나요?",
    body: "계약하고 나면 담당자가 바뀌고, 우리 학원 얘기는 안 듣고,\n그냥 템플릿 콘텐츠만 올라오고.",
    sub: "한 번이라도 이런 경험 있으시다면, 문제는 대행사가 아니었을 수 있어요.",
    dark: false,
  },
  {
    label: "승",
    question: "진짜 문제가 뭔지 아세요?",
    body: "문제는 마케팅이 아니에요.\n학원을 모르는 사람이 학원 마케팅을 하고 있는 게 문제예요.",
    sub: "학부모가 뭘 걱정하는지, 우리 학원 강점이 뭔지 — 그걸 모르면 아무리 좋은 툴도 소용없어요.",
    dark: false,
  },
  {
    label: "전",
    question: "저희는 다르게 접근합니다.",
    body: "계약 전에 대표가 직접 상담합니다.\n원장님 학원의 현황, 학부모 타겟, 지역 경쟁 구도를 먼저 파악하고\n그 다음에 방향을 설계해요.",
    sub: "맞지 않으면 계약 안 해도 됩니다.",
    dark: true,
  },
  {
    label: "결",
    question: "30분이면 우리 학원 문제가 어디 있는지 보입니다.",
    body: "공장에서 찍어낸 콘텐츠 말고,\n우리 학원 이야기를 담은 콘텐츠로 시작하세요.",
    sub: "지금 무료 진단 상담을 신청하시면 대표가 직접 연락드립니다.",
    dark: true,
    cta: true,
  },
];

const compare = [
  { item: "콘텐츠 제작 방식", bad: "AI + 알바생 공장형 양산", good: "대표·전문가 직접 기획·작성" },
  { item: "학원 파악", bad: "계약 후 체크리스트 한 장", good: "상담에서 원장님과 충분한 대화" },
  { item: "블로그 글 퀄리티", bad: "학원 이름만 바꾼 복붙", good: "우리 학원 이야기가 담긴 글" },
  { item: "전략 설계", bad: "모든 학원에 동일 템플릿", good: "지역·타겟·경쟁 구도 맞춤 설계" },
  { item: "담당자", bad: "계약 후 담당자 교체 빈번", good: "대표가 직접 끝까지 관리" },
  { item: "계약 방식", bad: "선불 + 위약금 조항", good: "맞지 않으면 계약 안 해도 됩니다" },
];

export default function PainSection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #0B1F3A 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block bg-[#E8A020]/10 text-[#C8821A] text-sm font-semibold px-4 py-2 rounded-full mb-4 tracking-tight border border-[#E8A020]/25">
            이런 고민, 있으시죠?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight leading-tight">
            학원 원장님이라면<br />누구나 겪는 문제들
          </h2>
        </motion.div>

        {/* 기승전 스토리 */}
        <div className="space-y-4 mb-16">
          {steps.map((step, i) => (
            <motion.div
              key={step.label}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`rounded-2xl p-7 border ${
                step.dark
                  ? "bg-[#0B1F3A] border-[#0B1F3A]"
                  : "bg-[#F7F9FC] border-[#E2E8F0]"
              }`}>
                <div className="flex items-start gap-5">
                  <span className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-sm font-black border-2 ${
                    step.dark
                      ? "border-[#E8A020] text-[#E8A020]"
                      : "border-[#0B1F3A] text-[#0B1F3A]"
                  }`}>
                    {step.label}
                  </span>
                  <div className="flex-1">
                    <p className={`text-lg font-black mb-2 tracking-tight ${step.dark ? "text-[#E8A020]" : "text-[#0B1F3A]"}`}>
                      {step.question}
                    </p>
                    <p className={`text-sm leading-relaxed whitespace-pre-line mb-2 tracking-tight ${step.dark ? "text-white/80" : "text-[#0B1F3A]"}`}>
                      {step.body}
                    </p>
                    <p className={`text-sm tracking-tight ${step.dark ? "text-white/40" : "text-[#5C6B7E]"}`}>
                      {step.sub}
                    </p>
                    {step.cta && (
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 mt-5 bg-[#E8A020] text-[#0B1F3A] font-black px-7 py-3.5 rounded-full hover:bg-[#F0B429] transition-colors text-sm tracking-tight shadow-lg shadow-[#E8A020]/20"
                      >
                        무료 진단 상담 신청
                      </Link>
                    )}
                  </div>
                </div>
              </div>

              {i < steps.length - 1 && (
                <div className="flex justify-center my-2">
                  <ArrowDown size={18} className="text-[#D6E6FF]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* 비교표 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-center text-xs font-bold text-[#A8B8C8] tracking-widest uppercase mb-6">공장형 대행사 vs 에듀플로우</p>
          <div className="rounded-2xl overflow-hidden border border-[#E2E8F0]">
            {/* 헤더 */}
            <div className="grid grid-cols-3 bg-[#0B1F3A]">
              <div className="px-5 py-3.5 text-xs font-bold text-white/30 tracking-widest uppercase">항목</div>
              <div className="px-5 py-3.5 text-xs font-bold text-red-400 tracking-widest uppercase text-center">타 대행사</div>
              <div className="px-5 py-3.5 text-xs font-bold text-[#E8A020] tracking-widest uppercase text-center">에듀플로우</div>
            </div>
            {compare.map((row, i) => (
              <motion.div
                key={row.item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className={`grid grid-cols-3 border-t border-[#E2E8F0] ${i % 2 === 0 ? "bg-white" : "bg-[#F7F9FC]"}`}
              >
                <div className="px-5 py-4 text-xs font-bold text-[#0B1F3A] tracking-tight">{row.item}</div>
                <div className="px-5 py-4 flex items-start gap-2">
                  <X size={13} className="text-red-400 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-xs text-[#5C6B7E] tracking-tight leading-snug">{row.bad}</span>
                </div>
                <div className="px-5 py-4 flex items-start gap-2">
                  <Check size={13} className="text-emerald-500 shrink-0 mt-0.5" strokeWidth={2.5} />
                  <span className="text-xs text-[#0B1F3A] font-semibold tracking-tight leading-snug">{row.good}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>


      </div>
    </section>
  );
}
