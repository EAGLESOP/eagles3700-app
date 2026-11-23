# Eagles #3700 — free mobile web app

This ZIP contains a ready-to-publish Progressive Web App (PWA) for iPhone and Android. It is **not** an App Store or Google Play listing. Its hosting can be free using GitHub Pages.

## What it has

- Custom mobile design and home-screen icons
- Home, events/bingo, food/drinks, membership, community, and more sections
- Links to your existing Google Sites pages and phone/email links
- Basic offline availability for visited app pages
- No paid tools, subscriptions, accounts, analytics, or data collection by this app

**Important:** This is an independently prepared starter app. Confirm that you're authorized to use the Eagles name and presentation. Verify event times, membership rules and menus before public promotion. Bingo and trivia content is general, not a live schedule. Contact links and phone number should be checked before publication.

## Publish free using GitHub Pages (computer)

1. Unzip the package. You will see `index.html`, `styles.css`, `app.js`, `manifest.webmanifest`, `sw.js`, and an `icons` folder.
2. Go to https://github.com/signup and create a free GitHub account if you don't have one.
3. Sign in, select the **+** button, then **New repository**.
4. Repository name: `eagles3700-app`. Set visibility to **Public**. Click **Create repository**.
5. Choose **uploading an existing file** (or **Add file > Upload files**).
6. Upload **the contents of the unzipped folder**, not the ZIP and not an extra enclosing folder. You should see `index.html` at the repository's top level and `icons/` inside it. Drag-and-drop all files and the icons folder together. Click **Commit changes**.
7. Open **Settings > Pages**. Under **Build and deployment**, set **Source** to **Deploy from a branch**; choose `main` and `/(root)`, then click **Save**.
8. Once GitHub Pages completes deployment, your app link will be `https://YOUR-USERNAME.github.io/eagles3700-app/` (replace YOUR-USERNAME with your GitHub user name). Find the exact link in Settings > Pages.
9. Visit the live link in a browser; test tabs and outbound links on a phone. GitHub Pages serves HTTPS, which enables the PWA service worker.

## Install on iPhone

1. Open the published URL in **Safari**.
2. Tap **Share**, choose **Add to Home Screen**.
3. Enable **Open as Web App** if your iPhone presents that option; then tap **Add**.

## Install on Android

1. Open the published URL in **Chrome**.
2. Use the menu (three dots) > **Install app** or **Add to Home screen**.
3. Confirm.

## Edit the app

You can use Notepad (Windows) or any text editor to edit `index.html` for wording and links, `styles.css` for design, and `app.js` for navigation. Upload the changed files into the GitHub repository using **Add file > Upload files** and overwrite via GitHub's edit feature if upload conflicts; committing updates will republish the site. The service worker uses a network-first strategy so updated content normally loads online. For a more reliable refresh after big redesigns, change `eagles3700-v1` to `eagles3700-v2` in `sw.js` when deploying changed files.

## Limitations

- No live menu, automatically refreshed calendar, membership database, login, or member push notifications.
- The external Google Sites message board depends on its own configuration; this package does not store comments.
- GitHub Pages public repositories expose your source files publicly; do not put private information or secrets in them.
- GitHub Pages is intended for public static sites within its usage limits. Check GitHub's current terms for suitability.
- Brand/logos represented by the starter icon are typographic placeholders, not official Fraternal Order of Eagles insignia.
