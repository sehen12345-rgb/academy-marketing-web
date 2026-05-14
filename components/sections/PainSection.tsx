"use client";

import { motion } from "framer-motion";
import { AlertCircle, TrendingDown, Clock } from "lucide-react";

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
];

/* 부유하는 블롭 정의 */
const blobs = [
  { size: "w-48 h-48", top: "10%",  left: "-5%",  color: "bg-[#E8A020]", opacity: "opacity-[0.05]", duration: 8,  delay: 0   },
  { size: "w-32 h-32", top: "60%",  left: "5%",   color: "bg-blue-400",  opacity: "opacity-[0.04]", duration: 7,  delay: 1.5 },
  { size: "w-56 h-56", top: "20%",  left: "85%",  color: "bg-[#E8A020]", opacity: "opacity-[0.04]", duration: 9,  delay: 0.8 },
  { size: "w-24 h-24", top: "70%",  left: "80%",  color: "bg-purple-400",opacity: "opacity-[0.04]", duration: 6,  delay: 2   },
  { size: "w-40 h-40", top: "45%",  left: "45%",  color: "bg-blue-300",  opacity: "opacity-[0.03]", duration: 10, delay: 0.3 },
];

export default function PainSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#0F2D52] relative overflow-hidden">
      {/* 도트 배경 */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      {/* 부유하는 블롭들 */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className={`absolute ${blob.size} ${blob.color} ${blob.opacity} rounded-full blur-3xl pointer-events-none`}
          style={{ top: blob.top, left: blob.left }}
          animate={{
            y: [0, -24, 0],
            x: [0, 12, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: blob.duration,
            delay: blob.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <motion.span
            className="inline-block bg-[#E8A020]/15 text-[#E8A020] text-sm font-semibold px-4 py-2 rounded-full mb-4 tracking-tight border border-[#E8A020]/20"
            whileInView={{ scale: [0.8, 1.05, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            이런 고민, 있으시죠?
          </motion.span>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            학원 원장님이라면
            <br />
            누구나 겪는 문제들
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pains.map((pain, index) => {
            const Icon = pain.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="bg-white/[0.05] border border-white/10 rounded-2xl p-7 hover:bg-white/[0.09] hover:border-white/20 transition-colors"
              >
                <motion.div
                  className="w-11 h-11 bg-[#E8A020]/20 rounded-xl flex items-center justify-center mb-5"
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <Icon size={20} className="text-[#E8A020]" />
                </motion.div>
                <h3 className="font-bold text-white text-base mb-3 leading-snug whitespace-pre-line tracking-tight">
                  {pain.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{pain.desc}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-12 text-white/70 text-lg font-semibold tracking-tight"
        >
          이 고민들, 저희가 전부 해결해드립니다.
        </motion.p>
      </div>
    </section>
  );
}
