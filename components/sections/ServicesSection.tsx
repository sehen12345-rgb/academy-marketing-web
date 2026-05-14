"use client";

import { motion } from "framer-motion";
import { Globe, MessageCircle, FileText, MapPin, Search, Target, TrendingUp, Users } from "lucide-react";

const services = [
  { icon: Globe,         num: "01", title: "웹페이지 제작",      desc: "학원 맞춤 홈페이지. PC·모바일 완벽 대응.",         price: "200만원",    tag: "일회성" },
  { icon: MessageCircle, num: "02", title: "스레드 운영",        desc: "프로필·댓글·리틀리 포함. 주 3회 정기 포스팅.",     price: "48만원/월",  tag: "월정기" },
  { icon: FileText,      num: "03", title: "블로그 포스팅",      desc: "공장형 5만원 / 프리미엄 10만원. 키워드 최적화.",   price: "5~10만원/건", tag: "건별" },
  { icon: MapPin,        num: "04", title: "네이버 플레이스 CPC", desc: "플레이스 광고 운용. 광고비 포함 올인원.",          price: "상담 후 결정", tag: "광고비포함" },
  { icon: Search,        num: "05", title: "네이버 파워링크",    desc: "키워드 검색 광고. 학원 타겟 키워드 전문 운용.",    price: "상담 후 결정", tag: "광고비포함" },
  { icon: Target,        num: "06", title: "당근 광고",          desc: "지역 기반 광고. 학원 주변 학부모 직접 타겟팅.",   price: "상담 후 결정", tag: "지역기반" },
  { icon: TrendingUp,    num: "07", title: "플레이스 상위 노출", desc: "네이버 플레이스 순위 상승. 검증된 실행사 연계.",   price: "상담 후 결정", tag: "외주연계" },
  { icon: Users,         num: "08", title: "카페 바이럴",        desc: "지역 맘카페 커뮤니티 바이럴. 자연스러운 입소문.", price: "상담 후 결정", tag: "바이럴" },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-[#F4F8FF]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
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
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white border border-[#D6E6FF] rounded-2xl p-5 hover:shadow-lg hover:shadow-[#1B3D6E]/10 hover:-translate-y-0.5 transition-all duration-300 flex flex-col group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-11 h-11 bg-[#0B1F3A] rounded-xl flex items-center justify-center group-hover:bg-[#1B3D6E] transition-colors">
                    <Icon size={20} className="text-[#E8A020]" />
                  </div>
                  <span className="text-xs font-bold text-[#D6E6FF] tracking-widest">{service.num}</span>
                </div>

                <span className="inline-block text-xs font-bold px-2.5 py-1 rounded-full bg-[#F4F8FF] text-[#1B3D6E] border border-[#D6E6FF] mb-2.5 self-start tracking-tight">
                  {service.tag}
                </span>

                <h3 className="font-bold text-[#0B1F3A] mb-1.5 text-sm tracking-tight">{service.title}</h3>
                <p className="text-[#5C6B7E] text-xs leading-relaxed flex-1 mb-4">{service.desc}</p>

                <div className="border-t border-[#E8EDF3] pt-3.5">
                  <p className="text-[11px] text-[#A8B8C8] mb-0.5">상품가</p>
                  <p className="font-black text-[#0B1F3A] text-sm tracking-tight">{service.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
