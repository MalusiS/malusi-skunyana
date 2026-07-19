// src/hooks/useScrollSpy.js

import { useEffect } from "react";

export function useScrollSpy(sectionIds, setActiveSection) {
  useEffect(() => {

    const update = () => {

      const marker = window.innerHeight * 0.35;

      let active = sectionIds[0];

      for (const id of sectionIds) {

        const section = document.getElementById(id);

        if (!section) continue;

        const rect = section.getBoundingClientRect();

        if (
          rect.top <= marker &&
          rect.bottom >= marker
        ) {
          active = id;
          break;
        }

      }

      setActiveSection(active);

    };

    update();

    window.addEventListener("scroll", update, {
      passive: true
    });

    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };

  }, [sectionIds, setActiveSection]);
}
