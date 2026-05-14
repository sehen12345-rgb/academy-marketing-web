# [브랜드명] — 학원 교육 대행사 마케팅 소개 웹페이지

> 학원을 위한 마케팅·광고 대행 서비스를 소개하는 클라이언트 미팅용 회사 소개 웹페이지

---

## 목차
1. [프로젝트 개요](#프로젝트-개요)
2. [서비스 상품 구성](#서비스-상품-구성)
3. [개발 환경](#개발-환경)
4. [아키텍처](#아키텍처)
5. [배포 환경](#배포-환경)
6. [디자인 가이드](#디자인-가이드)
7. [투두리스트](#투두리스트)

---

## 프로젝트 개요

| 항목 | 내용 |
|------|------|
| 목적 | 학원 마케팅·광고 대행 서비스 소개 (클라이언트 미팅용) |
| 타겟 | 마케팅이 필요한 학원 원장님 |
| 형태 | 반응형 웹 랜딩페이지 (PC + 모바일) |
| 프레임워크 | Next.js 14 (App Router) |
| 배포 | Vercel |

---

## 서비스 상품 구성

### 1. 웹페이지 제작
- **가격:** 200만원
- **내용:** 학원 홈페이지 제작

### 2. 스레드(Threads) 운영 대행
- **기본 세팅 포함:** 프로필 세팅, 프로필 사진, 댓글 관리, 리틀리 세팅
- **조건:** 주 3회 포스팅
- **단가:** 건당 4만원
- **월 상품가:** 12회 × 4만원 = **48만원/월**

### 3. 블로그 포스팅 대행
- **공장형:** 5만원/건 (키워드 중심 양산형)
- **프리미엄:** 10만원/건 (고퀄리티 기획형)
- **추가 상품:** 블로그 스킨 디자인, 초기 세팅 대행

### 4. 네이버 플레이스 CPC 광고
- **광고비 포함** 상품가 책정 (광고비는 대행사가 직접 운용)
- 학원 플레이스 노출 확대 목적

### 5. 네이버 파워링크 광고
- **광고비 포함** 상품가 책정 (광고비는 대행사가 직접 운용)
- 검색 키워드 기반 클릭 광고

### 6. 당근 광고 (지역기반)
- 당근마켓 지역 광고 운용
- 학원 분야 지역 타겟팅에 효과적

### 7. 네이버 플레이스 상위 노출
- 실행사(외주) 연계 서비스
- 플레이스 순위 상승 작업

### 8. 네이버 카페 바이럴 마케팅
- 지역 기반 맘카페 등 커뮤니티 바이럴
- 자연스러운 후기/추천 형태 운영

---

## 개발 환경

### 필수 설치
| 도구 | 버전 | 용도 |
|------|------|------|
| Node.js | 20.x LTS | 런타임 |
| npm / pnpm | 최신 | 패키지 매니저 |
| Git | 최신 | 버전 관리 |
| VS Code | 최신 | 에디터 |

### 권장 VS Code 확장
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- GitLens

### 로컬 실행

```bash
# 저장소 클론
git clone https://github.com/[계정]/academy-marketing-web.git
cd academy-marketing-web

# 의존성 설치
npm install

# 개발 서버 실행 (http://localhost:3000)
npm run dev

# 빌드
npm run build

# 프로덕션 실행
npm run start
```

### 환경 변수
```env
# .env.local
NEXT_PUBLIC_SITE_NAME=[브랜드명]
NEXT_PUBLIC_CONTACT_EMAIL=contact@[도메인].com
NEXT_PUBLIC_CONTACT_PHONE=010-XXXX-XXXX
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX   # Google Analytics
```

---

## 아키텍처

```
academy-marketing-web/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # 루트 레이아웃 (폰트, 메타태그)
│   ├── page.tsx                # 메인 랜딩 페이지
│   ├── services/               # 서비스 상세 페이지
│   │   └── page.tsx
│   ├── pricing/                # 요금제 페이지
│   │   └── page.tsx
│   ├── portfolio/              # 포트폴리오/실적 페이지
│   │   └── page.tsx
│   └── contact/                # 문의하기 페이지
│       └── page.tsx
├── components/                 # 재사용 컴포넌트
│   ├── layout/
│   │   ├── Header.tsx          # 네비게이션 헤더
│   │   └── Footer.tsx          # 푸터
│   ├── sections/               # 랜딩 페이지 섹션
│   │   ├── HeroSection.tsx     # 히어로 (첫 화면)
│   │   ├── ServicesSection.tsx # 서비스 소개
│   │   ├── PricingSection.tsx  # 요금제
│   │   ├── WhyUsSection.tsx    # 선택 이유
│   │   ├── ProcessSection.tsx  # 진행 프로세스
│   │   └── CTASection.tsx      # 문의 유도
│   └── ui/                     # 기본 UI 컴포넌트
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Badge.tsx
├── lib/                        # 유틸리티
│   └── utils.ts
├── public/                     # 정적 파일
│   ├── images/
│   └── icons/
├── styles/
│   └── globals.css
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

### 기술 스택

| 분류 | 기술 | 이유 |
|------|------|------|
| 프레임워크 | Next.js 14 (App Router) | SSG로 SEO 최적화, 빠른 로딩 |
| 언어 | TypeScript | 타입 안전성 |
| 스타일 | Tailwind CSS | 빠른 반응형 구현 |
| 애니메이션 | Framer Motion | 부드러운 스크롤 인터랙션 |
| 아이콘 | Lucide React | 일관된 아이콘 세트 |
| 폼 | React Hook Form | 문의 폼 유효성 검사 |
| 분석 | Google Analytics 4 | 방문자 분석 |

### 페이지 구성

```
/ (메인 랜딩)
 ├── Hero           — 핵심 메시지 + CTA 버튼
 ├── Services       — 8가지 서비스 카드
 ├── Pricing        — 요금제 표
 ├── WhyUs          — 차별점 3가지
 ├── Process        — 계약~운영 프로세스
 └── CTA            — 상담 신청 유도

/services          — 서비스별 상세 설명
/portfolio         — 포트폴리오 (도입 후 추가)
/contact           — 문의 폼
```

---

## 배포 환경

### 플랫폼: Vercel

| 항목 | 내용 |
|------|------|
| 플랫폼 | Vercel (Free/Pro) |
| 도메인 | [브랜드명].com 또는 .co.kr |
| CDN | Vercel Edge Network (자동) |
| SSL | 자동 HTTPS |
| 빌드 | `npm run build` (자동 트리거) |

### 배포 플로우

```
로컬 개발
  → git push origin main
    → Vercel 자동 빌드 & 배포
      → [브랜드명].vercel.app (프리뷰)
        → 커스텀 도메인 연결
```

### 배포 명령어

```bash
# Vercel CLI로 직접 배포
vercel --prod --yes
```

### 브랜치 전략

| 브랜치 | 용도 |
|--------|------|
| `main` | 프로덕션 (자동 배포) |
| `dev` | 개발 통합 |
| `feature/*` | 기능 개발 |

---

## 디자인 가이드

### 컨셉
> **"신뢰할 수 있는 전문 파트너"**
> 학원 원장님이 믿고 맡길 수 있는 전문 대행사 이미지
> 세련되고 깔끔하되, 너무 딱딱하지 않은 친근한 전문성

### 컬러 팔레트

| 역할 | 색상 | HEX | 사용처 |
|------|------|-----|--------|
| Primary | 로얄 블루 | `#2563EB` | 메인 버튼, 강조 텍스트 |
| Secondary | 앰버 | `#F59E0B` | 배지, 포인트 강조 |
| Background | 화이트 | `#FFFFFF` | 기본 배경 |
| Surface | 슬레이트 50 | `#F8FAFC` | 섹션 배경 |
| Text Primary | 슬레이트 900 | `#0F172A` | 제목 |
| Text Secondary | 슬레이트 500 | `#64748B` | 본문, 설명 |
| Border | 슬레이트 200 | `#E2E8F0` | 카드 테두리 |
| Success | 에메랄드 | `#10B981` | 체크, 완료 표시 |

### 타이포그래피

| 분류 | 폰트 | 크기 | 굵기 |
|------|------|------|------|
| 메인 제목 (H1) | Pretendard | 48px / 모바일 32px | 700 Bold |
| 섹션 제목 (H2) | Pretendard | 36px / 모바일 24px | 700 Bold |
| 서브 제목 (H3) | Pretendard | 24px / 모바일 20px | 600 SemiBold |
| 본문 | Pretendard | 16px | 400 Regular |
| 캡션 | Pretendard | 14px | 400 Regular |
| 영문 강조 | Inter | 필요시 | 700 Bold |

### 스페이싱 시스템 (Tailwind 기준)

| 용도 | 클래스 | px |
|------|--------|----|
| 섹션 패딩 (세로) | `py-20` | 80px |
| 섹션 패딩 (모바일) | `py-12` | 48px |
| 컨텐츠 최대 너비 | `max-w-6xl` | 1152px |
| 카드 패딩 | `p-6` | 24px |
| 요소 간격 | `gap-6` | 24px |

### 컴포넌트 스타일

**버튼**
```
Primary:   bg-blue-600 text-white rounded-xl px-6 py-3 font-semibold hover:bg-blue-700
Secondary: border-2 border-blue-600 text-blue-600 rounded-xl px-6 py-3 font-semibold
```

**카드**
```
bg-white rounded-2xl shadow-sm border border-slate-200 p-6 hover:shadow-md transition
```

**배지**
```
bg-amber-100 text-amber-700 rounded-full px-3 py-1 text-sm font-medium
```

### UI 원칙
- 모바일 퍼스트 반응형
- 스크롤 시 섹션별 fade-in 애니메이션
- CTA 버튼은 Hero + 각 섹션 하단 + Footer에 반복 배치
- 가격은 명확하게 표시 (신뢰도 향상)
- 실적/숫자는 카운터 애니메이션으로 강조

---

## 투두리스트

### 완성 (Done) ✅
- [x] 프로젝트 기획 및 서비스 상품 구성
- [x] README 문서화 (개발환경, 아키텍처, 배포환경, 디자인 가이드)

### 진행중 (In Progress) 🔄
- [ ] 브랜드명 / 도메인 확정
- [ ] 회사 로고 제작

### Phase 1 — 프로젝트 초기 설정
- [ ] Next.js 14 프로젝트 생성 (`create-next-app`)
- [ ] TypeScript + Tailwind CSS + ESLint 설정
- [ ] Framer Motion, Lucide React 설치
- [ ] Pretendard 폰트 적용
- [ ] 컬러/타이포 Tailwind 커스텀 설정
- [ ] GitHub 저장소 생성 & 연결
- [ ] Vercel 프로젝트 연결 & 자동 배포 설정
- [ ] 기본 폴더 구조 생성

### Phase 2 — 레이아웃 & 공통 컴포넌트
- [ ] Header (로고 + 네비게이션 + 모바일 햄버거 메뉴)
- [ ] Footer (연락처, 링크, 저작권)
- [ ] Button 컴포넌트
- [ ] Card 컴포넌트
- [ ] Badge 컴포넌트
- [ ] SEO 메타태그 (layout.tsx)

### Phase 3 — 메인 랜딩 페이지 (/)
- [ ] HeroSection (메인 슬로건 + CTA 버튼)
- [ ] ServicesSection (8가지 서비스 카드)
- [ ] PricingSection (요금제 테이블)
- [ ] WhyUsSection (선택 이유 / 차별점)
- [ ] ProcessSection (계약~운영 단계별 프로세스)
- [ ] CTASection (상담 신청 유도)
- [ ] 스크롤 애니메이션 (Framer Motion)

### Phase 4 — 서브 페이지
- [ ] /services — 서비스 상세 설명 페이지
- [ ] /contact — 문의 폼 (이름, 학원명, 연락처, 관심 서비스)
- [ ] /portfolio — 포트폴리오 페이지 (실적 쌓이면 추가)

### Phase 5 — SEO & 최적화
- [ ] Google Analytics 4 연동
- [ ] Open Graph 이미지 설정 (카카오톡 공유용)
- [ ] sitemap.xml 자동 생성
- [ ] robots.txt 설정
- [ ] 이미지 최적화 (Next.js Image)
- [ ] 페이지 로딩 속도 최적화 (Lighthouse 90+ 목표)

### Phase 6 — 배포 & 런칭
- [ ] 브랜드 도메인 구매 (.co.kr 또는 .com)
- [ ] Vercel 커스텀 도메인 연결
- [ ] HTTPS 인증서 확인
- [ ] 최종 QA (PC + 모바일 + 태블릿)
- [ ] 카카오톡 공유 테스트
- [ ] 구글 서치 콘솔 등록

### 추후 추가 검토
- [ ] 카카오톡 상담 채널 연동 버튼
- [ ] 네이버 블로그/스마트스토어 링크
- [ ] 고객 후기/리뷰 섹션 (실적 쌓인 후)
- [ ] 관리자 페이지 (계약 클라이언트 관리용)

---

## 연락처

| 항목 | 내용 |
|------|------|
| 이메일 | [이메일] |
| 전화 | [전화번호] |
| 인스타그램 | [@계정명] |
| 스레드 | [@계정명] |

---

*마지막 업데이트: 2026-05-14*
