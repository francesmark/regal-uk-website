import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'navy';

const CLASS: Record<Variant, string> = {
  primary: 'btn', // orange fill, navy text, 56px
  outline: 'btn-o', // 2px currentColor border
  navy: 'btn-navy', // navy fill, for orange backgrounds
};

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  children: ReactNode;
};

/** Link styled as a button. Internal paths use next/link; #anchors and mailto/tel use <a>. */
export function ButtonLink({ href, variant = 'primary', children }: ButtonLinkProps) {
  const className = CLASS[variant];
  if (href.startsWith('/')) {
    return (
      <Link className={className} href={href}>
        {children}
      </Link>
    );
  }
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant };

export function Button({ variant = 'primary', className, type = 'button', ...rest }: ButtonProps) {
  return <button type={type} className={[CLASS[variant], className].filter(Boolean).join(' ')} {...rest} />;
}

type ToggleButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'aria-pressed'> & {
  pressed: boolean;
  /** "tab": compact pill (Home). "seg": larger card with a price line (Services). */
  shape?: 'tab' | 'seg';
};

/** Pressed-state toggle. Colours come from [aria-pressed] in globals.css. */
export function ToggleButton({ pressed, shape = 'tab', className, ...rest }: ToggleButtonProps) {
  return (
    <button
      type="button"
      aria-pressed={pressed}
      className={[shape, className].filter(Boolean).join(' ')}
      {...rest}
    />
  );
}
