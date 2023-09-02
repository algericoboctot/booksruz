import { useEffect, useState } from "react";

function useDebounce<T>(value: T, delay: number = 250): T {
    const [debounceValue, setDebounceValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => {
            clearTimeout(handler);
        }
    }, [value, delay]);

    return debounceValue;
};

export default useDebounce;