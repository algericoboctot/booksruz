'use client';
import { ReactNode, useState } from "react";
import { QueryClientProvider, QueryClient} from "react-query";
const BookQueryProvider = ({ children } : { children: ReactNode}) => {
    const [queryClient] = useState(() => new QueryClient);
    return(
        <>
            <QueryClientProvider client={queryClient}>
                { children }
            </QueryClientProvider>
        </>
    );
}

export default BookQueryProvider;