"use client";

import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const pledges = [
  {
    num: "01",
    text: "동일 지역·동일 업종에 두 번째 계약은 절대 받지 않습니다.",
    highlight: true,
  },
  {
    num: "02",
    text: "선납금 없이 서비스 제공 후 후불로 청구합니다.",
    highlight: false,
  },
  {
    num: "03",
    text: "KPI를 달성하지 못하면 다음 달 전략을 무료로 재조정합니다.",
    highlight: false,
  },
  {
    num: "04",
    text: "1개월 전 통보만으로 위약금 없이 언제든 해지할 수 있습니다.",
    highlight: false,
  },
  {
    num: "05",
    text: "광고비를 포함한 모든 비용 구조를 계약 전에 투명하게 공개합니다.",
    highlight: false,
  },
  {
    num: "06",
    text: "상담 신청 후 24시간 이내에 맞춤 견적서를 발송합니다.",
    highlight: false,
  },
  {
    num: "07",
    text: "담당자를 수시로 교체하지 않습니다. 처음 배정된 담당자가 끝까지 책임집니다.",
    highlight: false,
  },
  {
    num: "08",
    text: "외주 없이 직접 실행합니다. 중간 마진도, 책임 회피도 없습니다.",
    highlight: true,
  },
  {
    num: "09",
    text: "매월 성과 리포트를 작성해 수치로 결과를 보고합니다.",
    highlight: false,
  },
  {
    num: "10",
    text: "학부모 심리와 학원 운영 특성에 맞춘 콘텐츠만 제작합니다.",
    highlight: false,
  },
  {
    num: "11",
    text: "타 대행사가 어렵다 해도 포기하지 않고 해법을 찾겠습니다.",
    highlight: false,
  },
  {
    num: "12",
    text: "SNS·광고·웹페이지를 따로 맡기지 않아도 됩니다. 원스톱으로 처리합니다.",
    highlight: false,
  },
  {
    num: "13",
    text: "숨겨진 추가 비용을 청구하지 않습니다. 견적서가 곧 최종 금액입니다.",
    highlight: false,
  },
  {
    num: "14",
    text: "계약 갱신은 원장님의 의사로만 결정됩니다. 강제 연장은 없습니다.",
    highlight: false,
  },
  {
    num: "15",
    text: "과장된 수치로 현혹하지 않습니다. 실제 데이터만 제시합니다.",
    highlight: false,
  },
  {
    num: "16",
    text: "경쟁 학원 분석을 먼저 하고 전략을 수립합니다.",
    highlight: false,
  },
  {
    num: "17",
    text: "광고 집행 후 낭비되는 예산이 없도록 매주 최적화합니다.",
    highlight: false,
  },
  {
    num: "18",
    text: "원장님이 마케팅 걱정 없이 수업에만 집중할 수 있도록 만들겠습니다.",
    highlight: true,
  },
  {
    num: "19",
    text: "4대 보장 내용은 모두 계약서에 명시되어 법적 효력을 갖습니다.",
    highlight: false,
  },
  {
    num: "20",
    text: "에듀플로우와 함께한 학원이 지역 1등이 될 때까지 멈추지 않습니다.",
    highlight: false,
  },
];

export default function PledgeSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0B1F3A] relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #E8A020 1px, transparent 1px)",
            backgroundSize: "44px 44px",
          }}
        />
        <motion.div
          className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#E8A020] opacity-[0.04] rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500 opacity-[0.04] rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        {/* 헤더 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 bg-[#E8A020]/15 text-[#E8A020] text-sm font-bold px-4 py-2 rounded-full mb-4 border border-[#E8A020]/25 tracking-tight">
            <ShieldCheck size={14} />
            에듀플로우가 드리는 약속
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            20가지 약속,
            <br />
            <span className="text-[#E8A020]">전부 계약서에 명시합니다.</span>
          </h2>
          <p className="text-white/40 text-sm mt-4 max-w-md mx-auto tracking-tight leading-relaxed">
            말로만 하는 약속은 의미가 없습니다.<br />
            에듀플로우의 약속은 계약서에 문서화되어 법적 효력을 갖습니다.
          </p>
        </motion.div>

        {/* 약속 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {pledges.map((pledge, i) => (
            <motion.div
              key={pledge.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className={`relative rounded-2xl p-5 flex flex-col gap-3 border transition-all duration-200 hover:-translate-y-1 ${
                pledge.highlight
                  ? "bg-[#E8A020]/10 border-[#E8A020]/40"
                  : "bg-white/[0.04] border-white/[0.08] hover:bg-white/[0.07]"
              }`}
            >
              {/* 번호 */}
              <span
                className={`text-3xl font-black leading-none tracking-tighter ${
                  pledge.highlight ? "text-[#E8A020]" : "text-white/15"
                }`}
              >
                {pledge.num}
              </span>

              {/* 약속 텍스트 */}
              <p
                className={`text-sm leading-relaxed tracking-tight font-medium ${
                  pledge.highlight ? "text-white" : "text-white/65"
                }`}
              >
                {pledge.text}
              </p>

              {/* 하이라이트 뱃지 */}
              {pledge.highlight && (
                <span className="absolute top-4 right-4 text-[10px] font-black px-2 py-0.5 rounded-full bg-[#E8A020] text-[#0B1F3A] tracking-tight">
                  핵심
                </span>
              )}
            </motion.div>
          ))}
        </div>

        {/* 하단 서명 영역 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-white/35 text-xs tracking-tight text-center sm:text-left">
            위 20가지 약속은 에듀플로우 표준 계약서(2024년 개정판)에 전문 수록되어 있습니다.
          </p>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[#E8A020] flex items-center justify-center">
              <span className="text-[#0B1F3A] font-black text-sm">E</span>
            </div>
            <div className="text-right">
              <p className="text-white font-black text-sm tracking-tight">에듀플로우</p>
              <p className="text-white/30 text-[10px] tracking-tight">대표 정필권</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
