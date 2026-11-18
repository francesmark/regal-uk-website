import Link from 'next/link';
import { Logo } from './Logo';

export type PageKey = 'how-it-works' | 'services' | 'about' | 'partners' | 'contact';

const LINKS: { key: PageKey; href: string; label: string }[] = [
  { key: 'how-it-works', href: '/how-it-works', label: 'How it works' },
  { key: 'services', href: '/services', label: 'Services' },
  { key: 'about', href: '/about', label: 'About' },
  { key: 'partners', href: '/partners', label: 'For partners' },
  { key: 'contact', href: '/contact', label: 'Contact' },
];

type NavProps = {
  /** Marks the current page (pill + aria-current). */
  current?: PageKey;
  /** Background the nav sits on. Changes hover tint, active pill and logo. */
  tone?: 'light' | 'dark' | 'orange';
  /** Home only: show Contact as a pill even though it is not the current page. */
  contactCta?: boolean;
};

export function Nav({ current, tone = 'light', contactCta = false }: NavProps) {
  return (
    <header className={`wrap nav${tone !== 'light' ? ` nav--${tone}` : ''}`}>
      <Logo navy={tone === 'orange'} />
      <nav aria-label="Main">
        {LINKS.map(({ key, href, label }) => {
          const isCurrent = key === current;
          const pill = isCurrent || (contactCta && key === 'contact');
          return (
            <Link
              key={key}
              href={href}
              aria-current={isCurrent ? 'page' : undefined}
              className={pill ? 'nav-pill' : undefined}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
