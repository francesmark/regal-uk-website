import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import './support.css';

export const metadata: Metadata = { title: 'Support & complaints' };

export default function SupportPage() {
  return (
    <div className="page-support">
      <div style={{ background: '#FAF8F1' }}>
        <Nav />

        <section className="wrap" style={{ paddingTop: '56px', paddingBottom: '88px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(440px,100%),1fr))', gap: '56px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <p className="eyebrow">Support &amp; complaints</p>
            <h1 style={{ margin: 0, fontSize: 'clamp(46px,6.4vw,92px)', lineHeight: 1, fontWeight: 600, letterSpacing: '-.04em' }}>The right help.<br />A clear route.</h1>
            <p style={{ margin: 0, fontSize: '21px', lineHeight: 1.55, color: '#47516A', maxWidth: '520px' }}>Find help, request an adjustment or raise a concern without signing in.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <Link className="help" href="/how-it-works#faq" style={{ background: '#fff' }}><div><strong>Understand a record</strong><span className="d">Browse common questions in How it works.</span></div><span aria-hidden="true" style={{ fontSize: '28px' }}>→</span></Link>
            <Link className="help" href="/legal#access" style={{ background: '#E9EFF5' }}><div><strong>Need extra support?</strong><span className="d">Ask for another contact channel, more time or another format. Share only what is necessary to help.</span></div><span aria-hidden="true" style={{ fontSize: '28px' }}>→</span></Link>
            <Link className="help" href="/legal#cancel" style={{ background: '#DCEDE6' }}><div><strong>Cancel or change a service</strong><span className="d">No sales call or unnecessary evidence should stand in the way. Read the cancellation and service-completion information.</span></div><span aria-hidden="true" style={{ fontSize: '28px' }}>→</span></Link>
          </div>
        </section>
      </div>

      {/* COMPLAINTS TIMELINE */}
      <section style={{ background: '#E9EFF5', paddingTop: '96px', paddingBottom: '72px' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(400px,100%),1fr))', gap: '64px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(38px,5vw,72px)', lineHeight: 1.02, fontWeight: 600, letterSpacing: '-.03em' }}>Complaining is free.</h2>
            <div style={{ background: '#fff', borderRadius: '24px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '16px', lineHeight: 1.6 }}>
              <a href="mailto:info@regalcredituk.com" style={{ fontWeight: 600, minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>info@regalcredituk.com</a>
              <a href="tel:02074425543" style={{ fontWeight: 600, minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>020 7442 5543</a>
              <span style={{ color: '#47516A' }}>Write to Complaints, Regal Credit Management Ltd, 5a Bear Lane, Southwark, London, England SE1 0UH.</span>
            </div>
            <p style={{ margin: 0, fontSize: '15px', lineHeight: 1.7 }}><Link href="/legal#complaints" style={{ fontWeight: 600, textDecoration: 'underline', minHeight: '44px', display: 'inline-flex', alignItems: 'center' }}>Read our full complaints procedure</Link><br /><span style={{ fontWeight: 600 }}>financial-ombudsman.org.uk</span> · For personal-data concerns: <span style={{ fontWeight: 600 }}>ico.org.uk</span></p>
          </div>
          <div>
            <div className="step"><div className="node">1</div><div><h3 style={{ margin: '0 0 8px', fontSize: '24px', fontWeight: 600 }}>Tell us what happened</h3><p style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: '#47516A' }}>Give relevant dates and the outcome you want. Keep sensitive evidence out of general email.</p></div></div>
            <div className="step"><div className="node">2</div><div><h3 style={{ margin: '0 0 8px', fontSize: '24px', fontWeight: 600 }}>Acknowledge and review</h3><p style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: '#47516A' }}>We acknowledge your complaint within 5 business days, then review the facts fairly and promptly.</p></div></div>
            <div className="step"><div className="node">3</div><div><h3 style={{ margin: '0 0 8px', fontSize: '24px', fontWeight: 600 }}>Receive a written response</h3><p style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: '#47516A' }}>We will send you our final answer within eight weeks. If it will take longer than four weeks, we will write to explain why.</p></div></div>
            <div className="step"><div className="node">4</div><div><h3 style={{ margin: '0 0 8px', fontSize: '24px', fontWeight: 600 }}>Independent escalation</h3><p style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: '#47516A' }}>If you are unhappy with our answer, or have waited eight weeks, you can refer your complaint to the Financial Ombudsman Service for free, usually within six months of our final response. CyberSweep is not regulated by the FCA, so complaints about it may not be eligible for the Financial Ombudsman Service.</p></div></div>
          </div>
        </div>
      </section>

      {/* DEBT ADVICE */}
      <section className="dark" style={{ background: '#152139', color: '#fff', paddingTop: '88px', paddingBottom: '88px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(34px,4.6vw,64px)', lineHeight: 1.05, fontWeight: 600, letterSpacing: '-.02em' }}>Need debt advice?</h2>
          <p style={{ margin: 0, fontSize: '19px', lineHeight: 1.7, color: '#C9D1E0', maxWidth: '760px' }}>We do not provide debt advice, negotiate repayments, arrange credit or represent you in court. Independent help is available from:</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <span style={{ padding: '14px 24px', borderRadius: '999px', background: '#DCEDE6', color: '#152139', fontWeight: 600, fontSize: '17px' }}>MoneyHelper</span>
            <span style={{ padding: '14px 24px', borderRadius: '999px', background: '#DCEDE6', color: '#152139', fontWeight: 600, fontSize: '17px' }}>StepChange</span>
            <span style={{ padding: '14px 24px', borderRadius: '999px', background: '#DCEDE6', color: '#152139', fontWeight: 600, fontSize: '17px' }}>National Debtline</span>
            <span style={{ padding: '14px 24px', borderRadius: '999px', background: '#DCEDE6', color: '#152139', fontWeight: 600, fontSize: '17px' }}>Citizens Advice</span>
          </div>
        </div>
      </section>

      <Footer bordered />
    </div>
  );
}
