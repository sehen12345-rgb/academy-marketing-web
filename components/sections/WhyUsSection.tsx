"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, BarChart3, HeartHandshake, Hammer } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "학원 전문 마케팅",
    desc: "학부모 심리와 원생 모집 구조를 정확히 이해합니다. 일반 대행사와 달리 교육 분야에 특화된 전략만 씁니다.",
    color: "text-[#E8A020]",
    glow: "shadow-[#E8A020]/30",
  },
  {
    icon: Zap,
    title: "광고비 포함 올인원",
    desc: "광고 운영비와 광고비를 한 번에. 추가 비용 걱정 없이 처음부터 끝까지 명확한 가격으로 진행합니다.",
    color: "text-yellow-400",
    glow: "shadow-yellow-400/30",
  },
  {
    icon: BarChart3,
    title: "데이터로 증명하는 성과",
    desc: "매달 채널별 조회수, 클릭률, 전환율 데이터를 투명하게 공유합니다. 감이 아닌 숫자로 확인하세요.",
    color: "text-emerald-400",
    glow: "shadow-emerald-400/30",
  },
  {
    icon: HeartHandshake,
    title: "원스톱 통합 파트너십",
    desc: "웹, SNS, 광고까지 한 팀이 운영합니다. 여러 업체 관리할 필요 없이 저희 한 곳만 연락하세요.",
    color: "text-blue-400",
    glow: "shadow-blue-400/30",
  },
  {
    icon: Hammer,
    title: "대행사가 아닌 직접 실행사",
    desc: "외주 없이 저희가 직접 콘텐츠를 만들고 광고를 집행합니다. 중간 수수료 0원, 속도와 품질 모두 챙깁니다.",
    color: "text-purple-400",
    glow: "shadow-purple-400/30",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#E8A020] opacity-[0.03] rounded-full blur-3xl"
          animate={{ scaleX: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-block bg-[#F4F8FF] text-[#1B3D6E] text-sm font-semibold px-4 py-2 rounded-full mb-4 tracking-tight border border-[#D6E6FF]">
            왜 저희인가요?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight leading-tight">
            학원 마케팅에는
            <br />
            전문가가 필요합니다
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30, y: 20 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="flex gap-5 p-6 bg-[#F4F8FF] rounded-2xl border border-[#D6E6FF] hover:border-[#1B3D6E]/30 hover:shadow-lg transition-all duration-300 group cursor-default"
              >
                <motion.div
                  className={`w-12 h-12 bg-[#0B1F3A] rounded-xl flex items-center justify-center shrink-0 shadow-lg ${reason.glow}`}
                  whileHover={{ rotate: [0, -12, 12, -6, 0], scale: 1.15 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={20} className={reason.color} />
                </motion.div>
                <div>
                  <h3 className="font-bold text-[#0B1F3A] mb-2 tracking-tight group-hover:text-[#1B3D6E] transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-[#5C6B7E] text-sm leading-relaxed">{reason.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
