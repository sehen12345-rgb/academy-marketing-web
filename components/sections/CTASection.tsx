"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Gift } from "lucide-react";

/* 랜덤 파티클 설정 (고정값으로 SSR safe) */
const particles = [
  { size: 3, top: "15%", left: "10%", duration: 4, delay: 0    },
  { size: 2, top: "25%", left: "85%", duration: 5, delay: 0.8  },
  { size: 4, top: "70%", left: "15%", duration: 3.5, delay: 1.2 },
  { size: 2, top: "80%", left: "75%", duration: 4.5, delay: 0.3 },
  { size: 3, top: "50%", left: "92%", duration: 6, delay: 2    },
  { size: 2, top: "40%", left: "5%",  duration: 5, delay: 1.5  },
  { size: 5, top: "60%", left: "50%", duration: 7, delay: 0.6  },
  { size: 2, top: "10%", left: "50%", duration: 4, delay: 1.8  },
];

export default function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0B1F3A] relative overflow-hidden">
      {/* 그리드 배경 */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }}
      />

      {/* 파티클들 */}
      {particles.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#E8A020] pointer-events-none"
          style={{ width: p.size, height: p.size, top: p.top, left: p.left }}
          animate={{ y: [0, -20, 0], opacity: [0.3, 0.8, 0.3], scale: [1, 1.5, 1] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}

      {/* 배경 오브 */}
      <motion.div
        className="absolute top-0 right-0 w-80 h-80 bg-[#E8A020] opacity-[0.07] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none"
        animate={{ scale: [1, 1.2, 1], opacity: [0.07, 0.12, 0.07] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500 opacity-[0.05] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4 pointer-events-none"
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.09, 0.05] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 bg-[#E8A020]/15 text-[#E8A020] text-sm font-semibold px-4 py-2 rounded-full mb-7 tracking-tight border border-[#E8A020]/25"
            animate={{ borderColor: ["rgba(232,160,32,0.25)", "rgba(232,160,32,0.5)", "rgba(232,160,32,0.25)"] }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Gift size={14} />
            무료 마케팅 진단 + 맞춤 전략 제안서 제공
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight tracking-tight">
            지금 우리 학원
            <br />
            <span className="text-[#E8A020]">무료 마케팅 진단</span> 받으세요
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed tracking-tight">
            10분 상담으로 어디서 문의가 새고 있는지 찾아드립니다.
            <br />
            24시간 내 맞춤 견적서 + 진단 리포트를 보내드립니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {/* 펄스 링이 있는 CTA 버튼 */}
            <div className="relative inline-flex items-center justify-center">
              <motion.div
                className="absolute inset-0 rounded-full bg-[#E8A020]"
                animate={{ scale: [1, 1.4, 1.4], opacity: [0.4, 0, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut" }}
              />
              <motion.div
                className="absolute inset-0 rounded-full bg-[#E8A020]"
                animate={{ scale: [1, 1.6, 1.6], opacity: [0.2, 0, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeOut", delay: 0.3 }}
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <Link
                  href="/contact"
                  className="relative inline-flex items-center justify-center gap-2 bg-[#E8A020] text-[#0B1F3A] font-black px-8 py-4 rounded-full hover:bg-[#F0B429] transition-colors text-base tracking-tight shadow-lg shadow-[#E8A020]/30"
                >
                  무료 진단 신청하기
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <ArrowRight size={18} />
                  </motion.span>
                </Link>
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <a
                href="https://open.kakao.com/o/sFi0Tvyi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-[#FEE500] text-[#3A1D1D] font-bold px-8 py-4 rounded-full hover:bg-[#F5DC00] transition-colors text-base tracking-tight"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#3A1D1D">
                  <path d="M12 3C6.477 3 2 6.477 2 11c0 2.89 1.657 5.424 4.162 6.962-.178.667-.647 2.415-.742 2.789-.118.463.17.457.358.332.147-.097 2.34-1.594 3.287-2.238.626.09 1.27.137 1.935.137 5.523 0 10-3.477 10-8C22 6.477 17.523 3 12 3z"/>
                </svg>
                카카오톡 상담
              </a>
            </motion.div>
          </div>

          <p className="text-white/30 text-sm mt-8 tracking-tight">
            평일 09:00 - 18:00 운영 · 카카오톡 채널 24시간 접수
          </p>

          {/* 리스크 리버설 배지 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-3 mt-8"
          >
            {[
              "✓ 위약금 없음",
              "✓ 광고비 100% 투명 공개",
              "✓ 영업 전화 없음",
              "✓ 24시간 내 견적서",
            ].map((badge) => (
              <span
                key={badge}
                className="text-xs text-white/50 border border-white/10 px-3 py-1.5 rounded-full tracking-tight"
              >
                {badge}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
