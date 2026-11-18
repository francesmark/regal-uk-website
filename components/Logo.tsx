import Image from 'next/image';
import Link from 'next/link';

type LogoProps = {
  /** Navy artwork for orange backgrounds (Contact hero). */
  navy?: boolean;
};

export function Logo({ navy = false }: LogoProps) {
  return (
    <Link className="logo" href="/" aria-label="Regal Credit Management, home">
      <Image src={navy ? '/logo-navy.png' : '/logo.png'} alt="" width={104} height={61} priority />
    </Link>
  );
}
