import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ButtonLink } from '@/components/Button';
import { FreeOptions } from '@/components/FreeOptions';
import { ServicesExplorer } from '@/components/services/ServicesExplorer';
import './services.css';

export const metadata: Metadata = { title: 'Services' };

export default function ServicesPage() {
  return (
    <div className="page-services">
      <div style={{ background: '#E9EFF5' }}>
        <Nav current="services" />
        <section className="wrap" style={{ paddingTop: '56px', paddingBottom: '48px', display: 'flex', flexDirection: 'column', gap: '28px' }}>
          <p className="eyebrow">Services</p>
          <h1 style={{ margin: 0, fontSize: 'clamp(52px,9vw,128px)', lineHeight: .98, letterSpacing: '-.04em' }}>
            <span style={{ display: 'block', fontWeight: 300 }}>Build.</span>
            <span style={{ display: 'block', fontWeight: 700 }}>Challenge.</span>
            <span style={{ display: 'block', fontWeight: 300 }}><span style={{ boxShadow: 'inset 0 -.2em 0 #DCEDE6' }}>Protect.</span></span>
          </h1>
          <p style={{ margin: 0, fontSize: '21px', lineHeight: 1.55, color: '#47516A', maxWidth: '560px' }}>Choose the level of support that fits. Fees are confirmed before you enrol.</p>
        </section>

        <ServicesExplorer />
      </div>

      {/* READ UNDERSTAND CHOOSE */}
      <section className="dark" style={{ background: '#152139', color: '#fff', paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(34px,4.6vw,64px)', lineHeight: 1.05, fontWeight: 600, letterSpacing: '-.02em' }}>Read. Understand. Choose.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))', gap: '20px' }}>
            <div style={{ background: '#1E2D4D', borderRadius: '28px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '14px' }}><h3 style={{ margin: 0, fontSize: '24px', fontWeight: 600, color: '#DCEDE6' }}>Suitability first</h3><p style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: '#C9D1E0' }}>Human review checks service scope. This is not a lending or creditworthiness assessment.</p></div>
            <div style={{ background: '#1E2D4D', borderRadius: '28px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '14px' }}><h3 style={{ margin: 0, fontSize: '24px', fontWeight: 600, color: '#DCEDE6' }}>Documents before payment</h3><p style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: '#C9D1E0' }}>Receive our initial disclosure and terms in a durable form, review fees and cancellation, and give only the limited authority required.</p></div>
            <div style={{ background: '#1E2D4D', borderRadius: '28px', padding: '32px', display: 'flex', flexDirection: 'column', gap: '14px' }}><h3 style={{ margin: 0, fontSize: '24px', fontWeight: 600, color: '#DCEDE6' }}>You keep control</h3><p style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: '#C9D1E0' }}>Approve each challenge, ask for changes or stop. Our refund promise is 50% of fees if three rounds of challenge are completed without a correction.</p></div>
          </div>
          <div><ButtonLink href="/contact">Ask a question</ButtonLink></div>
        </div>
      </section>
      <FreeOptions variant="services" />

      <Footer />
    </div>
  );
}
