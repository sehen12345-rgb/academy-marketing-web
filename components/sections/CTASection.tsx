"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Gift } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-slate-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700 rounded-full opacity-20 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800 rounded-full opacity-20 blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Free offer badge */}
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 text-sm font-semibold px-4 py-2 rounded-full mb-6 tracking-tight">
            <Gift size={15} />
            무료 상담 신청 시 맞춤 마케팅 전략 제안서 제공
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight tracking-tight">
            지금 무료 상담을
            <br />
            받아보세요
          </h2>
          <p className="text-slate-400 text-lg mb-10 leading-relaxed tracking-tight">
            학원 마케팅 고민, 저희가 해결해드립니다.
            <br />
            상담 후 24시간 내 맞춤 견적서를 보내드립니다.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-blue-600 text-white font-bold px-8 py-4 rounded-full hover:bg-blue-500 transition-colors text-base shadow-lg shadow-blue-900/40 tracking-tight"
            >
              무료 상담 신청하기
              <ArrowRight size={18} />
            </Link>
            <a
              href="tel:010-0000-0000"
              className="inline-flex items-center justify-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-full hover:bg-white/20 transition-colors text-base tracking-tight"
            >
              전화 상담
            </a>
          </div>

          <p className="text-slate-500 text-sm mt-8 tracking-tight">
            평일 09:00 - 18:00 운영 · 카카오톡 채널 상담 가능
          </p>
        </motion.div>
      </div>
    </section>
  );
}
