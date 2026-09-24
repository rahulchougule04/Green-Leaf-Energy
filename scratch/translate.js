const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '../src');

// Function to replace content in file
const replaceInFile = (filePath, replacements) => {
    const fullPath = path.join(srcDir, filePath);
    if (!fs.existsSync(fullPath)) return;
    let content = fs.readFileSync(fullPath, 'utf8');
    for (const [search, replace] of replacements) {
        content = content.replace(search, replace);
    }
    fs.writeFileSync(fullPath, content);
};

// TrustStrip.jsx
replaceInFile('components/home/TrustStrip.jsx', [
    [
        `const TrustStrip = () => {`,
        `const TrustStrip = () => {\n  const { t, language } = useLanguage();`
    ],
    [
        `import { ShieldCheck, Award, ThumbsUp, Medal, Zap, Star } from 'lucide-react';`,
        `import { ShieldCheck, Award, ThumbsUp, Medal, Zap, Star } from 'lucide-react';\nimport { useLanguage } from '../../context/LanguageContext';`
    ],
    [
        `<h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-1">
            Certified & Trusted Solar EPC Contractor
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-2xl mx-auto">
            Authorized by Govt. of India, MNRE, and MSEDCL for strict adherence to engineering and safety standards.
          </p>`,
        `<h2 className="text-xl sm:text-2xl font-black text-slate-800 mb-1">
            {t('trust.title') || "Certified & Trusted Solar EPC Contractor"}
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-semibold max-w-2xl mx-auto">
            {t('trust.subtitle') || "Authorized by Govt. of India, MNRE, and MSEDCL for strict adherence to engineering and safety standards."}
          </p>`
    ],
    [
        `{ title: "ISO 9001:2015 Certified", desc: "Quality Management" },`,
        `{ title: t('trust.badge1.title') || "ISO 9001:2015 Certified", desc: t('trust.badge1.desc') || "Quality Management" },`
    ],
    [
        `{ title: "MSEDCL Approved", desc: "Official Vendor" },`,
        `{ title: t('trust.badge2.title') || "MSEDCL Approved", desc: t('trust.badge2.desc') || "Official Vendor" },`
    ],
    [
        `{ title: "PM Surya Ghar Partner", desc: "Subsidy Assistance" },`,
        `{ title: t('trust.badge3.title') || "PM Surya Ghar Partner", desc: t('trust.badge3.desc') || "Subsidy Assistance" },`
    ],
    [
        `{ title: "MNRE/DCR Compliant", desc: "Govt Standards" },`,
        `{ title: t('trust.badge4.title') || "MNRE/DCR Compliant", desc: t('trust.badge4.desc') || "Govt Standards" },`
    ],
    [
        `{ title: "Premium Engineering", desc: "Quality Installation" },`,
        `{ title: t('trust.badge5.title') || "Premium Engineering", desc: t('trust.badge5.desc') || "Quality Installation" },`
    ],
    [
        `{ title: "18+ Yrs Experience", desc: "Electrical Expertise" }`,
        `{ title: t('trust.badge6.title') || "18+ Yrs Experience", desc: t('trust.badge6.desc') || "Electrical Expertise" }`
    ]
]);

// LeadStrip.jsx
replaceInFile('components/home/LeadStrip.jsx', [
    [
        `const LeadStrip = ({ openQuoteModal }) => {`,
        `const LeadStrip = ({ openQuoteModal }) => {\n  const { t } = useLanguage();`
    ],
    [
        `import { ArrowRight, Phone } from 'lucide-react';`,
        `import { ArrowRight, Phone } from 'lucide-react';\nimport { useLanguage } from '../../context/LanguageContext';`
    ],
    [
        `Are you planning to reduce your electricity bill to ZERO?`,
        `{t('leadStrip.heading') || "Are you planning to reduce your electricity bill to ZERO?"}`
    ],
    [
        `Get a free professional site survey from our expert engineers to understand your roof's solar potential and subsidy eligibility.`,
        `{t('leadStrip.text') || "Get a free professional site survey from our expert engineers to understand your roof's solar potential and subsidy eligibility."}`
    ],
    [
        `<span>Request Free Site Survey</span>`,
        `<span>{t('leadStrip.btnSurvey') || "Request Free Site Survey"}</span>`
    ],
    [
        `<span>WhatsApp Inquiry</span>`,
        `<span>{t('leadStrip.btnWhatsApp') || "WhatsApp Inquiry"}</span>`
    ]
]);

console.log('Update script prepared.');
