import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import './legal.css';

export const metadata: Metadata = { title: 'Legal & privacy' };

export default function LegalPage() {
  return (
    <div className="page-legal">
      <div style={{ background: '#FAF8F1' }}>
        <Nav />

        <section className="wrap" style={{ paddingTop: '48px', paddingBottom: '64px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p className="eyebrow">Legal &amp; privacy</p>
          <h1 style={{ margin: 0, fontSize: 'clamp(46px,7.4vw,108px)', lineHeight: .98, fontWeight: 300, letterSpacing: '-.04em' }}>The details.<br /><span style={{ fontWeight: 700 }}>Easy to find.</span></h1>
          <p style={{ margin: 0, fontSize: '21px', lineHeight: 1.55, color: '#47516A', maxWidth: '560px' }}>One document hub, with direct links to the information you need.</p>
        </section>
      </div>

      <section className="wrap" style={{ paddingBottom: '104px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: '40px', alignItems: 'start' }}>
        <nav className="idx" aria-label="Documents" style={{ background: '#E9EFF5', borderRadius: '28px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '2px', maxWidth: '420px' }}>
          <a href="#disclosure"><span>Initial disclosure</span><span aria-hidden="true">→</span></a>
          <a href="#terms"><span>Terms, fees &amp; refunds</span><span aria-hidden="true">→</span></a>
          <a href="#authority"><span>Limited customer authority</span><span aria-hidden="true">→</span></a>
          <a href="#privacy"><span>Privacy notice</span><span aria-hidden="true">→</span></a>
          <a href="#cookies"><span>Cookies &amp; device storage</span><span aria-hidden="true">→</span></a>
          <a href="#complaints"><span>Complaints procedure</span><span aria-hidden="true">→</span></a>
          <a href="#cancel"><span>Cancellation &amp; service completion</span><span aria-hidden="true">→</span></a>
          <a href="#access"><span>Accessibility &amp; extra support</span><span aria-hidden="true">→</span></a>
        </nav>

        <div style={{ gridColumn: 'span 2', display: 'flex', flexDirection: 'column', gap: '14px', minWidth: 0 }}>
          <details id="disclosure" open style={{ background: '#fff' }}><summary>Initial disclosure</summary><p>Who provides the service; regulated and unregulated scope; free alternatives; fees; limits; support; cancellation and complaints. A durable copy is supplied before you commit.</p></details>
          <details id="terms" open style={{ background: '#DCEDE6' }}><summary>Terms, fees &amp; refunds</summary><p>Your service schedule sets out the monthly fee for your package, when payment is taken and how to cancel. Our refund promise: If we complete three rounds of challenge and no entry has been removed or amended, you can claim a refund of 50% of the fees you have paid. If nine months have passed since you enrolled and three rounds have not been completed for reasons within our control, you can claim it as though they had.</p></details>
          <details id="authority" open style={{ background: '#fff' }}><summary>Limited customer authority</summary><p>Authority is limited to correspondence about credit-file accuracy. It does not authorise debt negotiations or repayment arrangements. Each challenge requires your separate approval.</p></details>
          <details id="privacy" open style={{ background: '#E9EFF5' }}><summary>Privacy notice</summary><p>Before we collect real data, we provide the controller and contact details, purposes and lawful bases, recipients, transfers and safeguards, retention, your rights, how to complain to the ICO and any relevant automated processing information.</p></details>
          <details id="cookies" open style={{ background: '#fff' }}><summary>Cookies &amp; device storage</summary><p>Optional non-essential storage and access technologies stay off until you make a valid choice.</p></details>
          <details id="complaints" open style={{ background: '#E9EFF5' }}><summary>Complaints procedure</summary><p>Complaining is free. Tell us by phone, email or letter. We acknowledge your complaint within 5 business days and send our final response within eight weeks. If it will take longer than four weeks, we write to explain why. If you are unhappy with our final response, or eight weeks have passed without one, you can refer your complaint to the Financial Ombudsman Service for free, usually within six months of our final response. CyberSweep is not regulated by the FCA, so complaints about it may not be eligible. For personal-data concerns, contact the ICO at ico.org.uk.</p></details>
          <details id="cancel" className="dark" open style={{ background: '#152139', color: '#fff' }}><summary>Cancellation &amp; service completion</summary><p style={{ color: '#DDE3EE' }}>You can cancel within 14 days of entering into the agreement, without giving a reason. If you ask us to start work during those 14 days and then cancel, you pay a proportionate amount for the work done, and we refund the balance. After that you can cancel monthly at any time, with no notice and no exit fee. Your service runs to the end of the month you have paid for.</p></details>
          <details id="access" open style={{ background: '#fff' }}><summary>Accessibility &amp; extra support</summary><p>Ask for another communication channel, more time or a different format. Support routes are available without logging in.</p></details>
          <p style={{ margin: '12px 0 0', fontSize: '15px', lineHeight: 1.7 }}>For complaints and Financial Ombudsman Service information, see <Link href="/support" style={{ textDecoration: 'underline', fontWeight: 600 }}>Support &amp; complaints</Link>. For personal-data complaints, visit <span style={{ fontWeight: 600 }}>ico.org.uk</span>.</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
