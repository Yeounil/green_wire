import type { Metadata } from "next";
import { Inter, Noto_Sans_KR, Caveat, Bebas_Neue, Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "./providers";
import Layout from "@/shared/components/Layout";
import { GA_MEASUREMENT_ID } from "@/lib/analytics";

// Inter 폰트 최적화 - 필요한 weight만 로드
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-inter",
});

// Noto Sans KR - 한국어 폰트 서브셋
const notoSansKR = Noto_Sans_KR({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
  preload: true,
  variable: "--font-noto-sans-kr",
});

// Caveat - 손글씨 폰트 (WarmOrganic 스타일용)
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
  preload: true,
  variable: "--font-caveat",
});

// Bebas Neue - Brutalist 디스플레이 폰트
const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  preload: true,
  variable: "--font-bebas",
});

// Syne - Brutalist 모던 폰트
const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  preload: true,
  variable: "--font-syne",
});



export const metadata: Metadata = {
  title: "Green Wire - AI를 활용한 증권 분석 웹 프로젝트",
  description: "AI 기술을 활용한 실시간 주식 시장 분석, 뉴스 요약, 투자 인사이트 제공",
  keywords: "주식, AI 분석, 금융, 투자, 실시간 차트, 뉴스 분석",
  authors: [{ name: "AI Finance Team" }],
  manifest: '/manifest.json',
  openGraph: {
    title: "Green Wire",
    description: "AI를 활용한 증권 분석 웹 프로젝트",
    type: "website",
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Green Wire',
  },
  formatDetection: {
    telephone: false,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icons/icon-192x192.png', type: 'image/png', sizes: '192x192' },
    ],
    apple: '/icons/icon-192x192.png',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning className={`${inter.variable} ${notoSansKR.variable} ${caveat.variable} ${bebasNeue.variable} ${syne.variable}`}>
      <head>
        {/* Pretendard 폰트 CDN */}
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
        {/* Google Analytics */}
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="font-pretendard antialiased">
        <Providers>
          <Layout>{children}</Layout>
        </Providers>
      </body>
    </html>
  );
}
