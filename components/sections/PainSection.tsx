"use client";

import { motion } from "framer-motion";
import { X, Check, MessageCircle } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    label: "기",
    tag: "공감",
    question: "마케팅 대행사,\n써보셨나요?",
    body: "계약하고 나면 담당자가 바뀌고, 우리 학원 얘기는 안 듣고, 그냥 템플릿 콘텐츠만 올라오고.",
    sub: "한 번이라도 이런 경험 있으시다면, 문제는 대행사가 아니었을 수 있어요.",
    dark: false,
  },
  {
    label: "승",
    tag: "진단",
    question: "진짜 문제가\n뭔지 아세요?",
    body: "문제는 마케팅이 아니에요. 학원을 모르는 사람이 학원 마케팅을 하고 있는 게 문제예요.",
    sub: "학부모가 뭘 걱정하는지, 우리 학원 강점이 뭔지 — 그걸 모르면 아무리 좋은 툴도 소용없어요.",
    dark: false,
  },
  {
    label: "전",
    tag: "차별점",
    question: "저희는\n다르게 접근합니다.",
    body: "계약 전에 대표가 직접 상담합니다. 원장님 학원의 현황, 학부모 타겟, 지역 경쟁 구도를 먼저 파악하고 그 다음에 방향을 설계해요.",
    sub: "맞지 않으면 계약 안 해도 됩니다.",
    dark: true,
  },
  {
    label: "결",
    tag: "제안",
    question: "30분이면 우리 학원\n문제가 보입니다.",
    body: "공장에서 찍어낸 콘텐츠 말고, 우리 학원 이야기를 담은 콘텐츠로 시작하세요.",
    sub: "지금 무료 진단 상담을 신청하시면 대표가 직접 연락드립니다.",
    dark: true,
    cta: true,
  },
];

const compare = [
  { item: "콘텐츠 제작", bad: "AI + 알바생 공장형 양산", good: "대표·전문가 직접 기획·작성" },
  { item: "학원 파악", bad: "계약 후 체크리스트 한 장", good: "원장님과 충분한 대화 후 설계" },
  { item: "블로그 퀄리티", bad: "학원 이름만 바꾼 복붙", good: "우리 학원 이야기가 담긴 글" },
  { item: "전략 설계", bad: "모든 학원에 동일 템플릿", good: "지역·타겟·경쟁 구도 맞춤 설계" },
  { item: "담당자", bad: "계약 후 담당자 교체 빈번", good: "대표가 직접 끝까지 관리" },
  { item: "계약 방식", bad: "선불 + 위약금 조항", good: "맞지 않으면 계약 안 해도 됩니다" },
];

export default function PainSection() {
  return (
    <section className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: "radial-gradient(circle, #0B1F3A 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">

        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-black text-[#0B1F3A] tracking-tight leading-[1.15]">
            <span className="text-[#E8A020]">이런 고민,</span> 있으시죠?<br />
            학원 원장님이라면<br />
            <span className="text-[#E8A020]">누구나 겪는</span> 문제들
          </h2>
        </motion.div>

        {/* 타임라인 */}
        <div className="relative mb-24">
          {/* 세로 연결선 */}
          <div className="absolute left-[17px] top-0 bottom-0 w-px bg-gradient-to-b from-[#D6E6FF] via-[#0B1F3A]/20 to-[#0B1F3A]" />

          <div className="space-y-0">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="relative flex gap-8 pb-10 last:pb-0"
              >
                {/* 스텝 뱃지 */}
                <div className="relative z-10 shrink-0">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-black border-2 shadow-sm ${
                    step.dark
                      ? "bg-[#0B1F3A] border-[#E8A020] text-[#E8A020]"
                      : "bg-white border-[#0B1F3A] text-[#0B1F3A]"
                  }`}>
                    {step.label}
                  </div>
                </div>

                {/* 콘텐츠 */}
                <div className={`flex-1 rounded-2xl p-7 sm:p-8 ${
                  step.dark
                    ? "bg-[#0B1F3A]"
                    : "bg-[#F7F9FC] border border-[#EEF2F7]"
                }`}>
                  {/* 태그 */}
                  <span className={`inline-block text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-4 ${
                    step.dark
                      ? "bg-[#E8A020]/15 text-[#E8A020]"
                      : "bg-[#0B1F3A]/8 text-[#0B1F3A]/50"
                  }`}>
                    {step.tag}
                  </span>

                  {/* 질문 */}
                  <h3 className={`text-2xl sm:text-3xl font-black mb-4 tracking-tight leading-tight whitespace-pre-line ${
                    step.dark ? "text-white" : "text-[#0B1F3A]"
                  }`}>
                    {step.question}
                  </h3>

                  {/* 구분선 */}
                  <div className={`h-px w-12 mb-4 ${step.dark ? "bg-[#E8A020]/30" : "bg-[#0B1F3A]/10"}`} />

                  {/* 본문 */}
                  <p className={`text-base leading-relaxed mb-3 tracking-tight ${
                    step.dark ? "text-white/75" : "text-[#3A4A5C]"
                  }`}>
                    {step.body}
                  </p>

                  {/* 서브 */}
                  <p className={`text-sm tracking-tight ${
                    step.dark ? "text-white/35" : "text-[#8899AA]"
                  }`}>
                    {step.sub}
                  </p>

                  {/* CTA */}
                  {step.cta && (
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 mt-6 bg-[#E8A020] text-[#0B1F3A] font-black px-7 py-3.5 rounded-full hover:bg-[#F0B429] transition-all hover:shadow-lg hover:shadow-[#E8A020]/30 text-sm tracking-tight"
                    >
                      <MessageCircle size={15} />
                      무료 진단 상담 신청
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 전자책 배너 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="relative rounded-2xl overflow-hidden bg-[#0B1F3A] border border-[#E8A020]/20 px-7 py-6 flex items-center gap-5">
            <div className="shrink-0 w-12 h-12 rounded-full bg-[#E8A020]/15 flex items-center justify-center text-2xl">
              📖
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-bold text-[#E8A020] tracking-widest uppercase mb-1">무료 칼럼</p>
              <p className="text-white font-black text-base sm:text-lg tracking-tight leading-snug">
                무료 칼럼 읽고 오셔도<br className="sm:hidden" /> 늦지 않습니다
              </p>
              <p className="text-white/45 text-xs mt-1 tracking-tight">학원 마케팅 핵심 노하우를 무료로 확인하세요</p>
            </div>
            <a
              href="https://open.kakao.com/o/sFi0Tvyi"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-1.5 bg-[#E8A020] text-[#0B1F3A] font-black text-xs px-5 py-2.5 rounded-full hover:bg-[#F0B429] transition-colors whitespace-nowrap"
            >
              무료로 읽기
            </a>
          </div>
        </motion.div>

        {/* 비교표 */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <p className="text-xs font-bold text-[#A8B8C8] tracking-widest uppercase">비교해보세요</p>
            <p className="text-xl font-black text-[#0B1F3A] mt-1 tracking-tight">공장형 대행사 vs 에듀플로우</p>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-sm border border-[#E2E8F0]">
            {/* 컬럼 헤더 */}
            <div className="grid grid-cols-2">
              <div className="bg-red-50 border-b border-red-100 px-6 py-4 flex items-center gap-2">
                <X size={14} className="text-red-400" strokeWidth={2.5} />
                <span className="text-sm font-black text-red-400 tracking-tight">타 대행사</span>
              </div>
              <div className="bg-[#0B1F3A] border-b border-[#E8A020]/20 px-6 py-4 flex items-center gap-2">
                <Check size={14} className="text-[#E8A020]" strokeWidth={2.5} />
                <span className="text-sm font-black text-[#E8A020] tracking-tight">에듀플로우</span>
              </div>
            </div>

            {compare.map((row, i) => (
              <motion.div
                key={row.item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="grid grid-cols-2 border-t border-[#E2E8F0]"
              >
                <div className={`px-6 py-5 ${i % 2 === 0 ? "bg-red-50/60" : "bg-red-50/30"}`}>
                  <p className="text-[10px] font-bold text-red-300 tracking-widest uppercase mb-1.5">{row.item}</p>
                  <p className="text-sm text-[#5C6B7E] tracking-tight leading-snug">{row.bad}</p>
                </div>
                <div className={`px-6 py-5 ${i % 2 === 0 ? "bg-[#F0F7F4]" : "bg-[#F7FBF9]"}`}>
                  <p className="text-[10px] font-bold text-emerald-400 tracking-widest uppercase mb-1.5">{row.item}</p>
                  <p className="text-sm text-[#0B1F3A] font-semibold tracking-tight leading-snug">{row.good}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
