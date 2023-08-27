"use client";

import { ReactNode, useState } from "react";
import { QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient()
export default function BooksLayout({
    children, // will be a page or nested layout
  }: {
    children: ReactNode
  }) {
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () => {
      setCartIsShown(true);
    };
  
    const hideCartHandler = () => {
      setCartIsShown(false);
    };

    return (
        <>
            <QueryClientProvider client={queryClient}>
                {children}
            </QueryClientProvider>
        </>
    )
}