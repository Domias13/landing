import type { Lang } from '@/lib/i18n';
import { t } from '@/lib/i18n';

export function Footer({ lang }: { lang: Lang }) {
  return (
    <footer>
      <div className="wrap">
        <p>© 2026 Роман Вейл · «Бэушный ещё пожалеет»</p>
        <p style={{ marginTop: 6 }}>
          {t(
            lang,
            'Результаты индивидуальны. Интенсив не заменяет помощь врача или психотерапевта.',
            'Результати індивідуальні. Інтенсив не замінює допомогу лікаря чи психотерапевта.',
          )}
        </p>
      </div>
    </footer>
  );
}
