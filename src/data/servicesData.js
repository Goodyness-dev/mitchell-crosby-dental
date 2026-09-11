export const SERVICE_CATEGORIES = [
  "All Services",
  "Restorative & Implants",
  "Cosmetic & Whitening",
  "Family & Cleanings",
  "Emergency & Surgery"
];

export const SERVICES = [
  // --- RESTORATIVE & IMPLANTS ---
  {
    id: "same-day-crowns",
    name: "CEREC® Same Day Crowns",
    title: "CEREC® Same Day Crowns",
    specialistTitle: "Same Day Crown Specialist",
    category: "Restorative & Implants",
    icon: "Sparkles",
    priceRange: "$950 - $1,400",
    turnaround: "Single 90-min visit",
    popular: true,
    warranty: "Long-term ceramic guarantee",
    shortDesc: "In-office 3D digital imaging and robotic ceramic milling. Permanent, beautiful crowns in a single visit with no temporary caps.",
    description: "In-office 3D digital imaging and robotic ceramic milling. Permanent, beautiful crowns in a single visit with no temporary caps.",
    features: [
      "No messy putty impression trays (3D digital scan)",
      "Zero temporary crowns — walk out with your final restoration",
      "Metal-free, biocompatible high-grade dental ceramic",
      "Exact anatomical shade matching for natural translucency"
    ]
  },
  {
    id: "dental-implants",
    name: "Dental Implants",
    title: "Dental Implants",
    specialistTitle: "Dental Implants Specialist",
    category: "Restorative & Implants",
    icon: "ShieldCheck",
    priceRange: "$1,800 - $3,200",
    turnaround: "Multi-phase consultation",
    popular: true,
    warranty: "Lifetime root fusion warranty",
    shortDesc: "Permanent titanium prosthetic roots that fuse with your jawbone to replace missing teeth with 100% natural chewing strength.",
    description: "Permanent titanium prosthetic roots that fuse with your jawbone to replace missing teeth with 100% natural chewing strength.",
    features: [
      "Prevents bone loss and preserves facial structure",
      "Permanent solution that looks, feels, and acts like real teeth",
      "No slippage or dietary restrictions",
      "High biocompatibility with natural bone integration"
    ]
  },
  {
    id: "implant-restorations",
    name: "Implant Restorations",
    title: "Implant Restorations",
    specialistTitle: "Implant Restoration Specialist",
    category: "Restorative & Implants",
    icon: "Award",
    priceRange: "$800 - $1,500",
    turnaround: "1 - 2 weeks",
    popular: false,
    warranty: "Precision fit guarantee",
    shortDesc: "Custom abutment and high-strength porcelain crown fabrication to complete your healed dental implant post.",
    description: "Custom abutment and high-strength porcelain crown fabrication to complete your healed dental implant post.",
    features: [
      "Custom-shaded porcelain to blend with surrounding teeth",
      "Secure screw-retained or cemented crown attachment",
      "Restores full bite alignment and masticatory force",
      "Long-lasting protection against plaque accumulation"
    ]
  },
  {
    id: "dentures-prosthetics",
    name: "Custom Dentures & Partials",
    title: "Custom Dentures & Partials",
    specialistTitle: "Dentures Specialist",
    category: "Restorative & Implants",
    icon: "HeartHandshake",
    priceRange: "$1,200 - $2,800",
    turnaround: "2 - 3 weeks",
    popular: false,
    warranty: "Custom comfort adjustment warranty",
    shortDesc: "Natural-looking full and partial dentures designed for maximum gum comfort, speech clarity, and confident chewing.",
    description: "Natural-looking full and partial dentures designed for maximum gum comfort, speech clarity, and confident chewing.",
    features: [
      "Full upper and lower traditional dentures",
      "Precision metal and flexible acrylic partials",
      "Implant-supported overdentures available",
      "In-house relines, repairs, and fit adjustments"
    ]
  },
  {
    id: "dental-bridges",
    name: "Permanent Dental Bridges",
    title: "Permanent Dental Bridges",
    specialistTitle: "Bridges Specialist",
    category: "Restorative & Implants",
    icon: "Activity",
    priceRange: "$1,500 - $3,000",
    turnaround: "1 - 2 visits",
    popular: false,
    warranty: "Multi-year structural warranty",
    shortDesc: "Fixed porcelain prosthetics anchored to adjacent teeth to permanently bridge the gap left by one or more missing teeth.",
    description: "Fixed porcelain prosthetics anchored to adjacent teeth to permanently bridge the gap left by one or more missing teeth.",
    features: [
      "Restores natural facial aesthetics and lip support",
      "Prevents remaining teeth from drifting out of alignment",
      "Seamless color-match with natural enamel",
      "Durable, non-removable fixed restoration"
    ]
  },
  {
    id: "inlays-onlays",
    name: "Porcelain Inlays & Onlays",
    title: "Porcelain Inlays & Onlays",
    specialistTitle: "Inlays And Onlays Specialist",
    category: "Restorative & Implants",
    icon: "Zap",
    priceRange: "$650 - $1,100",
    turnaround: "1 - 2 visits",
    popular: false,
    warranty: "Conservative restoration guarantee",
    shortDesc: "Custom laboratory-milled ceramic fillings for teeth with damage too large for a standard filling but not requiring a full crown.",
    description: "Custom laboratory-milled ceramic fillings for teeth with damage too large for a standard filling but not requiring a full crown.",
    features: [
      "Preserves the maximum amount of healthy natural tooth enamel",
      "Milled from ultra-strong biocompatible ceramic",
      "Does not discolor or weaken over time like amalgam",
      "Perfect seal protecting against future recurrent decay"
    ]
  },

  // --- COSMETIC & WHITENING ---
  {
    id: "porcelain-veneers",
    name: "Cosmetic Porcelain Veneers",
    title: "Cosmetic Porcelain Veneers",
    specialistTitle: "Veneers Specialist",
    category: "Cosmetic & Whitening",
    icon: "Sparkles",
    priceRange: "$900 - $1,600 per tooth",
    turnaround: "2 visits",
    popular: true,
    warranty: "Cosmetic craftsmanship warranty",
    shortDesc: "Wafer-thin shells of handcrafted dental porcelain bonded to the front of teeth to correct chips, gaps, and deep discoloration.",
    description: "Wafer-thin shells of handcrafted dental porcelain bonded to the front of teeth to correct chips, gaps, and deep discoloration.",
    features: [
      "Complete aesthetic smile makeovers",
      "Stain-resistant porcelain that reflects light like natural enamel",
      "Closes stubborn gaps and corrects minor misalignments",
      "Custom shape and contour tailored to your facial structure"
    ]
  },
  {
    id: "teeth-whitening",
    name: "Professional Teeth Whitening",
    title: "Professional Teeth Whitening",
    specialistTitle: "Teeth Whitening Specialist",
    category: "Cosmetic & Whitening",
    icon: "Smile",
    priceRange: "$299 - $550",
    turnaround: "Same-day 60 min or take-home",
    popular: true,
    warranty: "Visible shade brightness guarantee",
    shortDesc: "High-concentration clinical bleaching to safely erase years of coffee, tea, wine, and aging stains up to 8 shades lighter.",
    description: "High-concentration clinical bleaching to safely erase years of coffee, tea, wine, and aging stains up to 8 shades lighter.",
    features: [
      "Fast in-office whitening session in under an hour",
      "Custom-fitted take-home trays with medical-grade peroxide gel",
      "Specially formulated desensitizing agents for zero gum irritation",
      "Significantly safer and longer-lasting than drugstore strips"
    ]
  },
  {
    id: "cosmetic-fillings",
    name: "Omnichroma Composite Fillings",
    title: "Omnichroma Composite Fillings",
    specialistTitle: "Cosmetic Fillings Specialist",
    category: "Cosmetic & Whitening",
    icon: "Sparkles",
    priceRange: "$150 - $350",
    turnaround: "Same-day 45 min",
    popular: false,
    warranty: "Mercury-free composite guarantee",
    shortDesc: "Smart chameleon-like composite resin fillings that blend invisibly with any tooth shade without metal or mercury.",
    description: "Smart chameleon-like composite resin fillings that blend invisibly with any tooth shade without metal or mercury.",
    features: [
      "100% metal-free and mercury-free biocompatible resin",
      "Omnichroma smart color-matching technology",
      "Bonds directly to tooth structure, strengthening remaining enamel",
      "Cured instantly with UV light for immediate normal eating"
    ]
  },

  // --- FAMILY & CLEANINGS ---
  {
    id: "general-dentistry",
    name: "General Dentistry & Exams",
    title: "General Dentistry & Exams",
    specialistTitle: "General Dentistry Specialist",
    category: "Family & Cleanings",
    icon: "ShieldCheck",
    priceRange: "$95 - $220",
    turnaround: "45 minutes",
    popular: true,
    warranty: "Comprehensive health audit",
    shortDesc: "Thorough diagnostic evaluations, low-dose digital X-rays, and Velscope oral cancer screenings for total mouth health.",
    description: "Thorough diagnostic evaluations, low-dose digital X-rays, and Velscope oral cancer screenings for total mouth health.",
    features: [
      "Detailed tooth-by-tooth periodontal charting",
      "High-definition intraoral camera tours of your mouth",
      "Non-invasive oral cancer screening",
      "Personalized preventive care and home hygiene plan"
    ]
  },
  {
    id: "dental-cleanings",
    name: "Professional Dental Cleanings",
    title: "Professional Dental Cleanings",
    specialistTitle: "Professional Dental Cleanings Specialist",
    category: "Family & Cleanings",
    icon: "Activity",
    priceRange: "$85 - $190",
    turnaround: "45 - 60 minutes",
    popular: true,
    warranty: "Fresh breath & plaque removal",
    shortDesc: "Gentle ultrasonic scaling and polishing by certified dental hygienists to eliminate tartar, plaque, and surface stains.",
    description: "Gentle ultrasonic scaling and polishing by certified dental hygienists to eliminate tartar, plaque, and surface stains.",
    features: [
      "Ultrasonic tartar removal above and below the gumline",
      "Gentle air-polishing for smooth, stain-free enamel",
      "Deep periodontal scaling and root planing available",
      "Therapeutic fluoride treatments to prevent demineralization"
    ]
  },
  {
    id: "cavity-prevention",
    name: "Cavity & Enamel Care",
    title: "Cavity & Enamel Care",
    specialistTitle: "Cavity Specialist",
    category: "Family & Cleanings",
    icon: "ShieldCheck",
    priceRange: "$60 - $180",
    turnaround: "30 minutes",
    popular: false,
    warranty: "Preventive defense guarantee",
    shortDesc: "Early diagnosis of enamel acid erosion, remineralization therapies, and protective dental sealants for kids and adults.",
    description: "Early diagnosis of enamel acid erosion, remineralization therapies, and protective dental sealants for kids and adults.",
    features: [
      "Micro-invasive decay detection before cavities form",
      "Protective pit & fissure sealants for molars",
      "High-potency mineral varnish for sensitive root surfaces",
      "Dietary acid and salivary pH guidance"
    ]
  },
  {
    id: "family-dentistry",
    name: "Pediatric & Family Dentistry",
    title: "Pediatric & Family Dentistry",
    specialistTitle: "Family Dentistry Specialist",
    category: "Family & Cleanings",
    icon: "HeartHandshake",
    priceRange: "$75 - $160",
    turnaround: "30 - 45 minutes",
    popular: false,
    warranty: "Anxiety-free kid friendly care",
    shortDesc: "Friendly, gentle dental checkups designed specifically to make children, teens, and seniors feel safe, relaxed, and happy.",
    description: "Friendly, gentle dental checkups designed specifically to make children, teens, and seniors feel safe, relaxed, and happy.",
    features: [
      "Gentle introductory visits to eliminate dental fear in kids",
      "Educational brushing and flossing demonstrations",
      "Custom sports mouthguards and bite splints",
      "Generational care: we treat grandparents and toddlers alike"
    ]
  },

  // --- EMERGENCY & SURGERY ---
  {
    id: "emergency-dentistry",
    name: "Emergency Dental Relief",
    title: "Emergency Dental Relief",
    specialistTitle: "Emergency Dentist Specialist",
    category: "Emergency & Surgery",
    icon: "AlertCircle",
    priceRange: "$150 - $450",
    turnaround: "Same-day priority dispatch",
    popular: true,
    warranty: "Immediate pain relief guarantee",
    shortDesc: "Fast same-day treatment for severe toothaches, cracked or knocked-out teeth, broken crowns, and painful dental abscesses.",
    description: "Fast same-day treatment for severe toothaches, cracked or knocked-out teeth, broken crowns, and painful dental abscesses.",
    features: [
      "Priority same-day emergency appointment booking",
      "Rapid diagnosis and targeted local pain management",
      "Emergency crown repair and temporary tooth stabilization",
      "Antibiotic and anti-inflammatory treatment protocols"
    ]
  },
  {
    id: "root-canal-therapy",
    name: "Gentle Root Canal Therapy",
    title: "Gentle Root Canal Therapy",
    specialistTitle: "Root Canal Therapy Specialist",
    category: "Emergency & Surgery",
    icon: "ShieldCheck",
    priceRange: "$750 - $1,300",
    turnaround: "Single 60 - 90 min visit",
    popular: false,
    warranty: "Natural tooth preservation",
    shortDesc: "Virtually painless endodontic therapy that cleans infected pulp tissue inside the tooth, saving your natural tooth from extraction.",
    description: "Virtually painless endodontic therapy that cleans infected pulp tissue inside the tooth, saving your natural tooth from extraction.",
    features: [
      "Painless local anesthesia and gentle rotary endodontics",
      "Permanently eliminates severe throbbing toothache and infection",
      "Saves your natural tooth root and surrounding jawbone",
      "Prepares tooth for a protective CEREC same-day crown"
    ]
  },
  {
    id: "tooth-extractions",
    name: "Gentle Tooth Extractions",
    title: "Gentle Tooth Extractions",
    specialistTitle: "Extractions Specialist",
    category: "Emergency & Surgery",
    icon: "Activity",
    priceRange: "$180 - $400",
    turnaround: "30 - 60 minutes",
    popular: false,
    warranty: "Gentle surgical technique",
    shortDesc: "Minimally invasive extractions for unsalvageable teeth, severe overcrowding, or problematic wisdom teeth with fast recovery.",
    description: "Minimally invasive extractions for unsalvageable teeth, severe overcrowding, or problematic wisdom teeth with fast recovery.",
    features: [
      "Gentle, atraumatic extraction technique to protect bone",
      "Effective local numbing and calming patient environment",
      "Wisdom teeth evaluations and strategic extractions",
      "Immediate bone grafting and socket preservation available"
    ]
  }
];
