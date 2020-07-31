import { useEffect, useRef } from 'react';

function useIntersectionObserver({
    target,
    setIsVisible,
    root,
    threshold = 0,
    rootMargin = '0px',
}) {
    const observer = useRef(null);

    const callback = (entries, observe) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observe.unobserve(target.current);
            }
        });
    };
    useEffect(() => {
        observer.current = new IntersectionObserver(callback, {
            root,
            rootMargin,
            threshold,
        });
        const { current } = target;
        observer.current.observe(current);
        return () => {
            observer.current.unobserve(current);
        };
    });
}

export default useIntersectionObserver;
