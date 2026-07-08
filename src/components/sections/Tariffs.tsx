import type { Lang } from '@/lib/i18n';
import type { PayMode } from '@/hooks/useGeoPay';
import { t } from '@/lib/i18n';
import { Reveal } from '@/components/Reveal';
import { useCountdown } from '@/hooks/useCountdown';

interface TariffProps {
  lang: Lang;
  payMode: PayMode;
}

function PayButtons({
  payMode,
  stripe,
  paypal,
  wfp,
  cls,
  lang,
}: {
  payMode: PayMode;
  stripe: string;
  paypal: string;
  wfp: string;
  cls: string;
  lang: Lang;
}) {
  return (
    <>
      {payMode === 'ua' && (
        <a className={`btn ${cls} pay-track`} href={wfp} target="_blank" rel="noopener noreferrer">
          {t(lang, 'Оплатить — WayForPay', 'Оплатити — WayForPay')}
        </a>
      )}
      {payMode === 'ru' && (
        <a className={`btn ${cls} pay-track`} href={stripe} target="_blank" rel="noopener noreferrer">
          {t(lang, 'Оплатить картой (Stripe)', 'Оплатити карткою (Stripe)')}
        </a>
      )}
      {(payMode === 'ru' || payMode === 'world') && (
        <a className={`btn ${cls === 'btn-gold' ? 'btn-ghost' : cls} pay-track`} href={paypal} target="_blank" rel="noopener noreferrer">
          {t(lang, 'Оплатить через PayPal', 'Оплатити через PayPal')}
        </a>
      )}
    </>
  );
}

export function Tariffs({ lang, payMode }: TariffProps) {
  const timer = useCountdown();

  return (
    <Reveal as="section" id="tariffs">
      <div className="wrap">
        <span className="plate">{t(lang, 'Цена действует, пока идёт поток', 'Ціна діє, поки йде потік')}</span>
        <h2>{t(lang, 'Выбери свой вариант', 'Вибери свій варіант')}</h2>
        <p className="mut" style={{ marginBottom: 26 }}>
          {t(lang, 'Скидка сгорит через', 'Знижка згорить через')}{' '}
          <b id="inlineTimer1" style={{ color: 'var(--gold)' }}>{timer}</b>
        </p>

        {/* BASIC */}
        <div className="tarif">
          <h3>{t(lang, 'Базовый', 'Базовий')}</h3>
          <p className="mut" style={{ fontSize: 14 }}>{t(lang, 'Чтобы пережить и не сломаться', 'Щоб пережити і не зламатись')}</p>
          <ul className="inc">
            <li>{t(lang, 'Аудиоинтенсив «Бэушный ещё пожалеет» — 7 дней', 'Аудіоінтенсив «Бэушный ещё пожалеет» — 7 днів')}</li>
          </ul>
          <div className="price">
            <span className="now">
              {payMode === 'ua' ? '399 ₴' : '$9.99'}
            </span>
            <span className="old">
              {payMode === 'ua' ? '990 ₴' : '$24'}
            </span>
          </div>
          <p className="note">{t(lang, 'Доступ навсегда. Слушай, когда трясёт.', 'Доступ назавжди. Слухай, коли трясе.')}</p>
          <PayButtons
            payMode={payMode}
            stripe="https://buy.stripe.com/6oUbJ30QifWh2xceBa3ZK0k"
            paypal="https://www.paypal.com/ncp/payment/TX4CSD6R5C2JQ"
            wfp="https://secure.wayforpay.com/button/bd79c278fab86"
            cls="btn-ghost"
            lang={lang}
          />
        </div>

        {/* OPTIMAL */}
        <div className="tarif mid">
          <div className="badge-top">{t(lang, '⭐ Выбор большинства', '⭐ Вибір більшості')}</div>
          <h3 className="gold">{t(lang, 'Оптимальный', 'Оптимальний')}</h3>
          <p className="mut" style={{ fontSize: 14 }}>{t(lang, 'Чтобы не просто пережить, а развернуть ситуацию', 'Щоб не просто пережити, а розвернути ситуацію')}</p>
          <ul className="inc">
            <li>{t(lang, 'Аудиоинтенсив «Бэушный ещё пожалеет» — 7 дней', 'Аудіоінтенсив «Бэушный ещё пожалеет» — 7 днів')}</li>
            <li>{t(lang, 'Практикум «Про женщину, которая влюбляет навсегда»', 'Практикум «Про жінку, яка закохує назавжди»')}</li>
          </ul>
          <div className="price">
            <span className="now gold">
              {payMode === 'ua' ? '664 ₴' : '$14.99'}
            </span>
            <span className="old">
              {payMode === 'ua' ? '1650 ₴' : '$39'}
            </span>
          </div>
          <p className="note">{t(lang, '9 из 10 берут этот вариант. Практикум отдельно стоит дороже всего пакета.', '9 з 10 беруть цей варіант. Практикум окремо коштує дорожче за весь пакет.')}</p>
          <PayButtons
            payMode={payMode}
            stripe="https://buy.stripe.com/8x2bJ3aqSh0lfjY78I3ZK0j"
            paypal="https://www.paypal.com/ncp/payment/L9MBPZRCTGFBG"
            wfp="https://secure.wayforpay.com/button/b94dd4cd56518"
            cls="btn-gold"
            lang={lang}
          />
        </div>

        {/* VIP */}
        <div className="tarif">
          <h3>VIP</h3>
          <p className="mut" style={{ fontSize: 14 }}>{t(lang, 'Для тех, кто хочет закрыть вопрос полностью, а не только пережить боль', 'Для тих, хто хоче закрити питання повністю, а не тільки пережити біль')}</p>
          <ul className="inc">
            <li>{t(lang, 'Аудиоинтенсив «Бэушный ещё пожалеет» — 7 дней', 'Аудіоінтенсив «Бэушный ещё пожалеет» — 7 днів')}</li>
            <li>{t(lang, 'Практикум «Про женщину, которая влюбляет навсегда»', 'Практикум «Про жінку, яка закохує назавжди»')}</li>
            <li>{t(lang, 'Вебинар-разбор «Почему он ушёл на самом деле: мужской взгляд»', 'Вебінар-розбір «Чому він пішов насправді: чоловічий погляд»')}</li>
          </ul>
          <div className="price">
            <span className="now">
              {payMode === 'ua' ? '1999 ₴' : '$49.99'}
            </span>
            <span className="old">
              {payMode === 'ua' ? '4900 ₴' : '$99'}
            </span>
          </div>
          <p className="note">{t(lang, 'После разбора ты больше не будешь гадать «почему». Ты будешь знать.', 'Після розбору ти більше не будеш гадати «чому». Ти будеш знати.')}</p>
          <PayButtons
            payMode={payMode}
            stripe="https://buy.stripe.com/3cI6oJ8iK8tP8VA50A3ZK0l"
            paypal="https://www.paypal.com/ncp/payment/MZCJ6M5TM7X7W"
            wfp="https://secure.wayforpay.com/button/baaf391f3c4bf"
            cls="btn-red"
            lang={lang}
          />
        </div>
      </div>
    </Reveal>
  );
}
