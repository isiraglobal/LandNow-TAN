# LandNow — Complete Build Brief
> Feed this entire file to your AI. It contains the design system (dark-mode adapted), every word of copy, the page structure, component specs, and interaction rules. Follow it exactly.

---

## 0. CRITICAL OVERRIDE: Black Background

The site opens after a space-zoom animation that ends on a **black screen**. The entire site background is `#0A0A0A` — near-black, not pure black (pure black reads as a dead pixel on OLED screens). All design system color decisions below are **inverted from the original DESIGN.md** to work on this dark canvas. Do not use the original light backgrounds from DESIGN.md at all.

---

## 1. Design System — Dark Mode Adaptation

### Color Tokens (Dark Canvas Edition)

```
--bg-base:          #0A0A0A   /* site canvas — near-black */
--bg-elevated:      #141414   /* cards, panels above base */
--bg-high:          #1E1E1E   /* top-level raised containers */

--text-primary:     #F0EDE8   /* headlines, primary copy — warm off-white */
--text-secondary:   #8A8178   /* supporting copy, labels */
--text-muted:       #4A4540   /* captions, placeholders */

--accent:           #D27D2D   /* PRIMARY: terracotta — CTAs, highlights, rules */
--accent-dim:       #7A4518   /* secondary accent, hover states */
--accent-glow:      rgba(210, 125, 45, 0.12) /* subtle tint for accent backgrounds */

--grid-line:        rgba(240, 237, 232, 0.08)   /* interior structural grid */
--grid-line-strong: rgba(240, 237, 232, 0.20)   /* primary section dividers */
--grid-line-accent: #D27D2D                      /* terracotta dividers for section opens */
```

### Typography (unchanged from DESIGN.md — same fonts, same sizing)

```
Fonts to load from Google Fonts:
  - Sora: weights 600, 700
  - Inter: weights 400, 500
  - JetBrains Mono: weights 400, 500

headline-xl:   Sora 700 / 80px / line-height 72px / tracking -0.04em
headline-lg:   Sora 700 / 48px / line-height 48px / tracking -0.03em
headline-lg-m: Sora 700 / 32px / line-height 34px / tracking -0.03em  (mobile)
headline-md:   Sora 600 / 24px / line-height 28px / tracking -0.02em
body-lg:       Inter 400 / 18px / line-height 28px / tracking 0
body-md:       Inter 400 / 16px / line-height 24px / tracking 0
label-mono:    JetBrains Mono 500 / 12px / line-height 16px / tracking 0.05em
utility-mono:  JetBrains Mono 400 / 10px / line-height 12px / tracking 0.1em
```

### Shape & Layout Rules (same philosophy, dark canvas)

- **All corners: 0px.** No border-radius anywhere. Not on buttons. Not on inputs. Not on cards.
- **1px grid lines only.** No shadows, no blurs, no gradients.
- **Depth = border contrast.** Cards on `--bg-base` use `--bg-elevated` fill + 1px `--grid-line-strong` border.
- **Desktop margin: 64px.** Mobile margin: 24px.
- **Gutter: 1px.** Elements sit flush against grid lines — blueprint aesthetic.
- **50/50 split:** Core layout on desktop. Left = fixed/sticky content. Right = scrolling content. Stacks on mobile.

### Component Specs (Dark Adaptation)

**Primary Button:**
```
Background: #D27D2D
Text: #FFFFFF / JetBrains Mono 500 / 12px / UPPERCASE / tracking 0.1em
Padding: 16px 32px
Border: none
Corner: 0px
Hover: background #B86E25, no transition effects (instant)
```

**Secondary Button:**
```
Background: transparent
Border: 1px solid rgba(240, 237, 232, 0.40)
Text: #F0EDE8 / JetBrains Mono 500 / 12px / UPPERCASE
Padding: 16px 32px
Corner: 0px
Hover: border-color #D27D2D, color #D27D2D
```

**Land Tag (chip):**
```
Background: #D27D2D
Text: #FFFFFF / JetBrains Mono 400 / 10px / UPPERCASE / tracking 0.1em
Padding: 4px 10px
Corner: 0px
```

**Land Tag — Inverted (for dark surfaces):**
```
Background: rgba(240, 237, 232, 0.08)
Border: 1px solid rgba(240, 237, 232, 0.16)
Text: #8A8178 / JetBrains Mono 400 / 10px / UPPERCASE
```

**Cards:**
```
Background: #141414
Border: 1px solid rgba(240, 237, 232, 0.12)
Corner: 0px
Padding: 32px
Hover state: border-color rgba(210, 125, 45, 0.50)
```

**Input Fields:**
```
Background: transparent
Border: none
Border-bottom: 1px solid rgba(240, 237, 232, 0.20)
Text: #F0EDE8 / Inter 400 / 16px
Label: JetBrains Mono / 10px / UPPERCASE / #8A8178 / tracking 0.1em
Focus border-bottom: 1px solid #D27D2D
Placeholder: #4A4540
```

**Horizontal Rules:**
```
-- Section openers: 1px solid #D27D2D (terracotta)
-- Internal: 1px solid rgba(240, 237, 232, 0.08)
-- Strong: 1px solid rgba(240, 237, 232, 0.20)
```

---

## 2. Page Architecture

The page has **6 sections** that appear after the space-zoom animation delivers the user to a black screen. Each section transitions to the next with a 1px terracotta `--grid-line-accent` horizontal rule.

```
[0] NAV BAR
[1] HERO — "The Earth Never Lies"
[2] THE THESIS — Why Land & Water Now
[3] COMMUNITY BENEFITS — What You Get Inside
[4] HOW IT WORKS — Access, Learn, Execute
[5] SOCIAL PROOF — Who This Is For
[6] APPLICATION — The Gate
[7] FOOTER
```

---

## 3. Section-by-Section Copy & Structure

---

### [0] NAV BAR

```
Layout: Full-width / position fixed / top: 0 / z-index 100
Background: rgba(10, 10, 10, 0.92) / backdrop note: NO blur — use solid near-black
Border-bottom: 1px solid rgba(240, 237, 232, 0.08)
Padding: 0 64px / height: 64px
Mobile: 0 24px

Left:   [LOGO — "LANDNOW" in Sora 700 / 16px / #F0EDE8 / tracking 0.1em]
Center: empty
Right:  [APPLY FOR ACCESS] → primary button (small: padding 10px 24px)
```

---

### [1] HERO — "The Earth Never Lies"

```
Layout: Full viewport height (100vh)
        Left 50%: sticky — holds headline block
        Right 50%: empty (continues the black void from animation)
        On mobile: single column, centered

Left column content (vertically centered, 64px from left edge):
```

**Land Tag (chip) — top of hero:**
```
Text: "PRIVATE MEMBERSHIP · EST. 2025"
Style: Land Tag Inverted
```

**Headline (headline-xl on desktop, headline-lg-m on mobile):**
```
The Earth
Never Lies.
```
*Each line on its own line. Justified left. Color: #F0EDE8. The period at the end is deliberate and important — it signals finality, authority.*

**Sub-headline (headline-md / Sora 600 / #8A8178):**
```
Water runs downhill.
Title chains don't lie.
Markets do.
```
*Three lines. Sparse. Deliberate. Let each line breathe.*

**Body copy (body-lg / Inter / #8A8178):**
```
This is a private community for serious operators
acquiring land and water rights in the United States.
Not for speculators. Not for observers.
For people who close.
```

**CTA row:**
```
[REQUEST ACCESS →]    ← primary button
[LEARN WHAT'S INSIDE] ← secondary button, scrolls to benefits section
```

**Bottom-left of hero (position absolute):**
```
utility-mono / #4A4540:
"SCROLL TO ENTER"  with a 1px vertical line below it, 40px tall, color #D27D2D
```

**Right column:**
```
Empty. Pure black void. This is intentional — it creates the sensation the animation has 
landed on something vast and unknowable. Do not put any content here.
One exception: a faint 1px vertical line at x=50% separating the columns, 
color rgba(240, 237, 232, 0.06).
```

---

### [2] THE THESIS — Why Land & Water Now

```
Layout: Full width / padding: 120px 64px (desktop), 80px 24px (mobile)
Section opener: 1px terracotta rule at top / then 40px space before content

Top label (utility-mono / #D27D2D / UPPERCASE):
"THESIS · 01"
```

**Split layout — 50/50:**

**Left (sticky on scroll):**

```
Headline (headline-lg / Sora 700 / #F0EDE8):
The next
decade belongs
to whoever
controls the
ground beneath it.
```

**Right (scrollable — 3 stacked text blocks, each separated by 1px internal rule):**

**Block A:**
```
Label (label-mono / #D27D2D): WATER SCARCITY
Body (body-lg / #8A8178):
The western United States is in a structural water deficit. Aquifers 
that took thousands of years to fill are being emptied in decades. 
Municipalities are buying agricultural water rights at prices that 
would have seemed impossible five years ago. This is not a trend. 
It is a transfer — and it is happening right now, quietly, 
through instruments most people have never heard of.
```

**Block B:**
```
Label (label-mono / #D27D2D): LAND AS CAPITAL
Body (body-lg / #8A8178):
Institutional capital has discovered what ranchers and farmers have 
always known: land doesn't have counterparty risk. It cannot be 
delisted. It cannot be diluted. A well-structured land acquisition — 
one that accounts for water rights, mineral rights, access easements, 
and title chain — is one of the most defensible hard-asset positions 
available to a private investor. The problem is that doing it right 
is genuinely complex. That complexity is also the moat.
```

**Block C:**
```
Label (label-mono / #D27D2D): THE WINDOW
Body (body-lg / #8A8178):
Regulation is coming. Pricing on water-adjacent parcels is rising as 
institutional buyers finish their education. The deals that exist today — 
priced as agricultural land with unpriced water optionality — will not 
exist in five years. The people in this community are moving now, while 
the market is still inefficient, while counterparties still undervalue 
what they hold, and while the legal infrastructure for these transactions 
is still navigable by a sophisticated private buyer.
```

---

### [3] COMMUNITY BENEFITS — What You Get Inside

```
Layout: Full width / padding: 120px 64px (desktop), 80px 24px (mobile)
Background: #141414  ← slightly elevated surface to signal a new zone
Section opener: 1px terracotta rule at top

Top label (utility-mono / #D27D2D / UPPERCASE):
"INSIDE · 02"
```

**Headline (headline-lg / #F0EDE8):**
```
Access you cannot
buy anywhere else.
```

**Sub-copy (body-lg / #8A8178 / max-width 560px):**
```
Every benefit in this community exists because execution requires it. 
These are not webinars. These are working sessions, live intelligence, 
and direct connections to operators who have closed real deals.
```

**Benefits Grid:**
```
Layout: 2 columns on desktop, 1 column on mobile
Gap: 1px (grid line as gap — no actual whitespace gap, just the border)
Each card: Card spec above
```

**Card 01:**
```
Land Tag: "FRAMEWORKS"
Headline (headline-md / #F0EDE8): Proprietary Acquisition Playbooks
Body (body-md / #8A8178): 
Step-by-step frameworks for identifying, evaluating, and structuring 
land and water rights deals — built from closed transactions, not theory. 
Covers deed of trust structures, water adjudication, and title review checklists.
```

**Card 02:**
```
Land Tag: "NETWORK"
Headline (headline-md / #F0EDE8): Vetted Investor Connections
Body (body-md / #8A8178):
Direct introductions to serious capital allocators who are actively 
deploying into land and water. No pitch decks to strangers. 
You come in already known.
```

**Card 03:**
```
Land Tag: "INTELLIGENCE"
Headline (headline-md / #F0EDE8): Live Deal Analysis Sessions
Body (body-md / #8A8178):
Weekly working sessions where active deals are analyzed in real time — 
title chains, water rights valuations, zoning risks, exit structures. 
You learn by watching real decisions get made.
```

**Card 04:**
```
Land Tag: "LEGAL"
Headline (headline-md / #F0EDE8): Regulation, Law & Hydrology
Body (body-md / #8A8178):
Expert-led sessions on water law by jurisdiction, prior appropriation 
doctrine, NEPA considerations, and the specific legal instruments 
that govern land use in high-value western markets.
```

**Card 05:**
```
Land Tag: "MARKETS"
Headline (headline-md / #F0EDE8): Emerging Opportunity Intelligence
Body (body-md / #8A8178):
Curated, member-only intelligence on counties, watershed corridors, 
and parcel clusters that are attracting institutional attention — 
before that attention moves the price.
```

**Card 06:**
```
Land Tag: "RISK"
Headline (headline-md / #F0EDE8): De-Risk & Exit Strategies
Body (body-md / #8A8178):
Structured approaches to minimizing acquisition risk and maximizing 
exit optionality — including sale to municipalities, conservation 
easements, water lease structures, and agricultural income bridges.
```

**Card 07:**
```
Land Tag: "SYNDICATION"
Headline (headline-md / #F0EDE8): Member-Led Deal Syndications
Body (body-md / #8A8178):
Priority access to co-investment opportunities structured by members 
who have already done the diligence — for members who want to 
participate in a deal without leading it.
```

**Card 08:**
```
Land Tag: "ENVIRONMENT"
Headline (headline-md / #F0EDE8): Confidential Strategic Forum
Body (body-md / #8A8178):
A private environment where members discuss active positions, 
counterparty dynamics, and market intelligence — with the trust 
that nothing leaves the room.
```

---

### [4] HOW IT WORKS — Access, Learn, Execute

```
Layout: Full width / padding: 120px 64px (desktop), 80px 24px (mobile)
Background: #0A0A0A (back to base)
Section opener: 1px terracotta rule at top

Top label (utility-mono / #D27D2D / UPPERCASE):
"PROCESS · 03"
```

**Headline (headline-lg / #F0EDE8):**
```
Three steps.
No shortcuts.
```

**Layout: Horizontal 3-column on desktop. Stacked on mobile.**
**Each column separated by 1px vertical rule (--grid-line-strong)**

**Column 1:**
```
Number (Sora 700 / 80px / #1E1E1E — near-invisible, structural): 01
Label (label-mono / #D27D2D): APPLY
Headline (headline-md / #F0EDE8): Request Access
Body (body-md / #8A8178):
Submit a brief application. We review every applicant personally. 
We are looking for operators — people with capital, intent, 
and a specific target. Not researchers. Not tire-kickers.
```

**Column 2:**
```
Number: 02
Label (label-mono / #D27D2D): ORIENT
Headline (headline-md / #F0EDE8): Learn the Landscape
Body (body-md / #8A8178):
Your first 30 days are structured orientation — the legal landscape, 
the key markets, the instruments that matter. You will finish knowing 
more about land and water acquisition than 99% of investors in the country.
```

**Column 3:**
```
Number: 03
Label (label-mono / #D27D2D): EXECUTE
Headline (headline-md / #F0EDE8): Move on a Deal
Body (body-md / #8A8178):
With the community behind you — frameworks, network, live intelligence 
— you identify and close your first position. Members who execute 
become the ones other members learn from.
```

---

### [5] SOCIAL PROOF — Who This Is For

```
Layout: Full width / padding: 120px 64px / background: #141414
Section opener: 1px terracotta rule at top

Top label (utility-mono / #D27D2D):
"FIT · 04"
```

**Headline (headline-lg / #F0EDE8):**
```
This is not
for everyone.
That's the point.
```

**50/50 Split:**

**Left — WHO IT'S FOR (3 items):**
```
Section label (utility-mono / #8A8178): THIS IS FOR YOU IF —

Item 1:
  Label (label-mono / #D27D2D): CAPITAL-READY
  Body (body-md / #F0EDE8): 
  You have capital to deploy and want hard assets that cannot be 
  manipulated by rate decisions or earnings calls.

[1px rule]

Item 2:
  Label (label-mono / #D27D2D): EXECUTION-MINDED
  Body (body-md / #F0EDE8):
  You are not here to study. You intend to close a deal 
  within the next 12 months and you need the right intelligence 
  and connections to do it properly.

[1px rule]

Item 3:
  Label (label-mono / #D27D2D): LONG-HORIZON
  Body (body-md / #F0EDE8):
  You think in decades, not quarters. You understand that the 
  compounding value of a water right in a deficit basin is not 
  reflected in today's price — and you intend to hold until it is.
```

**Right — WHO IT'S NOT FOR (3 items):**
```
Section label (utility-mono / #8A8178): THIS IS NOT FOR YOU IF —

Item 1:
  Body (body-md / #4A4540 / with strikethrough style or muted treatment):
  You are looking for a course, a program, or a certificate.

[1px rule]

Item 2:
  Body (body-md / #4A4540):
  You want passive investment with no learning curve.

[1px rule]

Item 3:
  Body (body-md / #4A4540):
  You are unwilling to share real intelligence with other members.
```

---

### [6] APPLICATION — The Gate

```
Layout: Full width / padding: 160px 64px (desktop), 100px 24px (mobile)
Background: #0A0A0A
Section opener: 1px terracotta rule at top

Top label (utility-mono / #D27D2D):
"ACCESS · 05"
```

**Headline (headline-xl on desktop / headline-lg on mobile / #F0EDE8):**
```
Ready to move?
```

**Sub-headline (headline-md / #8A8178):**
```
Applications are reviewed within 48 hours.
Membership is limited and by approval only.
```

**Form (max-width: 560px / centered or left-aligned at 64px):**

```
Field 1:
  Label: FULL NAME
  Placeholder: Your full name

Field 2:
  Label: EMAIL ADDRESS
  Placeholder: name@company.com

Field 3:
  Label: WHAT IS YOUR PRIMARY INVESTMENT FOCUS?
  Type: select or short text
  Options if select: Land Acquisition / Water Rights / Both / Still Defining

Field 4:
  Label: APPROXIMATE CAPITAL AVAILABLE FOR DEPLOYMENT
  Type: select
  Options: Under $250K / $250K–$1M / $1M–$5M / $5M+

Field 5:
  Label: WHY DO YOU WANT TO JOIN? (3–5 sentences)
  Type: textarea
  Placeholder: Be direct. We read every application personally.
```

**Submit button:**
```
[SUBMIT APPLICATION →]   ← Primary button, full width of form
```

**Below form (utility-mono / #4A4540):**
```
Applications are confidential. We do not share applicant information.
Approved members receive access instructions within 48 hours.
```

---

### [7] FOOTER

```
Layout: Full width / padding: 64px / border-top: 1px solid rgba(240,237,232,0.20)
Background: #0A0A0A

Left: LANDNOW wordmark (Sora 700 / 16px / #F0EDE8)
      Below: utility-mono / #4A4540 — "LAND & WATER RIGHTS ACQUISITION COMMUNITY"

Right: utility-mono / #4A4540:
       © 2025 LandNow. Private Membership.
       All rights reserved.
```

---

## 4. Interaction & Animation Rules

### Scroll Behavior
```
- Sticky left panel in THE THESIS section (position: sticky, top: 0)
- Section labels fade in (opacity 0 → 1) on scroll enter, no movement — opacity only
- No scroll-triggered motion on headlines. They are present when the section enters viewport.
- Cards: on hover, border-color transitions to rgba(210, 125, 45, 0.50). Instant, no ease.
```

### Cursor
```
Custom cursor recommended: a small + crosshair in #D27D2D, 16px × 16px.
Replaces default cursor. On clickable elements, scales to 1.5×.
```

### No Effects Policy
```
- No parallax
- No gradient reveals
- No blur transitions
- No bounce easing
- If an element moves, it moves on a linear or ease-out curve, max 200ms
- The only permitted ambient effect: the space animation that precedes this page (not your concern — handle the handoff only)
```

### Handoff from Animation
```
After the space-zoom animation ends (black screen):
1. NAV BAR fades in: opacity 0 → 1, duration 400ms, delay 200ms, ease-out
2. HERO content fades in: opacity 0 → 1, duration 600ms, delay 400ms, ease-out
3. Nothing else animates on load
```

---

## 5. Responsive Breakpoints

```
Desktop:  ≥ 1024px  — 64px margins, 50/50 splits, headline-xl sizes
Tablet:   768–1023px — 40px margins, 50/50 splits collapse to 60/40, headline-lg sizes
Mobile:   < 768px   — 24px margins, all splits stack to 100%, headline-lg-mobile sizes
```

---

## 6. SEO & Meta

```html
<title>LandNow — Private Land & Water Rights Acquisition Community</title>
<meta name="description" content="A private membership community for serious operators acquiring land and water rights in the United States. Application-only.">
<meta property="og:title" content="LandNow — The Earth Never Lies.">
<meta property="og:description" content="Private community. Proprietary frameworks. Vetted investor network. For people who close.">
```

---

## 7. Font Loading

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Inter:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

---

## 8. Tone & Voice Rules for Any Copy Additions

The AI generating this page should follow these rules if it needs to write any additional copy:

1. **Declarative over descriptive.** "Water runs downhill." Not "Water naturally flows downward due to gravity."
2. **Short sentences signal confidence.** Long sentences signal uncertainty.
3. **Never use:** leverage, unlock, seamless, empower, transform, journey, ecosystem, game-changing.
4. **Address the reader as a peer, not a student.** They already know things. You are adding precision.
5. **Numbers earn trust. Use them when real.** "48 hours" not "quickly." "12 months" not "the near future."
6. **Scarcity is stated, not manufactured.** "Membership is limited" is a fact, not a tactic.
7. **Periods at end of headlines signal finality.** Use them deliberately, not on every line.
8. **Mono type = data, measurement, precision.** Use it for anything that feels like a label or coordinate.
9. **American deal-maker register.** Direct. No hedging. No apology for having a point of view.
10. **Dark = authority, not mystery.** The black background is not edgy — it is serious. The copy matches.

---

*End of build brief. Build the full page exactly as specified. Do not add sections. Do not soften the copy. Do not round the corners.*
