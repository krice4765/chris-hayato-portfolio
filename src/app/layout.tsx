import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import ThemeProvider from '@/components/ThemeProvider';
import StructuredData from '@/components/StructuredData';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: {
    default: 'クリスハヤト | ITエンジニア出身の動画編集者ポートフォリオ',
    template: '%s | クリスハヤト',
  },
  description:
    'ITエンジニア出身の動画編集者、クリスハヤトのポートフォリオサイト。技術的信頼性と論理的思考力で、ビジネス系・エンタメ系・Vlog系のショート動画を制作。週60時間以上稼働、Adobe Premiere Pro使用。',
  keywords: [
    '動画編集',
    '動画編集者',
    'ビジネス動画',
    'エンタメ動画',
    'Vlog',
    'ショート動画',
    'TikTok',
    'Instagram',
    'ITエンジニア',
    'フリーランス',
    'Adobe Premiere Pro',
    '動画制作',
  ],
  authors: [{ name: 'クリスハヤト', url: 'https://www.tiktok.com/@chris_hayato' }],
  creator: 'クリスハヤト',
  publisher: 'クリスハヤト',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://chris-hayato-portfolio.vercel.app',
    title: 'クリスハヤト | ITエンジニア出身の動画編集者ポートフォリオ',
    description:
      'ITエンジニア出身の動画編集者。技術的信頼性と論理的思考力で、あなたのメッセージを最大化。週60時間以上稼働、7作品以上の実績。',
    siteName: 'クリスハヤト ポートフォリオ',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'クリスハヤト | ITエンジニア出身の動画編集者',
    description:
      'ITエンジニア出身の動画編集者。技術的信頼性と論理的思考力で、ビジネス系・エンタメ系・Vlog系のショート動画を制作。',
  },
  alternates: {
    canonical: 'https://chris-hayato-portfolio.vercel.app',
  },
  verification: {
    google: 'verification_token_here', // Google Search Console verification
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={inter.variable}>
      <head>
        <StructuredData />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
