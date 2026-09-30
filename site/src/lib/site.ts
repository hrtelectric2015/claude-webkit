export const site = {
  name: "HRT Electric, LLC",
  shortName: "HRT Electric",
  tagline: "The Best Solution",
  url: "https://www.hrtelectric.com",
  phone: "402.981.6635",
  phoneHref: "tel:+14029816635",
  email: "hrtelectric2015@gmail.com",
  street: "2117 S 153rd St",
  city: "Omaha",
  region: "NE",
  zip: "68144",
  facebook: "https://www.facebook.com/hrtelectric/",
};

const bidBody = [
  "Project name:",
  "Address:",
  "Bid due date:",
  "Link to drawings/specs:",
  "Your name and company:",
  "Best phone number:",
].join("\n");

// TODO: Replace with a Formspree form once a form ID exists.
export const bidHref = `mailto:${site.email}?subject=${encodeURIComponent(
  "Bid request",
)}&body=${encodeURIComponent(bidBody)}`;
