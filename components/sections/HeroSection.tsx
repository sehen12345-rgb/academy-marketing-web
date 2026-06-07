"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Volume2, VolumeX } from "lucide-react";

const videos = ["/hero-video-classroom.mp4", "/hero-video2.mp4", "/hero-video.mp4"];

const highlights = [
  "광고비 포함 올인원 가격",
  "학원 전문 마케팅",
  "원스톱 통합 관리",
];

/* 글자별 stagger */
const titleLines = [
  { text: "문의 8배,",          gold: false },
  { text: "원생 2배.",          gold: true  },
  { text: "이게 학원 전문입니다", gold: false },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.03, delayChildren: 0.1 } },
};
const charVariants = {
  hidden:  { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" as const } },
};

/* 하단 티커 아이템 */
const tickerItems = [
  { icon: "🎬", label: "릴스",         value: "891만" },
  { icon: "🎬", label: "릴스",         value: "119만" },
  { icon: "🎬", label: "릴스",         value: "70.1만" },
  { icon: "🎬", label: "릴스",         value: "64.3만" },
  { icon: "🧵", label: "스레드 조회수", value: "192.8만" },
  { icon: "🧵", label: "스레드 조회수", value: "39만" },
  { icon: "👥", label: "팔로워",       value: "1.4만" },
  { icon: "❤️", label: "반응",         value: "1.3만" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [videoIdx, setVideoIdx] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const videoScale      = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const overlayOpacity  = useTransform(scrollYProgress, [0, 0.6], [0.55, 0.85]);
  const contentY        = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);

  /* 영상 자동 교체 (영상 끝나면 다음으로) */
  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const next = () => setVideoIdx((i) => (i + 1) % videos.length);
    el.addEventListener("ended", next);
    return () => el.removeEventListener("ended", next);
  }, [videoIdx]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted(!muted);
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col overflow-hidden bg-[#0B1F3A]">

      {/* ── 배경 비디오 (교차 재생) ── */}
      <motion.div style={{ scale: videoScale }} className="absolute inset-0 origin-center">
        <AnimatePresence mode="wait">
          <motion.video
            key={videoIdx}
            ref={videoRef}
            autoPlay
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src={videos[videoIdx]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
      </motion.div>

      {/* ── 그라디언트 오버레이 ── */}
      <motion.div
        style={{ opacity: overlayOpacity }}
        className="absolute inset-0 bg-[#0B1F3A] pointer-events-none"
      />
      {/* 하단 페이드 (티커와 자연스럽게 연결) */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B1F3A] to-transparent pointer-events-none" />
      {/* 좌측 그라디언트 (텍스트 가독성) */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/60 via-transparent to-transparent pointer-events-none" />

      {/* ── 뮤트 토글 버튼 ── */}
      <button
        onClick={toggleMute}
        className="absolute top-20 right-5 sm:right-8 z-20 w-9 h-9 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
        aria-label={muted ? "소리 켜기" : "소리 끄기"}
      >
        {muted ? <VolumeX size={15} className="text-white/70" /> : <Volume2 size={15} className="text-white" />}
      </button>

      {/* ── 메인 콘텐츠 ── */}
      <motion.div
        style={{ y: contentY }}
        className="relative z-10 flex-1 flex items-center"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 w-full">

          {/* 배지 */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 flex flex-wrap gap-3"
          >
            <span className="inline-flex items-center gap-2 border border-[#E8A020]/50 text-[#E8A020] text-sm font-semibold px-4 py-2 rounded-full bg-[#E8A020]/10 backdrop-blur-sm tracking-tight">
              <span className="w-1.5 h-1.5 bg-[#E8A020] rounded-full animate-pulse" />
              학원 마케팅 전문 대행사
            </span>
            <span className="inline-flex items-center gap-2 border border-emerald-400/40 text-emerald-300 text-sm font-semibold px-4 py-2 rounded-full bg-emerald-400/10 backdrop-blur-sm tracking-tight">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              현재 23개 학원 운영 중
            </span>
          </motion.div>

          {/* 제목 - 글자별 stagger */}
          <h1
            className="text-[clamp(2.6rem,6vw,4.2rem)] font-black text-white leading-[1.1] tracking-tight mb-7"
            style={{ perspective: "600px" }}
          >
            {titleLines.map((line, li) => (
              <motion.span
                key={li}
                className={`block ${line.gold ? "text-[#E8A020]" : ""}`}
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                style={{ display: "block" }}
                custom={li}
                transition={{ delayChildren: 0.3 + li * 0.2 }}
              >
                {line.text.split("").map((ch, ci) => (
                  <motion.span
                    key={ci}
                    variants={charVariants}
                    style={{ display: "inline-block", whiteSpace: ch === " " ? "pre" : "normal" }}
                  >
                    {ch}
                  </motion.span>
                ))}
              </motion.span>
            ))}
          </h1>

          {/* 서브카피 */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
            className="text-white/65 text-lg sm:text-xl leading-relaxed mb-8 max-w-lg tracking-tight"
          >
            일반 대행사는 학부모 심리를 모릅니다.
            <br />
            현역오빠는 <span className="text-white font-semibold">학원만</span> 합니다 — 웹, SNS, 광고까지.
          </motion.p>

          {/* 체크리스트 */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.25 }}
            className="flex flex-wrap gap-x-6 gap-y-2 mb-10"
          >
            {highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.3 + i * 0.09 }}
                className="flex items-center gap-1.5 text-white/75 text-sm font-medium tracking-tight"
              >
                <CheckCircle size={13} className="text-[#E8A020] shrink-0" />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.5 }}
            className="flex flex-wrap gap-3"
          >
            {/* 카카오톡 주 CTA */}
            <div className="relative inline-flex">
              <motion.div
                className="absolute inset-0 rounded-full bg-[#FEE500]"
                animate={{ scale: [1, 1.45, 1.45], opacity: [0.5, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
              />
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
                <a
                  href="https://open.kakao.com/o/XXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center gap-2 bg-[#FEE500] text-[#3A1D1D] font-black px-8 py-4 rounded-full hover:bg-[#F5DC00] transition-colors text-base tracking-tight shadow-xl shadow-[#FEE500]/30"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="#3A1D1D">
                    <path d="M12 3C6.477 3 2 6.477 2 11c0 2.89 1.657 5.424 4.162 6.962-.178.667-.647 2.415-.742 2.789-.118.463.17.457.358.332.147-.097 2.34-1.594 3.287-2.238.626.09 1.27.137 1.935.137 5.523 0 10-3.477 10-8C22 6.477 17.523 3 12 3z"/>
                  </svg>
                  카카오톡 무료 상담
                </a>
              </motion.div>
            </div>

            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-base tracking-tight backdrop-blur-sm"
              >
                무료 진단 신청
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <ArrowRight size={17} />
                </motion.span>
              </Link>
            </motion.div>
          </motion.div>

          {/* 하단 수치 스트립 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8, duration: 0.6 }}
            className="mt-14 flex flex-wrap gap-8 border-t border-white/10 pt-8"
          >
            {[
              { value: "23+",   label: "파트너 학원" },
              { value: "8.3배", label: "평균 문의 증가" },
              { value: "93%",   label: "3개월 유지율" },
            ].map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.85 + i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <div className="text-lg font-black text-[#E8A020] tracking-tight">{s.value}</div>
                <div className="text-[11px] text-white/40 tracking-tight mt-0.5">{s.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* ── 하단 실적 티커 스트립 ── */}
      <div className="relative z-10 border-t border-white/10 bg-[#0B1F3A]/80 backdrop-blur-sm py-3">
        <div className="flex items-center gap-3 px-4 sm:px-6 mb-0">
          {/* 라벨 */}
          <span className="shrink-0 text-[#E8A020] text-[10px] font-black tracking-widest uppercase border-r border-white/10 pr-3">
            실제 성과
          </span>
          {/* 무한 마퀴 */}
          <div className="overflow-hidden flex-1">
            <div className="flex animate-marquee whitespace-nowrap">
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i} className="inline-flex items-center gap-1.5 px-4 text-sm">
                  <span>{item.icon}</span>
                  <span className="text-white/40 text-xs tracking-tight">{item.label}</span>
                  <span className="text-[#E8A020] font-black tracking-tight">{item.value}</span>
                  <span className="text-white/15 ml-3">·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
