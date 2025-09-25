"use client";

import useMountAnimation from "../hooks/useMountAnimation";

export default function Transition({ children, delay = 50, className = "", enter = "opacity-100 translate-y-0", from = "opacity-0 -translate-y-6", base = "transform transition-all duration-700 ease-out" }) {
  const mounted = useMountAnimation(delay);

  return (
    <div className={`${base} ${className} ${mounted ? enter : from}`}>
      {children}
    </div>
  );
}
