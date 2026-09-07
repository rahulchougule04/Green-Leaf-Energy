import React, { useEffect } from 'react';
import { siteConfig } from '../../config/siteConfig';

export const SeoHead = ({ title, description, keywords, canonical, jsonLd }) => {
  useEffect(() => {
    // Dynamic Title
    document.title = title ? `${title} | ${siteConfig.companyName}` : `${siteConfig.companyName} - ${siteConfig.positioning}`;

    // Meta Description
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', description || `${siteConfig.companyName} is an ${siteConfig.positioning} providing rooftop solar, PM Surya Ghar subsidy assistance, and commercial solar EPC in Pune and Baramati.`);
    }

    // Meta Keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', keywords || "Solar Company in Baramati, Solar Company in Pune, Rooftop Solar Installation, Commercial Solar EPC, Industrial Solar Plant, Hybrid Solar System, MSEDCL Solar Vendor, PM Surya Ghar Solar Installation");
    }

    // Dynamic JSON-LD Schema Insertion
    const schemaId = 'gle-jsonld-schema';
    let scriptTag = document.getElementById(schemaId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const defaultOrganizationSchema = {
      "@context": "https://schema.org",
      "@type": "SolarEnergyCompany",
      "name": siteConfig.companyName,
      "alternateName": siteConfig.companyShortName,
      "url": `https://${siteConfig.domain}`,
      "logo": `https://${siteConfig.domain}/favicon.svg`,
      "description": siteConfig.tagline,
      "telephone": siteConfig.contact.phonePrimary,
      "email": siteConfig.contact.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": siteConfig.contact.address.street,
        "addressLocality": siteConfig.contact.address.city,
        "addressRegion": siteConfig.contact.address.state,
        "postalCode": siteConfig.contact.address.pincode,
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 18.1500,
        "longitude": 74.5500
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "09:00",
        "closes": "19:00"
      },
      "sameAs": [
        siteConfig.socials.facebook,
        siteConfig.socials.instagram,
        siteConfig.socials.linkedin
      ]
    };

    scriptTag.textContent = JSON.stringify(jsonLd || defaultOrganizationSchema);

    return () => {
      // Cleanup script tag on unmount if needed
    };
  }, [title, description, keywords, canonical, jsonLd]);

  return null;
};
