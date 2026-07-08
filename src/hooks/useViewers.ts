import { useEffect, useState } from 'react';

/** Fake "women currently on the site" counter, random-walking like the original page. */
export function useViewers(): number {
  const [v, setV] = useState(42);

  useEffect(() => {
    const id = setInterval(() => {
      setV((prev) => {
        let next = prev + Math.floor(Math.random() * 5) - 2;
        if (next < 33) next = 33;
        if (next > 57) next = 57;
        return next;
      });
    }, 7000);
    return () => clearInterval(id);
  }, []);

  return v;
}
