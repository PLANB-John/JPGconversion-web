# Production-Ready Setup Guide (Next.js + TypeScript + Tailwind + GitHub + Vercel)

This guide helps you set up the **project foundation only** (no tool pages yet), so you can safely build a global multilingual tools site later.

---

## 1) Prerequisites checklist

Install these first:

- [ ] **Node.js LTS** (recommended: **Node 20 LTS**)
  - Why: Stable, widely supported by Next.js and hosting platforms.
- [ ] **Git**
  - Why: Version control + required for GitHub + Vercel workflow.
- [ ] **Code editor** (recommended: **Visual Studio Code**)
  - Why: Easy beginner setup and excellent TypeScript/Next.js support.

### Where to install

- Node.js: https://nodejs.org (download **LTS**)  
- Git: https://git-scm.com/downloads  
- VS Code: https://code.visualstudio.com/

---

## 2) Verify installations

Open a terminal and run:

```bash
node -v
npm -v
git --version
```

### What success looks like

- `node -v` prints something like `v20.x.x`
- `npm -v` prints a number like `10.x.x`
- `git --version` prints something like `git version 2.x.x`

### Common mistakes and fixes

- **`node: command not found`**
  - Fix: Restart terminal after installation, then run again.
  - On macOS/Linux, check your PATH or reinstall Node LTS.
- **Node version is old (for example v14/v16)**
  - Fix: Install Node 20 LTS and ensure that version is active.
- **`git: command not found`**
  - Fix: Install Git and restart terminal.

---

## 3) Create a new Next.js project (App Router + TS + Tailwind + src + alias)

Pick a folder where you keep projects, then run:

```bash
npx create-next-app@latest global-tools-web
```

When prompted, choose:

1. `Would you like to use TypeScript?` → **Yes**
2. `Would you like to use ESLint?` → **Yes**
3. `Would you like to use Tailwind CSS?` → **Yes**
4. `Would you like your code inside a src/ directory?` → **Yes**
5. `Would you like to use App Router?` → **Yes**
6. `Would you like to use Turbopack for next dev?` → **Yes** (recommended for faster local dev)
7. `Would you like to customize the import alias (@/* by default)?` → **No** (keep default `@/*`)

Then move into the project:

```bash
cd global-tools-web
```

### What success looks like

- Terminal finishes without error.
- A new folder `global-tools-web` exists.
- Inside it, you see files like `package.json`, `next.config.ts`, `tsconfig.json`, and `src/`.

### Common mistakes and fixes

- **You accidentally answered “No” to TypeScript/Tailwind/src/App Router**
  - Fix: easiest for beginners is delete the folder and run `create-next-app` again.
- **Permission errors during creation**
  - Fix: create project in your user/home directory (not system-protected folders).

---

## 4) Recommended options summary (quick reference)

Use this exact combination for your goals:

- App Router: **Yes**
- TypeScript: **Yes**
- Tailwind CSS: **Yes**
- `src/` directory: **Yes**
- Import alias: keep default **`@/*`**

Why this setup helps long-term:

- TypeScript improves reliability as project grows.
- App Router is modern Next.js standard.
- Tailwind speeds up UI building and keeps style consistency.
- `src/` keeps project clean and scalable.
- `@/*` alias avoids messy relative imports.

---

## 5) Run the project locally

From inside `global-tools-web`:

```bash
npm install
npm run dev
```

Then open:

- http://localhost:3000

### What success looks like

- Terminal shows something like: `Ready in ...` and local URL.
- Browser shows the default Next.js starter page.

### Common mistakes and fixes

- **Port 3000 already in use**
  - Fix: run `npm run dev -- -p 3001` and open `http://localhost:3001`.
- **Dependencies fail to install**
  - Fix: check internet connection, then retry `npm install`.
- **Blank page or load errors**
  - Fix: stop server (`Ctrl + C`), rerun `npm run dev`, refresh browser.

---

## 6) Recommended initial folder structure (for future multilingual SEO)

Do **not** build tool pages yet. Just prepare a clean structure.

```text
global-tools-web/
  public/
    images/
    icons/
  src/
    app/
      (marketing)/
      [locale]/
        (site)/
      api/
      globals.css
      layout.tsx
      page.tsx
    components/
      ui/
      shared/
    features/
      tools/
      seo/
      i18n/
    lib/
      config/
      constants/
      utils/
    messages/
      en/
      es/
      fr/
    types/
```

### Why this is useful

- `[locale]/` prepares for localized routes like `/en/...`, `/es/...` later.
- `messages/` can hold translation files by language.
- `features/seo` keeps future metadata/sitemap logic organized.
- `components/ui` and `components/shared` avoid duplication.

### Common mistakes and fixes

- **Putting everything inside `app/`**
  - Fix: keep reusable code in `components`, `features`, `lib`, `types`.
- **Mixing translation text directly in components**
  - Fix: keep language content in `messages/` so localization stays manageable.

---

## 7) Create a GitHub repository and connect local project

### A) Create an empty GitHub repo

On GitHub:

1. Click **New repository**
2. Name: `global-tools-web`
3. Visibility: Public or Private (your choice)
4. **Do not** initialize with README/.gitignore/license (because project already exists locally)
5. Click **Create repository**

### B) Connect local project to GitHub

Inside your project folder:

```bash
git init
git add .
git commit -m "chore: initialize Next.js app with TypeScript and Tailwind"
git branch -M main
git remote add origin https://github.com/<your-username>/global-tools-web.git
```

(Replace `<your-username>` with your GitHub username.)

### What success looks like

- `git status` says clean working tree after commit.
- `git remote -v` shows your GitHub URL.

### Common mistakes and fixes

- **`remote origin already exists`**
  - Fix: run `git remote set-url origin <repo-url>`.
- **Commit failed because Git identity not set**
  - Fix:
    ```bash
    git config --global user.name "Your Name"
    git config --global user.email "you@example.com"
    ```
  - Then commit again.

---

## 8) Push the first commit

```bash
git push -u origin main
```

### What success looks like

- Terminal shows upload progress and no errors.
- Refresh GitHub repo page and you see your files.

### Common mistakes and fixes

- **Authentication failed**
  - Fix: use GitHub CLI login or a personal access token when prompted.
- **`src refspec main does not match any`**
  - Fix: you likely did not commit yet; run `git add . && git commit -m "..."` first.

---

## 9) Import GitHub repository into Vercel and deploy

1. Log in to https://vercel.com
2. Click **Add New... → Project**
3. Import `global-tools-web` from GitHub
4. Keep defaults:
   - Framework Preset: **Next.js**
   - Build Command: auto-detected (`next build`)
   - Output: auto-detected
5. Click **Deploy**

### What success looks like

- Vercel build logs end with a successful deployment.
- You receive a production URL like `https://global-tools-web.vercel.app`.

### Common mistakes and fixes

- **Repository not visible in Vercel import list**
  - Fix: confirm GitHub-Vercel integration and repo access permissions.
- **Build fails on Vercel**
  - Fix: inspect build logs, then reproduce locally with:
    ```bash
    npm run build
    ```

---

## 10) Verify deployment succeeded

Check both local and production:

```bash
npm run build
```

Then:

- Open Vercel production URL.
- Confirm homepage loads and no 404/500 errors.
- In Vercel dashboard, deployment status should be **Ready**.

### Common mistakes and fixes

- **Works locally but fails on Vercel**
  - Fix: compare Node version and environment variables; ensure required env vars are set in Vercel.
- **Deployed old code**
  - Fix: verify latest commit is pushed to `main` and auto-deploy is enabled.

---

## 11) Small future recommendation (do not implement yet)

For multilingual SEO planning later:

- Use locale-based routing like `/en`, `/es`, `/fr`.
- Plan to set language-specific metadata (title/description) per locale.
- Plan `hreflang` alternates and localized sitemap entries.
- Choose one i18n strategy early (for example `next-intl`) before building many pages.

Keep this as planning only for now. Do not add tool pages yet.

---

## Quick command list (copy/paste)

```bash
# verify tools
node -v
npm -v
git --version

# create app
npx create-next-app@latest global-tools-web
cd global-tools-web

# run local
npm install
npm run dev

# git + github
git init
git add .
git commit -m "chore: initialize Next.js app with TypeScript and Tailwind"
git branch -M main
git remote add origin https://github.com/<your-username>/global-tools-web.git
git push -u origin main

# local production check
npm run build
```
