import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

const GA_ID = "G-XXXXXXXXXX"; // Google Analytics 측정 ID — 실제 ID로 교체 필요

export const metadata: Metadata = {
  metadataBase: new URL("https://academy-marketing-web.vercel.app"),
  title: "에듀라이즈 | 학원 마케팅 전문 대행사",
  description:
    "릴스 891만뷰 달성! 에듀라이즈의 학원 맞춤 마케팅. 웹페이지·SNS·네이버·당근 광고까지 원스톱. 광고비 포함 올인원 가격.",
  keywords: "에듀라이즈, EduRise, 학원마케팅, 학원SNS대행, 학원광고, 네이버플레이스, 스레드운영, 교육마케팅",
  openGraph: {
    title: "에듀라이즈 | 학원 마케팅 전문 대행사",
    description: "릴스 891만뷰 · 스레드 192.8만 조회 · 학원 원장님을 위한 맞춤 마케팅 솔루션",
    type: "website",
    locale: "ko_KR",
    siteName: "에듀라이즈",
  },
  twitter: {
    card: "summary_large_image",
    title: "에듀라이즈 | 학원 마케팅 전문 대행사",
    description: "릴스 891만뷰 · 스레드 192.8만 조회 · 학원 원장님을 위한 맞춤 마케팅 솔루션",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-smooth">
      <head>
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}');
        `}</Script>
      </head>
      <body className="min-h-full flex flex-col">
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
