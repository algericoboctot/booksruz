'use client';

import { ReactNode, useState } from 'react';
import '@/app/globals.css';
import { Roboto } from 'next/font/google'
import MainHeader from '@/components/frontend/layouts/header/header';
import MainFooter from '@/components/frontend/layouts/footer/footer';
import CartProvider from '@/store/frontend/cart/cartprovider';
import WishProvider from '@/store/frontend/wishlist/wishprovider';

const roboto = Roboto({
  weight: ['100','300','400','500','700','900'],
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const classList = [roboto.className,'bg-white'];

  return (
    <html lang="en">
      <body className={classList.join(' ')}>
        <main className='relative'>
          <CartProvider>
            <WishProvider>
              <MainHeader />
                <section className='relative z-10'>
                    {children}
                </section>
              <MainFooter />
            </WishProvider>
          </CartProvider>
        </main>
      </body>
    </html>
  )
}
