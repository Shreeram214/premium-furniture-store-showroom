# WOODORA LIVING — Premium Furniture Showroom (Demo)

**Designed for Living. Crafted for Comfort.**

A premium, responsive single-page website for a fictional furniture showroom in Sangli, Maharashtra, India. Built with plain HTML5, CSS3 and vanilla JavaScript: no frameworks, no build step, no backend.

> **Demo content notice:** WOODORA LIVING is a fictional brand. All products, prices, specifications, testimonials, business details, phone number, email, address and hours are **sample demonstration content**. Testimonials are not genuine customer reviews. Forms do not store or send any data. Photography is from [Unsplash](https://unsplash.com) and loads from its CDN.

## Run locally

Open `index.html` in a browser, or serve the folder:

```bash
python -m http.server 8000
```

## Structure

```
woodora-living/
├── index.html        # All sections, SEO meta, Open Graph, FurnitureStore JSON-LD
├── css/style.css     # Design tokens (CSS variables), components, responsive rules
├── js/script.js      # Store config, product data, testimonials, FAQ, all interactions
└── assets/images/    # Logo + favicon (SVG)
```

## Customising

At the top of `js/script.js`:

- `STORE`: brand name, **WhatsApp number** (placeholder `919876543210`), city
- `PRODUCTS`: catalogue (name, category, price, material, dimensions, colours, description, features, image, badge). Product cards, filters and the product modal all render from this array.
- `TESTIMONIALS`, `FAQS`: carousel and accordion content

Colours and fonts are CSS variables in `:root` at the top of `css/style.css`. Contact placeholders (phone, email, address, hours, map) are in the Contact section of `index.html` and in the JSON-LD block.

## Features

Sticky header with transparent-to-solid transition · mobile slide-in menu · smooth scrolling · active navigation state · category cards and nav links that filter the catalogue · product filtering · product details modal (dimensions, colours, features) · WhatsApp enquiries prefilled with product details · custom furniture enquiry modal · validated enquiry form (Indian mobile + email) with demo success state · testimonial carousel (auto-play, arrows, dots, swipe) · FAQ accordion · scroll reveal animations · click-to-load map placeholder · floating WhatsApp button · back-to-top · lazy-loaded images · keyboard-friendly modals.
