# AI Code Reviewer — Frontend

Frontend-only UI for a personal "AI Code Reviewer" project. No backend / API calls are wired up yet — the review output uses mock data so the layout can be built against before the real integration.

## Stack

React + Vite + Tailwind CSS + React Router + lucide-react icons.

## Run it

```bash
npm install
npm run dev
```

Then open the printed local URL (usually http://localhost:5173).

## Pages

- `/` — Landing page (hero, features, how it works, CTA, footer)
- `/review` — Code Reviewer app (paste code, mock AI review output)

## Where to plug in the real API later

Open `src/pages/Review.jsx` and look at `handleReview`. It currently just sets a loading
state and swaps in `src/mock/mockReview.js` after a short delay. Replace that `setTimeout`
block with a real request to your review endpoint, and pass the response into `ReviewPanel`
in the same shape as `mockReview.js` (or update `ReviewPanel.jsx` to match your API's shape).
