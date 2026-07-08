import { useEffect, useState } from 'react';
import type { Lang } from '@/lib/i18n';
import type { PayMode } from '@/hooks/useGeoPay';
import { t } from '@/lib/i18n';

export function StickyCta({ lang, payMode }: { lang: Lang; payMode: PayMode }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > 500);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const price = payMode === 'ua' ? '399 ₴' : '$9.99';

  return (
    <div id="stickyCta" className={`sticky-cta ${show ? 'show' : ''}`}>
      <div className="p">
        <span>{t(lang, '7 дней аудио от', '7 днів аудіо від')}</span>
        <b>{price}</b>
      </div>
      <a href="#tariffs" className="btn btn-red cta-track">
        {t(lang, 'Начать сегодня →', 'Почати сьогодні →')}
      </a>
    </div>
  );
}
