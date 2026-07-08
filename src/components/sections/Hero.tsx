import type { Lang } from '@/lib/i18n';
import { t } from '@/lib/i18n';
import { useCountdown } from '@/hooks/useCountdown';
import { useViewers } from '@/hooks/useViewers';

export function Hero({ lang }: { lang: Lang }) {
  const timer = useCountdown();
  const viewers = useViewers();

  return (
    <section className="hero">
      <div className="wrap">
        <div className="topbar">
          <div className="live">
            <span className="dot" />
            <span>
              <span id="viewers">{viewers}</span>{' '}
              {t(lang, 'женщины сейчас на сайте', 'жінки зараз на сайті')}
            </span>
          </div>
          <div className="timer-chip" id="chipTimer">{timer}</div>
        </div>

        <span className="plate">
          {t(lang, 'Аудиоинтенсив · 7 дней', 'Аудіоінтенсив · 7 днів')}
        </span>
        <h1>{t(lang, 'Бэушный ещё пожалеет', 'Бэушный ещё пожалеет')}</h1>
        <p className="stop">{t(lang, 'Стоп. Дыши.', 'Стоп. Дихай.')}</p>
        <p className="sub">
          {t(
            lang,
            'Тебя сейчас трясёт. Ты в десятый раз перечитываешь его последнее сообщение и не понимаешь, как дожить до утра. Первые 48 часов решают всё. На эти 48 часов у меня есть план — по часам.',
            'Тебе зараз трясе. Ти вдесяте перечитуєш його останнє повідомлення і не розумієш, як дожити до ранку. Перші 48 годин вирішують усе. На ці 48 годин у мене є план — по годинах.',
          )}
        </p>
        <p className="mut" style={{ marginBottom: 6 }}>
          {t(
            lang,
            'Без «поработай над собой». Без свечек и дневников. Только то, что работает, потому что бьёт по его инстинкту, а не по твоему сознанию.',
            'Без «попрацюй над собою». Без свічок і щоденників. Тільки те, що працює, тому що б\'є по його інстинкту, а не по твоїй свідомості.',
          )}
        </p>
        <div className="arrows">
          <span>▼</span>
          <span>▼</span>
          <span>▼</span>
        </div>
        <a href="#tariffs" className="btn btn-red cta-track">
          {t(lang, 'Дай мне план на 48 часов', 'Дай мені план на 48 годин')}
        </a>
        <p className="mut" style={{ textAlign: 'center', fontSize: 13, marginTop: 10 }}>
          {t(lang, 'Доступ приходит сразу после оплаты', 'Доступ приходить одразу після оплати')}
        </p>
      </div>
    </section>
  );
}
