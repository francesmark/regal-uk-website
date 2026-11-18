import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ButtonLink } from '@/components/Button';
import './partners.css';

export const metadata: Metadata = { title: 'For partners' };

export default function PartnersPage() {
  return (
    <div className="page-partners dark" style={{ background: '#152139', color: '#fff' }}>
      <Nav current="partners" tone="dark" />

      <section className="wrap" style={{ paddingTop: '72px', paddingBottom: '72px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
        <p className="eyebrow">For partners</p>
        <h1 style={{ margin: 0, fontSize: 'clamp(50px,8vw,116px)', lineHeight: .98, fontWeight: 600, letterSpacing: '-.04em' }}>A clearer journey.<br /><span style={{ color: '#F24E24' }}>Introduced</span> with care.</h1>
        <p style={{ margin: 0, fontSize: '21px', lineHeight: 1.55, color: '#C9D1E0', maxWidth: '620px' }}>Partners can introduce eligible customers to Regal. We agree the controls first.</p>
      </section>

      {/* MODEL EXPLORER */}
      <section className="wrap" style={{ paddingBottom: '96px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.8vw,52px)', lineHeight: 1.08, fontWeight: 600, letterSpacing: '-.02em' }}>Referral.</h2>
        <div style={{ background: '#1E2D4D', borderRadius: '36px', padding: 'clamp(24px,4vw,56px)', display: 'flex', flexDirection: 'column', gap: '36px' }}>
          <p style={{ margin: 0, fontSize: '20px', lineHeight: 1.6, maxWidth: '720px' }}>A partner introduces an eligible customer to Regal. Regal manages enrolment and service delivery within agreed controls.</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 56px minmax(0,1fr)', gap: '12px', alignItems: 'center' }}>
            <div className="node" style={{ background: '#FAF8F1', color: '#152139' }}><span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.06em', color: '#B3300F' }}>PARTNER SIDE</span><span style={{ fontSize: 'clamp(18px,2.2vw,26px)', fontWeight: 600 }}>Partner channel</span></div>
            <div aria-hidden="true" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}><svg width={48} height={16} viewBox="0 0 48 16"><path d="M0 8 H44 M38 2 L46 8 L38 14" fill="none" stroke="#F24E24" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg></div>
            <div className="node" style={{ background: '#DCEDE6', color: '#152139' }}><span style={{ fontSize: '12px', fontWeight: 600, letterSpacing: '.06em', color: '#B3300F' }}>REGAL SIDE</span><span style={{ fontSize: 'clamp(18px,2.2vw,26px)', fontWeight: 600 }}>Regal enquiry</span></div>
          </div>

        </div>
      </section>

      {/* OWNERSHIP */}
      <section style={{ background: '#E9EFF5', color: '#152139', paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(34px,4.6vw,64px)', lineHeight: 1.05, fontWeight: 600, letterSpacing: '-.02em' }}>Define ownership first.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))', gap: '20px' }}>
            <div style={{ background: '#fff', borderRadius: '28px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '10px' }}><span style={{ fontSize: '14px', fontWeight: 600, color: '#B3300F' }}>Data and consent</span><span style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.2 }}>Agree controller and permitted uses</span></div>
            <div style={{ background: '#fff', borderRadius: '28px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '10px' }}><span style={{ fontSize: '14px', fontWeight: 600, color: '#B3300F' }}>Customer support</span><span style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.2 }}>Agree enquiries, complaints and regulated responsibilities</span></div>
            <div style={{ background: '#fff', borderRadius: '28px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '10px' }}><span style={{ fontSize: '14px', fontWeight: 600, color: '#B3300F' }}>Security and terms</span><span style={{ fontSize: '24px', fontWeight: 600, lineHeight: 1.2 }}>Agree branding, controls and commercial terms</span></div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#F24E24', color: '#152139', paddingTop: '88px', paddingBottom: '88px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'flex-start' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(38px,5.4vw,76px)', lineHeight: 1.02, fontWeight: 700, letterSpacing: '-.03em' }}>Let’s discuss a model that fits.</h2>
          <ButtonLink href="/contact" variant="navy">Discuss a potential model</ButtonLink>
        </div>
      </section>

      <Footer deep />
    </div>
  );
}
