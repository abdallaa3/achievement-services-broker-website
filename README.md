# Achievement Services Broker Website

Static bilingual Arabic/English website for `achbroker.com`, ready to upload to Hostinger.

## Folder Structure

- `index.html` redirects visitors to the Arabic homepage.
- `ar/` Arabic RTL pages.
- `en/` English LTR pages.
- `assets/css/styles.css` shared styling.
- `assets/js/main.js` shared interactions.
- `assets/img/` local generated website images.
- `robots.txt` and `sitemap.xml` SEO files.
- `build-site.js` source generator used to create the static pages.

## Deploy On Hostinger

1. Open Hostinger File Manager for `achbroker.com`.
2. Go to `public_html`.
3. Upload everything from this folder into `public_html`.
4. Confirm these URLs work:
   - `https://achbroker.com/`
   - `https://achbroker.com/ar/`
   - `https://achbroker.com/en/`
5. The contact form currently opens WhatsApp with the submitted details. It can later be connected to email or a backend by replacing the handler in `assets/js/main.js`.

## Update Pages

Edit content in `build-site.js`, then run:

```bash
npm run build
```

The generated static files can then be uploaded again.
