"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 sm:py-28 bg-blue-600 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full opacity-30 blur-3xl -translate-y-1/2 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-700 rounded-full opacity-30 blur-3xl translate-y-1/2 -translate-x-1/4" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            지금 무료 상담을 받아보세요
          </h2>
          <p className="text-blue-100 text-lg sm:text-xl mb-10 leading-relaxed">
            학원 마케팅 고민, 저희가 해결해드립니다.
            <br />
            부담 없이 먼저 연락 주세요.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 font-bold px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors text-lg shadow-lg"
            >
              무료 상담 신청하기
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:010-0000-0000"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/40 text-white font-bold px-8 py-4 rounded-xl hover:bg-white/10 transition-colors text-lg"
            >
              <Phone size={20} />
              전화 상담
            </a>
          </div>

          <p className="text-blue-200 text-sm mt-8">
            평일 09:00 - 18:00 운영 · 상담 후 24시간 내 견적서 발송
          </p>
        </motion.div>
      </div>
    </section>
  );
}
