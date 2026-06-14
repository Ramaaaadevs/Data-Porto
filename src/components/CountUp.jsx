import { useEffect, useState, useRef } from "react";

/**
 * Komponen CountUp untuk menganimasikan angka naik dari 0 ke target.
 * Animasi dipicu hanya ketika elemen masuk ke dalam viewport.
 * Mendukung awalan/akhiran string seperti "10M+" -> akan menghitung angka 10 dan menempelkan "M+".
 */
export default function CountUp({ value, duration = 1200 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  // Mengurai angka dan string suffix (misal: "10M+" -> numeric: 10, suffix: "M+")
  const stringVal = String(value);
  const numericPart = parseInt(stringVal.replace(/[^0-9]/g, ""), 10) || 0;
  const suffixPart = stringVal.replace(/[0-9]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const end = numericPart;
          if (end === 0) {
            setCount(0);
            return;
          }

          const totalFrames = 60; // 60 frame per animasi agar mulus
          const increment = end / totalFrames;
          const frameDuration = duration / totalFrames;
          let currentFrame = 0;

          const timer = setInterval(() => {
            currentFrame++;
            start += increment;
            if (currentFrame >= totalFrames) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, frameDuration);

          return () => clearInterval(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [numericPart, duration]);

  return <span ref={elementRef}>{count}{suffixPart}</span>;
}
