import type { Metadata } from 'next';
import Link from 'next/link';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import './how-it-works.css';

export const metadata: Metadata = { title: 'How it works' };

export default function HowItWorksPage() {
  return (
    <div className="page-how-it-works">
      <div style={{ background: '#FAF8F1' }}>
        <Nav current="how-it-works" />
        <section className="wrap" style={{ paddingTop: '56px', paddingBottom: '72px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <p className="eyebrow">How it works</p>
          <h1 style={{ margin: 0, fontSize: 'clamp(46px,8vw,120px)', lineHeight: .96, fontWeight: 600, letterSpacing: '-.045em' }}>Six steps.<br /><span style={{ color: '#F24E24' }}>You</span> approve each one.</h1>
          <p style={{ margin: 0, fontSize: '21px', lineHeight: 1.55, color: '#47516A', maxWidth: '600px' }}>From understanding your report to reviewing the outcome, with free routes explained first.</p>
          <ol aria-label="The six steps" style={{ listStyle: 'none', margin: '12px 0 0', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', borderRadius: '999px', padding: '8px 18px 8px 8px', fontWeight: 600, fontSize: '15px' }}><span className="dot">1</span>Scope</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', borderRadius: '999px', padding: '8px 18px 8px 8px', fontWeight: 600, fontSize: '15px' }}><span className="dot">2</span>Suitability</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', borderRadius: '999px', padding: '8px 18px 8px 8px', fontWeight: 600, fontSize: '15px' }}><span className="dot">3</span>Documents</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', borderRadius: '999px', padding: '8px 18px 8px 8px', fontWeight: 600, fontSize: '15px' }}><span className="dot">4</span>Approval</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', borderRadius: '999px', padding: '8px 18px 8px 8px', fontWeight: 600, fontSize: '15px' }}><span className="dot">5</span>Response</li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px', background: '#fff', borderRadius: '999px', padding: '8px 18px 8px 8px', fontWeight: 600, fontSize: '15px' }}><span className="dot">6</span>Completion</li>
          </ol>
        </section>
      </div>

      <section style={{ background: '#FAF8F1', paddingBottom: '96px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', maxWidth: '900px' }}>
          <div className="stp"><div className="node">1</div><div className="card" style={{ background: '#fff' }}><h3 style={{ margin: '0 0 8px', fontSize: '26px', fontWeight: 600, letterSpacing: '-.01em' }}>Understand the scope</h3><p style={{ margin: 0, fontSize: '17px', lineHeight: 1.7, color: '#3A455E' }}>Learn what the service does, its limits and the free alternatives. Read the initial disclosure and privacy information before you share a report.</p></div></div>
          <div className="stp"><div className="node">2</div><div className="card" style={{ background: '#E9EFF5' }}><h3 style={{ margin: '0 0 8px', fontSize: '26px', fontWeight: 600, letterSpacing: '-.01em' }}>Check service suitability</h3><p style={{ margin: 0, fontSize: '17px', lineHeight: 1.7, color: '#3A455E' }}>A human review checks whether the accuracy service is appropriate for you. This is not a lending or creditworthiness assessment. If it is not suitable, you are not charged.</p></div></div>
          <div className="stp"><div className="node">3</div><div className="card" style={{ background: '#DCEDE6' }}><h3 style={{ margin: '0 0 8px', fontSize: '26px', fontWeight: 600, letterSpacing: '-.01em' }}>Review your documents</h3><p style={{ margin: 0, fontSize: '17px', lineHeight: 1.7, color: '#3A455E' }}>Read the initial disclosure, terms, fees and cancellation rights. Any authority you give is limited to credit-file accuracy, and payment follows the required confirmations.</p></div></div>
          <div className="stp"><div className="node">4</div><div className="card" style={{ background: '#fff' }}><h3 style={{ margin: '0 0 8px', fontSize: '26px', fontWeight: 600, letterSpacing: '-.01em' }}>Approve each challenge</h3><p style={{ margin: 0, fontSize: '17px', lineHeight: 1.7, color: '#3A455E' }}>Check the specific entry, evidence, recipient and wording. Ask for changes or remove an item. Nothing is sent without your approval.</p></div></div>
          <div className="stp"><div className="node">5</div><div className="card" style={{ background: '#E9EFF5' }}><h3 style={{ margin: '0 0 8px', fontSize: '26px', fontWeight: 600, letterSpacing: '-.01em' }}>Follow the response</h3><p style={{ margin: 0, fontSize: '17px', lineHeight: 1.7, color: '#3A455E' }}>Track submission, the relevant response date and the outcome. An accurate entry may remain unchanged.</p></div></div>
          <div className="stp"><div className="node">6</div><div className="card" style={{ background: '#DCEDE6' }}><h3 style={{ margin: '0 0 8px', fontSize: '26px', fontWeight: 600, letterSpacing: '-.01em' }}>Review completion</h3><p style={{ margin: 0, fontSize: '17px', lineHeight: 1.7, color: '#3A455E' }}>Review the outcome and choose your next step. If three rounds of challenge are completed without a correction, you can claim a refund of 50% of the fees you have paid.</p></div></div>
        </div>
      </section>

      <section className="dark" style={{ background: '#152139', color: '#fff', paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(380px,100%),1fr))', gap: '48px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <p className="eyebrow">Worked example</p>
            <h2 style={{ margin: 0, fontSize: 'clamp(34px,4.6vw,64px)', lineHeight: 1.04, fontWeight: 600, letterSpacing: '-.03em' }}>Two different situations.</h2>
            <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.7, color: '#C9D1E0' }}>An accurate missed payment cannot simply be removed. A wrongly recorded one can be checked.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ background: '#1E2D4D', borderRadius: '24px', padding: '28px' }}><span className="eyebrow">High balance</span><p style={{ margin: '10px 0 0', fontSize: '17px', lineHeight: 1.7, color: '#E4E9F2' }}>Your file shows a high balance against an available limit. You may want to understand how utilisation works.</p></div>
            <div style={{ background: '#DCEDE6', color: '#152139', borderRadius: '24px', padding: '28px' }}><span className="eyebrow" style={{ color: '#B3300F' }}>Possible error</span><p style={{ margin: '10px 0 0', fontSize: '17px', lineHeight: 1.7 }}>An account is recorded as late when it was not. You can gather supporting statements and request a factual review.</p></div>
          </div>
        </div>
      </section>

      <section id="faq" style={{ background: '#DCEDE6', paddingTop: '96px', paddingBottom: '104px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '28px', maxWidth: '900px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(36px,5vw,72px)', lineHeight: 1.02, fontWeight: 600, letterSpacing: '-.03em' }}>Common questions.</h2>
          <details style={{ background: '#fff' }}><summary>Can I challenge an error myself?</summary><p>Yes. You can request your statutory reports and challenge inaccurate information directly with the credit reference agency or reporting organisation for free. A Regal fee would be for optional assistance.</p></details>
          <details style={{ background: '#E9EFF5' }}><summary>Can you remove an accurate missed payment or judgment?</summary><p>No. Accurate negative information cannot simply be removed. We do not promise a clean file, a new identity, a score increase or credit approval.</p></details>
          <details style={{ background: '#fff' }}><summary>Will you obtain my report or ask for my login?</summary><p>No. You obtain your own statutory reports and share them through our secure route. Please do not send a report by general email, and never give us bureau or bank login details.</p></details>
          <details style={{ background: '#E9EFF5' }}><summary>What happens before I pay?</summary><p>We carry out a suitability check, then you receive the initial disclosure and terms and confirm the limited authority. Payment follows those confirmations.</p></details>
          <details style={{ background: '#fff' }}><summary>Can I cancel?</summary><p>Yes. You can cancel within 14 days of entering into the agreement without giving a reason. If you ask us to start work in that time, you pay a proportionate amount for the work done. After that you can cancel monthly at any time, with no notice and no exit fee.</p></details>
          <details style={{ background: '#fff' }}><summary>What if the service is not right for me?</summary><p>We tell you plainly before you pay, and you are not charged. Free independent help is available from MoneyHelper, StepChange, National Debtline and Citizens Advice.</p></details>
          <details style={{ background: '#E9EFF5' }}><summary>Is CyberSweep covered by FCA authorisation?</summary><p>No. CyberSweep is not regulated by the FCA, and complaints about it may not be eligible for the Financial Ombudsman Service.</p></details>
          <details style={{ background: '#fff' }}><summary>Where can I get extra support?</summary><p>Use “Need extra support?” from any page. Ask about another contact channel, more time or a different format, sharing only what is necessary. For debt advice, use independent help such as MoneyHelper.</p></details>
          <p style={{ margin: '8px 0 0', fontSize: '15px', lineHeight: 1.7 }}>Still have a question? <Link href="/contact" style={{ textDecoration: 'underline', fontWeight: 600 }}>Contact us</Link> or see <Link href="/support" style={{ textDecoration: 'underline', fontWeight: 600 }}>Support &amp; complaints</Link>.</p>
        </div>
      </section>

      <Footer bordered />
    </div>
  );
}
