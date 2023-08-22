"use client";

import { ReactNode } from "react";
import { QueryClientProvider, QueryClient} from "react-query";

const queryClient = new QueryClient()
export default function GenresLayout({
    children, // will be a page or nested layout
  }: {
    children: ReactNode
  }) {
    return (
        <>
            <QueryClientProvider client={queryClient}>
              {children}
            </QueryClientProvider>
        </>
    )
}