import type { Metadata } from 'next';
import localFont from 'next/font/local';
import GlobalNavBer from './components/gnb/GlobalNavBar';
import './globals.css';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'TeamPhanes API Docs',
  description: 'TeamPhanes API 명세서',
  icons: {
    icon: '/TeamPhanes.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalNavBer />
        {children}
      </body>
    </html>
  );
}
