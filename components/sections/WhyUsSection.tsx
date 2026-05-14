"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, BarChart3, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "학원 전문 마케팅",
    desc: "일반 대행사와 달리 학원·교육 분야에 특화된 마케팅 전략을 적용합니다. 학부모 심리와 학원 선택 기준을 정확히 이해합니다.",
    color: "blue",
  },
  {
    icon: Zap,
    title: "광고비 포함 올인원",
    desc: "광고 운영비와 광고비를 분리하지 않습니다. 계약 금액 안에서 모든 것을 처리하니 추가 비용 걱정이 없습니다.",
    color: "amber",
  },
  {
    icon: BarChart3,
    title: "데이터 기반 성과 보고",
    desc: "월별 성과 리포트로 어떤 채널에서 효과가 났는지 투명하게 공유합니다. 숫자로 증명하는 마케팅을 합니다.",
    color: "emerald",
  },
  {
    icon: HeartHandshake,
    title: "원스톱 파트너십",
    desc: "여러 업체에 나눠서 맡길 필요 없습니다. 웹, SNS, 광고까지 한 팀이 통합 관리해 일관된 브랜드 메시지를 전달합니다.",
    color: "purple",
  },
];

const colorMap: Record<string, { bg: string; icon: string }> = {
  blue: { bg: "bg-blue-100", icon: "text-blue-600" },
  amber: { bg: "bg-amber-100", icon: "text-amber-600" },
  emerald: { bg: "bg-emerald-100", icon: "text-emerald-600" },
  purple: { bg: "bg-purple-100", icon: "text-purple-600" },
};

export default function WhyUsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-emerald-50 text-emerald-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            왜 저희인가요?
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            학원 마케팅에는
            <br />
            전문가가 필요합니다
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            단순히 포스팅을 올리는 것이 아닌,
            <br />
            학원 원생 모집에 직결되는 마케팅을 합니다.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {reasons.map((reason, index) => {
            const colors = colorMap[reason.color];
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-5 p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-slate-200 transition-all"
              >
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center shrink-0`}>
                  <Icon size={22} className={colors.icon} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-2">{reason.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
