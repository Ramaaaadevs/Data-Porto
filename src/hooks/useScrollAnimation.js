import { useEffect } from "react";

/**
 * Hook untuk mengaktifkan animasi scroll-reveal (.scroll-animate).
 * Menambahkan class "animate-active" ketika elemen masuk viewport.
 * Dipanggil sekali per halaman (setelah render).
 */
export default function useScrollAnimation(deps = []) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-active");
            obs.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px", threshold: 0.12 }
    );

    const elements = document.querySelectorAll(".scroll-animate");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
