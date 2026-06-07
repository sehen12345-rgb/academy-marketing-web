"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "김○○ 원장님",
    academy: "대치동 수학학원",
    period: "운영 6개월차",
    result: "월 문의 3건 → 27건",
    text: "직접 블로그도 써보고 네이버 광고도 혼자 돌려봤는데 효과가 없었어요. 여기 맡기고 나서 3개월 만에 플레이스 상위에 올라왔고, 지금은 문의가 꾸준히 들어옵니다. 광고비가 얼마 나가는지 매달 리포트로 보여줘서 믿음이 가요.",
    tag: "플레이스 + 블로그",
    color: "from-[#0B1F3A] to-[#1B3D6E]",
  },
  {
    name: "박○○ 원장님",
    academy: "목동 영어학원",
    period: "운영 4개월차",
    result: "인스타 팔로워 0 → 1,200명",
    text: "SNS를 해야 한다는 건 알았는데 콘텐츠 만들 시간이 없었어요. 스레드 운영을 맡겼더니 학부모들이 먼저 DM을 보내오기 시작했고, 원생 등록도 늘었습니다. 수업에만 집중할 수 있어서 너무 좋아요.",
    tag: "스레드 운영",
    color: "from-[#C47D0A] to-[#E8A020]",
    textDark: true,
  },
  {
    name: "이○○ 원장님",
    academy: "분당 국어·논술학원",
    period: "운영 8개월차",
    result: "원생 18명 → 41명",
    text: "개원하고 마케팅을 아예 몰랐는데 웹페이지부터 당근 광고까지 한 곳에서 다 해주니까 정말 편하더라고요. 무엇보다 학원 전문이라 학부모 입장에서 어떤 말이 먹히는지 정확하게 아는 것 같았어요.",
    tag: "웹페이지 + 당근 광고",
    color: "from-[#0F2D52] to-[#0B1F3A]",
  },
];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} className="text-[#E8A020] fill-[#E8A020]" />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#F4F8FF] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-0 w-72 h-72 bg-[#E8A020] opacity-[0.04] rounded-full blur-3xl"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-[#E8A020]/15 text-[#C47D0A] text-sm font-semibold px-4 py-2 rounded-full mb-4 tracking-tight border border-[#E8A020]/30">
            원장님 후기
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight leading-tight">
            실제 학원 원장님들의
            <br />
            <span className="text-[#E8A020]">생생한 이야기</span>
          </h2>
          <p className="text-[#5C6B7E] text-sm mt-3 tracking-tight">광고가 아닙니다. 실제 운영 학원의 후기입니다.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="flex flex-col"
            >
              {/* 결과 배너 */}
              <div className={`bg-gradient-to-r ${t.color} rounded-t-2xl px-5 py-4 flex items-center justify-between`}>
                <div>
                  <p className={`text-[10px] font-bold tracking-widest uppercase mb-0.5 ${t.textDark ? "text-[#0B1F3A]/60" : "text-white/50"}`}>
                    성과
                  </p>
                  <p className={`font-black text-lg tracking-tight leading-none ${t.textDark ? "text-[#0B1F3A]" : "text-white"}`}>
                    {t.result}
                  </p>
                </div>
                <div className={`text-[10px] font-bold px-2.5 py-1 rounded-full border tracking-tight ${
                  t.textDark
                    ? "bg-[#0B1F3A]/15 border-[#0B1F3A]/20 text-[#0B1F3A]"
                    : "bg-white/10 border-white/20 text-white"
                }`}>
                  {t.tag}
                </div>
              </div>

              {/* 카드 본문 */}
              <div className="bg-white border border-[#D6E6FF] border-t-0 rounded-b-2xl p-5 flex-1 flex flex-col">
                <Quote size={20} className="text-[#E8A020]/40 mb-3" />
                <p className="text-[#5C6B7E] text-sm leading-relaxed flex-1 tracking-tight mb-5">
                  {t.text}
                </p>
                <div className="border-t border-[#E8EDF3] pt-4">
                  <Stars />
                  <div className="mt-2 flex items-center justify-between">
                    <div>
                      <p className="font-bold text-[#0B1F3A] text-sm tracking-tight">{t.name}</p>
                      <p className="text-[#A8B8C8] text-xs tracking-tight">{t.academy} · {t.period}</p>
                    </div>
                    <div className="w-9 h-9 bg-[#0B1F3A] rounded-xl flex items-center justify-center">
                      <span className="text-[#E8A020] font-black text-xs">✓</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 총계 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-10 bg-[#0B1F3A] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div className="text-center sm:text-left">
            <p className="text-white/40 text-xs tracking-widest uppercase font-bold mb-1">평균 성과</p>
            <p className="text-white font-black text-lg tracking-tight">문의 <span className="text-[#E8A020]">8.3배</span> 증가 · 원생 <span className="text-[#E8A020]">2.1배</span> 성장</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-center">
              <p className="text-[#E8A020] font-black text-2xl tracking-tight">4.9</p>
              <div className="flex gap-0.5 justify-center mt-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={9} className="text-[#E8A020] fill-[#E8A020]" />)}
              </div>
              <p className="text-white/30 text-[10px] mt-0.5 tracking-tight">평균 만족도</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-[#E8A020] font-black text-2xl tracking-tight">93%</p>
              <p className="text-white/30 text-[10px] mt-1 tracking-tight">3개월 이상 유지율</p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-center">
              <p className="text-[#E8A020] font-black text-2xl tracking-tight">23+</p>
              <p className="text-white/30 text-[10px] mt-1 tracking-tight">파트너 학원</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
