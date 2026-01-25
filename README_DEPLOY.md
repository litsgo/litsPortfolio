# Deploying this PortfolioWebsite

This repository is a Vite + React project. Below are three easy deployment options. Pick one — I've included both automatic GitHub Actions and manual instructions.

Prerequisites
- Project pushed to a Git remote (GitHub recommended).
- Node.js and npm installed locally to build/test.

Local build & preview
```bash
npm install
npm run build
npm run preview
```

Option A — Vercel (recommended)
1. Push your repo to GitHub.
2. Sign in to https://vercel.com and import the repository.
3. Confirm build settings: `npm run build`, output directory `dist`.
4. Deploy — Vercel will provide a public URL.

Serverless email (SendGrid / SMTP)
- To send emails from your domain and have replies go to the submitter, configure serverless email in Vercel.
- In Vercel dashboard > Project > Settings > Environment Variables, add the following:
	- `VITE_USE_SENDGRID` = `1` (enable SendGrid path)
	- `SENDGRID_API_KEY` = your SendGrid API key
	- `FROM_EMAIL` = the verified sender email (e.g., hello@yourdomain.com)
	- `TO_EMAIL` = your receiving email (defaults to litsbandiala8@gmail.com)

	Or to use SMTP instead of SendGrid:
	- `VITE_USE_SMTP` = `1`
	- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`
	- `FROM_EMAIL`, `TO_EMAIL`

Notes:
- SendGrid requires you to verify `FROM_EMAIL` before it will send. Use a verified domain/sender.
- After deployment, test the form on your live site. The email's Reply-To will be set to the submitter so replies go to them.

Option B — Netlify
1. Push your repo to GitHub.
2. Go to https://app.netlify.com/start and connect the repo.
3. Build command: `npm run build`, Publish directory: `dist`.
4. The included `public/_redirects` file ensures SPA routing works.

Option C — GitHub Pages (automatic via GitHub Actions)
1. Push your repo to GitHub.
2. The included GitHub Action will build and publish the `dist` folder to the `gh-pages` branch automatically on push to `main`.
3. Once the action completes, enable GitHub Pages in repository settings (if not auto-configured) to serve from `gh-pages` branch.

Notes about the contact form (FormSubmit)
- If your contact form uses FormSubmit and requires activation, activate the origin shown in the email FormSubmit sent you (the origin must match your deployed URL).
- For best deliverability and to have replies go to the submitter, we set `_replyto` — replies will open in your mail client addressed to the sender.

Next steps I can do for you
- Create the remote GitHub repo and push the workspace (requires your GitHub credentials).
- Connect and deploy to Vercel on your behalf (requires Vercel/GitHub permissions).
- Configure DNS / custom domain.
