# Regal UK website (Next.js)

A Next.js 15 (App Router) and React 19 rebuild of the `regal-uk-prototype` design files.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build && npm start
```

## Routes

| Prototype file       | Route           |
| -------------------- | --------------- |
| Main.dc.html         | `/`             |
| HowItWorks.dc.html   | `/how-it-works` |
| Services.dc.html     | `/services`     |
| About.dc.html        | `/about`        |
| Partners.dc.html     | `/partners`     |
| Contact.dc.html      | `/contact`      |
| Support.dc.html      | `/support`      |
| Legal.dc.html        | `/legal`        |

## Structure

- `app/globals.css`: shared rules (tokens, nav, footer, buttons, eyebrow, focus rings, reduced motion).
- `app/<route>/<route>.css`: rules used by only one page, scoped under `.page-<route>`.
- `components/Nav.tsx`: `current`, `tone` (`light` | `dark` | `orange`) and `contactCta` (Home only).
- `components/Footer.tsx`: `bordered` (top rule) and `deep` (darker navy on Partners).
- `components/Button.tsx`: `ButtonLink` (primary, outline, navy), `Button`, and `ToggleButton` (`tab` / `seg` shapes; colours come from `aria-pressed`).
- `components/Logo.tsx`, `components/FreeOptions.tsx` (shared by Home and Services).
- `components/home/MortgageComparator.tsx`: Leeds/London toggle (`useState`).
- `components/services/ServicesExplorer.tsx`: product cards, the tier reveal and the tier picker (`useState`).

Section layout keeps the prototype's inline styles so the pages match it pixel for pixel.

## Not wired up yet

- The Contact enquiry form has no backend. The Send button stays disabled, as in the prototype.
