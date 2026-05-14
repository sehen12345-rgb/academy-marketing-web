"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, BarChart3, HeartHandshake } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "학원 전문 마케팅",
    desc: "학부모 심리와 원생 모집 구조를 정확히 이해합니다. 일반 대행사와 달리 교육 분야에 특화된 전략만 씁니다.",
  },
  {
    icon: Zap,
    title: "광고비 포함 올인원",
    desc: "광고 운영비와 광고비를 한 번에. 추가 비용 걱정 없이 처음부터 끝까지 명확한 가격으로 진행합니다.",
  },
  {
    icon: BarChart3,
    title: "데이터로 증명하는 성과",
    desc: "매달 채널별 조회수, 클릭률, 전환율 데이터를 투명하게 공유합니다. 감이 아닌 숫자로 확인하세요.",
  },
  {
    icon: HeartHandshake,
    title: "원스톱 통합 파트너십",
    desc: "웹, SNS, 광고까지 한 팀이 운영합니다. 여러 업체 관리할 필요 없이 저희 한 곳만 연락하세요.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="flex gap-5 p-6 bg-[#F4F8FF] rounded-2xl border border-[#D6E6FF] hover:border-[#1B3D6E]/30 hover:shadow-sm transition-all"
              >
                <div className="w-12 h-12 bg-[#0B1F3A] rounded-xl flex items-center justify-center shrink-0">
                  <Icon size={20} className="text-[#E8A020]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#0B1F3A] mb-2 tracking-tight">{reason.title}</h3>
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
