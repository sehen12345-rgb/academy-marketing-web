"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const chats = [
  {
    room: "대치동 수학학원 — 김원장님",
    avatar: "김",
    period: "계약 6개월차",
    result: "월 문의 3건 → 27건",
    tag: "플레이스 + 블로그",
    messages: [
      { from: "client", text: "솔직히 처음엔 반신반의했어요. 대행사마다 다 잘해준다고 하잖아요.", time: "오전 10:14" },
      { from: "us",     text: "맞아요, 그 기분 이해해요. 어떻게 달라지셨나요?", time: "오전 10:15" },
      { from: "client", text: "3개월 됐는데 플레이스가 지도에서 3위로 올라왔어요. 문의가 하루에 2~3건씩 들어오더니 이제 27건이에요.", time: "오전 10:16" },
      { from: "client", text: "제일 좋은 건 광고비가 얼마 나갔는지 매달 알려줘서 신뢰가 가요.", time: "오전 10:16" },
    ],
  },
  {
    room: "목동 영어학원 — 박원장님",
    avatar: "박",
    period: "계약 4개월차",
    result: "팔로워 0 → 1,200명",
    tag: "스레드 운영",
    messages: [
      { from: "client", text: "SNS 해야 한다는 건 알았는데 뭘 올려야 할지도 몰랐고 시간도 없었어요.", time: "오후 2:33" },
      { from: "us",     text: "지금은 어떠세요?", time: "오후 2:34" },
      { from: "client", text: "학부모들이 먼저 DM 보내오기 시작했어요. '여기 어디예요?' 하고요 😅", time: "오후 2:35" },
      { from: "client", text: "수업 준비에만 집중할 수 있는 게 제일 큰 것 같아요. 진짜로요.", time: "오후 2:35", read: true },
    ],
  },
  {
    room: "분당 국어논술학원 — 이원장님",
    avatar: "이",
    period: "계약 8개월차",
    result: "원생 18명 → 41명",
    tag: "웹 + 당근광고",
    messages: [
      { from: "client", text: "개원하고 마케팅을 아예 몰랐어요. 뭐부터 해야 하는지도 모르는 상태였으니까요.", time: "오후 4:51" },
      { from: "us",     text: "지금은 어떻게 됐나요?", time: "오후 4:52" },
      { from: "client", text: "웹이랑 당근 광고 한 세트로 해줬는데 주변 학부모들이 알아서 찾아와요.", time: "오후 4:53" },
      { from: "client", text: "학원 전문이라 '학부모 입장에서 어떤 말이 먹히는지' 정확히 아는 것 같더라고요. 그게 차이인 것 같아요.", time: "오후 4:54", read: true },
    ],
  },
];

function KakaoChat({ chat, delay }: { chat: typeof chats[0]; delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm hover:shadow-md transition-shadow"
    >
      {/* 카카오톡 헤더 */}
      <div className="bg-[#FEE500] px-4 py-3 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#3A1D1D]/80 flex items-center justify-center">
          <span className="text-white text-xs font-black">{chat.avatar}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[#3A1D1D] font-black text-sm tracking-tight truncate">{chat.room}</p>
          <p className="text-[#3A1D1D]/50 text-[10px] tracking-tight">{chat.period}</p>
        </div>
        {/* 별점 */}
        <div className="flex gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={9} className="text-[#C8821A] fill-[#C8821A]" />
          ))}
        </div>
      </div>

      {/* 채팅 내용 */}
      <div className="px-4 py-4 space-y-3 bg-[#B2C7D9]/20 min-h-[200px]">
        {chat.messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.from === "client" ? "justify-start" : "justify-end"} items-end gap-1.5`}>
            {msg.from === "client" && (
              <div className="w-6 h-6 rounded-full bg-[#3A1D1D]/70 flex items-center justify-center shrink-0 mb-0.5">
                <span className="text-white text-[9px] font-black">{chat.avatar}</span>
              </div>
            )}
            <div className={`max-w-[75%] ${msg.from === "us" ? "items-end" : "items-start"} flex flex-col gap-0.5`}>
              <div className={`rounded-2xl px-3 py-2 text-xs leading-relaxed font-medium ${
                msg.from === "client"
                  ? "bg-white text-[#1a1a1a] rounded-tl-sm shadow-sm"
                  : "bg-[#FEE500] text-[#3A1D1D] rounded-tr-sm"
              }`}>
                {msg.text}
              </div>
              <div className={`flex items-center gap-1 ${msg.from === "us" ? "justify-end" : "justify-start"}`}>
                {msg.read && <span className="text-[9px] text-[#5C6B7E]">읽음</span>}
                <span className="text-[9px] text-[#8B9BB4]">{msg.time}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 결과 배지 */}
      <div className="px-4 py-3 border-t border-[#E2E8F0] flex items-center justify-between bg-white">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-[#0B1F3A] font-black text-sm tracking-tight">{chat.result}</span>
        </div>
        <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#F4F8FF] text-[#5C6B7E] border border-[#D6E6FF]">
          {chat.tag}
        </span>
      </div>
    </motion.div>
  );
}

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 sm:py-28 bg-[#F4F8FF] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #0B1F3A 1px, transparent 1px)", backgroundSize: "32px 32px" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-[#FEE500]/40 text-[#3A1D1D] text-sm font-bold px-4 py-2 rounded-full mb-4 border border-[#FEE500] tracking-tight">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="#3A1D1D">
              <path d="M12 3C6.477 3 2 6.477 2 11c0 2.89 1.657 5.424 4.162 6.962-.178.667-.647 2.415-.742 2.789-.118.463.17.457.358.332.147-.097 2.34-1.594 3.287-2.238.626.09 1.27.137 1.935.137 5.523 0 10-3.477 10-8C22 6.477 17.523 3 12 3z"/>
            </svg>
            원장님들의 카카오톡 후기
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight leading-tight">
            광고 카피가 아닙니다.
            <br />
            <span className="text-[#E8A020]">실제 대화 내용입니다.</span>
          </h2>
          <p className="text-[#5C6B7E] text-sm mt-3 tracking-tight">
            원장님들이 직접 보내주신 카카오톡 메시지에서 발췌했습니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {chats.map((chat, i) => (
            <KakaoChat key={chat.room} chat={chat} delay={i * 0.12} />
          ))}
        </div>

        {/* 하단 총계 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-8 bg-[#0B1F3A] rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="text-white/40 text-xs tracking-widest uppercase font-bold mb-1">실제 성과 평균</p>
            <p className="text-white font-black text-lg tracking-tight">
              문의 <span className="text-[#E8A020]">8.3배</span> 증가 · 원생 <span className="text-[#E8A020]">2.1배</span> 성장
            </p>
          </div>
          <div className="flex items-center gap-5">
            {[
              { val: "4.9", sub: "평균 만족도" },
              { val: "93%", sub: "3개월 유지율" },
              { val: "23+", sub: "파트너 학원" },
            ].map((s, i) => (
              <div key={s.sub} className="text-center flex items-center gap-5">
                {i > 0 && <div className="w-px h-8 bg-white/10" />}
                <div>
                  <p className="text-[#E8A020] font-black text-xl tracking-tight">{s.val}</p>
                  <p className="text-white/30 text-[10px] mt-0.5 tracking-tight">{s.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
