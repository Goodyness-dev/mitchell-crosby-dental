export const BUSINESS_INFO = {
  name: "Mitchell & Crosby Family Dentistry",
  legalName: "Mitchell & Crosby Family Dentistry LLC",
  tagline: "Compassionate, High-Tech Family & Cosmetic Dentistry in Casa Grande Since 1953",
  address: {
    street: "721 N Olive Ave",
    city: "Casa Grande",
    state: "AZ",
    zip: "85122",
    formatted: "721 N Olive Ave, Casa Grande, AZ 85122",
  },
  phone: "(520) 836-7111",
  secondaryPhone: "(520) 836-4613",
  fax: "(520) 836-4613",
  website: "mitchellandcrosbydental.com",
  email: "toothdoc2009@hotmail.com",
  googleMapsLink: "https://www.google.com/maps/search/?api=1&query=Mitchell+and+Crosby+Dental+721+N+Olive+Ave+Casa+Grande+AZ",
  googleMapsEmbedUrl: "https://maps.google.com/maps?q=721%20N%20Olive%20Ave%2C%20Casa%20Grande%2C%20AZ%2085122&t=&z=15&ie=UTF8&iwloc=&output=embed",
  
  hours: [
    { day: "Monday", open: "8:00 AM", close: "5:00 PM", hours: "8:00 AM – 5:00 PM", note: "General & Cosmetic Appointments" },
    { day: "Tuesday", open: "8:00 AM", close: "5:00 PM", hours: "8:00 AM – 5:00 PM", note: "CEREC Same-Day Crown Bays" },
    { day: "Wednesday", open: "8:00 AM", close: "5:00 PM", hours: "8:00 AM – 5:00 PM", note: "Implants & Restorative Care" },
    { day: "Thursday", open: "8:00 AM", close: "5:00 PM", hours: "8:00 AM – 5:00 PM", note: "Family & Pediatric Dentistry" },
    { day: "Friday", open: "8:00 AM", close: "1:00 PM", hours: "8:00 AM – 1:00 PM", note: "Every Other Friday (By Appt)" },
    { day: "Saturday", open: "Closed", close: "Closed", hours: "Closed (On-Call)", note: "Emergency On-Call" },
    { day: "Sunday", open: "Closed", close: "Closed", hours: "Closed (On-Call)", note: "Emergency On-Call" },
  ],

  history: [
    {
      year: "1953",
      title: "Pinal County Community Heritage",
      description: "Founded over 70 years ago, Mitchell & Crosby Family Dentistry has been a generational pillar of compassionate, community-first oral health in the Casa Grande Valley."
    },
    {
      year: "2007",
      title: "Dr. Jeffrey Mitchell Returns Home",
      description: "Born and raised in Casa Grande, Dr. Mitchell graduated in the top 10% of his dental class at the University of Colorado and returned home to care for the teachers, neighbors, and families who raised him."
    },
    {
      year: "2019",
      title: "Dr. David Crosby Joins & Tech Modernization",
      description: "Fluent in Spanish and trained at Midwestern University, Dr. Crosby expanded the clinic's surgical and restorative capabilities, bringing advanced CEREC single-visit crowns and digital dentistry."
    },
    {
      year: "Present",
      title: "Casa Grande's Premier Hometown Dental Practice",
      description: "Combining cutting-edge diode lasers, Omnichroma composite fillings, and digital 3D imaging with the warm, relaxed atmosphere of visiting a trusted hometown neighbor."
    }
  ],

  owner: {
    name: "Dr. Jeffrey Mitchell, DDS & Dr. David Crosby, DMD",
    role: "Hometown Family & Cosmetic Dentists",
    quote: "Dental care doesn't have to be intimidating. We live in this community, our kids go to school here, and when you sit in our chair, you're visiting a neighbor who treats you with the same warmth and respect we give our own families."
  },

  reviews: [
    {
      author: "Sarah M.",
      location: "Casa Grande, AZ",
      city: "Casa Grande, AZ",
      source: "Google Review",
      rating: 5,
      stars: 5,
      date: "2 weeks ago",
      comment: "Dr. Mitchell gave me a CEREC same-day crown and I walked out 90 minutes later with a permanent, perfect tooth! No temporary crown, no second visit. This team is incredible.",
      text: "Dr. Mitchell gave me a CEREC same-day crown and I walked out 90 minutes later with a permanent, perfect tooth! No temporary crown, no second visit. This team is incredible."
    },
    {
      author: "Carlos R.",
      location: "Casa Grande, AZ",
      city: "Casa Grande, AZ",
      source: "Google Review",
      rating: 5,
      stars: 5,
      date: "1 month ago",
      comment: "Dr. Crosby speaks fluent Spanish and made my parents feel so comfortable during their implant consultation. Truly the kindest, most professional dental office in Pinal County.",
      text: "Dr. Crosby speaks fluent Spanish and made my parents feel so comfortable during their implant consultation. Truly the kindest, most professional dental office in Pinal County."
    },
    {
      author: "Linda T.",
      location: "Coolidge, AZ",
      city: "Coolidge, AZ",
      source: "Google Review",
      rating: 5,
      stars: 5,
      date: "3 months ago",
      comment: "Serving Casa Grande since 1953 and it shows in their values. Honest pricing, gentle cleanings, and they never push unnecessary treatments. Best dentists around.",
      text: "Serving Casa Grande since 1953 and it shows in their values. Honest pricing, gentle cleanings, and they never push unnecessary treatments. Best dentists around."
    }
  ]
};

export const isOpenNow = () => {
  const now = new Date();
  const day = now.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const hour = now.getHours();
  
  if (day === 0 || day === 6) return false; // Weekend closed (emergency on-call)
  if (day === 5) {
    // Friday: 8:00 AM - 1:00 PM (every other Friday)
    return hour >= 8 && hour < 13;
  }
  // Monday - Thursday: 8:00 AM - 5:00 PM
  return hour >= 8 && hour < 17;
};
