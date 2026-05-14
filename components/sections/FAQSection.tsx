"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "계약 후 얼마나 빨리 시작되나요?",
    a: "계약 완료 후 보통 3~5 영업일 내에 운영을 시작합니다. 스레드·블로그는 프로필 세팅 후 첫 포스팅부터, 광고는 소재 제작 후 집행됩니다.",
  },
  {
    q: "광고비는 어떻게 책정되나요?",
    a: "광고 상품(네이버 플레이스 CPC, 파워링크, 당근 광고)은 상담을 통해 학원 규모와 목표에 맞는 광고비 포함 올인원 가격으로 제안드립니다.",
  },
  {
    q: "블로그 포스팅은 직접 쓰는 건가요?",
    a: "네, 저희 전문 작가가 학원에 맞는 키워드로 직접 작성합니다. 공장형(5만원)은 키워드 최적화 위주, 프리미엄(10만원)은 기획형 고퀄리티 콘텐츠입니다.",
  },
  {
    q: "계약 기간이 있나요?",
    a: "SNS 운영·광고 상품은 기본 3개월 계약입니다. 단기 프로젝트(웹페이지 제작, 블로그 포스팅 건별)는 계약 기간 없이 진행됩니다.",
  },
  {
    q: "성과를 어떻게 확인할 수 있나요?",
    a: "매월 성과 리포트를 제공합니다. 채널별 조회수, 클릭수, 문의 전환율 등을 데이터로 공유하며 전략도 함께 논의합니다.",
  },
  {
    q: "학원 분야 외에도 가능한가요?",
    a: "저희는 학원·교육 분야에 특화되어 있습니다. 학부모 심리와 원생 모집 구조를 정확히 이해하는 전문 대행사입니다.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 sm:py-28 bg-[#F4F8FF]">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-[#E8A020]/15 text-[#C47D0A] text-sm font-semibold px-4 py-2 rounded-full mb-4 tracking-tight border border-[#E8A020]/30">
            자주 묻는 질문
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight">
            FAQ
          </h2>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              className="bg-white border border-[#D6E6FF] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F4F8FF] transition-colors"
              >
                <span className="font-semibold text-[#0B1F3A] text-sm sm:text-base tracking-tight pr-4">
                  {faq.q}
                </span>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors ${
                  openIndex === index ? "bg-[#0B1F3A]" : "bg-[#F4F8FF] border border-[#D6E6FF]"
                }`}>
                  {openIndex === index
                    ? <Minus size={13} className="text-[#E8A020]" />
                    : <Plus size={13} className="text-[#1B3D6E]" />
                  }
                </span>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-[#5C6B7E] text-sm leading-relaxed border-t border-[#D6E6FF] pt-4 tracking-tight">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
