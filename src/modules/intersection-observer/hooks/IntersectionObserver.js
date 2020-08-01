import { useEffect, useRef, useState } from 'react';

function useIntersectionObserver({
    target,
    root,
    threshold = 0,
    rootMargin = '0px',
}) {
    const [isVisible, setIsVisible] = useState(false);
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
    }, [isVisible, setIsVisible]);
    return isVisible;
}

export default useIntersectionObserver;
