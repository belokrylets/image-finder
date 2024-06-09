import { useEffect, useRef, useCallback } from 'react';

export const useInfiniteScroll = (callback: () => void) => {
    const observer = useRef<IntersectionObserver | null>(null);
    const lastElementRef = useRef<HTMLDivElement | null>(null);

    const setLastElement = useCallback(
        (node: HTMLDivElement | null) => {
            if (observer.current) observer.current.disconnect();

            observer.current = new IntersectionObserver(
                (entries) => {
                    if (entries[0].isIntersecting) {
                        callback();
                    }
                },
                {
                    root: null,
                    rootMargin: '0px',
                    threshold: 1.0,
                },
            );

            if (node) {
                observer.current.observe(node);
            }

            lastElementRef.current = node;
        },
        [callback],
    );

    useEffect(() => {
        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, []);

    return setLastElement;
};
