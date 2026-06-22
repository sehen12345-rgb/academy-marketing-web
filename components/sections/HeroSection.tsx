"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, CheckCircle, TrendingUp, Users, MessageCircle, Star } from "lucide-react";

const highlights = [
  "광고비 포함 올인원 가격",
  "학원 전문 마케팅",
  "원스톱 통합 관리",
];

const titleLines = [
  { text: "문의 8배,",           gold: false },
  { text: "원생 2배.",           gold: true  },
  { text: "이게 학원 전문입니다", gold: false },
];

/* 플로팅 카드 데이터 */
const floatingCards = [
  {
    id: 1,
    icon: TrendingUp,
    color: "emerald",
    label: "이번 달 신규 문의",
    value: "+847%",
    sub: "강남 영어학원 · 3개월 만에",
    pos: "top-[12%] right-[4%] sm:right-[8%]",
    delay: 0.6,
    float: [0, -10, 0],
  },
  {
    id: 2,
    icon: Users,
    color: "blue",
    label: "스레드 조회수",
    value: "192.8만",
    sub: "단일 포스팅 · 유기적 도달",
    pos: "top-[42%] right-[2%] sm:right-[6%]",
    delay: 0.9,
    float: [0, -8, 0],
  },
  {
    id: 3,
    icon: Star,
    color: "yellow",
    label: "파트너 학원 만족도",
    value: "98.2%",
    sub: "3개월 이상 유지율 93%",
    pos: "bottom-[22%] right-[4%] sm:right-[10%]",
    delay: 1.2,
    float: [0, -12, 0],
  },
];

/* 스레드 목업 포스팅 */
const threadPosts = [
  {
    avatar: "🏫",
    name: "성북 수학학원",
    time: "2시간 전",
    content: "중3 수학 내신 대비, 이렇게 하면 됩니다 🔥 우리 학원 학생 97%가 한 등급 이상 올린 방법",
    likes: "1.2만",
    comments: "847",
  },
  {
    avatar: "📚",
    name: "마포 영어학원",
    time: "어제",
    content: "학부모님들이 제일 많이 하시는 질문 TOP5 답변드릴게요 ✅ 이거 보시고 상담 문의 많이 오더라고요",
    likes: "3.4만",
    comments: "2.1천",
  },
];

const colorMap: Record<string, { bg: string; text: string; icon: string }> = {
  emerald: { bg: "bg-emerald-500/15", text: "text-emerald-400", icon: "text-emerald-400" },
  blue:    { bg: "bg-blue-500/15",    text: "text-blue-400",    icon: "text-blue-400"    },
  yellow:  { bg: "bg-[#E8A020]/15",   text: "text-[#E8A020]",  icon: "text-[#E8A020]"  },
};

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "14%"]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex flex-col overflow-hidden bg-[#0B1F3A]">

      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-[#1B3D6E]/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-[#E8A020]/8 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{ backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)", backgroundSize: "32px 32px" }}
        />
      </div>

      {/* 메인 콘텐츠 */}
      <motion.div style={{ y: contentY }} className="relative z-10 flex-1 flex items-center">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-24 sm:py-32 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">

            {/* 왼쪽 텍스트 */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-8 flex flex-wrap gap-3"
              >
                <span className="inline-flex items-center gap-2 border border-[#E8A020]/50 text-[#E8A020] text-sm font-semibold px-4 py-2 rounded-full bg-[#E8A020]/10 tracking-tight">
                  <span className="w-1.5 h-1.5 bg-[#E8A020] rounded-full animate-pulse" />
                  학원 마케팅 전문 대행사
                </span>
                <span className="inline-flex items-center gap-2 border border-emerald-400/40 text-emerald-300 text-sm font-semibold px-4 py-2 rounded-full bg-emerald-400/10 tracking-tight">
                  <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
                  현재 23개 학원 운영 중
                </span>
              </motion.div>

              <h1 className="text-[clamp(2.6rem,5vw,4rem)] font-black text-white leading-[1.1] tracking-tight mb-7">
                {titleLines.map((line, li) => (
                  <motion.span
                    key={li}
                    className={`block ${line.gold ? "text-[#E8A020]" : ""}`}
                    initial={{ opacity: 0, y: 28 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 + li * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {line.text}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="text-white/60 text-lg leading-relaxed mb-8 tracking-tight"
              >
                일반 대행사는 학부모 심리를 모릅니다.
                <br />
                에듀플로우는 <span className="text-white font-semibold">학원만</span> 합니다 — 웹, SNS, 광고까지.
              </motion.p>

              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.75 }}
                className="flex flex-wrap gap-x-6 gap-y-2 mb-10"
              >
                {highlights.map((item, i) => (
                  <motion.li
                    key={item}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + i * 0.09 }}
                    className="flex items-center gap-1.5 text-white/70 text-sm font-medium tracking-tight"
                  >
                    <CheckCircle size={13} className="text-[#E8A020] shrink-0" />
                    {item}
                  </motion.li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="flex flex-wrap gap-3"
              >
                <div className="relative inline-flex">
                  <motion.div
                    className="absolute inset-0 rounded-full bg-[#FEE500]"
                    animate={{ scale: [1, 1.45, 1.45], opacity: [0.5, 0, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                  />
                  <a
                    href="https://open.kakao.com/o/sFi0Tvyi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative inline-flex items-center gap-2 bg-[#FEE500] text-[#3A1D1D] font-black px-8 py-4 rounded-full hover:bg-[#F5DC00] transition-colors text-base tracking-tight shadow-xl shadow-[#FEE500]/30"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#3A1D1D">
                      <path d="M12 3C6.477 3 2 6.477 2 11c0 2.89 1.657 5.424 4.162 6.962-.178.667-.647 2.415-.742 2.789-.118.463.17.457.358.332.147-.097 2.34-1.594 3.287-2.238.626.09 1.27.137 1.935.137 5.523 0 10-3.477 10-8C22 6.477 17.523 3 12 3z"/>
                    </svg>
                    카카오톡 무료 상담
                  </a>
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 border border-white/30 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors text-base tracking-tight"
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

              {/* 하단 수치 */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-12 flex flex-wrap gap-8 border-t border-white/10 pt-8"
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
                    transition={{ delay: 1.25 + i * 0.1 }}
                  >
                    <div className="text-lg font-black text-[#E8A020] tracking-tight">{s.value}</div>
                    <div className="text-[11px] text-white/40 tracking-tight mt-0.5">{s.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* 오른쪽 — 플로팅 카드 + 스레드 목업 */}
            <div className="relative hidden lg:block h-[580px]">

              {/* 스레드 목업 카드들 */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="absolute left-0 top-[8%] w-[72%] space-y-3"
              >
                {threadPosts.map((post, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7 + i * 0.2 }}
                    animate-float={i}
                    className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-4"
                  >
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#E8A020]/20 flex items-center justify-center text-base">
                        {post.avatar}
                      </div>
                      <div>
                        <p className="text-white text-xs font-bold tracking-tight">{post.name}</p>
                        <p className="text-white/30 text-[10px] tracking-tight">{post.time}</p>
                      </div>
                      <div className="ml-auto flex items-center gap-1 bg-[#E8A020]/15 px-2 py-0.5 rounded-full">
                        <span className="text-[#E8A020] text-[10px] font-bold">스레드</span>
                      </div>
                    </div>
                    <p className="text-white/70 text-xs leading-relaxed tracking-tight mb-3">{post.content}</p>
                    <div className="flex items-center gap-4 border-t border-white/8 pt-2.5">
                      <span className="text-white/40 text-[10px] flex items-center gap-1">
                        <MessageCircle size={10} /> {post.comments}
                      </span>
                      <span className="text-[#E8A020] text-[10px] flex items-center gap-1 font-bold">
                        ♥ {post.likes} 조회
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* 성과 플로팅 카드들 */}
              {floatingCards.map((card) => {
                const Icon = card.icon;
                const c = colorMap[card.color];
                return (
                  <motion.div
                    key={card.id}
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0, y: card.float }}
                    transition={{
                      opacity: { delay: card.delay, duration: 0.5 },
                      scale:   { delay: card.delay, duration: 0.5 },
                      x:       { delay: card.delay, duration: 0.5 },
                      y:       { duration: 3.5 + card.id * 0.4, repeat: Infinity, ease: "easeInOut", delay: card.delay + 0.5 },
                    }}
                    className={`absolute ${card.pos} bg-white/[0.08] backdrop-blur-md border border-white/15 rounded-2xl px-4 py-3 min-w-[160px] shadow-xl`}
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <div className={`w-7 h-7 rounded-lg ${c.bg} flex items-center justify-center`}>
                        <Icon size={14} className={c.icon} />
                      </div>
                      <span className="text-white/40 text-[10px] tracking-tight">{card.label}</span>
                    </div>
                    <p className={`text-xl font-black tracking-tight ${c.text}`}>{card.value}</p>
                    <p className="text-white/30 text-[10px] mt-0.5 tracking-tight">{card.sub}</p>
                  </motion.div>
                );
              })}

              {/* 배경 글로우 */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#1B3D6E]/20 to-transparent rounded-3xl pointer-events-none" />
            </div>

          </div>
        </div>
      </motion.div>

      {/* 하단 실적 티커 */}
      <div className="relative z-10 border-t border-white/10 bg-[#0B1F3A]/80 backdrop-blur-sm py-3">
        <div className="flex items-center gap-3 px-4 sm:px-6">
          <span className="shrink-0 text-[#E8A020] text-[10px] font-black tracking-widest uppercase border-r border-white/10 pr-3">
            실제 성과
          </span>
          <div className="overflow-hidden flex-1">
            <div className="flex animate-marquee whitespace-nowrap">
              {[
                { icon: "🧵", label: "스레드 조회수", value: "192.8만" },
                { icon: "🧵", label: "스레드 조회수", value: "39만" },
                { icon: "🎬", label: "릴스",          value: "891만" },
                { icon: "🎬", label: "릴스",          value: "119만" },
                { icon: "👥", label: "팔로워",        value: "1.4만" },
                { icon: "❤️", label: "반응",          value: "1.3만" },
                { icon: "🧵", label: "스레드 조회수", value: "192.8만" },
                { icon: "🧵", label: "스레드 조회수", value: "39만" },
                { icon: "🎬", label: "릴스",          value: "891만" },
                { icon: "🎬", label: "릴스",          value: "119만" },
                { icon: "👥", label: "팔로워",        value: "1.4만" },
                { icon: "❤️", label: "반응",          value: "1.3만" },
              ].map((item, i) => (
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
