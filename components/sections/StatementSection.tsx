"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const words = ["학원", "마케팅에서", "제일", "비싼", "건"];

export default function StatementSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-[#0B1F3A] overflow-hidden relative">
      {/* 미세 텍스처 */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* 작은 프리앰블 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white/30 text-sm font-medium tracking-[0.2em] uppercase mb-10"
        >
          에듀플로우가 하고 싶은 말
        </motion.p>

        {/* 큰 타이포그래피 라인 1 */}
        <motion.div style={{ x }} className="overflow-hidden mb-2">
          <h2
            className="font-black text-white leading-none tracking-tight whitespace-nowrap"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
          >
            학원 마케팅에서{" "}
            <span className="text-[#E8A020]">제일 비싼 건</span>
          </h2>
        </motion.div>

        {/* 큰 타이포그래피 라인 2 */}
        <motion.div style={{ x: x2 }} className="overflow-hidden mb-12">
          <h2
            className="font-black text-white/25 leading-none tracking-tight whitespace-nowrap"
            style={{ fontSize: "clamp(3rem, 9vw, 7rem)" }}
          >
            &ldquo;효과 없는 광고&rdquo;입니다.
          </h2>
        </motion.div>

        {/* 구분선 + 부연 설명 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/10 pt-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/60 text-lg sm:text-xl leading-relaxed font-medium tracking-tight"
          >
            광고비 30만원 넣고 문의 0건.<br />
            그 경험, 학원 원장님 대부분이 갖고 있습니다.<br />
            문제는 방법이 아니라 <span className="text-white">사람</span>이었습니다.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col gap-4"
          >
            {[
              { q: "광고를 몰라서 실패했을까요?",   a: "아닙니다. 학원을 모르는 사람이 만들어서입니다." },
              { q: "예산이 적어서 실패했을까요?",   a: "아닙니다. 학부모 심리를 모르는 카피였기 때문입니다." },
              { q: "운이 없어서 실패했을까요?",     a: "아닙니다. 데이터 없이 감으로 집행했기 때문입니다." },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                className="border-l-2 border-[#E8A020]/40 pl-4"
              >
                <p className="text-white/35 text-xs font-medium tracking-tight mb-0.5">{item.q}</p>
                <p className="text-white/75 text-sm font-bold tracking-tight">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
