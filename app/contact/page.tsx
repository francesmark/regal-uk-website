import type { Metadata } from 'next';
import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import './contact.css';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <div className="page-contact">
      <div style={{ background: '#F24E24', color: '#152139', borderRadius: '0 0 48px 48px' }}>
        <Nav current="contact" tone="orange" />
        <section className="wrap" style={{ paddingTop: '72px', paddingBottom: '112px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <p className="eyebrow" style={{ color: '#152139' }}>Contact</p>
          <h1 style={{ margin: 0, fontSize: 'clamp(52px,9vw,132px)', lineHeight: .96, fontWeight: 700, letterSpacing: '-.045em' }}>Start with your question.</h1>
          <p style={{ margin: 0, fontSize: '22px', lineHeight: 1.5, fontWeight: 500, maxWidth: '600px' }}>General enquiries, product questions and partnership discussions.</p>
        </section>
      </div>

      <section className="wrap" style={{ paddingTop: '72px', paddingBottom: '96px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: '20px' }}>
          <a className="cc" href="mailto:info@regalcredituk.com" style={{ background: '#152139', color: '#fff' }}><span className="eyebrow" style={{ color: '#DCEDE6' }}>Email</span><span style={{ fontSize: 'clamp(22px,2.4vw,30px)', fontWeight: 600, lineHeight: 1.2, wordBreak: 'break-word' }}>info@regalcredituk.com</span></a>
          <a className="cc" href="tel:02074425543" style={{ background: '#E9EFF5' }}><span className="eyebrow" style={{ color: '#B3300F' }}>Phone</span><span style={{ fontSize: 'clamp(26px,3vw,38px)', fontWeight: 600, lineHeight: 1.2 }}>020 7442 5543</span></a>
          <div className="cc" style={{ background: '#DCEDE6' }}><span className="eyebrow" style={{ color: '#B3300F' }}>Registered office</span><span style={{ fontSize: '20px', fontWeight: 600, lineHeight: 1.35 }}>5a Bear Lane,<br />Southwark, London SE1 0UH</span><span style={{ fontSize: '13px', color: '#47516A' }}>Not a walk-in service location.</span></div>
        </div>

        <div style={{ background: '#fff', borderRadius: '36px', padding: 'clamp(24px,4vw,56px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(380px,100%),1fr))', gap: '40px', marginTop: '20px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}><h2 style={{ margin: 0, fontSize: 'clamp(30px,3.6vw,48px)', lineHeight: 1.08, fontWeight: 600, letterSpacing: '-.02em' }}>Before you share a report</h2><p style={{ margin: 0, fontSize: '17px', lineHeight: 1.7, color: '#47516A' }}>After a suitability review, we’ll give you our secure route, along with our initial disclosure and privacy information.</p></div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: '#E9EFF5', borderRadius: '20px', padding: '20px' }}><span aria-hidden="true" style={{ flex: 'none', width: '32px', height: '32px', borderRadius: '50%', background: '#152139', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>×</span><span style={{ fontSize: '16px', lineHeight: 1.55, fontWeight: 500 }}>Please don’t email credit reports or documents.</span></div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: '#E9EFF5', borderRadius: '20px', padding: '20px' }}><span aria-hidden="true" style={{ flex: 'none', width: '32px', height: '32px', borderRadius: '50%', background: '#152139', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>×</span><span style={{ fontSize: '16px', lineHeight: 1.55, fontWeight: 500 }}>Never share bank or bureau passwords.</span></div>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start', background: '#DCEDE6', borderRadius: '20px', padding: '20px' }}><span aria-hidden="true" style={{ flex: 'none', width: '32px', height: '32px', borderRadius: '50%', background: '#152139', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>✓</span><span style={{ fontSize: '16px', lineHeight: 1.55, fontWeight: 500 }}>Wait for our secure route after suitability review.</span></div>
          </div>
        </div>
      </section>

      <section className="wrap" style={{ paddingBottom: '96px' }}>
        <div style={{ background: '#fff', borderRadius: '36px', padding: 'clamp(24px,4vw,56px)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(360px,100%),1fr))', gap: '40px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.6vw,48px)', lineHeight: 1.08, fontWeight: 600, letterSpacing: '-.02em' }}>Send an enquiry.</h2>
            <p style={{ margin: 0, fontSize: '17px', lineHeight: 1.7, color: '#47516A' }}>Please do not include bank details, identification numbers or confidential credit information. We use your details to respond, as explained in our UK privacy notice. Marketing consent is separate from your enquiry.</p>
          </div>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontWeight: 600, fontSize: '15px' }}>Name<input type="text" style={{ minHeight: '48px', border: '1px solid #D5DBE7', borderRadius: '12px', padding: '0 14px', font: 'inherit', fontWeight: 400 }} /></label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontWeight: 600, fontSize: '15px' }}>Email<input type="email" style={{ minHeight: '48px', border: '1px solid #D5DBE7', borderRadius: '12px', padding: '0 14px', font: 'inherit', fontWeight: 400 }} /></label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontWeight: 600, fontSize: '15px' }}>Enquiry type<select style={{ minHeight: '48px', border: '1px solid #D5DBE7', borderRadius: '12px', padding: '0 14px', font: 'inherit', fontWeight: 400, background: '#fff' }}><option>General question</option><option>Partnership enquiry</option><option>Extra support</option></select></label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontWeight: 600, fontSize: '15px' }}>Message<textarea rows={4} style={{ border: '1px solid #D5DBE7', borderRadius: '12px', padding: '12px 14px', font: 'inherit', fontWeight: 400 }}></textarea></label>
            <label style={{ display: 'flex', flexDirection: 'column', gap: '6px', fontWeight: 600, fontSize: '15px' }}>Preferred contact method (optional)<select style={{ minHeight: '48px', border: '1px solid #D5DBE7', borderRadius: '12px', padding: '0 14px', font: 'inherit', fontWeight: 400, background: '#fff' }}><option>No preference</option><option>Email</option><option>Phone</option></select></label>
            <button type="button" disabled style={{ minHeight: '56px', border: 0, borderRadius: '999px', background: '#F24E24', color: '#152139', font: 'inherit', fontSize: '19px', fontWeight: 600, opacity: .55, cursor: 'not-allowed' }}>Send enquiry</button>
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}
