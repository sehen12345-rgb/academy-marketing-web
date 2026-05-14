"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileCheck, PenTool, Rocket, BarChart2 } from "lucide-react";

const steps = [
  { icon: MessageSquare, num: "01", title: "무료 상담",  desc: "학원 현황·목표 파악. 전화·방문 모두 가능." },
  { icon: FileCheck,     num: "02", title: "맞춤 제안서", desc: "최적화된 플랜과 상세 견적 제안." },
  { icon: PenTool,       num: "03", title: "계약 체결",  desc: "서비스·가격 확정 후 계약 진행." },
  { icon: Rocket,        num: "04", title: "운영 시작",  desc: "빠른 세팅 완료 후 마케팅 즉시 가동." },
  { icon: BarChart2,     num: "05", title: "성과 리포트", desc: "정기 데이터 공유 및 전략 점검." },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-block bg-[#F4F8FF] text-[#1B3D6E] text-sm font-semibold px-4 py-2 rounded-full mb-4 tracking-tight border border-[#D6E6FF]">
            진행 방식
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight leading-tight">
            상담부터 운영까지
            <br />
            5단계로 명확하게
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08 }}
                className="relative bg-[#F4F8FF] rounded-2xl p-5 border border-[#D6E6FF]"
              >
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-[#A8B8C8] font-bold text-xl">›</div>
                )}

                <span className="text-xs font-black text-[#E8A020] tracking-widest mb-3 block">{step.num}</span>

                <div className="w-10 h-10 bg-[#0B1F3A] rounded-xl flex items-center justify-center mb-4">
                  <Icon size={18} className="text-[#E8A020]" />
                </div>

                <h3 className="font-bold text-[#0B1F3A] mb-1.5 text-sm tracking-tight">{step.title}</h3>
                <p className="text-[#5C6B7E] text-xs leading-relaxed">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
