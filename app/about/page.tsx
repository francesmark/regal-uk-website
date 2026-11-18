import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import './about.css';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <div className="page-about">

    
      {/* PRINCIPLES */}
      <div style={{ background: '#DCEDE6' }}>
        <Nav current="about" />

        <section className="wrap" style={{ paddingTop: '64px', paddingBottom: '96px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(440px,100%),1fr))', gap: '56px', alignItems: 'end' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <p className="eyebrow">About Regal</p>
            <h1 style={{ margin: 0, fontSize: 'clamp(48px,7vw,104px)', lineHeight: .98, fontWeight: 600, letterSpacing: '-.04em', width: '565px', maxWidth: 'calc(100vw - 56px)' }}>Credit is personal. Clarity should be too.</h1>
            <p style={{ margin: 0, fontSize: '21px', lineHeight: 1.55, maxWidth: '520px' }}>Understand the information.<br />Make a considered next step.</p>

          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <svg viewBox="0 0 520 420" role="img" aria-label="An illustration of a credit report with one entry highlighted and a magnifying glass over it." style={{ display: 'block', width: '100%', height: 'auto', borderRadius: '32px', background: '#152139' }}><rect x="110" y="48" width={300} height={324} rx="20" fill="#FAF8F1" /><rect x="140" y="82" width={120} height={14} rx="7" fill="#152139" /><rect x="140" y="114" width={240} height={10} rx="5" fill="#D5DBE7" /><rect x="140" y="146" width={240} height={44} rx="12" fill="#DCEDE6" /><rect x="156" y="162" width={90} height={12} rx="6" fill="#152139" /><rect x="300" y="162" width={64} height={12} rx="6" fill="#47516A" /><rect x="140" y="204" width={240} height={44} rx="12" fill="#E9EFF5" /><rect x="156" y="220" width={110} height={12} rx="6" fill="#152139" /><rect x="310" y="220" width={54} height={12} rx="6" fill="#47516A" /><rect x="140" y="262" width={240} height={44} rx="12" fill="#E9EFF5" /><rect x="156" y="278" width={80} height={12} rx="6" fill="#152139" /><rect x="316" y="278" width={48} height={12} rx="6" fill="#47516A" /><circle cx="344" cy="226" r="62" fill="none" stroke="#F24E24" strokeWidth="12" /><line x1="388" y1="270" x2="440" y2="322" stroke="#F24E24" strokeWidth="14" strokeLinecap="round" /></svg>
          </div>
        </section>
      </div><section style={{ background: '#FAF8F1', paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(34px,4.6vw,64px)', lineHeight: 1.05, fontWeight: 600, letterSpacing: '-.02em', maxWidth: '760px' }}>Experience. Thoughtfully adapted.</h2>
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))', gap: '12px 40px', padding: '36px 0', borderTop: '2px solid #152139', alignItems: 'baseline' }}><span style={{ fontSize: 'clamp(44px,5vw,72px)', fontWeight: 300, lineHeight: 1, color: '#B3300F' }}>01</span><div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}><h3 style={{ margin: 0, fontSize: 'clamp(24px,2.6vw,36px)', fontWeight: 600, letterSpacing: '-.01em' }}>Context before conclusions</h3><p style={{ margin: 0, fontSize: '17px', color: '#47516A' }}>Understand the entry, source and date.</p></div></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))', gap: '12px 40px', padding: '36px 0', borderTop: '2px solid #152139', alignItems: 'baseline' }}><span style={{ fontSize: 'clamp(44px,5vw,72px)', fontWeight: 300, lineHeight: 1, color: '#B3300F' }}>02</span><div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}><h3 style={{ margin: 0, fontSize: 'clamp(24px,2.6vw,36px)', fontWeight: 600, letterSpacing: '-.01em' }}>Evidence before requests</h3><p style={{ margin: 0, fontSize: '17px', color: '#47516A' }}>Review the facts before taking action.</p></div></div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))', gap: '12px 40px', padding: '36px 0', borderTop: '2px solid #152139', borderBottom: '2px solid #152139', alignItems: 'baseline' }}><span style={{ fontSize: 'clamp(44px,5vw,72px)', fontWeight: 300, lineHeight: 1, color: '#B3300F' }}>03</span><div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}><h3 style={{ margin: 0, fontSize: 'clamp(24px,2.6vw,36px)', fontWeight: 600, letterSpacing: '-.01em' }}>Choice before commitment</h3><p style={{ margin: 0, fontSize: '17px', color: '#47516A' }}>We explain free routes and optional support first.</p></div></div>
          </div>
        </div>
      </section>

      {/* COMPANY RECORD */}
      <section className="dark" style={{ background: '#152139', color: '#fff', paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: '56px', alignItems: 'start' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}><p className="eyebrow">Company record</p><h2 style={{ margin: 0, fontSize: 'clamp(32px,4vw,56px)', lineHeight: 1.05, fontWeight: 600, letterSpacing: '-.02em' }}>Regal Credit Management Ltd</h2></div>
          <dl style={{ margin: 0, borderTop: '1px solid #2A3855' }}>
            <div className="rec"><dt>Company number</dt><dd>10725683</dd></div>
            <div className="rec"><dt>Incorporated</dt><dd>13 April 2017</dd></div>
            <div className="rec"><dt>Registered office</dt><dd>5a Bear Lane, Southwark, London, England SE1 0UH</dd></div>
            <div className="rec"><dt>Regulator</dt><dd>Financial Conduct Authority · FRN 1048230</dd></div>
            <p style={{ margin: '18px 0 0', fontSize: '13px', color: '#C9D1E0' }}>This is our registered office, not a walk-in service location.</p>
          </dl>
        </div>
      </section>

      <Footer bordered />
    </div>
  );
}
