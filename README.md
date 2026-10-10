# Ahmed Exporters — Website

This is the public-facing website for Ahmed Exporters, a Bangladesh-based **merchant exporter and international sourcing company** that also coordinates production with **independent third-party manufacturers**.

## Website

- Live GitHub Pages URL: https://aryancodespy.github.io/ahmed-exporters/
- Design: editorial B2B trade identity; existing Ahmed Exporters logo; Manrope + Cormorant Garamond; existing warm brown, beige and gold brand palette.
- Stack: static HTML, CSS and vanilla JavaScript. No build or package installation required.
- Pages: Home, Company, Products, What We Do, Process, Why Ahmed and Contact.

## Local preview

Run any local static server from the repository root. For example:

```sh
python -m http.server 8000
```

Then open http://localhost:8000/.

## Enquiries

**Important:** This is a static GitHub Pages site. The enquiry form uses `mailto:` to open a buyer's email client with a prefilled message addressed to `info@ahmedexporters.com`. It **does not send or save messages directly**. The visitor must review and send the email from their configured email application.

For one-click submission without opening an email client, connect a verified server-side submission endpoint or form provider, add spam protection, and publish an appropriate privacy notice. Do not display a successful submission message unless the server confirms delivery.

## Business accuracy notes

- Ahmed Exporters is described as a **merchant exporter, sourcing intermediary and third-party manufacturing coordinator**, not as the owner of a factory.
- The site currently focuses on leather goods. Confirm any future product-category expansion with the business before publishing it.
- All product, leather, workshop and logistics photographs currently embedded from `images.pexels.com` are **representative stock imagery**, not verified photos of Ahmed Exporters' products, facilities, staff or shipments.
- Historic establishment year `2018`, contact information and location were retained from the previous site and should be verified before public release.
- Do not add unverified certificates, factory ownership, client logos, manufacturing capacity, export markets, minimum order quantities or delivery promises.

## Deployment & SEO

GitHub Pages serves static files from the configured deployment branch and directory. Routes use relative `.html` links to support GitHub Pages under `/ahmed-exporters/`.

Canonical URLs, Open Graph URLs, the XML sitemap, and `robots.txt` currently reference the GitHub Pages URL. If `ahmedexporters.com` is configured as the canonical host, update those URLs together and configure the GitHub Pages custom domain in repository settings. Do not add `CNAME` until domain ownership and DNS routing are confirmed.

## Design assets

- Logo: `ahmed-exporters-logo.png` (retained unmodified).
- Fonts: Manrope and Cormorant Garamond, loaded from Google Fonts.
- Photographs: Pexels CDN URLs reused from the previous repository.
- CSS and JavaScript: `styles.css` and `script.js`.

## QA checklist

- Verify all seven pages and internal links on desktop/tablet/mobile.
- Inspect hero and category imagery for correct cropping, legibility and relevance.
- Check the mobile navigation (open/close, Escape, outside-click and breakpoints).
- Test contact form required-field validation and email draft population with a configured mail client; confirm that no direct submission is claimed.
- Test keyboard navigation and reduced-motion preference.
- Reconfirm the company information and stock photography before publishing.
