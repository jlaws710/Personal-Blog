import { useEffect, useState } from "react";

export default function useMountAnimation(delay = 50) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  return mounted;
}
