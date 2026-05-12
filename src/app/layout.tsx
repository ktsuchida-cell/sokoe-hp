import type { Metadata, Viewport } from 'next';
import { Inter, Noto_Sans_JP, Noto_Serif_JP, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  weight: ['400', '500', '700'],
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  variable: '--font-noto-serif-jp',
  weight: ['400', '500', '700'],
  display: 'swap',
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://sokoe.co.jp';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'sokoe ｜ 現場を、本来の仕事に戻す。',
    template: '%s ｜ sokoe',
  },
  description:
    '介護施設を運営する会社がつくった、ヘルスケア領域のソフトウェアとAIコンサルティング。現場経験者が伴走します。',
  keywords: [
    '介護AI',
    'デイサービスアプリ',
    'AIコンサルティング',
    '介護DX',
    'ケアプランAI',
    '介護記録自動化',
  ],
  authors: [{ name: '株式会社sokoe' }],
  creator: '株式会社sokoe',
  publisher: '株式会社sokoe',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: siteUrl,
    siteName: 'sokoe',
    title: 'sokoe ｜ 現場を、本来の仕事に戻す。',
    description:
      '介護施設を運営する会社がつくった、ヘルスケア領域のソフトウェアとAIコンサルティング。',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'sokoe ｜ 現場を、本来の仕事に戻す。',
    description:
      '介護施設を運営する会社がつくった、ヘルスケア領域のソフトウェアとAIコンサルティング。',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#ffffff',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="ja"
      className={`${inter.variable} ${notoSansJP.variable} ${playfair.variable} ${notoSerifJP.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
