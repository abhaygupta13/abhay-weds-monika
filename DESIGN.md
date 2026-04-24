# Design Brief

## Direction

Romantic Luxury Wedding — An elegant, premium Indian wedding invitation website celebrating love with sophisticated refinement, warm pastels, and timeless romanticism.

## Tone

Refined, warm, and deeply romantic — executed with conviction on light backgrounds and soft gradients inspired by luxury wedding stationery and editorial elegance.

## Differentiation

Gentle floral-inspired animations, gradient gold accents on interactive elements, and cursive serif display typography create an unforgettable premium wedding experience.

## Color Palette

| Token              | OKLCH                | Role                          |
| :----------------- | :------------------- | :---------------------------- |
| background         | 0.975 0.01 45        | Warm ivory base               |
| foreground         | 0.25 0.04 350        | Deep plum text                |
| card               | 0.995 0.005 45       | Event cards, sections         |
| primary            | 0.68 0.16 350        | Pastel pink, accents          |
| accent             | 0.65 0.18 60         | Gold highlights, CTAs         |
| secondary          | 0.92 0.04 355        | Soft rose accents             |
| muted              | 0.90 0.02 280        | Subtle lavender backgrounds   |
| border             | 0.88 0.015 45        | Warm dividers, card edges     |

## Typography

- Display: Fraunces (serif, elegant, romantic) — couple names, section headings, hero typography
- Body: General Sans (clean sans-serif) — event details, descriptions, body text
- Scale: Hero `text-6xl md:text-7xl font-bold tracking-tight`, h2 `text-4xl md:text-5xl font-bold`, label `text-xs font-semibold tracking-widest uppercase`, body `text-base md:text-lg`

## Elevation & Depth

Card-based layout with soft warm shadows (`shadow-soft: 0 4px 12px rgba(218, 112, 150, 0.08)`) for gentle elevation; elevated shadows on hover. Light backgrounds with alternating muted lavender sections create visual rhythm without harsh contrast.

## Structural Zones

| Zone    | Background           | Border             | Notes                                  |
| :------ | :------------------- | :----------------- | :------------------------------------- |
| Header  | background           | subtle warm border | Cursive logo, navigation fade-in       |
| Hero    | gradient romantic    | —                  | Large couple names, soft background   |
| Content | alternating bg/muted | subtle warm border | Event cards, couple bios, sections    |
| CTA     | gradient gold        | —                  | RSVP buttons with gold accents        |
| Footer  | muted lavender       | border top         | Thank you message, contact info       |

## Spacing & Rhythm

Large section gaps (8–12rem) create breathing room; card-to-card padding (1.5–2rem) groups content; micro-spacing (0.5–1rem) within components. Mobile-first density decreases on `md:` and `lg:` breakpoints for spacious elegance.

## Component Patterns

- Buttons: Rounded (12px), gradient gold or soft primary, smooth transition on hover, slight lift on active
- Cards: Rounded (12px), warm ivory background, soft shadow, border top accent in gold
- Badges: Soft primary text, muted background, rounded (8px), uppercase label `text-xs`

## Motion

- Entrance: Fade-in with subtle upward translate (12px) over 0.6s on page load; staggered delay for multiple elements (+0.2s increments)
- Hover: Card lift (+2px) with shadow-elevated, gold accent pulse, transition-smooth on all interactive elements
- Decorative: Floating animation on hero elements (±8px, 3s loop), subtle pulse on accent badges (2s loop)

## Constraints

- Light mode only (wedding-appropriate elegance)
- Never use harsh blacks or pure whites; all colors maintain warmth
- All interactive elements use transition-smooth for consistency
- No rainbow palettes; stick to pink/gold/plum/lavender harmony

## Signature Detail

Soft romantic gradient backgrounds (pink-to-gold) applied subtly to hero and CTA sections, combined with floral-inspired floating animations, distinguish this as a premium, intentional design rather than generic white space.

