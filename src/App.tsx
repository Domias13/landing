import { useGeoPay } from '@/hooks/useGeoPay';
import { Hero } from '@/components/sections/Hero';
import { PainSection } from '@/components/sections/PainSection';
import { PatternBreak } from '@/components/sections/PatternBreak';
import { Mechanism } from '@/components/sections/Mechanism';
import { Program } from '@/components/sections/Program';
import { ResultTimeline } from '@/components/sections/ResultTimeline';
import { Author } from '@/components/sections/Author';
import { NotFor } from '@/components/sections/NotFor';
import { Tariffs } from '@/components/sections/Tariffs';
import { Reviews } from '@/components/sections/Reviews';
import { Faq } from '@/components/sections/Faq';
import { Deadline } from '@/components/sections/Deadline';
import { Footer } from '@/components/sections/Footer';
import { StickyCta } from '@/components/sections/StickyCta';

function Hr() {
  return <div className="hr" />;
}

export default function App() {
  const { lang, payMode } = useGeoPay();

  return (
    <>
      <Hero lang={lang} />
      <Hr />
      <PainSection lang={lang} />
      <Hr />
      <PatternBreak lang={lang} />
      <Hr />
      <Mechanism lang={lang} />
      <Hr />
      <Program lang={lang} />
      <Hr />
      <ResultTimeline lang={lang} />
      <Hr />
      <Author lang={lang} />
      <Hr />
      <NotFor lang={lang} />
      <Hr />
      <Tariffs lang={lang} payMode={payMode} />
      <Hr />
      <Reviews lang={lang} />
      <Hr />
      <Faq lang={lang} />
      <Hr />
      <Deadline lang={lang} />
      <Footer lang={lang} />
      <StickyCta lang={lang} payMode={payMode} />
    </>
  );
}
