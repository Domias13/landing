import type { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

export function Reveal({
  as: Tag = 'div',
  children,
  className = '',
  id,
}: {
  as?: 'div' | 'section';
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  const { ref, className: revealClass } = useReveal();
  return (
    <Tag ref={ref as never} id={id} className={`${revealClass} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
