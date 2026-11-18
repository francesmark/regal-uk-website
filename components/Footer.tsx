import Link from 'next/link';
import { Logo } from './Logo';

type FooterProps = {
  /** Thin top rule, used where the footer follows another navy section. */
  bordered?: boolean;
  /** Darker navy, used on the all-navy Partners page. */
  deep?: boolean;
};

export function Footer({ bordered = false, deep = false }: FooterProps) {
  const cls = ['foot', 'dark', bordered && 'foot--bordered', deep && 'foot--deep'].filter(Boolean).join(' ');
  return (
    <footer className={cls}>
      <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
        <Logo />
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0 28px' }}>
          <Link href="/support">Support &amp; complaints</Link>
          <Link href="/legal">Legal &amp; privacy</Link>
          <Link href="/legal#access">Need extra support?</Link>
          <Link href="/legal#cancel">Cancel or change a service</Link>
        </div>
        <p>Regal Credit Management Ltd · Registered in England and Wales. Company number 10725683.</p>
        <p>Registered office: 5a Bear Lane, Southwark, London, England SE1 0UH.</p>
        <p>Authorised and regulated by the Financial Conduct Authority. Firm Reference Number 1048230.</p>
        <p>FCA authorisation does not mean the FCA endorses our services or guarantees any outcome.</p>
      </div>
    </footer>
  );
}
