import { useEffect, useState } from 'react';

const KEY = 'bp_deadline_v1';
const DURATION_MS = 3 * 3600 * 1000;

function pad(n: number): string {
  return n < 10 ? '0' + n : '' + n;
}

function format(ms: number): string {
  const s = Math.floor(ms / 1000);
  return `${pad(Math.floor(s / 3600))}:${pad(Math.floor((s % 3600) / 60))}:${pad(s % 60)}`;
}

/** Shared countdown deadline persisted in localStorage, matching the original page's timers. */
export function useCountdown(): string {
  const [display, setDisplay] = useState('--:--:--');

  useEffect(() => {
    let dl = parseInt(localStorage.getItem(KEY) || '0', 10);
    if (!dl || dl < Date.now()) {
      dl = Date.now() + DURATION_MS;
      localStorage.setItem(KEY, String(dl));
    }

    function tick() {
      let ms = dl - Date.now();
      if (ms < 0) {
        ms = 0;
        dl = Date.now() + DURATION_MS;
        localStorage.setItem(KEY, String(dl));
      }
      setDisplay(format(ms));
    }

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return display;
}
