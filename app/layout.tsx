import type { Metadata } from "next";
import "./globals.css";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

export const metadata: Metadata = {
  title: "학원 마케팅 전문 대행사 | 교육 브랜드 성장 파트너",
  description:
    "학원을 위한 맞춤 마케팅 대행 서비스. 웹페이지 제작, 스레드·블로그 운영, 네이버 광고, 당근 광고까지 원스톱으로 관리해드립니다.",
  keywords: "학원마케팅, 교육마케팅, 학원광고, 네이버플레이스, 블로그마케팅, 스레드운영",
  openGraph: {
    title: "학원 마케팅 전문 대행사",
    description: "학원 원장님을 위한 맞춤 마케팅 솔루션",
    type: "website",
    locale: "ko_KR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col">
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
