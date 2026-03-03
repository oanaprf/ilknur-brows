# Ilknur Brows — Claude Guidelines

## Tech Stack
- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Translations**: i18next + react-i18next
- **Linting**: ESLint + Prettier

## Brand
- **Primary**: `#d8429d`
- **Background / secondary**: `#ffffff`
- **Aesthetic**: Clean, premium brow artistry

## UI Guidelines

See [design-principles.md](./design-principles.md) for the full design checklist (S-Tier UI principles inspired by Stripe, Airbnb, Linear).

### Key rules for this project
- Mobile-first, fully responsive layouts
- Components must stay under 150 lines
- Break complex sections into focused sub-components
- Use Tailwind utility classes exclusively — no inline styles
- Prefer semantic HTML (`section`, `article`, `nav`, `header`, `footer`)
- All user-facing strings go through i18next (`useTranslation` hook)
- Images use Next.js `<Image>` with proper `alt` text
- Maintain WCAG AA contrast ratios

## Project Structure
```
src/
  app/           # Next.js App Router pages & layouts
  components/    # Reusable UI components (max 150 lines each)
  locales/       # i18n translation JSON files (en/, ro/, tr/)
  lib/           # Utilities, i18n config
  types/         # Shared TypeScript types
public/
  images/        # Static images
```
