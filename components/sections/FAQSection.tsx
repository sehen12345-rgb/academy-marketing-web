"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "효과가 없으면 어떻게 되나요?",
    a: "매월 성과 리포트를 투명하게 공유합니다. 효과가 기대에 미치지 못하면 전략을 즉시 조정하며, 3개월 계약 종료 후 재계약 여부는 원장님이 결정하시면 됩니다. 억지로 붙잡지 않습니다.",
    hot: true,
  },
  {
    q: "계약금이나 위약금이 있나요?",
    a: "웹페이지 제작은 착수금 50%, 완료 후 잔금 방식입니다. SNS·광고 월정기 상품은 매월 초 선납 청구가 기본이며, 광고비는 실집행 금액 그대로 별도 청구, 대행 수수료 15%가 추가됩니다. 위약금 조항 없이 계약 종료 1개월 전 통보로 해지 가능합니다.",
    hot: true,
  },
  {
    q: "광고비는 어디에 어떻게 쓰이나요?",
    a: "광고비는 전액 해당 플랫폼(네이버, 당근 등)에 실제 집행됩니다. 매월 플랫폼 대시보드 스크린샷과 집행 내역을 함께 제공해 한 푼도 투명하게 확인하실 수 있습니다.",
    hot: true,
  },
  {
    q: "계약 후 얼마나 빨리 시작되나요?",
    a: "계약 완료 후 3~5 영업일 이내 운영 시작입니다. 스레드·블로그는 프로필 세팅 후 첫 포스팅부터, 광고는 소재 제작 완료 후 즉시 집행됩니다.",
  },
  {
    q: "어떤 종류의 학원이든 가능한가요?",
    a: "수학·영어·국어·논술·입시·예체능 등 학원 종류와 무관하게 학원 마케팅 전문으로 운영합니다. 학부모 타겟팅과 원생 모집 구조를 깊이 이해하고 있어 업종 적응 기간 없이 바로 시작합니다.",
  },
  {
    q: "우리 학원 규모가 작아도 되나요?",
    a: "원생 10명 미만 소규모 학원부터 다수 캠퍼스 운영 학원까지 모두 함께합니다. 규모에 맞는 예산과 전략을 제안드리며, 작은 규모일수록 초기 마케팅 투자 대비 성과가 빠릅니다.",
  },
  {
    q: "성과는 어떻게 확인하나요?",
    a: "매월 초 전월 성과 리포트를 제공합니다. 채널별 조회수·클릭수·문의 전환율과 광고비 집행 내역을 한 파일로 정리해 공유하고, 필요 시 화상 미팅으로 다음 달 전략을 함께 논의합니다.",
  },
  {
    q: "블로그·스레드 콘텐츠는 누가 작성하나요?",
    a: "학원 마케팅 전담 작가가 직접 작성합니다. 공장형 포스팅이 아닌 해당 학원의 강점과 키워드를 반영한 맞춤 콘텐츠입니다. 발행 전 원장님 검토 후 수정 요청이 가능합니다.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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
            계약 전에 꼭 확인하세요
          </h2>
          <p className="text-[#5C6B7E] text-sm mt-3 tracking-tight">불안하신 부분, 솔직하게 답변드립니다</p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              className={`border rounded-2xl overflow-hidden transition-colors ${
                openIndex === index
                  ? "bg-white border-[#0B1F3A]/20 shadow-md shadow-[#0B1F3A]/5"
                  : "bg-white border-[#D6E6FF]"
              }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-[#F4F8FF] transition-colors"
              >
                <div className="flex items-center gap-2.5 pr-4">
                  {faq.hot && (
                    <span className="shrink-0 text-[10px] font-black bg-red-50 text-red-500 border border-red-100 px-1.5 py-0.5 rounded-full tracking-tight">
                      HOT
                    </span>
                  )}
                  <span className="font-semibold text-[#0B1F3A] text-sm sm:text-base tracking-tight">
                    {faq.q}
                  </span>
                </div>
                <span className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${
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
                    <p className="px-6 pb-5 text-[#5C6B7E] text-sm leading-relaxed border-t border-[#E8EDF3] pt-4 tracking-tight">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-[#A8B8C8] text-xs mt-8 tracking-tight"
        >
          더 궁금한 점은 무료 상담으로 직접 물어보세요 · 영업 전화 없이 질문에만 답변드립니다
        </motion.p>
      </div>
    </section>
  );
}
