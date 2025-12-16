import { useEffect, useState } from 'react';

export function useMobileNavMini() {
  const [showMiniNav, setShowMiniNav] = useState(false);

  useEffect(() => {
    const isMobile = () => window.innerWidth <= 768;

    let lastY = window.scrollY;

    function onScroll() {
      if (!isMobile()) {
        setShowMiniNav(false);
        return;
      }

      const currentY = window.scrollY;

      // If near top, show full nav, hide mini
      if (currentY < 80) {
        setShowMiniNav(false);
        lastY = currentY;
        return;
      }

      if (currentY > lastY + 10) {
        // scrolling down: show mini nav
        setShowMiniNav(true);
      } else if (currentY < lastY - 10) {
        // scrolling up: show full nav again
        setShowMiniNav(false);
      }

      lastY = currentY;
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    onScroll(); // initial check

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return { showMiniNav, setShowMiniNav };
}
