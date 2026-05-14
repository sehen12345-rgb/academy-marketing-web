"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { Send, Phone, Mail, Clock, ArrowLeft } from "lucide-react";

const services = [
  "웹페이지 제작",
  "스레드 운영 대행",
  "블로그 포스팅",
  "네이버 플레이스 CPC",
  "네이버 파워링크",
  "당근 광고",
  "플레이스 상위 노출",
  "카페 바이럴",
  "패키지 (복합 서비스)",
  "기타",
];

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    academy: "",
    phone: "",
    message: "",
  });

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service)
        ? prev.filter((s) => s !== service)
        : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: 실제 폼 전송 로직 연결 (EmailJS, Formspree 등)
    setSubmitted(true);
  };

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        {/* Header */}
        <section className="bg-gradient-to-br from-blue-600 to-blue-800 py-16 sm:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-blue-200 hover:text-white text-sm mb-6 transition-colors"
            >
              <ArrowLeft size={16} />
              홈으로 돌아가기
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              무료 상담 신청
            </h1>
            <p className="text-blue-100 text-lg">
              부담 없이 먼저 연락 주세요. 24시간 내에 연락드립니다.
            </p>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-4">연락처</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                        <Phone size={18} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">전화 상담</p>
                        <p className="font-semibold text-slate-900">010-XXXX-XXXX</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">이메일</p>
                        <p className="font-semibold text-slate-900">contact@example.com</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center shrink-0">
                        <Clock size={18} className="text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm text-slate-500">운영 시간</p>
                        <p className="font-semibold text-slate-900">평일 09:00 - 18:00</p>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-2xl p-5 border border-blue-100">
                  <p className="text-blue-800 font-semibold text-sm mb-2">상담 후 받으실 수 있는 것</p>
                  <ul className="space-y-1.5 text-blue-700 text-sm">
                    <li>✓ 맞춤 마케팅 전략 제안</li>
                    <li>✓ 서비스별 상세 견적서</li>
                    <li>✓ 타 학원 성공 사례 공유</li>
                    <li>✓ 무료 컨설팅 (30분)</li>
                  </ul>
                </div>
              </div>

              {/* Form */}
              <div className="lg:col-span-2">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl p-10 text-center border border-slate-200 shadow-sm"
                  >
                    <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send size={28} className="text-emerald-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">상담 신청 완료!</h3>
                    <p className="text-slate-500 mb-6">
                      빠른 시간 내에 연락드리겠습니다.
                      <br />
                      평일 기준 24시간 내 답변 드립니다.
                    </p>
                    <Link
                      href="/"
                      className="inline-flex items-center gap-2 bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors"
                    >
                      홈으로 돌아가기
                    </Link>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          담당자 이름 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          placeholder="홍길동"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">
                          학원명 <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={form.academy}
                          onChange={(e) => setForm({ ...form, academy: e.target.value })}
                          placeholder="OO학원"
                          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        연락처 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        placeholder="010-0000-0000"
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-3">
                        관심 서비스 <span className="text-slate-400 font-normal">(복수 선택 가능)</span>
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {services.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => toggleService(service)}
                            className={`px-3.5 py-2 rounded-xl text-sm font-medium border transition-colors ${
                              selectedServices.includes(service)
                                ? "bg-blue-600 text-white border-blue-600"
                                : "bg-white text-slate-600 border-slate-200 hover:border-blue-300"
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        추가 문의 사항
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        placeholder="현재 마케팅 상황이나 원하시는 내용을 자유롭게 적어주세요."
                        rows={4}
                        className="w-full border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700 transition-colors text-lg"
                    >
                      <Send size={20} />
                      상담 신청하기
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
