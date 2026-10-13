/* =========================================================
   COMPANY DETAILS — edit this file only to update the
   name, phones, email, address and links on every page.
   ========================================================= */
const SITE = {
  name: "Om Trans India",
  tagline: "Safe • Reliable • On Time",
  about: "Fleet Owner and Transport Contractor",
  owner: "Baljit Jangra",
  phones: ["+91 93910 05001"],
  email: "omtransindiahyd@gmail.com",
  whatsapp: "919391005001",       // country code + number, no "+" or spaces
  address: "H.No. 7-29/1/B, Sy. No. 444/3/2, Poodur Vill, Medchal, Medchal Dist, Hyderabad - 501 401",
  hours: "Open 24 × 7",
  mapEmbed: "https://www.google.com/maps?q=Poodur,Medchal,Hyderabad,Telangana&output=embed",
  social: {
    instagram: "",                // add links when available; empty = hidden
    linkedin: "",
    facebook: ""
  }
};

/* Vehicles shown on the Home and Fleet pages.
   Capacities are approximate — confirm and edit as needed. */
const FLEET = [
  { size: "14 ft", name: "14 ft Truck", length: 14, axles: 1, capacity: "Up to 4 MT", use: "City and short-haul loads, small consignments" },
  { size: "17 ft", name: "17 ft Truck", length: 17, axles: 1, capacity: "Up to 6 MT", use: "FMCG, retail and medium loads" },
  { size: "20 ft", name: "20 ft Truck", length: 20, axles: 1, capacity: "Up to 7 MT", use: "Industrial goods and bulk cartons" },
  { size: "22 ft", name: "22 ft Truck", length: 22, axles: 1, capacity: "Up to 10 MT", use: "Long-haul and inter-state movement" },
  { size: "32 ft", name: "32 ft SXL Container", length: 32, axles: 1, capacity: "Up to 7 MT", use: "Light, high-volume cargo — single axle" },
  { size: "32 ft", name: "32 ft MXL Container", length: 32, axles: 3, capacity: "Up to 16 MT", use: "Heavy, high-volume cargo — multi axle" }
];
