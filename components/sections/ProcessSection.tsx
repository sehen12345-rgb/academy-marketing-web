"use client";

import { motion } from "framer-motion";
import { MessageSquare, FileCheck, PenTool, Rocket, BarChart2 } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "무료 상담",
    desc: "학원 현황과 마케팅 목표를 파악합니다. 전화 또는 방문 상담 모두 가능합니다.",
  },
  {
    icon: FileCheck,
    step: "02",
    title: "맞춤 제안서",
    desc: "학원에 최적화된 마케팅 플랜과 상세 견적을 제안드립니다.",
  },
  {
    icon: PenTool,
    step: "03",
    title: "계약 체결",
    desc: "서비스 범위와 가격을 확정하고 계약서를 작성합니다.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "운영 시작",
    desc: "계약 후 빠르게 세팅을 완료하고 마케팅 운영을 시작합니다.",
  },
  {
    icon: BarChart2,
    step: "05",
    title: "성과 리포트",
    desc: "정기적으로 성과를 공유하고 전략을 함께 점검합니다.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-purple-50 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            진행 방식
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            상담부터 운영까지
            <br />
            5단계로 진행됩니다
          </h2>
          <p className="text-slate-500 text-lg">
            복잡한 절차 없이 빠르고 명확하게 시작합니다.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connector line (desktop) */}
          <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-slate-200 mx-auto max-w-4xl" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Step circle */}
                  <div className="relative mb-4">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-100 z-10 relative">
                      <Icon size={24} className="text-white" />
                    </div>
                    <span className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full text-xs font-bold text-amber-900 flex items-center justify-center">
                      {step.step}
                    </span>
                  </div>

                  <h3 className="font-bold text-slate-900 mb-2">{step.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
