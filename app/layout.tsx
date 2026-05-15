import type { Metadata } from "next";
import "./globals.css";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

export const metadata: Metadata = {
  metadataBase: new URL("https://academy-marketing-web.vercel.app"),
  title: "현역오빠 | 학원 마케팅 전문 대행사",
  description:
    "릴스 891만뷰 달성! 현역오빠의 학원 맞춤 마케팅. 웹페이지·SNS·네이버·당근 광고까지 원스톱. 광고비 포함 올인원 가격.",
  keywords: "현역오빠, 학원마케팅, 학원SNS대행, 학원광고, 네이버플레이스, 스레드운영, 교육마케팅",
  openGraph: {
    title: "현역오빠 | 학원 마케팅 전문 대행사",
    description: "릴스 891만뷰 · 스레드 192.8만 조회 · 학원 원장님을 위한 맞춤 마케팅 솔루션",
    type: "website",
    locale: "ko_KR",
    siteName: "현역오빠",
  },
  twitter: {
    card: "summary_large_image",
    title: "현역오빠 | 학원 마케팅 전문 대행사",
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
      <body className="min-h-full flex flex-col">
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
