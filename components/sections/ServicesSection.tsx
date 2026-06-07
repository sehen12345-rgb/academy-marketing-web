"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, MessageCircle, FileText, MapPin, Search, Target, TrendingUp, Users, ArrowRight, Video } from "lucide-react";

const services = [
  { icon: Globe,         num: "01", title: "웹페이지 제작",       desc: "학원 맞춤 홈페이지. PC·모바일 완벽 대응.",         price: "200만원",     tag: "일회성",    back: "모바일 최적화 반응형 디자인으로 학부모 신뢰도를 높입니다." },
  { icon: MessageCircle, num: "02", title: "스레드 운영",         desc: "프로필·댓글·리틀리 포함. 주 3회 정기 포스팅.",     price: "48만원/월",   tag: "월정기",    back: "트렌디한 스레드 채널로 학원 브랜드를 자연스럽게 알립니다." },
  { icon: FileText,      num: "03", title: "블로그 포스팅",       desc: "공장형 5만원 / 프리미엄 10만원. 키워드 최적화.",   price: "5~10만원/건", tag: "건별",      back: "상위 노출 키워드를 공략해 검색 유입을 늘립니다." },
  { icon: MapPin,        num: "04", title: "네이버 플레이스 CPC", desc: "플레이스 광고 운용. 광고비 포함 올인원.",          price: "상담 후 결정", tag: "광고비포함", back: "지도 검색 상단 노출로 근처 학부모를 직접 타겟팅합니다." },
  { icon: Search,        num: "05", title: "네이버 파워링크",     desc: "키워드 검색 광고. 학원 타겟 키워드 전문 운용.",    price: "상담 후 결정", tag: "광고비포함", back: "구매 의도가 높은 검색 키워드에서 학원을 노출시킵니다." },
  { icon: Target,        num: "06", title: "당근 광고",           desc: "지역 기반 광고. 학원 주변 학부모 직접 타겟팅.",   price: "상담 후 결정", tag: "지역기반",  back: "반경 설정으로 우리 학원 주변 학부모에게만 노출합니다." },
  { icon: TrendingUp,   num: "07", title: "플레이스 상위 노출",  desc: "네이버 플레이스 순위 상승. 검증된 실행사 연계.",   price: "상담 후 결정", tag: "외주연계",  back: "플레이스 리뷰·저장수를 높여 자연 순위를 끌어올립니다." },
  { icon: Users,         num: "08", title: "카페 바이럴",         desc: "지역 맘카페 커뮤니티 바이럴. 자연스러운 입소문.", price: "상담 후 결정", tag: "바이럴",    back: "지역 맘카페에서 신뢰도 높은 자연스러운 후기를 만듭니다." },
  { icon: Video,         num: "09", title: "숏폼 영상 제작",      desc: "릴스·유튜브 숏츠 직접 제작. 학원 홍보 영상 바이럴.", price: "상담 후 결정", tag: "영상",      back: "891만 뷰 달성 릴스 제작 경험. 학부모 눈길을 사로잡는 숏폼 콘텐츠를 만듭니다." },
];

function FlipCard({ service, index }: { service: typeof services[0]; index: number }) {
  const [flipped, setFlipped] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="h-52"
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
          className="absolute inset-0 bg-white border border-[#D6E6FF] rounded-2xl p-5 flex flex-col group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="w-11 h-11 bg-[#0B1F3A] rounded-xl flex items-center justify-center">
              <Icon size={20} className="text-[#E8A020]" />
            </div>
            <span className="text-xs font-bold text-[#D6E6FF] tracking-widest">{service.num}</span>
          </div>
          <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-[#F4F8FF] text-[#1B3D6E] border border-[#D6E6FF] mb-2.5 self-start tracking-tight">
            {service.tag}
          </span>
          <h3 className="font-bold text-[#0B1F3A] mb-1.5 text-sm tracking-tight">{service.title}</h3>
          <p className="text-[#5C6B7E] text-xs leading-relaxed flex-1">{service.desc}</p>
          <div className="flex items-center gap-1 mt-3 text-[#1B3D6E]/40 text-[10px] font-semibold">
            <span>자세히</span>
            <ArrowRight size={9} />
          </div>
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
          <div className="relative">
            <div className="border-t border-white/10 pt-3">
              <p className="text-[11px] text-white/30 mb-0.5">상품가</p>
              <p className="font-black text-[#E8A020] text-sm tracking-tight">{service.price}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F4F8FF] relative overflow-hidden">
      {/* 배경 장식 */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-10 right-10 w-64 h-64 bg-[#E8A020] opacity-[0.04] rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.07, 0.04] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-10 left-10 w-48 h-48 bg-[#0B1F3A] opacity-[0.04] rounded-full blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.04, 0.08, 0.04] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-block bg-[#E8A020]/15 text-[#C47D0A] text-sm font-semibold px-4 py-2 rounded-full mb-4 tracking-tight border border-[#E8A020]/30">
            서비스 라인업
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight leading-tight">
            학원에 필요한 마케팅,
            <br />
            전부 여기 있습니다
          </h2>
          <p className="text-[#5C6B7E] text-sm mt-3 tracking-tight">카드에 마우스를 올리면 상세 정보가 나타납니다</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <FlipCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
