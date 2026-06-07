"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

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
          에듀플로우가 하고 싶은 말
        </motion.p>

        {/* 라인 1 */}
        <motion.div style={{ x }} className="overflow-hidden mb-1">
          <p
            className="font-black text-white leading-[1.05] tracking-tight whitespace-nowrap"
            style={{ fontSize: "clamp(2.6rem, 8vw, 6.5rem)" }}
          >
            문의가 없는 건
          </p>
        </motion.div>

        {/* 라인 2 — 골드 강조 */}
        <motion.div style={{ x: x2 }} className="overflow-hidden mb-1">
          <p
            className="font-black text-[#E8A020] leading-[1.05] tracking-tight whitespace-nowrap"
            style={{ fontSize: "clamp(2.6rem, 8vw, 6.5rem)" }}
          >
            예산 문제가 아닙니다.
          </p>
        </motion.div>

        {/* 라인 3 — 페이드 */}
        <motion.div style={{ x: x3 }} className="overflow-hidden mb-12">
          <p
            className="font-black text-white/20 leading-[1.05] tracking-tight whitespace-nowrap"
            style={{ fontSize: "clamp(2.6rem, 8vw, 6.5rem)" }}
          >
            학원을 모르는 사람이 만들어서입니다.
          </p>
        </motion.div>

        {/* 구분선 + 본문 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 border-t border-white/10 pt-10">

          {/* 좌: 공감 카피 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-white/60 text-lg sm:text-xl leading-relaxed font-medium tracking-tight">
              광고비 30만원 넣고 문의 0건.<br />
              그 경험, 학원 원장님 대부분이 갖고 있습니다.
            </p>
            <p className="text-white/40 text-base leading-relaxed tracking-tight mt-4">
              문제는 광고가 아니라<br />
              <span className="text-white font-bold">"누가 어떤 말로 만들었느냐"</span>입니다.
            </p>
          </motion.div>

          {/* 우: 오해 교정 Q&A */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="flex flex-col gap-4"
          >
            {[
              {
                q: "광고비를 더 올리면 해결될까요?",
                a: "아닙니다. 학부모 마음에 안 닿는 콘텐츠는 예산이 많아도 무시됩니다.",
              },
              {
                q: "채널을 더 늘리면 나아질까요?",
                a: "아닙니다. 학원 전략 없이 채널만 늘리면 비용만 올라갑니다.",
              },
              {
                q: "직접 운영하면 다를까요?",
                a: "아닙니다. 원장님 시간은 마케팅이 아닌 수업에 쓰는 게 맞습니다.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.45 + i * 0.1 }}
                className="border-l-2 border-[#E8A020]/35 pl-4"
              >
                <p className="text-white/30 text-xs font-medium tracking-tight mb-1">{item.q}</p>
                <p className="text-white/70 text-sm font-bold tracking-tight leading-snug">{item.a}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
