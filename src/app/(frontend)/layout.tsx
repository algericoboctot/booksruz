import { ReactNode } from 'react';
import '@/app/globals.css';
import { Inter, Roboto } from 'next/font/google'
import Head from 'next/head';
import MainHeader from '@/components/frontend/header/header';
import MainFooter from '@/components/frontend/footer/footer';

const roboto = Roboto({
  weight: ['100','300','400','500','700','900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'Bookzrus',
  description: 'Your online books for free',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const classList = [roboto.className,'bg-white'];
  return (
    <html lang="en">
      <body className={classList.join(' ')}>
        <main>
          <MainHeader />
            <section>
                {children}
            </section>
          <MainFooter />
        </main>
      </body>
    </html>
  )
}
