import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Modal } from '../layout/Modal';
import { 
  BookOpen, 
  Calendar, 
  User, 
  ArrowRight, 
  Tag, 
  CheckCircle2, 
  Clock, 
  Share2, 
  ShieldCheck,
  Search,
  Sparkles,
  Zap,
  Check
} from 'lucide-react';
import { projectImages } from '../../config/projectImages';

// Robust Markdown parser for article content
const renderFormattedContent = (content) => {
  if (!content) return null;

  const lines = content.trim().split('\n');
  const elements = [];
  let currentList = [];
  let currentListType = null;
  let currentTable = [];
  let inTable = false;

  const formatInline = (text) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong class="text-slate-900 font-extrabold">$1</strong>')
      .replace(/\*(.*?)\*/g, '<em class="text-slate-800">$1</em>');
  };

  const flushList = () => {
    if (currentList.length > 0) {
      if (currentListType === 'ol') {
        elements.push(
          <ol key={`ol-${elements.length}`} className="space-y-2 list-decimal pl-5 text-xs sm:text-sm text-slate-700 my-3">
            {currentList.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            ))}
          </ol>
        );
      } else {
        elements.push(
          <ul key={`ul-${elements.length}`} className="space-y-1.5 list-disc pl-5 text-xs sm:text-sm text-slate-700 my-3">
            {currentList.map((item, idx) => (
              <li key={idx} dangerouslySetInnerHTML={{ __html: formatInline(item) }} />
            ))}
          </ul>
        );
      }
      currentList = [];
      currentListType = null;
    }
  };

  const flushTable = () => {
    if (currentTable.length > 0) {
      const headerRow = currentTable[0];
      const dataRows = currentTable.slice(1).filter(r => !r.every(c => c.trim().match(/^[ -:]+$/)));
      elements.push(
        <div key={`table-${elements.length}`} className="my-4 overflow-x-auto rounded-xl border border-slate-200">
          <table className="min-w-full text-xs text-left divide-y divide-slate-200">
            <thead className="bg-slate-100 text-slate-900 font-extrabold">
              <tr>
                {headerRow.map((cell, cIdx) => (
                  <th key={cIdx} className="px-3.5 py-2.5">{cell.trim()}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {dataRows.map((row, rIdx) => (
                <tr key={rIdx} className={rIdx % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}>
                  {row.map((cell, cIdx) => (
                    <td key={cIdx} className="px-3.5 py-2 text-slate-700" dangerouslySetInnerHTML={{ __html: formatInline(cell.trim()) }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      currentTable = [];
      inTable = false;
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const rawLine = lines[i];
    const line = rawLine.trim();

    if (!line) {
      flushList();
      flushTable();
      continue;
    }

    if (line.startsWith('|') && line.endsWith('|')) {
      flushList();
      inTable = true;
      const cells = line.split('|').slice(1, -1);
      currentTable.push(cells);
      continue;
    } else if (inTable) {
      flushTable();
    }

    if (line.startsWith('### ')) {
      flushList();
      const text = line.replace('### ', '');
      elements.push(
        <h3 key={`h3-${elements.length}`} className="text-base sm:text-lg font-black text-slate-900 pt-3 pb-1 border-b border-slate-100 mt-4 flex items-center space-x-2">
          <span className="w-1.5 h-4 bg-emerald-600 rounded-full inline-block"></span>
          <span>{text}</span>
        </h3>
      );
      continue;
    }

    if (line.startsWith('#### ')) {
      flushList();
      const text = line.replace('#### ', '');
      elements.push(
        <h4 key={`h4-${elements.length}`} className="text-sm sm:text-base font-bold text-emerald-800 pt-2 pb-0.5 mt-2">
          {text}
        </h4>
      );
      continue;
    }

    const olMatch = line.match(/^(\d+)\.\s+(.*)$/);
    if (olMatch) {
      if (currentListType && currentListType !== 'ol') flushList();
      currentListType = 'ol';
      currentList.push(olMatch[2]);
      continue;
    }

    if (line.startsWith('- ') || line.startsWith('* ')) {
      if (currentListType && currentListType !== 'ul') flushList();
      currentListType = 'ul';
      currentList.push(line.replace(/^[-*]\s+/, ''));
      continue;
    }

    flushList();
    elements.push(
      <p key={`p-${elements.length}`} className="text-xs sm:text-sm text-slate-600 leading-relaxed my-2" dangerouslySetInnerHTML={{ __html: formatInline(line) }} />
    );
  }

  flushList();
  flushTable();

  return elements;
};

export const BlogList = ({ openQuoteModal }) => {
  const { t } = useLanguage();
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // 8 Exact High-Ranking SEO Guides as requested in Requirement #6
  const articlesData = [
    {
      id: 1,
      slug: "pm-surya-ghar-subsidy-complete-guide",
      title: "PM Surya Ghar Subsidy – Complete Guide",
      marathiTitle: "पीएम सूर्य घर सबसिडी – संपूर्ण सविस्तर माहिती",
      category: "Subsidy Guide",
      author: "MSEDCL Liaisoning Team",
      date: "Updated for 2024-2026",
      readTime: "6 min read",
      image: projectImages.final,
      summary: "Comprehensive guide on how homeowners in Maharashtra can claim up to ₹78,000 direct bank transfer (DBT) subsidy under the PM Surya Ghar Muft Bijli Yojana.",
      shortTakeaways: [
        "Up to ₹78,000 maximum direct bank transfer (DBT) subsidy credited within 30 days.",
        "Subsidy Slabs: 1 kW = ₹30,000 | 2 kW = ₹60,000 | 3 kW to 10 kW = ₹78,000.",
        "Mandatory: Domestic Content Requirement (DCR) Tier-1 solar modules.",
        "Green Leaf Energy Solution handles 100% DISCOM feasibility and portal KYC."
      ],
      content: `
### What is PM Surya Ghar: Muft Bijli Yojana?
Launched by the Government of India, the PM Surya Ghar scheme aims to power 1 Crore households across the country with clean solar energy while eliminating monthly domestic electricity bills.

### Official Central Government Subsidy Slabs (Updated Rules):
- **1 kW Solar System:** ₹30,000 Central Govt Subsidy (for homes consuming ~120 units/month)
- **2 kW Solar System:** ₹60,000 Central Govt Subsidy (for homes consuming ~150-250 units/month)
- **3 kW to 10 kW Solar System:** **Maximum ₹78,000 Subsidy** (Fixed cap for 300+ units consumption)

### Step-by-Step Application Process:
1. **Apply Online:** Register on pmsuryaghar.gov.in using your 12-digit MSEDCL Consumer Number and mobile verification.
2. **Site Survey:** Green Leaf Energy Solution inspects your roof and uploads the technical feasibility report.
3. **Installation:** Erection of Tier-1 DCR compliant solar panels, inverter, and chemical earthing.
4. **Inspection:** MSEDCL technical officers inspect the installation on site against MNRE norms.
5. **Net Metering:** Bi-directional meter installation, synchronization, and commissioning certificate.
6. **Direct Bank Credit:** ₹78,000 subsidy deposited directly into your bank account within 30 days.

### Mandatory Subsidy Requirements:
- The property must have a residential electricity connection in Maharashtra.
- Only Indian-manufactured DCR (Domestic Content Requirement) solar modules qualify for government subsidy.
      `
    },
    {
      id: 2,
      slug: "on-grid-vs-hybrid-solar",
      title: "On-Grid vs Hybrid Solar: Which One Should You Choose?",
      marathiTitle: "ऑन-ग्रिड विरुद्ध हायब्रिड सोलर सिस्टीम: कोणती सिस्टीम योग्य?",
      category: "Solar Technology",
      author: "Chief Solar Engineer",
      date: "Engineering Insights",
      readTime: "5 min read",
      image: projectImages.inverter,
      summary: "Understand the core differences between grid-tied solar and hybrid battery storage systems to decide what suits your home or factory best.",
      shortTakeaways: [
        "On-Grid Solar: Lowest capital cost, 3-4 years payback, 100% subsidy eligible.",
        "Hybrid Solar: Lithium battery backup gives 24/7 power during grid blackouts.",
        "Anti-Islanding: On-grid systems turn off during power cuts for line worker safety.",
        "Recommendation: On-Grid for stable urban areas; Hybrid for clinics & critical loads."
      ],
      content: `
### Understanding the Core Difference
Choosing between On-Grid and Hybrid depends on your power reliability in Baramati, Pune, or surrounding districts.

### 1. On-Grid Solar Systems (Grid-Tied)
- **How it works:** Directly connected to the MSEDCL electrical grid without expensive batteries. Excess daytime generation is exported to the grid through a bi-directional net meter.
- **Pros:** Lowest initial capital cost, fastest payback period (3 to 4 years), 100% eligible for government PM Surya Ghar subsidy, minimal maintenance.
- **Cons:** Shuts down during grid power cuts for safety reasons (anti-islanding protection).

### 2. Hybrid Solar Systems (Grid + Battery Storage)
- **How it works:** Connected to both the MSEDCL grid and a smart Lithium (LiFePO4) battery bank.
- **Pros:** Provides continuous 24/7 uninterrupted electricity during power cuts or load shedding.
- **Cons:** Higher initial capital investment due to lithium battery cost; battery replacement required after 8-10 years.

### Expert Recommendation:
If your area experiences rarely any power outages (less than 1 hour a day), an **On-Grid System** offers maximum savings and fastest ROI. If you run a hospital, clinic, or critical business requiring zero downtime, install a **Hybrid System**.
      `
    },
    {
      id: 3,
      slug: "how-much-solar-system-do-i-need",
      title: "How Much Solar System Do I Need? (Capacity Calculation)",
      marathiTitle: "मला किती किलोवॅट (kW) सोलर सिस्टीम लागेल? (कॅल्क्युलेशन पद्धत)",
      category: "Planning & Sizing",
      author: "Energy Audit Team",
      date: "Calculation Guide",
      readTime: "4 min read",
      image: projectImages.capacityCalc,
      summary: "Learn the exact mathematical formula to calculate your recommended solar kilowatt capacity based on your monthly MSEDCL bill.",
      shortTakeaways: [
        "Sizing Formula: Average Monthly Units ÷ 120 = Recommended kW Capacity.",
        "Generation: 1 kW generates ~4 to 4.5 units per day (~120 units per month).",
        "Rooftop Area Needed: ~80 to 100 sq. ft. of clean shadow-free south-facing area per kW.",
        "3 kW System: Covers ~360 units/month with ~250-300 sq. ft. of roof space."
      ],
      content: `
### Simple 3-Step Solar Capacity Calculation

#### Step 1: Check Your Average Monthly Units
Look at your latest MSEDCL electricity bill. Find the total kWh (units) consumed per month.
- *Example:* Average monthly consumption = 360 units.

#### Step 2: Divide by 120 Units (Standard Generation per kW)
In Maharashtra, a 1 kW solar system generates approximately 4 to 4.5 units of electricity per day, or ~120 to 135 units per month.
- *Formula:* Required kW = Total Monthly Units ÷ 120
- *Example:* 360 units ÷ 120 = **3 kW Solar System**

#### Step 3: Verify Available Shadow-Free Roof Area
Every 1 kW of rooftop solar requires approximately 80 to 100 sq. ft. of clean, shadow-free south-facing area.
- **3 kW system:** Requires approx. 250 to 300 sq. ft. (generates ~360-400 units/mo)
- **5 kW system:** Requires approx. 400 to 500 sq. ft. (generates ~600-650 units/mo)
- **10 kW system:** Requires approx. 800 to 1,000 sq. ft. (generates ~1,200-1,300 units/mo)

Contact Green Leaf Energy Solution for a 100% free physical roof measurement and shadow simulation report.
      `
    },
    {
      id: 4,
      slug: "solar-net-metering-process-maharashtra",
      title: "Solar Net Metering Process in Maharashtra (MSEDCL Guide)",
      marathiTitle: "महाराष्ट्रात सोलर नेट मीटरिंग प्रक्रिया कशी चालते? (MSEDCL माहिती)",
      category: "Regulatory & DISCOM",
      author: "MSEDCL Regulatory Specialist",
      date: "DISCOM Compliance",
      readTime: "7 min read",
      image: projectImages.netMeter,
      summary: "Step-by-step breakdown of how bi-directional net meters record energy export, credit banking cycles, and eliminate monthly electricity bills.",
      shortTakeaways: [
        "Bi-directional net meter tracks power consumed from grid vs exported to grid.",
        "Net Billed Units = Import Units − Export Units (surplus rolls over).",
        "Annual banking settlement cycle runs from April 1st to March 31st in Maharashtra.",
        "Green Leaf handles 100% MSEDCL portal sanction, testing & meter installation."
      ],
      content: `
### What is a Bi-Directional Net Meter?
Unlike conventional electricity meters that only record incoming grid power, an MSEDCL Net Meter tracks electricity flow in both directions:
1. **Import:** Electricity you draw from the grid at night or on cloudy days.
2. **Export:** Surplus solar electricity generated by your rooftop panels pushed into the grid during daytime.

### How Billing Works:
- **Net Units Billed = Import Units − Export Units**
- If your system exports 400 units and imports 350 units in a month, your bill for units consumed will be **ZERO**. The excess 50 units will be banked and rolled over to the next month's bill!

### The Annual Banking Cycle in Maharashtra:
In Maharashtra, the net metering settlement cycle runs from April 1st to March 31st. Any surplus banked units remaining at the end of the financial year are settled as per MERC guidelines.

### MSEDCL Net Metering Steps Handled by Green Leaf:
1. Technical Sanction & Grid Feasibility application on the MSEDCL portal.
2. Work Completion Report (WCR) submission with licensed electrical supervisor signature.
3. Meter testing and sealing at the authorized MSEDCL testing laboratory.
4. Physical meter installation on your premises and synchronization testing.
      `
    },
    {
      id: 5,
      slug: "dcr-vs-non-dcr-solar-panels",
      title: "DCR vs Non-DCR Solar Panels: What Homeowners Must Know",
      marathiTitle: "DCR विरुद्ध Non-DCR सोलर पॅनेल्स: फरक आणि सबसिडी नियम",
      category: "Solar Technology",
      author: "Procurement & Quality Head",
      date: "Buyer's Guide",
      readTime: "5 min read",
      image: projectImages.panels,
      summary: "Understand why DCR (Domestic Content Requirement) panels are strictly mandatory for claiming government subsidies under PM Surya Ghar.",
      shortTakeaways: [
        "DCR = Domestic Content Requirement: Solar cells & modules 100% made in India.",
        "Mandatory: Only DCR modules qualify for PM Surya Ghar subsidy (up to ₹78,000).",
        "Non-DCR panels use imported cells and result in complete subsidy rejection.",
        "Green Leaf provides 100% genuine Tier-1 ALMM & DCR certified panels."
      ],
      content: `
### What does DCR Mean?
DCR stands for **Domestic Content Requirement**. It specifies that both the **solar cells** and the **solar modules** must be 100% manufactured inside India.

### Core Comparison:
| Parameter | DCR Solar Panels | Non-DCR Solar Panels |
| :--- | :--- | :--- |
| **Manufacturing** | Made in India (Cells & Modules) | Imported cells (mostly China/SE Asia) |
| **Govt Subsidy** | **Eligible for PM Surya Ghar (Up to ₹78,000)** | **NOT eligible for any subsidy** |
| **Quality & Efficiency** | Tier-1 ALMM listed, 21%+ efficiency | High efficiency, but restricted use |
| **Use Case** | Residential Rooftops & Govt projects | Commercial, Industrial & Open Access |

### Warning for Customers:
Some unauthorized local contractors quote artificially low prices by using Non-DCR panels. If Non-DCR panels are installed on your residential roof, **the government will reject your subsidy application**, costing you ₹78,000 in lost benefits.

Green Leaf Energy Solution guarantees 100% genuine Tier-1 ALMM & DCR certified panels with authentic manufacturer warranty cards.
      `
    },
    {
      id: 6,
      slug: "solar-panel-warranty-explained",
      title: "Solar Panel Warranty Explained: Product vs Performance Guarantee",
      marathiTitle: "सोलर पॅनेल वॉरंटी समजून घ्या: प्रॉडक्ट वॉरंटी आणि परफॉर्मन्स गॅरंटी",
      category: "Buyer's Guide",
      author: "Quality Assurance Engineer",
      date: "Warranty Guide",
      readTime: "4 min read",
      image: projectImages.warrantyQuality,
      summary: "Demystifying 10-year product warranty vs 25-year linear performance warranty so you never face disputes down the road.",
      shortTakeaways: [
        "Product Warranty (10-12 Years): Protects against manufacturing & material defects.",
        "Performance Warranty (25-30 Years): Guarantees minimum 80%+ generation output.",
        "Inverter Warranty: 5 to 10 years standard coverage for string inverters.",
        "Structure Guarantee: 10-15 years hot-dip galvanized rust & corrosion protection."
      ],
      content: `
### The Two Types of Warranties Every Solar Buyer Must Understand

#### 1. Product Warranty (Workmanship Guarantee) - 10 to 12 Years
- Covers manufacturing defects in materials: glass breakage due to manufacturing stress, delamination, frame warping, or faulty junction box wiring.
- If a panel fails due to factory defect within 10 years, the manufacturer replaces it free of charge.

#### 2. Linear Performance Warranty - 25 to 30 Years
- Guarantees that the power output degradation of your panels will not exceed standard industry limits.
- **Year 1:** Minimum 97.5% - 98% guaranteed output.
- **Year 25:** Minimum 80% - 84% guaranteed original power output.

#### Inverter & Structure Warranties:
- **On-Grid Solar Inverters:** 5 to 10 years standard manufacturer warranty (extendable up to 15-20 years).
- **Galvanized Mounting Structures:** 10 to 15 years rust-proof anti-corrosion guarantee.
- **Green Leaf Workmanship:** 5 years free on-site service support.
      `
    },
    {
      id: 7,
      slug: "solar-system-maintenance-cleaning-guide",
      title: "Solar System Maintenance & Cleaning Best Practices",
      marathiTitle: "सोलर सिस्टीमची देखभाल आणि पॅनेल साफसफाई: महत्त्वाच्या टिप्स",
      category: "Maintenance",
      author: "O&M Service Lead",
      date: "Maintenance Guide",
      readTime: "5 min read",
      image: projectImages.panelCleaning,
      summary: "Learn how proper cleaning every 15 days can increase solar power generation by up to 25% and protect your 25-year panel investment.",
      shortTakeaways: [
        "Clean panels every 15 days to prevent 15% to 25% solar generation loss.",
        "Always clean early morning (6:00-8:30 AM) when glass surface is cool.",
        "Use soft clean water and microfiber brush (never use acids or abrasive chemicals).",
        "Never step on panels or drop heavy objects on tempered glass modules."
      ],
      content: `
### Why Cleaning Matters
In regions like Baramati and Pune with agricultural dust, industrial particulate matter, and pollen, a thin layer of dust on your panels can cause **soiling loss of 15% to 25%** in power generation!

### Recommended Cleaning Frequency:
- **Normal dry season:** Clean once every 15 days.
- **Dusty MIDC areas:** Clean once every 10 days.
- **Monsoon season:** Rainwater takes care of normal cleaning, but inspect for bird droppings and moss.

### Safe Cleaning Dos and Don'ts:
- **DO** clean early in the morning (6:00 AM - 8:30 AM) or late evening when panels are cool. Pouring cold water on hot panels at noon can crack the tempered glass!
- **DO** use soft plain water and a microfiber brush or sponge.
- **DO NOT** use abrasive detergents, acids, or harsh chemical cleaners that damage anti-reflective coatings.
- **DO NOT** walk on the panels or rest heavy equipment on module frames.

Ask Green Leaf about our automated rooftop sprinkler cleaning systems and annual AMC maintenance packages.
      `
    },
    {
      id: 8,
      slug: "solar-for-industries-roi-depreciation",
      title: "Solar for Industries: 40% Accelerated Depreciation & ROI",
      marathiTitle: "उद्योगांसाठी सोलर: ४०% ॲक्सिलरेटेड डेप्रिसिएशन आणि मोठा परतावा",
      category: "Industrial Solar",
      author: "Commercial Solar Lead",
      date: "Industrial Finance",
      readTime: "6 min read",
      image: projectImages.industrial,
      summary: "How factories, MIDC manufacturing units, and commercial complexes recover installation costs in 3 to 4 years while cutting HT electricity tariffs.",
      shortTakeaways: [
        "40% Accelerated Depreciation tax benefit in Year 1 under Section 32.",
        "Solar generation costs < ₹2.20/unit vs ₹9-12/unit commercial grid tariff.",
        "Fast capital investment recovery: Typically 3 to 4 years payback period.",
        "Delivers 25% to 35% Internal Rate of Return (IRR) over 25-year plant lifespan."
      ],
      content: `
### Why Industries in Maharashtra Are Rapidly Moving to Solar
Industrial consumers in Maharashtra pay between ₹8.50 to ₹12.50 per unit on high-tension (HT) and low-tension (LT) commercial tariffs. Solar power generation costs less than **₹2.20 per unit levelized over 25 years**, delivering instant profit margin improvements.

### 1. 40% Accelerated Depreciation (Income Tax Benefit)
Under Section 32 of the Indian Income Tax Act, commercial businesses and industries can claim **40% accelerated depreciation** in the first year of commissioning a solar plant. This allows companies to save substantially on corporate income tax payments.

### 2. Payback Period & Financial ROI
- **Payback Period:** Typically 3 to 4 years for mid-sized factories.
- **Free Electricity Period:** The remaining 21 to 22 years of panel lifespan generates essentially free electricity.
- **Internal Rate of Return (IRR):** Consistently delivers an IRR of 25% to 35%, far outpacing traditional bank fixed deposits or mutual funds.

### 3. Industrial Roofing Options:
- **Metal Tin Sheds:** Aluminum short-rail clamped installations requiring zero roof puncture.
- **RCC Flat Terraces:** Elevated galvanized structures allowing rooftop access.
- **Ground Mounted:** Utilizing spare open factory land for megawatt-scale power generation.
      `
    }
  ];

  const categories = ["All", "Subsidy Guide", "Solar Technology", "Planning & Sizing", "Regulatory & DISCOM", "Buyer's Guide", "Maintenance", "Industrial Solar"];

  const filteredArticles = articlesData.filter(article => {
    const matchesCategory = activeCategory === 'All' || article.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.content.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200 font-sans" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider">
            <BookOpen className="w-4 h-4 text-emerald-700" />
            <span>Solar Information Platform</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Knowledge Center & Technical Solar Guides
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-medium">
            Explore 8 authoritative guides on subsidies, engineering standards, net metering, and sizing your solar plant in Maharashtra.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="space-y-4 mb-10">
          <div className="max-w-md mx-auto relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              placeholder="Search solar guides (e.g. Subsidy, DCR, Net Metering)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-xs text-slate-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs"
            />
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-slate-900 text-white shadow-xs'
                    : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 8 Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredArticles.map((article) => (
            <div
              key={article.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-lg hover:border-emerald-500/50 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                <div className="relative h-44 overflow-hidden bg-slate-900">
                  <img
                    src={article.image}
                    alt={article.title}
                    onError={(e) => { 
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = projectImages.final; 
                    }}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider border border-slate-700">
                    {article.category}
                  </div>
                  <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur-xs text-white text-[10px] font-bold px-2 py-0.5 rounded">
                    {article.readTime}
                  </div>
                </div>

                <div className="p-5 space-y-2.5">
                  <h3 className="text-base font-black text-slate-900 group-hover:text-emerald-700 transition-colors leading-snug line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="text-[11px] font-bold text-slate-500 line-clamp-1">
                    {article.marathiTitle}
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {article.summary}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <button
                  onClick={() => setSelectedArticle(article)}
                  className="w-full bg-slate-50 hover:bg-emerald-600 hover:text-white text-slate-900 text-xs font-bold py-2.5 rounded-xl border border-slate-200 transition-all flex items-center justify-center space-x-1.5"
                >
                  <span>Read Full Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Reader Modal */}
        <Modal
          isOpen={!!selectedArticle}
          onClose={() => setSelectedArticle(null)}
          title={selectedArticle?.title || "Solar Knowledge Guide"}
        >
          {selectedArticle && (
            <div className="space-y-6 font-sans text-left max-h-[75vh] overflow-y-auto pr-1">
              {/* Featured Image Banner */}
              <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden border border-slate-200 shadow-xs">
                <img 
                  src={selectedArticle.image} 
                  alt={selectedArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-xs text-white text-[10px] font-black px-2.5 py-1 rounded-md uppercase tracking-wider border border-slate-700">
                  {selectedArticle.category}
                </div>
                <div className="absolute bottom-3 right-3 bg-black/70 backdrop-blur-xs text-white text-[10px] font-bold px-2.5 py-1 rounded">
                  {selectedArticle.readTime}
                </div>
              </div>

              {/* Title & Metadata */}
              <div className="border-b border-slate-200 pb-4">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  {selectedArticle.title}
                </h2>
                <div className="text-xs font-bold text-slate-500 mt-1">
                  {selectedArticle.marathiTitle}
                </div>
                <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 font-medium mt-3">
                  <span>Author: <strong className="text-slate-800">{selectedArticle.author}</strong></span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
              </div>

              {/* Key Summary Box (In Short / थोडक्यात) */}
              {selectedArticle.shortTakeaways && selectedArticle.shortTakeaways.length > 0 && (
                <div className="bg-emerald-50/90 border border-emerald-200 rounded-xl p-4 sm:p-5 shadow-xs">
                  <div className="flex items-center space-x-2 text-xs font-black text-emerald-800 uppercase tracking-wider mb-2.5">
                    <Sparkles className="w-4 h-4 text-emerald-600" />
                    <span>Quick Summary (In Short / थोडक्यात)</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {selectedArticle.shortTakeaways.map((point, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-xs text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="font-semibold leading-relaxed">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Robust Formatted Article Body */}
              <div className="space-y-1 text-slate-700 leading-relaxed">
                {renderFormattedContent(selectedArticle.content)}
              </div>

              {/* Article CTA Banner */}
              <div className="bg-emerald-950 text-white p-5 rounded-xl text-center space-y-3 mt-6">
                <h4 className="text-sm sm:text-base font-extrabold text-white">
                  Need Personalized Advice for Your Property?
                </h4>
                <p className="text-xs text-slate-300">
                  Contact Green Leaf Energy Solution for a free site audit, load calculation, and subsidy filing assistance in Baramati and Pune.
                </p>
                <button
                  onClick={() => {
                    setSelectedArticle(null);
                    openQuoteModal();
                  }}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs py-2.5 px-5 rounded-lg transition-colors shadow"
                >
                  Schedule Free Site Survey
                </button>
              </div>
            </div>
          )}
        </Modal>

      </div>
    </section>
  );
};
