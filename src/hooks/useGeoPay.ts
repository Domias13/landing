import { useEffect, useState } from 'react';
import type { Lang } from '@/lib/i18n';

export type PayMode = 'ua' | 'ru' | 'world';

export interface GeoPayState {
  lang: Lang;
  payMode: PayMode;
}

/**
 * Mirrors the original site's client-side geo/language detection:
 * - Ukrainian browser language, or IP country UA -> Ukrainian copy + WayForPay only.
 * - IP country RU -> Russian copy + Stripe and PayPal.
 * - everything else -> Russian copy + PayPal only.
 */
export function useGeoPay(): GeoPayState {
  const [state, setState] = useState<GeoPayState>(() => {
    const browserUk = (navigator.language || '').toLowerCase().startsWith('uk');
    return { lang: browserUk ? 'uk' : 'ru', payMode: browserUk ? 'ua' : 'world' };
  });

  useEffect(() => {
    const browserUk = (navigator.language || '').toLowerCase().startsWith('uk');
    if (browserUk) {
      setState({ lang: 'uk', payMode: 'ua' });
    }

    let cancelled = false;
    fetch('https://ipapi.co/json/')
      .then((r) => r.json())
      .then((d) => {
        if (cancelled) return;
        const c = (d && d.country_code) || '';
        if (c === 'UA' || browserUk) {
          setState({ lang: 'uk', payMode: 'ua' });
        } else if (c === 'RU') {
          setState({ lang: 'ru', payMode: 'ru' });
        } else {
          setState({ lang: 'ru', payMode: 'world' });
        }
      })
      .catch(() => {
        if (!cancelled && !browserUk) {
          setState({ lang: 'ru', payMode: 'world' });
        }
      });

    return () => {
      cancelled = true;
    };
  }, []);

  return state;
}
