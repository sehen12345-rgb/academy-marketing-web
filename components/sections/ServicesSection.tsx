"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, MessageCircle, FileText, MapPin, TrendingUp, ArrowRight, Sparkles, Video, Megaphone } from "lucide-react";

const services = [
  {
    icon: Globe,
    num: "01",
    title: "웹페이지 제작",
    desc: "학원 맞춤 홈페이지. PC·모바일 완벽 대응. 상담 예약·수강 문의 기능 포함.",
    tag: "일회성",
    cat: "웹",
    back: "모바일 최적화 반응형 디자인으로 학부모 신뢰도를 높이고 상담 전환율을 끌어올립니다.",
  },
  {
    icon: FileText,
    num: "02",
    title: "브랜드 블로그",
    desc: "네이버·티스토리 기반 학원 전용 블로그 구축 및 운영. 키워드 최적화 포스팅.",
    tag: "월정기",
    cat: "SNS",
    back: "학원명·지역 키워드를 공략해 검색 상위 노출을 만들고 지속적인 유입을 만듭니다.",
  },
  {
    icon: MessageCircle,
    num: "03",
    title: "스레드 운영",
    desc: "프로필·리틀리 링크 세팅 포함. 주 3회 정기 포스팅으로 팔로워 확보.",
    tag: "월정기",
    cat: "SNS",
    back: "트렌디한 스레드 채널로 학원 브랜드를 자연스럽게 알리고 DM 상담을 유도합니다.",
  },
  {
    icon: MapPin,
    num: "04",
    title: "네이버 플레이스",
    desc: "플레이스 CPC 광고 운용. 지도 검색 상단 노출로 근처 학부모를 직접 타겟팅.",
    tag: "광고비포함",
    cat: "광고",
    back: "지도 앱에서 학원을 검색하는 학부모에게 최우선 노출. 광고비 실집행 그대로 청구.",
  },
  {
    icon: TrendingUp,
    num: "05",
    title: "플레이스 상위 노출",
    desc: "네이버 플레이스 자연 순위 상승. 리뷰·저장수 관리로 경쟁 학원 앞서기.",
    tag: "월정기",
    cat: "광고",
    back: "플레이스 리뷰와 저장수를 체계적으로 관리해 광고 없이도 상위에 유지시킵니다.",
  },
  {
    icon: Sparkles,
    num: "06",
    title: "커스텀 맞춤 마케팅",
    desc: "숏폼·롱폼 영상 / 당근 광고 / 카페 침투 / 바이럴 마케팅 — 학원 상황에 맞게 조합.",
    tag: "맞춤설계",
    cat: "커스텀",
    back: "정해진 틀 없이 학원 목표·예산·지역에 따라 최적의 채널 조합을 직접 설계합니다.",
    custom: true,
    options: ["숏폼 영상", "롱폼 콘텐츠", "당근 광고", "카페 침투", "바이럴 마케팅"],
  },
];

const TABS = ["전체", "SNS", "광고", "웹", "커스텀"] as const;

type Service = typeof services[0];

function FlipCard({ service, index }: { service: Service; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="h-56"
      style={{ perspective: "1200px" }}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
      onFocus={() => setFlipped(true)}
      onBlur={() => setFlipped(false)}
    >
      <motion.div
        animate={{ rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* 앞면 */}
        <div
          style={{ backfaceVisibility: "hidden" }}
          className={`absolute inset-0 rounded-2xl p-5 flex flex-col border ${
            service.custom
              ? "bg-[#0B1F3A] border-[#E8A020]/40"
              : "bg-white border-[#D6E6FF]"
          }`}
        >
          <div className="flex items-start justify-between mb-3">
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${
              service.custom ? "bg-[#E8A020]/20" : "bg-[#0B1F3A]"
            }`}>
              <Icon size={20} className={service.custom ? "text-[#E8A020]" : "text-[#E8A020]"} />
            </div>
            <span className={`text-xs font-bold tracking-widest ${service.custom ? "text-white/20" : "text-[#D6E6FF]"}`}>
              {service.num}
            </span>
          </div>
          <span className={`inline-block text-xs font-bold px-2.5 py-1 rounded-full mb-2.5 self-start tracking-tight border ${
            service.custom
              ? "bg-[#E8A020]/15 text-[#E8A020] border-[#E8A020]/30"
              : "bg-[#F4F8FF] text-[#1B3D6E] border-[#D6E6FF]"
          }`}>
            {service.tag}
          </span>
          <h3 className={`font-bold text-sm mb-1.5 tracking-tight ${service.custom ? "text-white" : "text-[#0B1F3A]"}`}>
            {service.title}
          </h3>
          <p className={`text-xs leading-relaxed flex-1 ${service.custom ? "text-white/50" : "text-[#5C6B7E]"}`}>
            {service.desc}
          </p>
          {service.options && (
            <div className="flex flex-wrap gap-1 mt-2">
              {service.options.map((opt) => (
                <span key={opt} className="text-[10px] bg-white/10 text-white/60 px-2 py-0.5 rounded-full border border-white/10">
                  {opt}
                </span>
              ))}
            </div>
          )}
          {!service.options && (
            <div className="flex items-center gap-1 mt-3 text-[#1B3D6E]/40 text-[10px] font-semibold">
              <span>자세히</span>
              <ArrowRight size={9} />
            </div>
          )}
        </div>

        {/* 뒷면 */}
        <div
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
          className="absolute inset-0 bg-[#0B1F3A] rounded-2xl p-5 flex flex-col justify-between overflow-hidden"
        >
          <div className="absolute -right-4 -top-4 w-20 h-20 bg-[#E8A020]/10 rounded-full" />
          <div className="absolute -left-4 -bottom-4 w-16 h-16 bg-[#E8A020]/10 rounded-full" />
          <div className="relative">
            <div className="w-9 h-9 bg-[#E8A020]/20 rounded-xl flex items-center justify-center mb-4">
              <Icon size={16} className="text-[#E8A020]" />
            </div>
            <h3 className="font-bold text-white text-sm mb-2 tracking-tight">{service.title}</h3>
            <p className="text-white/60 text-xs leading-relaxed">{service.back}</p>
          </div>
          <div className="relative border-t border-white/10 pt-3">
            <p className="text-[11px] text-white/30 mb-0.5">견적</p>
            <p className="font-black text-[#E8A020] text-sm tracking-tight">상담 후 맞춤 안내</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  const [activeTab, setActiveTab] = useState<typeof TABS[number]>("전체");

  const filtered = activeTab === "전체"
    ? services
    : services.filter((s) => s.cat === activeTab);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F4F8FF] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{ backgroundImage: "radial-gradient(circle, #0B1F3A 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <span className="inline-block bg-[#E8A020]/15 text-[#C47D0A] text-sm font-semibold px-4 py-2 rounded-full mb-4 tracking-tight border border-[#E8A020]/30">
            서비스 라인업
          </span>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight leading-tight">
                학원에 필요한 마케팅,
                <br />
                전부 여기 있습니다
              </h2>
              <p className="text-[#5C6B7E] text-sm mt-3 tracking-tight">카드에 마우스를 올리면 상세 정보가 나타납니다</p>
            </div>

            <div className="flex gap-1.5 bg-white rounded-full p-1 border border-[#D6E6FF] shadow-sm self-start sm:self-auto flex-wrap">
              {TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-1.5 rounded-full text-sm font-bold tracking-tight transition-all duration-200 ${
                    activeTab === tab
                      ? "bg-[#0B1F3A] text-white shadow-sm"
                      : "text-[#5C6B7E] hover:text-[#0B1F3A]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {filtered.map((service, index) => (
              <FlipCard key={service.title} service={service} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
