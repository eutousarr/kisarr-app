import '../globals.css';
 
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
 
import { Locale } from '@/features/internationalization/i18n-config';
 
const inter = Inter({ subsets: ['latin'] });
 
export const metadata: Metadata = {
  title: "Jan Hesters' Next.js for production tutorial",
  description: 'Brought to you by ReactSquad.io',
};
 
export default function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { lang: Locale };
}>) {
  return (
    <html lang={params.lang}>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
