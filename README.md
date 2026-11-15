# Sattar Rahim – portefølje

Personlig portefølje for Sattar Rahim, fullstack-utvikler i Oslo.

**Live:** https://min-portfolje.vercel.app

## Teknologi

- React 18 og TypeScript
- Vite
- Tailwind CSS og shadcn/ui (Button, Tooltip)
- EmailJS for kontaktskjemaet

## Kjør lokalt

```sh
npm install
npm run dev
```

Kontaktskjemaet trenger en `.env`-fil i rotmappen:

```
VITE_SERVICE_ID=...
VITE_TEMPLATE_ID=...
VITE_PUBLIC_KEY=...
```

## Skript

| Kommando          | Hva den gjør                   |
| ----------------- | ------------------------------ |
| `npm run dev`     | Starter utviklingsserveren     |
| `npm run build`   | Bygger for produksjon (`dist`) |
| `npm run preview` | Forhåndsviser produksjonsbygget |
| `npm run lint`    | Kjører ESLint                  |
