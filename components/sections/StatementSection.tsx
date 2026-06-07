"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const insights = [
  {
    label: "학부모가 학원을 고르는 진짜 기준",
    text: "교습비도, 선생님 경력도 아닙니다. '이 학원은 우리 아이를 알 것 같다'는 직관입니다. 그리고 그 직관은 0.3초 만에 생깁니다.",
  },
  {
    label: "그 직관은 어디서 만들어지나요?",
    text: "처음 본 릴스, 네이버 블로그 첫 줄, 플레이스 사진 한 장. 학부모가 학원을 처음 마주치는 그 순간에 결정됩니다.",
  },
  {
    label: "그래서 에듀플로우가 하는 일은",
    text: "학부모 심리를 읽고, 그 첫 접점을 설계합니다. 광고비를 올리는 게 아니라 콘텐츠의 방향을 바꾸는 겁니다.",
  },
];

export default function StatementSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x  = useTransform(scrollYProgress, [0, 1], ["3%",  "-3%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["-3%", "3%"]);
  const x3 = useTransform(scrollYProgress, [0, 1], ["2%",  "-2%"]);

  return (
    <section ref={ref} className="py-20 sm:py-28 bg-[#0B1F3A] overflow-hidden relative">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "28px 28px" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* 프리앰블 */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-white/30 text-sm font-medium tracking-[0.2em] uppercase mb-10"
        >
          원장님이 항상 궁금해하시는 것
        </motion.p>

        {/* 큰 타이포그래피 */}
        <div className="mb-12 space-y-1">
          <motion.div style={{ x }} className="overflow-hidden">
            <p
              className="font-black text-white leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 8.5vw, 7rem)" }}
            >
              옆 학원은 왜
            </p>
          </motion.div>

          <motion.div style={{ x: x2 }} className="overflow-hidden">
            <p
              className="font-black text-[#E8A020] leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 8.5vw, 7rem)" }}
            >
              문의가 저렇게 많을까요?
            </p>
          </motion.div>

          <motion.div style={{ x: x3 }} className="overflow-hidden">
            <p
              className="font-black text-white/20 leading-[1.08] tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 8.5vw, 7rem)" }}
            >
              수업을 더 잘 가르쳐서가 아닙니다.
            </p>
          </motion.div>
        </div>

        {/* 구분선 + 본문 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/10 pt-10">

          {/* 좌: 핵심 주장 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white text-xl sm:text-2xl font-black leading-snug tracking-tight mb-5">
              학부모는 '잘 가르치는 학원'을 찾는 게 아닙니다.
            </p>
            <p className="text-white/55 text-base leading-relaxed tracking-tight">
              <span className="text-white/80 font-semibold">'우리 아이를 이해해줄 것 같은 학원'</span>을 찾습니다.<br /><br />
              그 차이가 문의 수를 만들고,<br />
              그 차이는 마케팅으로 만들 수 있습니다.
            </p>
          </motion.div>

          {/* 우: 인사이트 3개 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col gap-5"
          >
            {insights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + i * 0.12 }}
                className="flex gap-4"
              >
                <div className="shrink-0 w-6 h-6 rounded-full bg-[#E8A020]/20 border border-[#E8A020]/30 flex items-center justify-center mt-0.5">
                  <span className="text-[#E8A020] text-[10px] font-black">{i + 1}</span>
                </div>
                <div>
                  <p className="text-[#E8A020]/80 text-[11px] font-bold tracking-widest uppercase mb-1.5">
                    {item.label}
                  </p>
                  <p className="text-white/60 text-sm leading-relaxed tracking-tight">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
