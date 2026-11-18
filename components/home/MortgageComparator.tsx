'use client';

import { useState } from 'react';
import { ToggleButton } from '@/components/Button';

type City = 'leeds' | 'london';

type Example = {
  name: string;
  loan: string;
  diff: string;
  /** [rate, total interest, bar width %] */
  rows: [string, string, number][];
};

// Figures from the prototype: 80% of provisional Aug 2026 regional average prices,
// 25-year repayment mortgage, monthly payments, interest only.
const EXAMPLES: Record<City, Example> = {
  leeds: {
    name: 'Leeds',
    loan: '£196,800',
    diff: '+£35,254',
    rows: [
      ['5%', '£148,342', 30],
      ['6%', '£183,596', 37],
      ['7%', '£220,482', 44],
    ],
  },
  london: {
    name: 'London',
    loan: '£443,200',
    diff: '+£79,392',
    rows: [
      ['5%', '£334,071', 67],
      ['6%', '£413,463', 83],
      ['7%', '£496,534', 100],
    ],
  },
};

const BAR_COLOURS = ['#152139', '#F24E24', '#47516A'];

export function MortgageComparator() {
  const [city, setCity] = useState<City>('leeds');
  const example = EXAMPLES[city];

  return (
    <section style={{ background: '#FAF8F1', paddingTop: 40, paddingBottom: 96 }}>
      <div className="wrap">
        <div style={{ background: '#fff', borderRadius: 36, padding: 'clamp(24px,4vw,56px)', display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 20, alignItems: 'flex-end', justifyContent: 'space-between' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(30px,3.8vw,52px)', lineHeight: 1.08, fontWeight: 600, letterSpacing: '-.02em' }}>
              A small rate difference.
              <br />A bigger cost over time.
            </h2>
            <div role="group" aria-label="Choose an example" style={{ display: 'flex', gap: 10 }}>
              <ToggleButton pressed={city === 'leeds'} onClick={() => setCity('leeds')}>
                Leeds
              </ToggleButton>
              <ToggleButton pressed={city === 'london'} onClick={() => setCity('london')}>
                London
              </ToggleButton>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(380px,100%),1fr))', gap: 48, alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <span style={{ fontSize: 14, color: '#47516A' }}>{example.loan} mortgage · total interest over 25 years</span>
              {example.rows.map(([rate, total, width], i) => (
                <div
                  key={rate}
                  style={{ display: 'grid', gridTemplateColumns: '44px minmax(0,1fr) 84px', gap: 12, alignItems: 'center', fontSize: 15, fontWeight: 500 }}
                >
                  <span>{rate}</span>
                  <div style={{ background: '#E9EFF5', borderRadius: 999, height: 18 }}>
                    <div style={{ height: 18, borderRadius: 999, width: `${width}%`, background: BAR_COLOURS[i] }} />
                  </div>
                  <span style={{ textAlign: 'right' }}>{total}</span>
                </div>
              ))}
            </div>
            <div style={{ background: '#152139', color: '#fff', borderRadius: 28, padding: 36, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span style={{ fontSize: 14, color: '#C9D1E0' }}>6% vs 5%, over 25 years</span>
              <span style={{ fontSize: 'clamp(48px,6vw,80px)', fontWeight: 600, letterSpacing: '-.03em', lineHeight: 1 }}>{example.diff}</span>
              <span style={{ fontSize: 14, color: '#C9D1E0' }}>more interest, {example.name} example</span>
            </div>
          </div>

          <p style={{ margin: 0, fontSize: 13, lineHeight: 1.6, color: '#47516A', maxWidth: 860 }}>
            Mortgage-only illustration using hypothetical constant rates of 5%, 6% and 7% on a 25-year repayment mortgage with
            monthly payments. Loan amounts are 80% of provisional August 2026 regional average prices (ONS and HM Land
            Registry). Totals show interest only, not fees, and are not predictions, a rate we can obtain or promised savings.
          </p>
        </div>
      </div>
    </section>
  );
}
