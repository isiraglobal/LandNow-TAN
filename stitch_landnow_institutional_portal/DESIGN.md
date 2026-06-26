---
name: LandNow Editorial System
colors:
  surface: '#f8f9fa'
  surface-dim: '#d9dadb'
  surface-bright: '#f8f9fa'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f5'
  surface-container: '#edeeef'
  surface-container-high: '#e7e8e9'
  surface-container-highest: '#e1e3e4'
  on-surface: '#191c1d'
  on-surface-variant: '#544437'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f2'
  outline: '#877366'
  outline-variant: '#dac2b2'
  surface-tint: '#904d00'
  primary: '#904d00'
  on-primary: '#ffffff'
  primary-container: '#d27d2d'
  on-primary-container: '#452200'
  inverse-primary: '#ffb77d'
  secondary: '#5f5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e5e2e1'
  on-secondary-container: '#656464'
  tertiary: '#006782'
  on-tertiary: '#ffffff'
  tertiary-container: '#009ec7'
  on-tertiary-container: '#002f3d'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdcc3'
  primary-fixed-dim: '#ffb77d'
  on-primary-fixed: '#2f1500'
  on-primary-fixed-variant: '#6e3900'
  secondary-fixed: '#e5e2e1'
  secondary-fixed-dim: '#c8c6c5'
  on-secondary-fixed: '#1c1b1b'
  on-secondary-fixed-variant: '#474646'
  tertiary-fixed: '#bbe9ff'
  tertiary-fixed-dim: '#60d4ff'
  on-tertiary-fixed: '#001f29'
  on-tertiary-fixed-variant: '#004d63'
  background: '#f8f9fa'
  on-background: '#191c1d'
  surface-variant: '#e1e3e4'
typography:
  headline-xl:
    fontFamily: Sora
    fontSize: 80px
    fontWeight: '700'
    lineHeight: 72px
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Sora
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 48px
    letterSpacing: -0.03em
  headline-lg-mobile:
    fontFamily: Sora
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 34px
    letterSpacing: -0.03em
  headline-md:
    fontFamily: Sora
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 28px
    letterSpacing: -0.02em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: '0'
  label-mono:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.05em
  utility-mono:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 12px
    letterSpacing: 0.1em
spacing:
  grid-unit: 8px
  margin-desktop: 64px
  margin-mobile: 24px
  gutter: 1px
  split-container: 50%
---

## Brand & Style
This design system is built on the principles of **Architectural Minimalism** and **High-Contrast Editorial** design. It is tailored for a premium audience that values clarity, structural integrity, and the raw materiality of land. The brand personality is authoritative, precise, and uncompromising.

The aesthetic rejects "soft" modern UI trends (gradients, shadows, rounded corners) in favor of a **Brutalist-Minimalist** hybrid. It utilizes a strict 1px structural grid, heavy use of negative space, and a vertical-split layout philosophy to create a sense of balanced tension. The goal is to evoke the feeling of a high-end architectural monograph or a premium real estate prospectus.

## Colors
The palette is intentionally restricted to emphasize hierarchy and material quality.
- **Base Background (#F8F9FA):** A stark, off-white "gallery" neutral used for all primary canvases.
- **High-Contrast/Text (#111111):** A deep charcoal-slate used for typography, structural grid lines, and high-intensity UI blocks.
- **Primary Action (#D27D2D):** A rich, burnt terracotta/clay. This color is reserved strictly for primary calls to action, connecting the digital experience back to the physical earth.
- **Inverted Surfaces (#FFFFFF):** Pure white is used only for specific content cards or internal containers to provide a subtle "lift" against the off-white background without using shadows.

## Typography
Typography is the primary engine of the design system.
- **Headlines (Sora):** Set with aggressive negative letter-spacing and tight line heights to create "word blocks." This geometric sans-serif communicates modernity and strength.
- **Body (Inter):** A neutral, systematic sans-serif for high legibility.
- **Utility (JetBrains Mono):** Used for all technical data, labels, and micro-copy. It reinforces the "surveyor" or "architectural" aspect of the brand.
- **Text Alignment:** Headlines should often be justified or aligned to hard edges to maintain the structural grid integrity.

## Layout & Spacing
The layout is governed by a **Fixed Structural Grid**.
- **The 50/50 Split:** The core layout component is a vertical split container. On desktop, content is divided into two equal halves. The left usually holds fixed imagery or primary headlines, while the right handles scrollable content or data.
- **1px Grid Lines:** All major sections and layout divisions are separated by a 1px solid border (#111111 at 10% opacity for internal grids, 100% for primary divisions). 
- **The "No-Gutter" Philosophy:** Instead of traditional white-space gutters, elements are flush against the 1px grid lines, creating a blueprint-like appearance.
- **Responsive Behavior:** On mobile, the 50/50 split stacks vertically (100% width). Margins reduce from 64px to 24px to maximize screen real estate for technical data.

## Elevation & Depth
This design system uses **Flat Architectural Layering**. 
- **Depth via Borders:** Elevation is not communicated through shadows or blurs, but through 1px strokes and color fills. 
- **Z-Index Tiers:** Lower-level content sits on the #F8F9FA base. Elevated content or "active" cards use a #FFFFFF background with a 1px solid #111111 border.
- **Zero Effects:** Do not use box-shadows, backdrop blurs, or gradients. If a component needs to stand out, use a high-contrast fill (Primary Terracotta or Charcoal).

## Shapes
The shape language is strictly **Rectilinear**. All corners are set to 0px. There are no exceptions for buttons, inputs, or containers. This "Sharp" approach reinforces the precision of land measurement and architectural planning.

## Components
- **Buttons:** 
  - *Primary:* Rectangular, solid #D27D2D fill, white uppercase Mono text. No border.
  - *Secondary:* 1px #111111 border, transparent background, Charcoal Mono text.
- **Input Fields:** Bottom-border only (1px #111111). Labels use `utility-mono` and sit above the line.
- **Cards:** Defined by a 1px #111111 border. No shadows. Content inside cards follows the same structural grid.
- **Lists:** Technical data lists use `label-mono` for keys and `body-md` for values, separated by a 1px horizontal rule.
- **Split Hero:** A full-height component with an image on the left and a Charcoal background on the right with white Sora headlines.
- **The "Land Tag":** A small, rectangular chip with a black background and white Mono text, used for categories or status.