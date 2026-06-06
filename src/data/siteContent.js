// ============================================================
// TRIPSY INDIA TOURS & HOLIDAYS — SITE CONTENT CONFIG
// Edit this file to update all website content
// ============================================================

export const brand = {
  name: "Tripsy India",
  tagline: "The Holiday Wala",
  fullName: "Tripsy India Tours and Holidays",
  logo: "/logo.png",
  heroImage: "/hero-bg.png",
  established: "2015",
  copyright: "2026",
};

export const contact = {
  phone: "9760867173",
  phoneDisplay: "+91 97608 67173",
  secondaryPhone: "9045829009",
  secondaryPhoneDisplay: "+91 90458 29009",
  whatsapp: "919760867173",
  email: "tripsyindia087@gmail.com",
  social: {
    facebook: "https://facebook.com/tripsyindia",
    instagram: "https://instagram.com/tripsyindia",
    youtube: "https://youtube.com/@tripsyindia",
    twitter: "https://twitter.com/tripsyindia",
  },
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Enquiry", href: "#enquiry" },
  { label: "Contact", href: "#contact" },
];

export const hero = {
  badge: "🏆 Trusted by 5000+ Happy Travelers",
  heading1: "Explore Incredible",
  heading2: "India",
  heading3: "with Tripsy India",
  subheading:
    "Custom Holiday Packages for Kashmir, Manali, Himachal, Darjeeling, Goa and South India Pilgrim Tours.",
  cta1: "View Packages",
  cta2: "WhatsApp Enquiry",
  trustBadges: [
    { icon: "Package", label: "Customized Packages", desc: "Tailored itineraries just for you" },
    { icon: "Plane", label: "Best Destinations", desc: "Handpicked places for unforgettable trips" },
    { icon: "Shield", label: "Trusted & Safe", desc: "Your safety is our top priority" },
    { icon: "Headphones", label: "24x7 Support", desc: "We're here to help you anytime" },
    { icon: "Tag", label: "Best Price Guarantee", desc: "Get the best value for your money" },
  ],
};

export const whyChooseUs = [
  {
    icon: "Map",
    title: "Customized Packages",
    desc: "Every holiday we plan is tailored to your preferences, budget, and travel style. No cookie-cutter tours.",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: "Plane",
    title: "Expert Travel Guides",
    desc: "Our experienced local guides ensure you discover hidden gems and iconic landmarks with deep cultural insights.",
    color: "from-pink-400 to-rose-500",
  },
  {
    icon: "Shield",
    title: "Safe & Secure Travel",
    desc: "We prioritize your safety at every step — from verified accommodations to 24x7 on-ground support.",
    color: "from-violet-400 to-purple-500",
  },
  {
    icon: "Headphones",
    title: "24x7 Customer Support",
    desc: "Got questions at midnight? We're always available. Our team is just a call or WhatsApp message away.",
    color: "from-amber-400 to-orange-500",
  },
];

export const destinations = [
  {
    id: 1,
    name: "Kashmir",
    tagline: "Paradise on Earth",
    image: "/kashmir-card.png",
    nights: "5N/6D",
    price: "₹13,999/- onward",
    highlights: ["Dal Lake Shikara", "Gulmarg Gondola", "Pahalgam Valley"],
    badge: "Bestseller",
  },
  {
    id: 2,
    name: "Manali",
    tagline: "Adventure in the Himalayas",
    image: "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=600&q=80",
    nights: "4N/5D",
    price: "₹7,999/- onward",
    highlights: ["Solang Valley", "Rohtang Pass", "Old Manali Market"],
    badge: "Popular",
  },
  {
    id: 3,
    name: "Shimla",
    tagline: "Queen of Hills",
    image: "/himachal-card.png",
    nights: "5N/6D",
    price: "₹5,999/- onward",
    highlights: ["Shimla Mall Road", "Kufri Snow Point", "Spiti Valley"],
    badge: "New",
  },
  {
    id: 4,
    name: "Darjeeling",
    tagline: "Queen of Hills",
    image: "/darjeeling-card.png",
    nights: "3N/4D",
    price: "₹16,999/- onward",
    highlights: ["Tiger Hill Sunrise", "Toy Train Ride", "Tea Gardens"],
    badge: "Trending",
  },
  {
    id: 5,
    name: "Goa",
    tagline: "Sun, Sand & Serenity",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80",
    nights: "3N/4D",
    price: "₹19,999/- onward",
    highlights: ["Baga Beach", "Dudhsagar Falls", "Old Goa Churches"],
    badge: "Hot Deal",
  },
  {
    id: 6,
    name: "Kerala",
    tagline: "Backwaters, Beaches & Green Escapes",
    image: "/south-india-pilgrim-card.png",
    nights: "6N/7D",
    price: "₹15,900/- onward",
    highlights: ["Alleppey Backwaters", "Munnar Tea Gardens", "Kochi Heritage"],
    badge: "Nature",
  },
];

export const stats = [
  { number: 5000, suffix: "+", label: "Happy Travelers" },
  { number: 150, suffix: "+", label: "Tour Packages" },
  { number: 25, suffix: "+", label: "Destinations" },
  { number: 99, suffix: "%", label: "Satisfaction Rate" },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Delhi",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
    text: "Our Kashmir trip was absolutely magical! Tripsy India arranged everything perfectly — from the shikara ride on Dal Lake to the snow-capped Gulmarg. Highly recommended!",
    destination: "Kashmir Tour",
  },
  {
    id: 2,
    name: "Rahul Verma",
    location: "Lucknow",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
    text: "Booked a Manali package for our honeymoon. The team was super responsive on WhatsApp, the hotel was beautiful and every activity was perfectly timed. 5 stars!",
    destination: "Manali Honeymoon",
  },
  {
    id: 3,
    name: "Sunita Agarwal",
    location: "Agra",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
    text: "We did the South India Pilgrim tour with our family of 8. Tripsy India managed everything from Tirupati to Rameshwaram flawlessly. A truly divine experience.",
    destination: "South India Pilgrim",
  },
  {
    id: 4,
    name: "Amit Gupta",
    location: "Meerut",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
    text: "Goa trip for 6 friends was epic! Amazing beachside resort, water sports, night market — everything was within budget and the support team was always available.",
    destination: "Goa Friends Trip",
  },
  {
    id: 5,
    name: "Neha Mishra",
    location: "Kanpur",
    rating: 5,
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=80&q=80",
    text: "Darjeeling with kids was our best family trip. The toy train, tea gardens, and Tiger Hill sunrise — our kids still talk about it. Thank you Tripsy India!",
    destination: "Darjeeling Family Tour",
  },
];

export const faqs = [
  {
    q: "How do I book a tour package with Tripsy India?",
    a: "Simply fill out our enquiry form, call us at +91 97608 67173, or WhatsApp us directly. Our travel expert will get back to you within 30 minutes with a customized itinerary.",
  },
  {
    q: "Do you offer customized tour packages?",
    a: "Absolutely! Every package we create is 100% customized based on your group size, budget, travel dates, and preferences. We don't believe in one-size-fits-all holidays.",
  },
  {
    q: "What is included in your tour packages?",
    a: "Our packages typically include accommodation, transportation, sightseeing, meals (as specified), and a dedicated travel guide. The exact inclusions vary per package.",
  },
  {
    q: "Is advance booking required?",
    a: "We recommend booking at least 7-10 days in advance, especially for peak season (May-June and October-November). However, we do accommodate last-minute bookings subject to availability.",
  },
  {
    q: "What is your cancellation and refund policy?",
    a: "We offer flexible cancellation with a full refund for cancellations made 15+ days before departure, 50% refund for 7-14 days, and no refund within 7 days. Emergency situations are handled on a case-by-case basis.",
  },
  {
    q: "Do you provide travel insurance?",
    a: "Yes, we offer optional travel insurance for all our packages. We strongly recommend it for hill station and adventure tours to cover medical emergencies and trip cancellations.",
  },
  {
    q: "Which destinations do you specialize in?",
    a: "We specialize in Kashmir, Manali, Himachal Pradesh, Darjeeling, Goa, and South India Pilgrim tours. We also cover Rajasthan, Kerala, Char Dham, and international destinations on request.",
  },
];

export const gallery = [
  { src: "/gallery-01.png", label: "Rann of Kutch", aspect: "1536 / 1024" },
  { src: "/gallery-02.png", label: "Mountain Valley", aspect: "1535 / 1024" },
  { src: "/gallery-03.png", label: "Snowy Manali", aspect: "1024 / 1536" },
  { src: "/gallery-04.png", label: "Kerala Backwaters", aspect: "1536 / 1024" },
  { src: "/gallery-05.png", label: "Pamban Bridge", aspect: "1536 / 1024" },
  { src: "/gallery-06.png", label: "Jagannath Temple", aspect: "1024 / 1536" },
  { src: "/gallery-07.png", label: "Red Fort", aspect: "1536 / 1024" },
  { src: "/gallery-08.png", label: "Taj Mahal", aspect: "1086 / 1448" },
  { src: "/gallery-09.png", label: "Victoria Memorial", aspect: "1086 / 1448" },
  { src: "/gallery-10.png", label: "Mumbai Waterfront", aspect: "1672 / 941" },
  { src: "/gallery-11.png", label: "Wagah Border", aspect: "1536 / 1024" },
];

export const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Tour Packages", href: "#packages" },
  { label: "Gallery", href: "#gallery" },
  { label: "Enquiry Form", href: "#enquiry" },
  { label: "Contact Us", href: "#contact" },
  { label: "FAQs", href: "#faq" },
];

export const popularDestinations = [
  "Kashmir",
  "Manali",
  "Himachal Pradesh",
  "Darjeeling",
  "Goa",
  "South India Pilgrim",
  "Rajasthan",
  "Kerala",
  "Char Dham",
  "Uttarakhand",
];
