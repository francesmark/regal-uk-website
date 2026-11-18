import { Nav } from '@/components/Nav';
import { Footer } from '@/components/Footer';
import { ButtonLink } from '@/components/Button';
import { FreeOptions } from '@/components/FreeOptions';
import { MortgageComparator } from '@/components/home/MortgageComparator';
import './home.css';

export default function HomePage() {
  return (
    <div className="page-home">
      {/* HERO */}
      <div style={{ background: '#FAF8F1' }}>
        <Nav contactCta />

        <section className="wrap" style={{ paddingTop: '48px', paddingBottom: '88px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(460px,100%),1fr))', gap: '56px', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'flex-start' }}>

            <h1 style={{ margin: 0, fontSize: 'clamp(46px,6.4vw,84px)', lineHeight: 1.02, fontWeight: 600, letterSpacing: '-.03em' }}>Your credit tells a <span style={{ boxShadow: 'inset 0 -.28em 0 #DCEDE6' }}>story.</span> Know what to do next.</h1>
            <p style={{ margin: 0, fontSize: '21px', lineHeight: 1.55, color: '#47516A', maxWidth: '520px' }}>Understand your file.<br />Choose your next step.</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px', alignItems: 'center' }}>
              <ButtonLink href="#journey">See the journey</ButtonLink>
              <ButtonLink href="/services" variant="outline">Explore our services</ButtonLink>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '4px' }}>
              <span style={{ padding: '8px 16px', borderRadius: '999px', background: '#E9EFF5', fontSize: '14px', fontWeight: 500 }}>Free routes explained first</span>
              <span style={{ padding: '8px 16px', borderRadius: '999px', background: '#E9EFF5', fontSize: '14px', fontWeight: 500 }}>You approve every challenge</span>
              <span style={{ padding: '8px 16px', borderRadius: '999px', background: '#E9EFF5', fontSize: '14px', fontWeight: 500 }}>No guaranteed outcomes</span>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ background: '#E9EFF5', borderRadius: '36px', padding: '36px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(220px,100%),1fr))', gap: '20px', alignItems: 'center' }}>
              <div style={{ background: '#fff', border: '3px solid #152139', borderRadius: '32px', padding: '22px', display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <span style={{ fontSize: '13px', color: '#47516A', fontWeight: 500 }}>Your next step</span>
                <span style={{ fontSize: '22px', fontWeight: 600, lineHeight: 1.2 }}>Review balance</span>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px' }}><span style={{ fontSize: '44px', fontWeight: 600, letterSpacing: '-.02em' }}>60%</span><span style={{ fontSize: '13px', color: '#47516A' }}>of limit used</span></div>
                <div style={{ height: '10px', borderRadius: '999px', background: '#E9EFF5' }}><div style={{ height: '10px', width: '60%', borderRadius: '999px', background: '#F24E24' }}></div></div>
                <span style={{ fontSize: '13px', color: '#47516A' }}>£1,200 of £2,000</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <div style={{ background: '#fff', borderRadius: '22px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ fontSize: '12px', fontWeight: 600, color: '#B3300F', letterSpacing: '.06em' }}>ENTRY CHECK</span><span style={{ fontSize: '15px', fontWeight: 500 }}>Account · Agency · Date</span><span style={{ fontSize: '13px', color: '#47516A' }}>A difference is a reason to check, not proof of an error.</span></div>
                <div style={{ background: '#152139', color: '#fff', borderRadius: '22px', padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px' }}><span style={{ fontSize: '12px', fontWeight: 600, color: '#DCEDE6', letterSpacing: '.06em' }}>YOU DECIDE</span><span style={{ fontSize: '15px', fontWeight: 500 }}>Approve, change or stop</span><span style={{ fontSize: '13px', color: '#C9D1E0' }}>Nothing is sent without your approval.</span></div>
              </div>
            </div>
            <p style={{ margin: 0, fontSize: '13px', color: '#47516A' }}>Illustrative example with fictional data.</p>
          </div>
        </section>
      </div>

      {/* DIFFERENCE BENTO */}
      <section style={{ background: '#FAF8F1', paddingBottom: '96px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(32px,4.2vw,56px)', lineHeight: 1.08, fontWeight: 600, letterSpacing: '-.02em', maxWidth: '820px' }}>Clarity first. Support only if you want it.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: '20px' }}>
            <div style={{ background: '#152139', color: '#fff', borderRadius: '28px', padding: '36px', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' }} className="span-2">
              <span className="eyebrow" style={{ color: '#DCEDE6' }}>Evidence before requests</span>
              <p style={{ margin: 0, fontSize: 'clamp(26px,3vw,38px)', lineHeight: 1.2, fontWeight: 500, letterSpacing: '-.01em', maxWidth: '560px' }}>Compare the reported entry with a dated statement before anything is challenged.</p>
            </div>
            <div style={{ background: '#E9EFF5', borderRadius: '28px', padding: '32px', minHeight: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' }}>
              <span className="eyebrow">Free options</span>
              <p style={{ margin: 0, fontSize: '22px', lineHeight: 1.35, fontWeight: 500 }}>You can obtain your statutory reports and challenge inaccuracies directly for free.</p>
            </div>
            <div style={{ background: '#DCEDE6', borderRadius: '28px', padding: '32px', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '24px' }}>
              <span className="eyebrow">Human review</span>
              <p style={{ margin: 0, fontSize: '22px', lineHeight: 1.35, fontWeight: 500 }}>Human review checks service scope. This is not a lending or creditworthiness assessment.</p>
            </div>
            <div style={{ background: '#F24E24', color: '#152139', borderRadius: '28px', padding: '32px', minHeight: '260px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end' }} className="span-2">
              <p style={{ margin: 0, fontSize: 'clamp(30px,3.6vw,48px)', lineHeight: 1.1, fontWeight: 700, letterSpacing: '-.02em' }}>No correction, score increase or lending outcome is guaranteed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY */}
      <section id="journey" className="dark" style={{ background: '#152139', color: '#fff', paddingTop: '96px', paddingBottom: '96px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}><p className="eyebrow">How it works</p><h2 style={{ margin: 0, fontSize: 'clamp(34px,4.6vw,64px)', lineHeight: 1.05, fontWeight: 600, letterSpacing: '-.02em' }}>One file. A considered next step.</h2></div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(280px,100%),1fr))', gap: '24px' }}>
            <div style={{ borderTop: '2px solid #F24E24', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}><span style={{ fontSize: '56px', fontWeight: 300, lineHeight: 1, color: '#DCEDE6' }}>01</span><h3 style={{ margin: 0, fontSize: '24px', fontWeight: 600 }}>Read a report</h3><p style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: '#C9D1E0' }}>Start with the account, agency and date. A difference is a reason to check, not proof of an error.</p></div>
            <div style={{ borderTop: '2px solid #F24E24', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}><span style={{ fontSize: '56px', fontWeight: 300, lineHeight: 1, color: '#DCEDE6' }}>02</span><h3 style={{ margin: 0, fontSize: '24px', fontWeight: 600 }}>Gather relevant evidence</h3><p style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: '#C9D1E0' }}>Compare the reported entry with a dated statement or correspondence. Share documents only through our secure route.</p></div>
            <div style={{ borderTop: '2px solid #F24E24', paddingTop: '24px', display: 'flex', flexDirection: 'column', gap: '14px' }}><span style={{ fontSize: '56px', fontWeight: 300, lineHeight: 1, color: '#DCEDE6' }}>03</span><h3 style={{ margin: 0, fontSize: '24px', fontWeight: 600 }}>Compare your profile</h3><p style={{ margin: 0, fontSize: '16px', lineHeight: 1.65, color: '#C9D1E0' }}>See the facts in your report alongside simple reference points. Where information is missing, we say so rather than guess.</p></div>
          </div>
        </div>
      </section>

      {/* COST */}
      <section style={{ background: '#FAF8F1', paddingTop: '96px', paddingBottom: '40px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: '40px', alignItems: 'end' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}><p className="eyebrow">Why credit management matters</p><h2 style={{ margin: 0, fontSize: 'clamp(34px,4.6vw,64px)', lineHeight: 1.05, fontWeight: 600, letterSpacing: '-.02em' }}>Poor credit can cost more than you think.</h2></div>
            <p style={{ margin: 0, fontSize: '18px', lineHeight: 1.65, color: '#47516A' }}>A mortgage is only part of the picture. The cost can build up each time you finance a car, carry a credit-card balance or take out another loan.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: '20px' }}>
            <div style={{ background: '#E9EFF5', borderRadius: '24px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}><p className="eyebrow">Home loans</p><p style={{ margin: 0, fontSize: '28px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-.01em' }}>The largest balances</p><p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#47516A' }}>A higher mortgage rate can add tens of thousands of pounds in interest. Try the Leeds and London examples below.</p></div>
            <div style={{ background: '#DCEDE6', borderRadius: '24px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}><p className="eyebrow">Car finance</p><p style={{ margin: 0, fontSize: '28px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-.01em' }}>£4,000 vs £8,400</p><p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#47516A' }}>Illustration: £25,000 over 5 years at 6% costs about £4,000 in interest; at 12%, about £8,400.</p></div>
            <div style={{ background: '#fff', border: '1px solid #D5DBE7', borderRadius: '24px', padding: '28px', display: 'flex', flexDirection: 'column', gap: '12px' }}><p className="eyebrow">Credit cards</p><p style={{ margin: 0, fontSize: '28px', fontWeight: 600, lineHeight: 1.15, letterSpacing: '-.01em' }}>£540 vs £960</p><p style={{ margin: 0, fontSize: '15px', lineHeight: 1.6, color: '#47516A' }}>Illustration: a £3,000 balance held for a year costs about £540 at 18%, versus £960 at 32%, before repayments or fees.</p></div>
          </div>
          <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.6, color: '#47516A', maxWidth: '860px' }}>These are hypothetical illustrations, not lender offers or predicted savings. Rates depend on circumstances and product; credit history is only one factor. Credit management cannot guarantee an approval or a lower rate.</p>
        </div>
      </section>

      <MortgageComparator />

      <FreeOptions variant="home" />

      {/* CTA */}
      <section className="dark" style={{ background: '#152139', color: '#fff', paddingTop: '88px', paddingBottom: '88px' }}>
        <div className="wrap" style={{ display: 'flex', flexDirection: 'column', gap: '24px', alignItems: 'flex-start' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(38px,5.4vw,76px)', lineHeight: 1.02, fontWeight: 600, letterSpacing: '-.03em' }}>Know where to start.</h2>
          <ButtonLink href="/services">Explore our services</ButtonLink>
          <p style={{ margin: 0, fontSize: '15px', color: '#C9D1E0' }}>We explain fees before you sign up. You can challenge inaccuracies directly for free.</p>
        </div>
      </section>

      <Footer bordered />
    </div>
  );
}
