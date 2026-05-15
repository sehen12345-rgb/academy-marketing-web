"use client";

import { motion } from "framer-motion";
import { Check, X, Minus } from "lucide-react";

const rows = [
  { label: "마케팅 전담 담당자",       diy: false,  generic: "partial", us: true },
  { label: "학원 업종 특화 전략",       diy: false,  generic: false,     us: true },
  { label: "광고비 포함 올인원 가격",   diy: false,  generic: false,     us: true },
  { label: "월간 성과 리포트 제공",     diy: false,  generic: "partial", us: true },
  { label: "SNS + 광고 + 웹 원스톱",   diy: false,  generic: false,     us: true },
  { label: "학부모 타겟 콘텐츠 전략",  diy: false,  generic: false,     us: true },
  { label: "24시간 내 견적서 발송",     diy: "partial", generic: false,  us: true },
  { label: "숨겨진 추가 비용 없음",     diy: true,   generic: false,     us: true },
  { label: "원장님 수업 집중 가능",     diy: false,  generic: true,      us: true },
];

type CellValue = boolean | "partial";

function Cell({ value, highlight }: { value: CellValue; highlight?: boolean }) {
  if (value === true) {
    return (
      <div className={`flex justify-center ${highlight ? "" : ""}`}>
        <div className={`w-7 h-7 rounded-full flex items-center justify-center ${
          highlight ? "bg-[#E8A020]" : "bg-emerald-100"
        }`}>
          <Check size={14} className={highlight ? "text-[#0B1F3A]" : "text-emerald-600"} strokeWidth={2.5} />
        </div>
      </div>
    );
  }
  if (value === "partial") {
    return (
      <div className="flex justify-center">
        <div className="w-7 h-7 rounded-full bg-amber-100 flex items-center justify-center">
          <Minus size={14} className="text-amber-600" strokeWidth={2.5} />
        </div>
      </div>
    );
  }
  return (
    <div className="flex justify-center">
      <div className="w-7 h-7 rounded-full bg-red-50 flex items-center justify-center">
        <X size={14} className="text-red-400" strokeWidth={2.5} />
      </div>
    </div>
  );
}

export default function ComparisonSection() {
  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]"
        style={{ backgroundImage: "radial-gradient(circle, #0B1F3A 1px, transparent 1px)", backgroundSize: "36px 36px" }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block bg-[#0B1F3A]/8 text-[#0B1F3A] text-sm font-semibold px-4 py-2 rounded-full mb-4 tracking-tight border border-[#D6E6FF]">
            왜 저희여야 할까요?
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B1F3A] tracking-tight leading-tight">
            직접 운영 vs 일반 대행사 vs
            <br />
            <span className="text-[#E8A020]">마케팅파트너</span>
          </h2>
          <p className="text-[#5C6B7E] text-sm mt-3 tracking-tight">학원 마케팅에 특화된 이유가 여기 있습니다</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl overflow-hidden border border-[#D6E6FF] shadow-lg shadow-[#0B1F3A]/5"
        >
          {/* 헤더 */}
          <div className="grid grid-cols-4 bg-[#0B1F3A]">
            <div className="py-4 px-4 sm:px-6" />
            {[
              { label: "직접 운영",      sub: "원장님 혼자" },
              { label: "일반 대행사",    sub: "업종 무관" },
              { label: "마케팅파트너",   sub: "학원 전문", highlight: true },
            ].map((col) => (
              <div key={col.label} className={`py-4 text-center ${col.highlight ? "bg-[#E8A020]" : ""}`}>
                <p className={`font-black text-sm tracking-tight ${col.highlight ? "text-[#0B1F3A]" : "text-white"}`}>
                  {col.label}
                </p>
                <p className={`text-[10px] mt-0.5 tracking-tight ${col.highlight ? "text-[#0B1F3A]/65" : "text-white/40"}`}>
                  {col.sub}
                </p>
              </div>
            ))}
          </div>

          {/* 행 */}
          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              className={`grid grid-cols-4 items-center border-b border-[#E8EDF3] last:border-0 ${
                i % 2 === 0 ? "bg-white" : "bg-[#F4F8FF]/60"
              }`}
            >
              <div className="py-3.5 px-4 sm:px-6">
                <p className="text-[#0B1F3A] text-xs sm:text-sm font-medium tracking-tight">{row.label}</p>
              </div>
              <div className="py-3.5"><Cell value={row.diy as CellValue} /></div>
              <div className="py-3.5"><Cell value={row.generic as CellValue} /></div>
              <div className="py-3.5 bg-[#E8A020]/5"><Cell value={row.us as CellValue} highlight /></div>
            </motion.div>
          ))}
        </motion.div>

        {/* 범례 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex justify-center gap-6 mt-5 text-xs text-[#A8B8C8] tracking-tight"
        >
          {[
            { icon: <Check size={10} className="text-emerald-500" />, label: "제공" },
            { icon: <Minus size={10} className="text-amber-500" />,  label: "부분 제공" },
            { icon: <X size={10} className="text-red-400" />,        label: "미제공" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-1.5">
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
