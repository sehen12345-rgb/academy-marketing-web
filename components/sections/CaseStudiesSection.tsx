"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Users, MessageSquare, ArrowUpRight } from "lucide-react";

function useCounter(target: number, duration = 1200) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  useEffect(() => {
    if (!inView) return;
    let s = 0;
    const step = target / (duration / 16);
    const t = setInterval(() => {
      s += step;
      if (s >= target) { setVal(target); clearInterval(t); }
      else setVal(Math.floor(s));
    }, 16);
    return () => clearInterval(t);
  }, [inView, target, duration]);
  return { val, ref };
}

const cases = [
  {
    tag: "영어학원 · 강남구",
    period: "계약 후 3개월",
    services: ["SNS 운영", "숏폼 제작", "네이버 광고"],
    headline: "월 문의 5건 → 47건",
    story: "학부모 커뮤니티에서 화제가 된 영어 릴스 콘텐츠로 팔로워가 급증하면서 직접 DM 문의가 폭발적으로 늘었습니다.",
    metrics: [
      { icon: MessageSquare, label: "월 문의 수",   before: 5,    after: 47,   unit: "건",   color: "text-[#E8A020]" },
      { icon: Users,         label: "SNS 팔로워",  before: 120,  after: 2840, unit: "명",   color: "text-emerald-600" },
      { icon: TrendingUp,    label: "원생 증가",   before: 0,    after: 23,   unit: "명",   color: "text-blue-600" },
    ],
    accentColor: "border-[#E8A020]",
    tagColor: "bg-[#FFF8EC] text-[#C8821A] border-[#E8A020]/30",
  },
  {
    tag: "수학학원 · 분당구",
    period: "계약 후 4개월",
    services: ["당근 광고", "카페 바이럴", "웹페이지 제작"],
    headline: "원생 월 3명 → 31명 모집",
    story: "지역 맘카페 바이럴과 당근 지역 광고 연계로 학원 주변 학부모들이 직접 찾아오는 구조가 만들어졌습니다.",
    metrics: [
      { icon: Users,         label: "월 신규 원생", before: 3,   after: 31,   unit: "명",   color: "text-emerald-600" },
      { icon: MessageSquare, label: "월 상담 문의", before: 8,   after: 54,   unit: "건",   color: "text-[#E8A020]" },
      { icon: TrendingUp,    label: "플레이스 순위", before: 18, after: 2,    unit: "위",   color: "text-blue-600" },
    ],
    accentColor: "border-emerald-500",
    tagColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    tag: "입시전문학원 · 목동",
    period: "계약 후 6개월",
    services: ["릴스 제작", "스레드 운영", "파워링크"],
    headline: "릴스 조회수 891만 달성",
    story: "수능 D-Day 동기부여 시리즈가 학부모·학생 모두에게 확산되며 브랜드 인지도가 지역 최고 수준으로 올랐습니다.",
    metrics: [
      { icon: TrendingUp,    label: "릴스 최고 조회수", before: 0,    after: 891,  unit: "만",  color: "text-[#E8A020]" },
      { icon: Users,         label: "계정 팔로워",      before: 310,  after: 14000, unit: "명", color: "text-emerald-600" },
      { icon: MessageSquare, label: "월 상담 증가율",   before: 100,  after: 830,  unit: "%",   color: "text-blue-600" },
    ],
    accentColor: "border-blue-500",
    tagColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
];

function MetricRow({ metric, delay }: { metric: typeof cases[0]["metrics"][0]; delay: number }) {
  const Icon = metric.icon;
  const pct = Math.min((metric.after / (metric.after * 1.2)) * 100, 100);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <div ref={ref} className="space-y-1.5">
      <div className="flex items-center justify-between text-xs">
        <div className="flex items-center gap-1.5 text-[#5C6B7E]">
          <Icon size={11} />
          <span className="font-medium">{metric.label}</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[#A0AEC0] line-through text-[11px]">{metric.before.toLocaleString()}{metric.unit}</span>
          <span className={`font-black text-sm ${metric.color}`}>
            {metric.after.toLocaleString()}{metric.unit}
          </span>
        </div>
      </div>
      <div className="h-1.5 bg-[#E8EDF5] rounded-full overflow-hidden">
        <motion.div
          className={`h-full rounded-full ${
            metric.color.includes("E8A020") ? "bg-[#E8A020]" :
            metric.color.includes("emerald") ? "bg-emerald-500" : "bg-blue-500"
          }`}
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #0B1F3A 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-[#E8A020]/10 text-[#C8821A] text-sm font-bold px-4 py-2 rounded-full mb-4 border border-[#E8A020]/25 tracking-tight">
            <TrendingUp size={13} />
            실제 케이스 스터디
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight leading-tight">
            숫자로 증명하는
            <br />
            <span className="text-[#E8A020]">에듀플로우의 실제 성과</span>
          </h2>
          <p className="text-[#5C6B7E] text-sm mt-3 tracking-tight">
            과장 없이, 실제 파트너 학원의 Before/After 수치입니다
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {cases.map((c, i) => (
            <motion.div
              key={c.tag}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`bg-white rounded-2xl border-2 ${c.accentColor} shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col gap-5`}
            >
              {/* 상단: 태그 + 기간 */}
              <div className="flex items-start justify-between">
                <span className={`text-xs font-bold px-3 py-1 rounded-full border ${c.tagColor}`}>
                  {c.tag}
                </span>
                <span className="text-[#A0AEC0] text-xs tracking-tight">{c.period}</span>
              </div>

              {/* 헤드라인 */}
              <div>
                <p className="text-[#0B1F3A] font-black text-xl leading-tight tracking-tight mb-2">
                  {c.headline}
                </p>
                <p className="text-[#5C6B7E] text-sm leading-relaxed tracking-tight">
                  {c.story}
                </p>
              </div>

              {/* 서비스 태그 */}
              <div className="flex flex-wrap gap-1.5">
                {c.services.map((s) => (
                  <span key={s} className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#F4F8FF] text-[#0B1F3A] border border-[#D6E6FF]">
                    {s}
                  </span>
                ))}
              </div>

              {/* 지표 바 */}
              <div className="space-y-3 pt-2 border-t border-[#E8EDF5]">
                {c.metrics.map((m, mi) => (
                  <MetricRow key={m.label} metric={m} delay={0.2 + mi * 0.1} />
                ))}
              </div>

              {/* 하단 링크 */}
              <div className="pt-1">
                <button className="flex items-center gap-1 text-[#0B1F3A] text-xs font-bold hover:text-[#E8A020] transition-colors tracking-tight">
                  상세 내용 문의하기
                  <ArrowUpRight size={12} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 하단 면책 */}
        <p className="text-[#A0AEC0] text-xs text-center mt-8 tracking-tight">
          * 위 성과는 실제 파트너 학원 사례이며, 개인정보 보호를 위해 학원명은 비공개입니다. 성과는 학원별 상황에 따라 다를 수 있습니다.
        </p>
      </div>
    </section>
  );
}
