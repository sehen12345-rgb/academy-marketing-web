"use client";

import { motion } from "framer-motion";
import {
  Globe, MessageCircle, FileText, MapPin,
  Search, Target, TrendingUp, Users,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    num: "01",
    title: "웹페이지 제작",
    desc: "학원 맞춤 홈페이지. PC·모바일 완벽 대응.",
    price: "200만원",
    tag: "일회성",
    color: "blue",
  },
  {
    icon: MessageCircle,
    num: "02",
    title: "스레드 운영",
    desc: "프로필·댓글·리틀리 세팅 포함. 주 3회 정기 포스팅.",
    price: "48만원/월",
    tag: "월정기",
    color: "purple",
  },
  {
    icon: FileText,
    num: "03",
    title: "블로그 포스팅",
    desc: "공장형 5만원 / 프리미엄 10만원. 키워드 최적화.",
    price: "5~10만원/건",
    tag: "건별",
    color: "emerald",
  },
  {
    icon: MapPin,
    num: "04",
    title: "네이버 플레이스 CPC",
    desc: "네이버 지도·플레이스 광고. 광고비 포함 운용.",
    price: "상담 후 결정",
    tag: "광고비포함",
    color: "red",
  },
  {
    icon: Search,
    num: "05",
    title: "네이버 파워링크",
    desc: "키워드 검색 광고. 학원 타겟 키워드 전문 운용.",
    price: "상담 후 결정",
    tag: "광고비포함",
    color: "orange",
  },
  {
    icon: Target,
    num: "06",
    title: "당근 광고",
    desc: "지역 기반 광고. 학원 주변 학부모 직접 타겟팅.",
    price: "상담 후 결정",
    tag: "지역기반",
    color: "amber",
  },
  {
    icon: TrendingUp,
    num: "07",
    title: "플레이스 상위 노출",
    desc: "네이버 플레이스 순위 상승. 검증된 실행사 연계.",
    price: "상담 후 결정",
    tag: "외주연계",
    color: "teal",
  },
  {
    icon: Users,
    num: "08",
    title: "카페 바이럴",
    desc: "지역 맘카페 커뮤니티 바이럴. 자연스러운 입소문.",
    price: "상담 후 결정",
    tag: "바이럴",
    color: "pink",
  },
];

const colorMap: Record<string, { bg: string; icon: string; badge: string }> = {
  blue:    { bg: "bg-blue-50",    icon: "text-blue-600",    badge: "bg-blue-100 text-blue-700" },
  purple:  { bg: "bg-purple-50",  icon: "text-purple-600",  badge: "bg-purple-100 text-purple-700" },
  emerald: { bg: "bg-emerald-50", icon: "text-emerald-600", badge: "bg-emerald-100 text-emerald-700" },
  red:     { bg: "bg-red-50",     icon: "text-red-600",     badge: "bg-red-100 text-red-700" },
  orange:  { bg: "bg-orange-50",  icon: "text-orange-600",  badge: "bg-orange-100 text-orange-700" },
  amber:   { bg: "bg-amber-50",   icon: "text-amber-600",   badge: "bg-amber-100 text-amber-700" },
  teal:    { bg: "bg-teal-50",    icon: "text-teal-600",    badge: "bg-teal-100 text-teal-700" },
  pink:    { bg: "bg-pink-50",    icon: "text-pink-600",    badge: "bg-pink-100 text-pink-700" },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4 tracking-tight">
            서비스 라인업
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
            학원에 필요한 마케팅,
            <br />
            전부 여기 있습니다
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                className="bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 flex flex-col"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 ${colors.bg} rounded-xl flex items-center justify-center`}>
                    <Icon size={20} className={colors.icon} />
                  </div>
                  <span className="text-xs font-bold text-slate-300 tracking-widest">{service.num}</span>
                </div>

                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge} mb-2.5 self-start tracking-tight`}>
                  {service.tag}
                </span>

                <h3 className="font-bold text-slate-900 mb-1.5 text-sm tracking-tight">{service.title}</h3>
                <p className="text-slate-400 text-xs leading-relaxed flex-1 mb-4">{service.desc}</p>

                <div className="border-t border-slate-100 pt-3.5">
                  <p className="text-[11px] text-slate-400 mb-0.5">상품가</p>
                  <p className="font-bold text-slate-900 text-sm tracking-tight">{service.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
