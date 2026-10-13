# Om Trans India — Website

Static website (plain HTML, CSS, JavaScript — no framework, no build step).

## Pages
- `index.html` — Home
- `about.html` — About Us
- `services.html` — Services
- `fleet.html` — Our Fleet
- `contact.html` — Contact / Book a Truck form

## Where to edit
- **Company details** (name, phone, email, address, WhatsApp, social links): `js/config.js` → `SITE`
- **Vehicles** (sizes, capacities): `js/config.js` → `FLEET`
- **Header / footer** (shared by all pages): `js/main.js` → `renderHeader()` / `renderFooter()`
- **Colors and fonts**: top of `css/style.css` (`:root` variables)
- **Logo**: `images/logo.png`, favicon `images/favicon.png`

## Forms
There is no server, so the "Book a Truck" form opens WhatsApp with the details filled in.
The user only has to press send.

## Run locally
Open `index.html` in a browser, or run `python3 -m http.server` in this folder and open http://localhost:8000.
