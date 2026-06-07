"use client";

import { useState } from "react";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Phone, Mail, Clock, ArrowLeft, MapPin, CheckCircle, Building2 } from "lucide-react";

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

const FORMSPREE_ID = "xpwzgkjb"; // Formspree 폼 ID — 실제 ID로 교체 필요

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          담당자이름: form.name,
          학원명: form.academy,
          연락처: form.phone,
          관심서비스: selectedServices.join(", "),
          추가문의: form.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert("전송 중 오류가 발생했습니다. 카카오톡으로 문의해 주세요.");
      }
    } catch {
      alert("네트워크 오류가 발생했습니다. 카카오톡으로 문의해 주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Header */}
        <section className="bg-[#0B1F3A] py-16 sm:py-20 relative overflow-hidden">
          {/* 그리드 배경 */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* 골드 블롭 */}
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full bg-[#E8A020] opacity-[0.07] blur-3xl -translate-y-1/3 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-blue-400 opacity-[0.06] blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-white/40 hover:text-white/80 text-sm mb-8 transition-colors tracking-tight"
            >
              <ArrowLeft size={15} />
              홈으로 돌아가기
            </Link>
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-block bg-[#E8A020]/15 text-[#E8A020] text-xs font-semibold px-3 py-1.5 rounded-full border border-[#E8A020]/25 tracking-tight">
                24시간 내 견적서 발송
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-black text-white mb-3 tracking-tight leading-tight">
              무료 상담 신청
            </h1>
            <p className="text-white/50 text-base tracking-tight">
              부담 없이 먼저 연락 주세요. 영업 전화 없이 질문에만 답변드립니다.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-14 sm:py-20 bg-[#F4F8FF]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

              {/* Left: Contact Info */}
              <div className="space-y-5">
                {/* Contact cards */}
                <div className="bg-white rounded-2xl p-6 border border-[#D6E6FF] shadow-sm shadow-[#0B1F3A]/5">
                  <h2 className="text-base font-black text-[#0B1F3A] mb-5 tracking-tight">연락처</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#0B1F3A] rounded-xl flex items-center justify-center shrink-0">
                        <Phone size={17} className="text-[#E8A020]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#8BA0B4] tracking-tight">전화 상담</p>
                        <p className="font-bold text-[#0B1F3A] tracking-tight text-sm">010-XXXX-XXXX</p>
                        <p className="text-xs text-[#A8B8C8] mt-0.5 tracking-tight">평일 09:00 - 18:00</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#0B1F3A] rounded-xl flex items-center justify-center shrink-0">
                        <Mail size={17} className="text-[#E8A020]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#8BA0B4] tracking-tight">이메일</p>
                        <p className="font-bold text-[#0B1F3A] tracking-tight text-sm">contact@example.com</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#0B1F3A] rounded-xl flex items-center justify-center shrink-0">
                        <Clock size={17} className="text-[#E8A020]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#8BA0B4] tracking-tight">응답 보장</p>
                        <p className="font-bold text-[#0B1F3A] tracking-tight text-sm">24시간 내 견적서 발송</p>
                        <p className="text-xs text-[#A8B8C8] mt-0.5 tracking-tight">카카오톡 채널 상담 가능</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#0B1F3A] rounded-xl flex items-center justify-center shrink-0">
                        <MapPin size={17} className="text-[#E8A020]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#8BA0B4] tracking-tight">주소</p>
                        <p className="font-bold text-[#0B1F3A] tracking-tight text-sm leading-snug">
                          충청남도 천안시 동남구<br />대흥로 321, 508-7호
                        </p>
                        <p className="text-xs text-[#A8B8C8] mt-0.5 tracking-tight">(성황동, 수평빌딩)</p>
                      </div>
                    </li>
                  </ul>
                </div>

                {/* Benefits */}
                <div className="bg-[#0B1F3A] rounded-2xl p-6 border border-[#1B3D6E]">
                  <p className="text-[#E8A020] font-black text-sm mb-4 tracking-tight">상담 후 받으실 수 있는 것</p>
                  <ul className="space-y-2.5">
                    {[
                      "맞춤 마케팅 전략 제안",
                      "서비스별 상세 견적서",
                      "타 학원 성공 사례 공유",
                      "무료 컨설팅 (30분)",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-2.5 text-white/70 text-sm tracking-tight">
                        <CheckCircle size={14} className="text-[#E8A020] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Legal Info */}
                <div className="bg-white rounded-2xl p-5 border border-[#D6E6FF]">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 size={14} className="text-[#8BA0B4]" />
                    <p className="text-xs font-semibold text-[#8BA0B4] tracking-tight">사업자 정보</p>
                  </div>
                  <ul className="space-y-1 text-xs text-[#A8B8C8] tracking-tight">
                    <li>상호: 에듀라이즈</li>
                    <li>대표: 정필권</li>
                    <li>사업자등록번호: 755-74-00514</li>
                    <li className="leading-snug pt-0.5">
                      주소: 충청남도 천안시 동남구<br />대흥로 321, 508-7호 (성황동, 수평빌딩)
                    </li>
                  </ul>
                </div>
              </div>

              {/* Right: Form */}
              <div className="lg:col-span-2">
                <AnimatePresence mode="wait">
                  {submitted ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-white rounded-2xl p-12 text-center border border-[#D6E6FF] shadow-sm"
                    >
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
                        className="w-20 h-20 bg-[#E8A020]/10 rounded-full flex items-center justify-center mx-auto mb-5"
                      >
                        <Send size={32} className="text-[#E8A020]" />
                      </motion.div>
                      <h3 className="text-2xl font-black text-[#0B1F3A] mb-2 tracking-tight">상담 신청 완료!</h3>
                      <p className="text-[#5C6B7E] mb-8 text-sm tracking-tight leading-relaxed">
                        빠른 시간 내에 연락드리겠습니다.
                        <br />
                        평일 기준 24시간 내 견적서를 보내드립니다.
                      </p>
                      <Link
                        href="/"
                        className="inline-flex items-center gap-2 bg-[#E8A020] text-[#0B1F3A] font-black px-7 py-3.5 rounded-full hover:bg-[#F0B429] transition-colors tracking-tight text-sm"
                      >
                        홈으로 돌아가기
                      </Link>
                    </motion.div>
                  ) : (
                    <motion.form
                      key="form"
                      onSubmit={handleSubmit}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-white rounded-2xl p-8 border border-[#D6E6FF] shadow-sm space-y-6"
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-bold text-[#0B1F3A] mb-2 tracking-tight">
                            담당자 이름 <span className="text-[#E8A020]">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder="홍길동"
                            className="w-full border border-[#D6E6FF] rounded-xl px-4 py-3 text-[#0B1F3A] placeholder:text-[#C0CFDF] focus:outline-none focus:ring-2 focus:ring-[#E8A020]/40 focus:border-[#E8A020]/60 text-sm tracking-tight transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-[#0B1F3A] mb-2 tracking-tight">
                            학원명 <span className="text-[#E8A020]">*</span>
                          </label>
                          <input
                            type="text"
                            required
                            value={form.academy}
                            onChange={(e) => setForm({ ...form, academy: e.target.value })}
                            placeholder="OO학원"
                            className="w-full border border-[#D6E6FF] rounded-xl px-4 py-3 text-[#0B1F3A] placeholder:text-[#C0CFDF] focus:outline-none focus:ring-2 focus:ring-[#E8A020]/40 focus:border-[#E8A020]/60 text-sm tracking-tight transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#0B1F3A] mb-2 tracking-tight">
                          연락처 <span className="text-[#E8A020]">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                          placeholder="010-0000-0000"
                          className="w-full border border-[#D6E6FF] rounded-xl px-4 py-3 text-[#0B1F3A] placeholder:text-[#C0CFDF] focus:outline-none focus:ring-2 focus:ring-[#E8A020]/40 focus:border-[#E8A020]/60 text-sm tracking-tight transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#0B1F3A] mb-3 tracking-tight">
                          관심 서비스{" "}
                          <span className="text-[#8BA0B4] font-normal">(복수 선택 가능)</span>
                        </label>
                        <div className="flex flex-wrap gap-2">
                          {services.map((service) => (
                            <button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all tracking-tight ${
                                selectedServices.includes(service)
                                  ? "bg-[#0B1F3A] text-[#E8A020] border-[#0B1F3A]"
                                  : "bg-white text-[#5C6B7E] border-[#D6E6FF] hover:border-[#E8A020]/50 hover:text-[#0B1F3A]"
                              }`}
                            >
                              {service}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-[#0B1F3A] mb-2 tracking-tight">
                          추가 문의 사항
                        </label>
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="현재 마케팅 상황이나 원하시는 내용을 자유롭게 적어주세요."
                          rows={4}
                          className="w-full border border-[#D6E6FF] rounded-xl px-4 py-3 text-[#0B1F3A] placeholder:text-[#C0CFDF] focus:outline-none focus:ring-2 focus:ring-[#E8A020]/40 focus:border-[#E8A020]/60 text-sm tracking-tight transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 bg-[#E8A020] text-[#0B1F3A] font-black py-4 rounded-xl hover:bg-[#F0B429] disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-base tracking-tight shadow-lg shadow-[#E8A020]/20"
                      >
                        <Send size={18} />
                        {loading ? "전송 중..." : "상담 신청하기"}
                      </button>

                      <p className="text-center text-xs text-[#A8B8C8] tracking-tight">
                        ✓ 영업 전화 없음 &nbsp;·&nbsp; ✓ 위약금 없음 &nbsp;·&nbsp; ✓ 24시간 내 견적서 발송
                      </p>
                    </motion.form>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
