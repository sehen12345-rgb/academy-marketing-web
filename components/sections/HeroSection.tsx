"use client";

import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, CheckCircle, Volume2, VolumeX, TrendingUp, Users, Star, MessageCircle } from "lucide-react";

const videos = ["/hero-video-classroom.mp4", "/hero-video2.mp4", "/hero-video.mp4"];

const highlights = ["광고비 포함 올인원", "학원 전문 마케팅", "원스톱 통합 관리"];

const stats = [
  { icon: TrendingUp, value: "8.3배", label: "평균 문의 증가", color: "text-emerald-400", bg: "bg-emerald-400/20" },
  { icon: Users,      value: "23+",   label: "파트너 학원",    color: "text-blue-300",    bg: "bg-blue-400/20"   },
  { icon: Star,       value: "93%",   label: "3개월 유지율",   color: "text-[#E8A020]",   bg: "bg-[#E8A020]/20"  },
];

const threadPosts = [
  {
    avatar: "🏫",
    name: "성북 수학학원",
    content: "중3 수학 내신 대비, 이렇게 하면 됩니다 🔥\n우리 학원 학생 97%가 한 등급 이상 올린 방법",
    stat: "192.8만 조회",
  },
  {
    avatar: "📚",
    name: "마포 영어학원",
    content: "학부모님들이 제일 많이 하시는 질문 TOP5\n✅ 이거 보시고 상담 문의가 쏟아졌어요",
    stat: "39만 조회",
  },
];

const tickerItems = [
  { icon: "🧵", label: "스레드 조회수", value: "192.8만" },
  { icon: "🧵", label: "스레드 조회수", value: "39만" },
  { icon: "🎬", label: "릴스",          value: "891만" },
  { icon: "🎬", label: "릴스",          value: "119만" },
  { icon: "👥", label: "팔로워",        value: "1.4만" },
  { icon: "❤️", label: "반응",          value: "1.3만" },
];

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef   = useRef<HTMLVideoElement>(null);
  const [muted,    setMuted]    = useState(true);
  const [videoIdx, setVideoIdx] = useState(0);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const videoScale     = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.6, 0.88]);
  const contentY       = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const next = () => setVideoIdx((i) => (i + 1) % videos.length);
    el.addEventListener("ended", next);
    return () => el.removeEventListener("ended", next);
  }, [videoIdx]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col overflow-hidden bg-[#0B1F3A]">

      {/* 배경 영상 */}
      <motion.div style={{ scale: videoScale }} className="absolute inset-0 origin-center">
        <AnimatePresence mode="wait">
          <motion.video
            key={videoIdx}
            ref={videoRef}
            autoPlay muted playsInline
            className="absolute inset-0 w-full h-full object-cover"
            src={videos[videoIdx]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2 }}
          />
        </AnimatePresence>
      </motion.div>

      {/* 오버레이 */}
      <motion.div style={{ opacity: overlayOpacity }} className="absolute inset-0 bg-[#0B1F3A] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#0B1F3A] to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B1F3A]/50 via-transparent to-transparent pointer-events-none" />

      {/* 음소거 버튼 */}
      <button
        onClick={() => {
          if (videoRef.current) videoRef.current.muted = !muted;
          setMuted(!muted);
        }}
        className="absolute top-20 right-5 sm:right-8 z-20 w-9 h-9 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
      >
        {muted
          ? <VolumeX size={15} className="text-white/70" />
          : <Volume2  size={15} className="text-white"    />
        }
      </button>

      {/* 메인 콘텐츠 */}
      <motion.div style={{ y: contentY }} className="relative z-10 flex-1 flex flex-col justify-center">
        <div className="max-w-5xl mx-auto w-full px-5 sm:px-8 py-28 sm:py-32">

          {/* 배지 */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap gap-2 mb-7"
          >
            <span className="inline-flex items-center gap-2 border border-[#E8A020]/50 text-[#E8A020] text-xs font-bold px-3.5 py-2 rounded-full bg-[#E8A020]/10 backdrop-blur-sm tracking-tight">
              <span className="w-1.5 h-1.5 bg-[#E8A020] rounded-full animate-pulse" />
              학원 마케팅 전문 대행사
            </span>
            <span className="inline-flex items-center gap-2 border border-emerald-400/40 text-emerald-300 text-xs font-bold px-3.5 py-2 rounded-full bg-emerald-400/10 backdrop-blur-sm tracking-tight">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              현재 23개 학원 운영 중
            </span>
          </motion.div>

          {/* 제목 */}
          <motion.h1
            className="text-[clamp(2.8rem,7vw,4.5rem)] font-black text-white leading-[1.1] tracking-tight mb-5"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            문의 8배,{" "}
            <span className="text-[#E8A020]">원생 2배.</span>
            <br />
            이게 학원 전문입니다
          </motion.h1>

          {/* 서브카피 */}
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-white/70 text-base sm:text-lg leading-relaxed mb-7 tracking-tight max-w-lg"
          >
            일반 대행사는 학부모 심리를 모릅니다.
            에듀플로우는 <span className="text-white font-semibold">학원만</span> 합니다 — 웹, SNS, 광고까지.
          </motion.p>

          {/* 체크리스트 */}
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="flex flex-wrap gap-x-5 gap-y-2 mb-9"
          >
            {highlights.map((item, i) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + i * 0.08 }}
                className="flex items-center gap-1.5 text-white/75 text-sm font-medium tracking-tight"
              >
                <CheckCircle size={13} className="text-[#E8A020] shrink-0" />
                {item}
              </motion.li>
            ))}
          </motion.ul>

          {/* CTA 버튼 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex flex-wrap gap-3 mb-14"
          >
            <div className="relative inline-flex">
              <motion.div
                className="absolute inset-0 rounded-full bg-[#FEE500]"
                animate={{ scale: [1, 1.5, 1.5], opacity: [0.4, 0, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 1 }}
              />
              <a
                href="https://open.kakao.com/o/sFi0Tvyi"
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-2 bg-[#FEE500] text-[#3A1D1D] font-black px-7 py-4 rounded-full hover:bg-[#F5DC00] transition-colors text-sm sm:text-base tracking-tight shadow-xl shadow-[#FEE500]/25"
              >
                <svg width="17" height="17" viewBox="0 0 24 24" fill="#3A1D1D">
                  <path d="M12 3C6.477 3 2 6.477 2 11c0 2.89 1.657 5.424 4.162 6.962-.178.667-.647 2.415-.742 2.789-.118.463.17.457.358.332.147-.097 2.34-1.594 3.287-2.238.626.09 1.27.137 1.935.137 5.523 0 10-3.477 10-8C22 6.477 17.523 3 12 3z"/>
                </svg>
                카카오톡 무료 상담
              </a>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-7 py-4 rounded-full hover:bg-white/10 transition-colors text-sm sm:text-base tracking-tight backdrop-blur-sm"
            >
              무료 진단 신청
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowRight size={16} />
              </motion.span>
            </Link>
          </motion.div>

          {/* 성과 카드 3개 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="grid grid-cols-3 gap-3 mb-4 max-w-lg"
          >
            {stats.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center"
                >
                  <div className={`w-8 h-8 ${s.bg} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                    <Icon size={15} className={s.color} />
                  </div>
                  <p className={`text-lg sm:text-xl font-black tracking-tight ${s.color}`}>{s.value}</p>
                  <p className="text-white/55 text-[10px] mt-0.5 tracking-tight leading-snug">{s.label}</p>
                </motion.div>
              );
            })}
          </motion.div>

          {/* 스레드 목업 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.05 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-lg"
          >
            {threadPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1 + i * 0.12 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4"
              >
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#E8A020]/25 flex items-center justify-center text-base shrink-0">
                    {post.avatar}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-bold text-xs tracking-tight truncate">{post.name}</p>
                    <span className="text-[#E8A020] text-[10px] font-bold">스레드</span>
                  </div>
                  <div className="flex items-center gap-1 bg-[#E8A020]/20 px-2 py-0.5 rounded-full shrink-0">
                    <MessageCircle size={9} className="text-[#E8A020]" />
                    <span className="text-[#E8A020] text-[9px] font-black">{post.stat}</span>
                  </div>
                </div>
                <p className="text-white/80 text-xs leading-relaxed tracking-tight whitespace-pre-line">{post.content}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </motion.div>

      {/* 하단 티커 */}
      <div className="relative z-10 border-t border-white/10 bg-[#0B1F3A]/80 backdrop-blur-sm py-3">
        <div className="flex items-center gap-3 px-5">
          <span className="shrink-0 text-[#E8A020] text-[10px] font-black tracking-widest uppercase border-r border-white/10 pr-3">
            실제 성과
          </span>
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
