"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Wrench, Clock, ArrowRight } from "lucide-react";

const guarantees = [
  {
    icon: CreditCard,
    title: "후불제",
    sub: "선납금 없음",
    desc: "SNS·광고 월정기 상품은 선납 없이 서비스 제공 후 청구합니다. 돈 먼저 내고 시작하는 구조가 아닙니다.",
    badge: "월별 후불",
    color: "text-[#E8A020]",
    bg: "bg-[#E8A020]/10",
    border: "border-[#E8A020]/30",
  },
  {
    icon: Wrench,
    title: "KPI 미달성 시\n무료 재조정",
    sub: "성과 보장",
    desc: "목표 수치에 못 미치면 다음 달 전략을 무료로 재조정합니다. 결과 없이 비용만 청구하지 않습니다.",
    badge: "성과 보장",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "border-emerald-400/30",
  },
  {
    icon: ShieldCheck,
    title: "위약금 0원",
    sub: "자유로운 해지",
    desc: "1개월 전 통보로 언제든 계약 종료 가능합니다. 강제 연장 없이 원장님이 결정하시면 됩니다.",
    badge: "계약 자유",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "border-blue-400/30",
  },
  {
    icon: Clock,
    title: "24시간 내\n견적서 발송",
    sub: "빠른 시작",
    desc: "상담 신청 후 24시간 이내 맞춤 견적서를 보내드립니다. 결정 전에 전체 비용 구조를 투명하게 확인하세요.",
    badge: "즉시 확인",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "border-purple-400/30",
  },
];

export default function GuaranteeSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#080F1E] relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{ backgroundImage: "radial-gradient(circle,#E8A020 1px,transparent 1px)", backgroundSize: "40px 40px" }}
        />
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[250px] bg-[#E8A020] opacity-[0.04] rounded-full blur-3xl"
          animate={{ scaleX: [1, 1.15, 1], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-[400px] h-[300px] bg-blue-500 opacity-[0.03] rounded-full blur-3xl"
          animate={{ x: [0, -30, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
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
          <span className="inline-flex items-center gap-2 bg-[#E8A020]/15 text-[#E8A020] text-sm font-bold px-4 py-2 rounded-full mb-4 border border-[#E8A020]/20 tracking-tight">
            <ShieldCheck size={14} />
            현역오빠 4대 보장
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            계약 전에 확인하세요.
            <br />
            <span className="text-[#E8A020]">우리는 이 약속을 지킵니다.</span>
          </h2>
          <p className="text-white/40 text-sm mt-4 tracking-tight max-w-lg mx-auto">
            학원 원장님이 대행사를 믿지 못하는 이유는 단 하나, 약속을 안 지켜서입니다.<br />
            저희는 계약서에 명시된 4가지를 반드시 이행합니다.
          </p>
        </motion.div>

        {/* 카드 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {guarantees.map((g, i) => {
            const Icon = g.icon;
            return (
              <motion.div
                key={g.title}
                initial={{ opacity: 0, y: 28, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.03 }}
                className={`relative bg-white/[0.04] border ${g.border} rounded-2xl p-6 flex flex-col gap-4 hover:bg-white/[0.07] transition-colors`}
              >
                {/* 배지 */}
                <span className={`absolute top-4 right-4 text-[10px] font-black px-2.5 py-1 rounded-full ${g.bg} ${g.color} border ${g.border} tracking-tight`}>
                  {g.badge}
                </span>

                {/* 아이콘 */}
                <div className={`w-11 h-11 rounded-xl ${g.bg} flex items-center justify-center`}>
                  <Icon size={20} className={g.color} />
                </div>

                {/* 텍스트 */}
                <div>
                  <h3 className="text-white font-black text-base leading-snug tracking-tight whitespace-pre-line mb-1">
                    {g.title}
                  </h3>
                  <p className={`text-xs font-bold tracking-tight mb-3 ${g.color}`}>{g.sub}</p>
                  <p className="text-white/45 text-sm leading-relaxed tracking-tight">{g.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 하단 CTA 배너 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="bg-gradient-to-r from-[#E8A020]/20 to-[#E8A020]/5 border border-[#E8A020]/30 rounded-2xl p-7 flex flex-col sm:flex-row items-center justify-between gap-5"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <ShieldCheck size={16} className="text-[#E8A020]" />
              <span className="text-[#E8A020] text-xs font-black tracking-widest uppercase">4대 보장 모두 계약서에 명시</span>
            </div>
            <p className="text-white font-black text-lg tracking-tight">
              말로만 하는 약속이 아닙니다.
            </p>
            <p className="text-white/40 text-sm tracking-tight mt-1">
              계약서에 명시하고, 지키지 않으면 환급해드립니다.
            </p>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8A020] text-[#0B1F3A] font-black px-7 py-3.5 rounded-full hover:bg-[#F0B429] transition-colors text-sm tracking-tight shadow-lg shadow-[#E8A020]/25 whitespace-nowrap"
            >
              보장 내용 확인하기
              <ArrowRight size={15} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
