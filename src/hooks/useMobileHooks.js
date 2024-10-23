import { useCallback, useEffect, useState } from 'react';

export const useMobileHooks = () => {
    const [mobileView, setMobileView] = useState(window.innerWidth < 600);
    const currentWidth = window.innerWidth
    const handleResize = useCallback(() => {
        setMobileView(window.innerWidth <= 600);
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [handleResize]);

    return { mobileView, currentWidth };
};
