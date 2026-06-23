import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://eduflows.kr"),
  title: "에듀플로우 | 학원 마케팅 전문 대행사",
  description:
    "릴스 891만뷰 달성! 에듀플로우의 학원 맞춤 마케팅. 웹페이지·SNS·네이버·카카오까지 원스톱. 광고비 포함 올인원 가격.",
  keywords: "에듀플로우, EduFlow, 학원마케팅, 학원SNS대행, 학원광고, 네이버플레이스, 스레드운영, 교육마케팅",
  openGraph: {
    title: "에듀플로우 | 학원 마케팅 전문 대행사",
    description: "릴스 891만뷰 · 스레드 192.8만 조회 · 학원 원장님을 위한 맞춤 마케팅 솔루션",
    type: "website",
    locale: "ko_KR",
    siteName: "에듀플로우",
  },
  twitter: {
    card: "summary_large_image",
    title: "에듀플로우 | 학원 마케팅 전문 대행사",
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {GA_ID && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">{`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}');
            `}</Script>
          </>
        )}
      </head>
      <body className="min-h-full flex flex-col">
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
