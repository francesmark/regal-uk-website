'use client';

import { useState } from 'react';
import { ToggleButton } from '@/components/Button';

type Tier = 'monitoring' | 'diy' | 'managed';

const TIERS: Record<Tier, { price: string; title: string; lead: string; detail: string }> = {
  monitoring: {
    price: '£14.99 / month',
    title: 'AI Credit Monitoring',
    lead: 'Understand your credit information: review the entries, dates and sources in your report, with plain explanations. The sample dashboard uses fictional data.',
    detail:
      'Start with your own statutory credit reports. We help you read the entries, dates and sources so you can see what is reported and what may need checking.',
  },
  diy: {
    price: '£19.99 / month',
    title: 'DIY Dispute Access',
    lead: 'Prepare it yourself: monitoring plus drafts, evidence organisation and reply tracking. You check the facts, approve the wording and send. Direct disputes with agencies remain free.',
    detail:
      'The profile comparison is educational. It does not assess your wider finances, recommend borrowing, predict credit approval or provide debt advice.',
  },
  managed: {
    price: '£39.99–£49.99 / month',
    title: 'Managed Dispute Support',
    lead: 'Let our team handle it: human review, sending with your authorisation, follow-up and result checks. Results are not guaranteed.',
    detail:
      'We check suitability first, then take your documents and limited authority. You approve each challenge, its evidence and its recipient. The recipient decides whether to change an entry, and a challenge can lead to further information being reported.',
  },
};

const TIER_ORDER: Tier[] = ['monitoring', 'diy', 'managed'];

const sampleRow = { background: '#fff', borderRadius: 16, padding: '16px 18px', fontSize: 15 } as const;
const sampleNote = { background: '#DCEDE6', borderRadius: 16, padding: '16px 18px', fontSize: 14, lineHeight: 1.5 } as const;
const checkbox = { width: 22, height: 22, borderRadius: 6, border: '2px solid #152139', flex: 'none' } as const;
const pill = { padding: '12px 20px', borderRadius: 999, fontSize: 15, fontWeight: 600 } as const;

function TierSample({ tier }: { tier: Tier }) {
  if (tier === 'monitoring') {
    return (
      <>
        <span className="eyebrow">Sample report · fictional data</span>
        <div style={{ ...sampleRow, display: 'flex', justifyContent: 'space-between', gap: 12 }}>
          <span style={{ fontWeight: 500 }}>Account A</span>
          <span style={{ color: '#47516A' }}>Agency · 14 Oct</span>
        </div>
        <div style={{ ...sampleRow, display: 'flex', justifyContent: 'space-between', gap: 12 }}>
          <span style={{ fontWeight: 500 }}>Account B</span>
          <span style={{ color: '#47516A' }}>Agency · 02 Sep</span>
        </div>
        <div style={sampleNote}>Source dates are shown beside every entry so you can see what is reported and when.</div>
      </>
    );
  }
  if (tier === 'diy') {
    return (
      <>
        <span className="eyebrow">Accuracy checklist · sample</span>
        {['Does the entry match your statement?', 'Are the dates consistent?', 'Is anything missing?'].map((q) => (
          <div key={q} style={{ ...sampleRow, display: 'flex', gap: 12, alignItems: 'center' }}>
            <span style={checkbox} />
            {q}
          </div>
        ))}
        <div style={sampleNote}>Educational only. This does not assess your wider finances or recommend borrowing.</div>
      </>
    );
  }
  return (
    <>
      <span className="eyebrow">Draft challenge · sample</span>
      <div style={{ background: '#fff', borderRadius: 16, padding: 18, display: 'flex', flexDirection: 'column', gap: 6 }}>
        <span style={{ fontSize: 15, fontWeight: 500 }}>Awaiting your approval</span>
        <span style={{ fontSize: 14, color: '#47516A' }}>Evidence: dated statement attached. Recipient: named agency.</span>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        <span style={{ ...pill, background: '#152139', color: '#fff' }}>Approve</span>
        <span style={{ ...pill, border: '2px solid #152139' }}>Ask for changes</span>
        <span style={{ ...pill, border: '2px solid #152139' }}>Stop</span>
      </div>
      <div style={sampleNote}>You approve each challenge, its evidence and its recipient.</div>
    </>
  );
}

/** Product cards, plus the Credit Challenging tiers that open beneath them. */
export function ServicesExplorer() {
  const [tiersOpen, setTiersOpen] = useState(false);
  const [tier, setTier] = useState<Tier>('monitoring');
  const current = TIERS[tier];

  return (
    <>
      {/* TOP PRODUCTS */}
      <section
        className="wrap"
        style={{ paddingBottom: 56, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(300px,100%),1fr))', gap: 20, alignItems: 'stretch' }}
      >
        <div className="pc" style={{ background: '#fff' }}>
          <span className="eyebrow">CREDIT READINESS / BUILD</span>
          <div className="pr">
            £35 <small>/ month</small>
          </div>
          <p className="pd">Credit education and a personal action plan.</p>
        </div>
        <button
          type="button"
          className="pc"
          aria-expanded={tiersOpen}
          aria-controls="tiers"
          onClick={() => setTiersOpen((open) => !open)}
          style={{
            background: '#152139',
            color: '#fff',
            border: 0,
            textAlign: 'left',
            fontFamily: 'inherit',
            cursor: 'pointer',
            boxShadow: tiersOpen ? '0 0 0 4px #F24E24' : 'none',
          }}
        >
          <span className="eyebrow" style={{ color: '#DCEDE6' }}>
            Credit Challenging
          </span>
          <div className="pr" style={{ fontSize: 30, lineHeight: 1.2 }}>
            Three tiers. See tiers below for pricing.
          </div>
          <p className="pd" style={{ color: '#C9D1E0' }}>
            File review, issue triage and permitted dispute and correction support.
          </p>
          <span style={{ fontWeight: 600, fontSize: 16, color: '#F24E24', marginTop: 'auto' }}>
            {tiersOpen ? 'Hide tiers ↑' : 'See tiers ↓'}
          </span>
        </button>
        <div className="pc" style={{ background: '#DCEDE6' }}>
          <span className="eyebrow">CyberSweep add-on · Not FCA-regulated</span>
          <div className="pr">
            +£15 <small>/ month</small>
          </div>
          <p className="pd">Optional identity and data exposure protection.</p>
        </div>
      </section>

      {/* TIERS UNDER CREDIT CHALLENGING */}
      {tiersOpen && (
        <section id="tiers" className="wrap" style={{ paddingBottom: 96, display: 'flex', flexDirection: 'column', gap: 20 }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(32px,4vw,56px)', lineHeight: 1.05, fontWeight: 600, letterSpacing: '-.02em' }}>
            Credit Challenging tiers
          </h2>
          <p style={{ margin: 0, fontSize: 17, lineHeight: 1.6, color: '#47516A', maxWidth: 720 }}>
            If we complete three rounds of challenge and no entry has been removed or amended, you can claim a refund of 50% of
            the fees you have paid. If nine months have passed since you enrolled and three rounds have not been completed for
            reasons within our control, you can claim it as though they had. Credit agencies require 25 business days for
            research and response.
          </p>
          <div role="group" aria-label="Choose a tier" style={{ display: 'flex', flexWrap: 'wrap', gap: 14 }}>
            {TIER_ORDER.map((key) => (
              <ToggleButton key={key} shape="seg" pressed={tier === key} onClick={() => setTier(key)}>
                <small>{TIERS[key].price}</small>
                {TIERS[key].title}
              </ToggleButton>
            ))}
          </div>
          <div
            style={{
              background: '#fff',
              borderRadius: 36,
              padding: 'clamp(24px,4vw,56px)',
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))',
              gap: 48,
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <h2 style={{ margin: 0, fontSize: 'clamp(28px,3.4vw,44px)', lineHeight: 1.1, fontWeight: 600, letterSpacing: '-.02em' }}>
                {current.title}
              </h2>
              <p style={{ margin: 0, fontSize: 18, lineHeight: 1.6, color: '#47516A' }}>{current.lead}</p>
              <p style={{ margin: 0, fontSize: 16, lineHeight: 1.7 }}>{current.detail}</p>
            </div>
            <div style={{ background: '#E9EFF5', borderRadius: 28, padding: 28, display: 'flex', flexDirection: 'column', gap: 12 }}>
              <TierSample tier={tier} />
            </div>
          </div>
        </section>
      )}
    </>
  );
}
