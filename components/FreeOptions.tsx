/** "You have free options." band, shared by Home and Services. */
export function FreeOptions({ variant }: { variant: 'home' | 'services' }) {
  const home = variant === 'home';
  return (
    <section style={{ background: '#DCEDE6', paddingTop: home ? 88 : 80, paddingBottom: home ? 88 : 80 }}>
      <div
        className="wrap"
        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(420px,100%),1fr))', gap: 40, alignItems: 'start' }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: home ? 'clamp(34px,4.6vw,64px)' : 'clamp(32px,4vw,56px)',
            lineHeight: 1.05,
            fontWeight: 600,
            letterSpacing: '-.02em',
          }}
        >
          You have free options.
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: home ? 18 : 16 }}>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7 }}>
            You can obtain your statutory credit reports and challenge inaccuracies directly for free. Accurate negative
            information cannot simply be removed. No correction, score increase or lending outcome is guaranteed.
          </p>
          <p style={{ margin: 0, fontSize: 18, lineHeight: 1.7 }}>
            We do not provide debt advice, negotiate repayments, arrange credit or represent you in court.
          </p>
        </div>
      </div>
    </section>
  );
}
