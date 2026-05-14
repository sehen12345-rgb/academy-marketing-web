"use client";

import { motion } from "framer-motion";
import {
  Globe,
  MessageCircle,
  FileText,
  MapPin,
  Search,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "웹페이지 제작",
    desc: "학원 맞춤 홈페이지를 전문적으로 제작합니다. PC·모바일 완벽 대응.",
    price: "200만원",
    tag: "일회성",
    color: "blue",
  },
  {
    icon: MessageCircle,
    title: "스레드 운영 대행",
    desc: "프로필 세팅·댓글 관리·리틀리까지 포함. 주 3회 정기 포스팅 운영.",
    price: "48만원/월",
    tag: "월정기",
    color: "purple",
  },
  {
    icon: FileText,
    title: "블로그 포스팅",
    desc: "키워드 최적화 공장형(5만원) 또는 고퀄리티 프리미엄(10만원) 선택.",
    price: "5만원~10만원/건",
    tag: "건별",
    color: "green",
  },
  {
    icon: MapPin,
    title: "네이버 플레이스 CPC",
    desc: "네이버 지도·플레이스 광고 운용. 광고비 포함 상품가로 투명하게.",
    price: "상담 후 결정",
    tag: "광고비포함",
    color: "red",
  },
  {
    icon: Search,
    title: "네이버 파워링크",
    desc: "검색 키워드 기반 클릭 광고. 학원 관련 키워드 타겟팅 전문 운용.",
    price: "상담 후 결정",
    tag: "광고비포함",
    color: "orange",
  },
  {
    icon: Target,
    title: "당근 광고",
    desc: "지역 기반 당근마켓 광고. 학원 주변 학부모 직접 타겟팅.",
    price: "상담 후 결정",
    tag: "지역기반",
    color: "amber",
  },
  {
    icon: TrendingUp,
    title: "플레이스 상위 노출",
    desc: "네이버 플레이스 순위 상승 작업. 검증된 실행사 연계 서비스.",
    price: "상담 후 결정",
    tag: "외주연계",
    color: "teal",
  },
  {
    icon: Users,
    title: "카페 바이럴 마케팅",
    desc: "지역 맘카페 등 커뮤니티 바이럴 운영. 자연스러운 입소문 형성.",
    price: "상담 후 결정",
    tag: "바이럴",
    color: "pink",
  },
];

const colorMap: Record<string, { bg: string; icon: string; badge: string }> = {
  blue: { bg: "bg-blue-50", icon: "text-blue-600", badge: "bg-blue-100 text-blue-700" },
  purple: { bg: "bg-purple-50", icon: "text-purple-600", badge: "bg-purple-100 text-purple-700" },
  green: { bg: "bg-emerald-50", icon: "text-emerald-600", badge: "bg-emerald-100 text-emerald-700" },
  red: { bg: "bg-red-50", icon: "text-red-600", badge: "bg-red-100 text-red-700" },
  orange: { bg: "bg-orange-50", icon: "text-orange-600", badge: "bg-orange-100 text-orange-700" },
  amber: { bg: "bg-amber-50", icon: "text-amber-600", badge: "bg-amber-100 text-amber-700" },
  teal: { bg: "bg-teal-50", icon: "text-teal-600", badge: "bg-teal-100 text-teal-700" },
  pink: { bg: "bg-pink-50", icon: "text-pink-600", badge: "bg-pink-100 text-pink-700" },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 sm:py-28 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block bg-blue-50 text-blue-700 text-sm font-semibold px-4 py-2 rounded-full mb-4">
            서비스 라인업
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            학원에 필요한 마케팅,
            <br />
            전부 여기 있습니다
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            학원 원장님이 교육에만 집중할 수 있도록
            <br />
            마케팅의 처음부터 끝까지 책임집니다.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, index) => {
            const colors = colorMap[service.color];
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col"
              >
                {/* Icon */}
                <div className={`w-12 h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-4`}>
                  <Icon size={22} className={colors.icon} />
                </div>

                {/* Badge */}
                <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge} mb-3 self-start`}>
                  {service.tag}
                </span>

                {/* Title */}
                <h3 className="font-bold text-slate-900 mb-2 text-base">{service.title}</h3>

                {/* Description */}
                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">{service.desc}</p>

                {/* Price */}
                <div className="border-t border-slate-100 pt-4">
                  <p className="text-sm text-slate-500">상품가</p>
                  <p className="font-bold text-slate-900 text-base">{service.price}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
