"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Clock, Users, ShieldX } from "lucide-react";

const pains = [
  {
    icon: AlertCircle,
    title: "마케팅은 해야 하는데\n어디서 시작할지 모르겠어요",
    desc: "블로그, 인스타, 네이버 광고... 뭐가 맞는지 몰라서 돈만 날린 경험, 있으시죠?",
  },
  {
    icon: TrendingDown,
    title: "광고비는 나가는데\n학생이 늘지 않아요",
    desc: "광고비는 계속 나가는데 문의는 없고, 어디서 새는지도 모르는 상황.",
  },
  {
    icon: Clock,
    title: "수업 준비도 바쁜데\n마케팅까지 직접 할 시간이 없어요",
    desc: "원장님이 교육에만 집중해야 하는데, 포스팅·댓글·광고 체크로 하루가 다 가요.",
  },
  {
    icon: Users,
    title: "경쟁 학원은 SNS 팔로워가\n수천 명인데 우리는 0명이에요",
    desc: "옆 학원은 릴스에 댓글이 넘치고 학부모 DM도 오는데, 우리 계정은 아무도 모릅니다.",
  },
  {
    icon: TrendingDown,
    title: "이전 대행사는 학원을 몰라서\n결국 계약만 해지했어요",
    desc: "업종 무관 대행사는 학부모 심리를 모릅니다. 일반 카페 홍보하듯 학원을 올리면 효과가 없어요.",
  },
  {
    icon: ShieldX,
    title: "마케팅 대행사를\n믿기가 어렵습니다",
    desc: "계약만 하면 나 몰라라, 성과 없어도 비용 청구. 그런 대행사가 너무 많다는 거 저희도 압니다.",
    highlight: true,
  },
];

export default function PainSection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #0B1F3A 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <motion.span
            className="inline-block bg-[#E8A020]/10 text-[#C8821A] text-sm font-semibold px-4 py-2 rounded-full mb-4 tracking-tight border border-[#E8A020]/25"
            whileInView={{ scale: [0.8, 1.05, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            이런 고민, 있으시죠?
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight leading-tight">
            학원 원장님이라면
            <br />
            누구나 겪는 문제들
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pains.map((pain, index) => {
            const Icon = pain.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 32, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4 }}
                className={`rounded-2xl p-7 border transition-all duration-200 ${
                  pain.highlight
                    ? "bg-[#0B1F3A] border-[#0B1F3A]"
                    : "bg-[#F7F9FC] border-[#E2E8F0] hover:border-[#C5D5EA] hover:bg-[#EEF4FB]"
                }`}
              >
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                    pain.highlight ? "bg-[#E8A020]/20" : "bg-[#E8A020]/10"
                  }`}
                >
                  <Icon size={20} className="text-[#E8A020]" />
                </div>
                <h3
                  className={`font-bold text-base mb-3 leading-snug whitespace-pre-line tracking-tight ${
                    pain.highlight ? "text-white" : "text-[#0B1F3A]"
                  }`}
                >
                  {pain.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed tracking-tight ${
                    pain.highlight ? "text-white/65" : "text-[#5C6B7E]"
                  }`}
                >
                  {pain.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-[#0B1F3A] text-lg font-semibold tracking-tight mb-3">
            이 고민들, 저희가 전부 해결해드립니다.
          </p>
          <p className="text-[#C8821A] text-sm font-bold tracking-tight">
            ✓ 후불제 &nbsp;·&nbsp; ✓ 위약금 없음 &nbsp;·&nbsp; ✓ 학원 전문 &nbsp;·&nbsp; ✓ 직접 실행
          </p>
        </motion.div>
      </div>
    </section>
  );
}
