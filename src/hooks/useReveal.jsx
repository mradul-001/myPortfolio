import { useEffect, useRef, useState } from "react";

// Adds `is-in` once the element scrolls into view. Pair with the `.reveal` class.
export function useReveal(options = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // Show right away if there's no observer, or if it's already on screen
    // (e.g. the browser restored the scroll position on reload).
    const r = el.getBoundingClientRect();
    if (typeof IntersectionObserver === "undefined" || (r.top < window.innerHeight && r.bottom > 0)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px", ...options }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, inView];
}

export function Reveal({ className = "", delay = 0, children, ...rest }) {
  const [ref, inView] = useReveal();
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? "is-in" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </div>
  );
}
