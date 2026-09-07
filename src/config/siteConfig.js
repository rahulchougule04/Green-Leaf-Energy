// Centralized Configuration for Green Leaf Energy Solution
// Update all phone numbers, address, email, WhatsApp, maps, and placeholders here.

export const siteConfig = {
  companyName: "GREEN LEAF ENERGY SOLUTION",
  companyShortName: "Green Leaf Solar",
  tagline: "Powering Tomorrow with Clean Energy",
  positioning: "MSEDCL Approved Solar EPC Company",
  domain: "greenleafenergysolution.com",
  
  // Credentials & Approvals (Editable Placeholders)
  credentials: {
    msedclApproved: "MSEDCL Approved Solar Vendor",
    msedclVendorId: "REG-MSEDCL-SOLAR-2024-XXXX", // Admin Placeholder
    pmSuryaGharVendor: "PM Surya Ghar Authorized Vendor",
    isoCertification: "ISO 9001:2015 Certified Company",
    electricalExperienceYears: 18,
    gstNumber: "27XXXXX0000X1Z5", // Admin Placeholder
  },

  // Contact Information (Configured for +91 93225 13396)
  contact: {
    phonePrimary: "+91 93225 13396",
    phoneSecondary: "+91 93225 13396",
    phoneRaw: "+919322513396", // Used for tel: links
    whatsappNumber: "919322513396", // Used for WhatsApp API
    email: "info@greenleafenergysolution.com",
    salesEmail: "sales@greenleafenergysolution.com",
    supportEmail: "support@greenleafenergysolution.com",
    address: {
      street: "Plot No. 12, Solar Tech Park, Near Industrial Estate",
      city: "Baramati",
      district: "Pune",
      state: "Maharashtra",
      pincode: "413102",
      country: "India",
      fullAddress: "Plot No. 12, Solar Tech Park, Near Industrial Estate, Baramati, Dist. Pune, Maharashtra - 413102"
    },
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM | Sun: Closed",
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60613.20311746685!2d74.55000000000001!3d18.150000000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc3a0058b88d8b1%3A0x6a053c825a07289!2sBaramati%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },

  // Default WhatsApp Message
  whatsappDefaultMessage: "Hello Green Leaf Energy Solution, I am interested in installing a solar system. Please provide more information and a free quote.",

  // Social Links
  socials: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com"
  },

  // Solar Financial Rates (Defaults for Calculators)
  calculatorDefaults: {
    tariffPerUnit: 8.5, // ₹ / kWh
    sunHoursPerDay: 4.8,
    costPerKwRooftop: 55000, // ₹ per kW estimate
    panelLifespanYears: 25,
    co2PerKwhKg: 0.85
  },

  // PM Surya Ghar Subsidy Slabs (Updated as per Govt Guidelines 2024-2026)
  subsidySlabs: [
    { capacityKw: 1, subsidyAmount: 30000, description: "1 kW Rooftop Solar System" },
    { capacityKw: 2, subsidyAmount: 60000, description: "2 kW Rooftop Solar System" },
    { capacityKw: 3, subsidyAmount: 78000, description: "3 kW to 10 kW Rooftop Solar System (Max ₹78,000)" }
  ]
};
