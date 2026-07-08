import type { Lang } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import { Reveal } from '@/components/Reveal';
import { useCountdown } from '@/hooks/useCountdown';

export function Deadline({ lang }: { lang: Lang }) {
  const timer = useCountdown();
  return (
    <Reveal as="section">
      <div className="wrap">
        <div className="deadline">
          <span className="plate">{t(lang, 'Поток закрывается', 'Потік закривається')}</span>
          <p>
            {t(
              lang,
              'Я веду потоки ограниченно — иначе не успеваю отвечать участницам. Скидка на этот поток сгорит через:',
              'Я веду потоки обмежено — інакше не встигаю відповідати учасницям. Знижка на цей потік згорить через:',
            )}
          </p>
          <div className="big-timer" id="bigTimer">{timer}</div>
          <p className="mut" style={{ fontSize: 14, marginBottom: 18 }}>
            {t(lang, 'Дальше — полная цена и очередь на следующий поток.', 'Далі — повна ціна і черга на наступний потік.')}
          </p>
          <p style={{ fontWeight: 800, fontSize: 18, marginBottom: 4 }}>
            {t(lang, 'Он уже живёт дальше.', 'Він уже живе далі.')}
          </p>
          <p style={{ marginBottom: 16 }}>
            {t(
              lang,
              'Выбирай: ещё один вечер в его сторис — или первый день плана.',
              'Вибирай: ще один вечір у його сторіс — або перший день плану.',
            )}
          </p>
          <div className="arrows">
            <span>▼</span>
            <span>▼</span>
            <span>▼</span>
          </div>
          <a href="#tariffs" className="btn btn-gold cta-track">
            {t(lang, 'Забрать доступ со скидкой', 'Забрати доступ зі знижкою')}
          </a>
        </div>
        <a
          id="tgBtn"
          className="tg-btn"
          style={{ marginTop: 22 }}
          href="https://t.me/back4heart"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
            <path
              d="M21.9 4.3c.3-1.2-.9-2.2-2-1.7L2.7 9.5c-1.2.5-1.1 2.2.1 2.6l4.4 1.4 1.7 5.3c.3 1 1.6 1.3 2.4.6l2.4-2.2 4.3 3.2c.9.6 2.1.2 2.4-.9l3-15.2z"
              fill="#fff"
              opacity=".9"
            />
          </svg>
          <span>{t(lang, 'Связаться в Telegram', 'Зв\'язатися в Telegram')}</span>
        </a>
      </div>
    </Reveal>
  );
}
