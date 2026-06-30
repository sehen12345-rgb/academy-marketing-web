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
  "카카오 채널 운영",
  "플레이스 상위 노출",
  "카페 바이럴",
  "패키지 (복합 서비스)",
  "기타",
];

const academyTypes = [
  "수학", "영어", "국어", "과학", "사회", "입시 종합",
  "음악 (피아노·바이올린 등)", "미술", "태권도·체육",
  "코딩·SW", "논술·독서", "기타",
];

const studentCounts = [
  "10명 미만", "10~30명", "30~50명", "50~100명", "100명 이상",
];

const adBudgets = [
  "100만원 미만", "100~150만원", "150~200만원",
  "200~300만원", "300~500만원", "500만원 이상",
];

const urgentIssues = [
  "신규 원생이 부족해요",
  "온라인에서 학원이 안 보여요",
  "블로그·SNS를 시작하고 싶어요",
  "광고를 하는데 효과가 없어요",
  "경쟁 학원보다 뒤처지는 느낌이에요",
  "마케팅을 통째로 맡기고 싶어요",
];

const currentMarketing = [
  "아무것도 안 하고 있어요",
  "블로그 운영 중",
  "인스타·스레드 운영 중",
  "네이버 광고 집행 중",
  "카카오 채널 운영 중",
  "지인 소개에 주로 의존",
];

const FORMSPREE_ID = "xpwzgkjb";

type ChipGroupProps = {
  options: string[];
  selected: string | string[];
  multi?: boolean;
  onChange: (val: string) => void;
};

function ChipGroup({ options, selected, multi = false, onChange }: ChipGroupProps) {
  const isSelected = (opt: string) =>
    multi ? (selected as string[]).includes(opt) : selected === opt;
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((opt) => (
        <button
          key={opt}
          type="button"
          onClick={() => onChange(opt)}
          className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all tracking-tight ${
            isSelected(opt)
              ? "bg-[#0B1F3A] text-[#E8A020] border-[#0B1F3A]"
              : "bg-white text-[#5C6B7E] border-[#D6E6FF] hover:border-[#E8A020]/50 hover:text-[#0B1F3A]"
          }`}
        >
          {opt}
        </button>
      ))}
    </div>
  );
}

function FieldLabel({ children, required, sub }: { children: React.ReactNode; required?: boolean; sub?: string }) {
  return (
    <label className="block text-sm font-bold text-[#0B1F3A] mb-2.5 tracking-tight">
      {children}
      {required && <span className="text-[#E8A020] ml-0.5">*</span>}
      {sub && <span className="text-[#8BA0B4] font-normal ml-1.5">{sub}</span>}
    </label>
  );
}

export default function ContactPage() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedMarketing, setSelectedMarketing] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [form, setForm] = useState({
    name: "",
    academy: "",
    phone: "",
    region: "",
    academyType: "",
    studentCount: "",
    adBudget: "",
    urgentIssue: "",
    message: "",
  });

  const toggleMulti = (list: string[], setList: (v: string[]) => void, val: string) => {
    setList(list.includes(val) ? list.filter((s) => s !== val) : [...list, val]);
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
          운영지역: form.region,
          학원유형: form.academyType,
          현재원생수: form.studentCount,
          월광고예산: form.adBudget,
          가장시급한문제: form.urgentIssue,
          현재마케팅현황: selectedMarketing.join(", "),
          관심서비스: selectedServices.join(", "),
          추가문의: form.message,
        }),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setSubmitError(true);
        window.open("https://open.kakao.com/o/sFi0Tvyi", "_blank");
      }
    } catch {
      setSubmitError(true);
      window.open("https://open.kakao.com/o/sFi0Tvyi", "_blank");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full border border-[#D6E6FF] rounded-xl px-4 py-3 text-[#0B1F3A] placeholder:text-[#C0CFDF] focus:outline-none focus:ring-2 focus:ring-[#E8A020]/40 focus:border-[#E8A020]/60 text-sm tracking-tight transition-all bg-white";

  return (
    <>
      <Header />
      <main className="flex-1 pt-16">
        {/* Hero Header */}
        <section className="bg-[#0B1F3A] py-16 sm:py-20 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
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
                <div className="bg-white rounded-2xl p-6 border border-[#D6E6FF] shadow-sm shadow-[#0B1F3A]/5">
                  <h2 className="text-base font-black text-[#0B1F3A] mb-5 tracking-tight">연락처</h2>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#0B1F3A] rounded-xl flex items-center justify-center shrink-0">
                        <Phone size={17} className="text-[#E8A020]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#8BA0B4] tracking-tight">전화 상담</p>
                        <p className="font-bold text-[#0B1F3A] tracking-tight text-sm">010-5069-5364</p>
                        <p className="text-xs text-[#A8B8C8] mt-0.5 tracking-tight">평일 09:00 - 18:00</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#0B1F3A] rounded-xl flex items-center justify-center shrink-0">
                        <Mail size={17} className="text-[#E8A020]" />
                      </div>
                      <div>
                        <p className="text-xs text-[#8BA0B4] tracking-tight">이메일</p>
                        <p className="font-bold text-[#0B1F3A] tracking-tight text-sm">metrogi98@naver.com</p>
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

                <div className="bg-white rounded-2xl p-5 border border-[#D6E6FF]">
                  <div className="flex items-center gap-2 mb-3">
                    <Building2 size={14} className="text-[#8BA0B4]" />
                    <p className="text-xs font-semibold text-[#8BA0B4] tracking-tight">사업자 정보</p>
                  </div>
                  <ul className="space-y-1 text-xs text-[#A8B8C8] tracking-tight">
                    <li>상호: 에듀플로우</li>
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
                        평일 09:00~18:00 내로 연락드립니다.
                        <br />
                        24시간 내 맞춤 견적서를 발송해드립니다.
                        <br />
                        <span className="text-[#A8B8C8]">급하신 경우 카카오톡 채널로 바로 연락 주세요.</span>
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
                      className="bg-white rounded-2xl p-8 border border-[#D6E6FF] shadow-sm space-y-7"
                    >
                      {/* 섹션 1: 기본 정보 */}
                      <div>
                        <p className="text-xs font-bold text-[#A8B8C8] tracking-widest uppercase mb-4">01 · 기본 정보</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                          <div>
                            <FieldLabel required>담당자 이름</FieldLabel>
                            <input
                              type="text"
                              required
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder="홍길동"
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <FieldLabel required>연락처</FieldLabel>
                            <input
                              type="tel"
                              required
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              placeholder="010-0000-0000"
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <FieldLabel required>학원명</FieldLabel>
                            <input
                              type="text"
                              required
                              value={form.academy}
                              onChange={(e) => setForm({ ...form, academy: e.target.value })}
                              placeholder="OO학원"
                              className={inputClass}
                            />
                          </div>
                          <div>
                            <FieldLabel required>운영 지역</FieldLabel>
                            <input
                              type="text"
                              required
                              value={form.region}
                              onChange={(e) => setForm({ ...form, region: e.target.value })}
                              placeholder="예) 서울 강남구, 경기 수원시"
                              className={inputClass}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-[#F0F4F9]" />

                      {/* 섹션 2: 학원 정보 */}
                      <div>
                        <p className="text-xs font-bold text-[#A8B8C8] tracking-widest uppercase mb-4">02 · 학원 정보</p>
                        <div className="space-y-5">
                          <div>
                            <FieldLabel required>학원 유형</FieldLabel>
                            <ChipGroup
                              options={academyTypes}
                              selected={form.academyType}
                              onChange={(v) => setForm({ ...form, academyType: v === form.academyType ? "" : v })}
                            />
                          </div>
                          <div>
                            <FieldLabel required>현재 원생 수</FieldLabel>
                            <ChipGroup
                              options={studentCounts}
                              selected={form.studentCount}
                              onChange={(v) => setForm({ ...form, studentCount: v === form.studentCount ? "" : v })}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-[#F0F4F9]" />

                      {/* 섹션 3: 마케팅 현황 */}
                      <div>
                        <p className="text-xs font-bold text-[#A8B8C8] tracking-widest uppercase mb-4">03 · 마케팅 현황</p>
                        <div className="space-y-5">
                          <div>
                            <FieldLabel required>가장 시급한 문제</FieldLabel>
                            <ChipGroup
                              options={urgentIssues}
                              selected={form.urgentIssue}
                              onChange={(v) => setForm({ ...form, urgentIssue: v === form.urgentIssue ? "" : v })}
                            />
                          </div>
                          <div>
                            <FieldLabel sub="(복수 선택 가능)">현재 마케팅 현황</FieldLabel>
                            <ChipGroup
                              options={currentMarketing}
                              selected={selectedMarketing}
                              multi
                              onChange={(v) => toggleMulti(selectedMarketing, setSelectedMarketing, v)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-[#F0F4F9]" />

                      {/* 섹션 4: 예산 & 서비스 */}
                      <div>
                        <p className="text-xs font-bold text-[#A8B8C8] tracking-widest uppercase mb-4">04 · 예산 & 관심 서비스</p>
                        <div className="space-y-5">
                          <div>
                            <FieldLabel required>월 광고 예산 (광고비 기준)</FieldLabel>
                            <ChipGroup
                              options={adBudgets}
                              selected={form.adBudget}
                              onChange={(v) => setForm({ ...form, adBudget: v === form.adBudget ? "" : v })}
                            />
                            <p className="text-[#A8B8C8] text-[11px] mt-2 tracking-tight">* 대행료 별도 · 광고비는 실집행액 그대로 청구</p>
                          </div>
                          <div>
                            <FieldLabel sub="(복수 선택 가능)">관심 서비스</FieldLabel>
                            <ChipGroup
                              options={services}
                              selected={selectedServices}
                              multi
                              onChange={(v) => toggleMulti(selectedServices, setSelectedServices, v)}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="border-t border-[#F0F4F9]" />

                      {/* 추가 문의 */}
                      <div>
                        <FieldLabel sub="(선택)">추가 문의 사항</FieldLabel>
                        <textarea
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                          placeholder="현재 마케팅 고민이나 궁금한 점을 자유롭게 적어주세요."
                          rows={4}
                          className={`${inputClass} resize-none`}
                        />
                      </div>

                      {submitError && (
                        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-700 tracking-tight">
                          전송 중 오류가 발생했습니다. 카카오톡 채널로 연결해드립니다.
                          <a href="https://open.kakao.com/o/sFi0Tvyi" target="_blank" rel="noopener noreferrer" className="underline ml-1 font-bold">카카오톡 바로가기 →</a>
                        </div>
                      )}

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
