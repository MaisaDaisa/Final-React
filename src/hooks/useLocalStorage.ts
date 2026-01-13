import { useCallback, useEffect, useState } from 'react';

type SetValue<T> = T | ((prev: T) => T);

export function useLocalStorage<T>(key: string, initialValue: T) {
    const readValue = (): T => {
        if (typeof window === 'undefined') {
            return initialValue;
        }

        try {
            const item = window.localStorage.getItem(key);
            return item ? (JSON.parse(item) as T) : initialValue;
        } catch {
            return initialValue;
        }
    };

    const [storedValue, setStoredValue] = useState<T>(readValue);

    const setValue = useCallback(
        (value: SetValue<T>) => {
            setStoredValue((prev) => {
                const next =
                    typeof value === 'function'
                        ? (value as (v: T) => T)(prev)
                        : value;

                try {
                    window.localStorage.setItem(key, JSON.stringify(next));
                } catch {
                    // silent failing
                }

                return next;
            });
        },
        [key],
    );

    useEffect(() => {
        setStoredValue(readValue());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);

    useEffect(() => {
        const onStorage = (e: StorageEvent) => {
            if (e.key === key) {
                setStoredValue(readValue());
            }
        };

        window.addEventListener('storage', onStorage);
        return () => window.removeEventListener('storage', onStorage);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);

    return [storedValue, setValue] as const;
}
