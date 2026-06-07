"use client";

import { motion } from "framer-motion";
import { MessageSquare, Play, BarChart3, Globe } from "lucide-react";

const members = [
  {
    name: "정필권",
    role: "대표 · 마케팅 전략",
    bio: "학원 전문 마케터로 23개 학원 운영 경험. SNS 릴스 891만 뷰 달성, 학원 문의 8.3배 증가 전략 설계.",
    tags: ["전략 기획", "광고 운용", "SNS 콘텐츠"],
    icon: BarChart3,
    highlight: true,
  },
  {
    name: "콘텐츠팀",
    role: "숏폼 영상 · SNS 운영",
    bio: "직접 기획·촬영·편집. 학원 콘텐츠 특성상 학부모 눈길을 사로잡는 스토리텔링에 특화.",
    tags: ["릴스 제작", "스레드 운영", "영상 편집"],
    icon: Play,
    highlight: false,
  },
  {
    name: "광고팀",
    role: "네이버 · 당근 · 플레이스",
    bio: "광고비 0원 낭비 없이 전액 집행. 플랫폼별 KPI 대시보드를 매월 투명하게 공개.",
    tags: ["네이버 광고", "당근 타겟팅", "플레이스 CPC"],
    icon: BarChart3,
    highlight: false,
  },
  {
    name: "웹개발팀",
    role: "홈페이지 · 랜딩페이지",
    bio: "모바일 최적화 반응형 홈페이지 제작. 학부모가 처음 보는 순간 신뢰감을 주는 디자인에 집중.",
    tags: ["웹 제작", "모바일 최적화", "SEO"],
    icon: Globe,
    highlight: false,
  },
];

export default function TeamSection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #0B1F3A 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-block bg-[#E8A020]/15 text-[#C47D0A] text-sm font-semibold px-4 py-2 rounded-full mb-4 tracking-tight border border-[#E8A020]/30">
            팀 소개
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight leading-tight">
            학원만 아는 사람들이
            <br />
            직접 운영합니다
          </h2>
          <p className="text-[#5C6B7E] text-sm mt-3 tracking-tight max-w-lg">
            외주 없이 저희 팀이 직접 기획·실행합니다. 중간 수수료 없이, 책임지는 사람이 직접 합니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {members.map((member, index) => {
            const Icon = member.icon;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: index * 0.09, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`rounded-2xl p-6 flex flex-col gap-4 transition-all ${
                  member.highlight
                    ? "bg-[#0B1F3A] ring-2 ring-[#E8A020]/50 shadow-xl shadow-[#0B1F3A]/20"
                    : "bg-[#F4F8FF] border border-[#D6E6FF] hover:border-[#1B3D6E]/30 hover:shadow-lg"
                }`}
              >
                {/* 아이콘 + 이름 */}
                <div className="flex items-start justify-between">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    member.highlight ? "bg-[#E8A020]/20" : "bg-[#0B1F3A]"
                  }`}>
                    <Icon size={20} className={member.highlight ? "text-[#E8A020]" : "text-[#E8A020]"} />
                  </div>
                  {member.highlight && (
                    <span className="text-[10px] font-black bg-[#E8A020] text-[#0B1F3A] px-2.5 py-1 rounded-full tracking-tight">
                      대표
                    </span>
                  )}
                </div>

                {/* 이름/역할 */}
                <div>
                  <h3 className={`font-black text-base tracking-tight mb-0.5 ${
                    member.highlight ? "text-white" : "text-[#0B1F3A]"
                  }`}>
                    {member.name}
                  </h3>
                  <p className={`text-xs font-semibold tracking-tight ${
                    member.highlight ? "text-[#E8A020]" : "text-[#C47D0A]"
                  }`}>
                    {member.role}
                  </p>
                </div>

                {/* 바이오 */}
                <p className={`text-xs leading-relaxed tracking-tight flex-1 ${
                  member.highlight ? "text-white/55" : "text-[#5C6B7E]"
                }`}>
                  {member.bio}
                </p>

                {/* 태그 */}
                <div className="flex flex-wrap gap-1.5">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full border tracking-tight ${
                        member.highlight
                          ? "bg-white/10 border-white/15 text-white/60"
                          : "bg-[#E8A020]/10 border-[#E8A020]/20 text-[#C47D0A]"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 하단 멘트 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-3 flex-wrap"
        >
          {[
            { icon: <MessageSquare size={13} className="text-[#E8A020]" />, text: "담당자 직접 소통" },
            { icon: <Play size={13} className="text-[#E8A020]" />, text: "외주 없이 직접 실행" },
            { icon: <BarChart3 size={13} className="text-[#E8A020]" />, text: "매월 성과 리포트 제공" },
          ].map((item) => (
            <div
              key={item.text}
              className="flex items-center gap-2 text-[#5C6B7E] text-sm tracking-tight bg-[#F4F8FF] border border-[#D6E6FF] px-4 py-2 rounded-full"
            >
              {item.icon}
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
