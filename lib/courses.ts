export interface CourseModule {
    title: string;
    duration: string;
    topics: string[];
}

export interface CourseCompetency {
    title: string;
    description: string;
}

export interface CourseFAQItem {
    question: string;
    answer: string;
}

export interface Course {
    id: number;
    slug: string;
    title: string;
    category: string;
    subCategory: string;
    badge: string;
    badgeColor: string;
    duration: string;
    hours: string;
    shifts: string[];
    certification: string;
    level: string;
    practicalRatio: number;
    theoryRatio: number;
    description: string;
    longDescription: string;
    tags: string[];
    image: string;
    highlights: string[];
    competencies: CourseCompetency[];
    modules: CourseModule[];
    careerOutcomes: {
        roles: string[];
        destinations: string[];
        salary: string;
    };
    eligibility: {
        education: string;
        age: string;
        documents: string[];
    };
    faqs: CourseFAQItem[];
}

export const courses: Course[] = [
    {
        id: 1,
        slug: "commercial-general-cook-training",
        title: "Commercial & General Cook Training",
        category: "Culinary Arts",
        subCategory: "Commercial Cooking",
        badge: "Most Popular Overseas",
        badgeColor: "bg-orange-500",
        duration: "90 Days Track",
        hours: "360 Practical Hours",
        shifts: ["Morning (7:00 AM - 10:00 AM)", "Day (11:00 AM - 2:00 PM)", "Evening (3:00 PM - 6:00 PM)"],
        certification: "CTEVT Certified",
        level: "CTEVT Level 1 & 2",
        practicalRatio: 85,
        theoryRatio: 15,
        description:
            "Rigorous training in basic knife skills, HACCP food hygiene, continental & Asian cuisine, and commercial kitchen workflows.",
        longDescription:
            "Our Commercial & General Cook Training is meticulously calibrated to meet both domestic and international hospitality standards. Designed for aspiring chefs targeting employment in 5-star hotels, international restaurant chains, cruise lines, and overseas positions across the Gulf, Europe, and Japan (SSW Visa). Training is conducted inside high-capacity commercial kitchen laboratories where each student receives an individual workstation, burner, and professional knife kit.",
        tags: ["Continental", "Pan-Asian", "HACCP Certified", "Buffet Prep"],
        image: "/images/chefsinkitchen.png",
        highlights: [
            "Continental, Chinese & authentic Nepali dish preparation",
            "Professional knife dynamics, stock preparation & sauce masterclass",
            "Commercial kitchen equipment operation & HACCP protocol",
        ],
        competencies: [
            {
                title: "Professional Knife Dynamics & Butchery",
                description:
                    "Master classical French knife cuts (Julienne, Brunoise, Chiffonade), precision poultry and meat fabrication, and fish deboning techniques.",
            },
            {
                title: "Stocks, Mother Sauces & Soups",
                description:
                    "Execution of the 5 classical French mother sauces (Béchamel, Velouté, Espagnole, Hollandaise, Tomato), brown veal stocks, and clear broths.",
            },
            {
                title: "Continental & Pan-Asian Mastery",
                description:
                    "Hands-on cooking of European roasts, pasta making, stir-fries, wok hei dynamics, and Asian curry bases.",
            },
            {
                title: "HACCP & Commercial Sanitation",
                description:
                    "Cross-contamination prevention, critical control point logging, food temperature monitoring, and commercial dishwasher protocols.",
            },
            {
                title: "Banquet & Buffet Production",
                description:
                    "High-volume food production techniques, chafing dish temperature management, portion control, and aesthetic buffet displays.",
            },
            {
                title: "Menu Engineering & Food Costing",
                description:
                    "Standard recipe costing, yield percentage calculations, kitchen inventory control, and waste minimization strategies.",
            },
        ],
        modules: [
            {
                title: "Module 01: Kitchen Orientation, Hygiene & Knife Fundamentals",
                duration: "15 Days",
                topics: [
                    "Commercial kitchen safety and emergency protocols",
                    "HACCP regulations and personal grooming standards",
                    "Knife sharpening, steeling, and classical vegetable cuts",
                    "Kitchen equipment safety and station mise-en-place setup",
                ],
            },
            {
                title: "Module 02: Stocks, Classical Sauces & Soup Preparation",
                duration: "15 Days",
                topics: [
                    "White and brown beef, poultry, and vegetable stock extraction",
                    "Five French mother sauces and their derivative secondary sauces",
                    "Clear soups, bisques, chowders, and cream purees",
                    "Sauce consistency evaluation and seasoning balance",
                ],
            },
            {
                title: "Module 03: Continental, Mediterranean & European Specialties",
                duration: "20 Days",
                topics: [
                    "Pan-searing, braising, poaching, and dry-heat roasting techniques",
                    "Fresh pasta dough, gnocchi, and authentic Italian sauces",
                    "Steak doneness testing and classical side vegetable preps",
                    "Modern plating aesthetics and sauce drizzle design",
                ],
            },
            {
                title: "Module 04: Pan-Asian, Chinese & Wok Specialties",
                duration: "15 Days",
                topics: [
                    "High-pressure wok seasoning and stir-frying dynamics",
                    "Dim sum wrappers, dumplings, spring rolls, and dipping sauces",
                    "Sweet & sour, hot garlic, and Szechuan flavor profiles",
                    "Fried rice, noodle line service, and Asian poultry prep",
                ],
            },
            {
                title: "Module 05: Authentic Nepali & Heritage Cookery",
                duration: "10 Days",
                topics: [
                    "Newari and Thakali culinary traditions and spice roasting",
                    "Authentic local mutton, chicken, and vegetarian curry gravies",
                    "Chutneys, achar preservation, and beaten rice delicacies",
                    "Traditional presentation for luxury tourism hospitality",
                ],
            },
            {
                title: "Module 06: Commercial Line Management & CTEVT Skill Test Prep",
                duration: "15 Days",
                topics: [
                    "Live ticket order simulation under high-pressure timing",
                    "Food cost control, kitchen requisitions, and inventory counting",
                    "CTEVT National Skill Testing Board (NSTB) exam simulations",
                    "Practical and theoretical evaluation with certified assessors",
                ],
            },
        ],
        careerOutcomes: {
            roles: [
                "Commis Chef (I, II, III)",
                "Line Cook / Station Chef",
                "Demi Chef de Partie",
                "Buffet & Banquet Prep Cook",
                "Cruise Ship Culinary Specialist",
            ],
            destinations: [
                "Nepal 5-Star Luxury Hotels & Resorts",
                "Gulf Region (Dubai, Qatar, Saudi Arabia)",
                "Japan SSW (Specified Skilled Worker) Cook Visa",
                "International Cruise Lines & European Resorts",
            ],
            salary: "NPR 35,000 - 85,000 / month (Domestic) | USD $650 - $1,500 / month (Overseas)",
        },
        eligibility: {
            education: "Minimum Class 8 / SEE (Class 10) Pass",
            age: "16 years and above",
            documents: [
                "Citizenship Certificate or Passport Copy",
                "2 Passport Size Photographs",
                "Academic Marksheet / Certificate",
            ],
        },
        faqs: [
            {
                question: "Do I need any prior cooking experience to join this program?",
                answer: "No prior cooking background is required. The curriculum begins from fundamentals including knife grip, kitchen hygiene, and basic cuts before progressing to advanced continental and commercial kitchen operations.",
            },
            {
                question: "Will I get an individual cooking station during classes?",
                answer: "Yes, our 1:1 workstation guarantee means every student has their own commercial burner, cutting board, knife set, and cookware during all practical sessions.",
            },
            {
                question: "Is this course recognized for overseas employment and visas?",
                answer: "Yes, the course aligns with CTEVT National Skill Testing standards. Passing the official CTEVT exam provides government-verified credentials recognized for work visas in Japan (SSW), the Gulf, and Europe.",
            },
            {
                question: "Are raw cooking ingredients and chef uniforms included in the fee?",
                answer: "Yes, all daily fresh meat, vegetables, dairy, specialty condiments, apron, chef jacket, and cap are fully included in the program fee with zero hidden charges.",
            },
        ],
    },
    {
        id: 2,
        slug: "professional-bakery-pastry-arts",
        title: "Professional Bakery & Pastry Arts",
        category: "Baking Sciences",
        subCategory: "Artisan Bakery",
        badge: "High Demand",
        badgeColor: "bg-blue-500",
        duration: "3 Months (Level 1 & 2)",
        hours: "360 Practical Hours",
        shifts: ["Morning (7:00 AM - 10:00 AM)", "Day (11:00 AM - 2:00 PM)"],
        certification: "CTEVT Level-1 & 2",
        level: "CTEVT Level 1 & 2",
        practicalRatio: 85,
        theoryRatio: 15,
        description:
            "Artisan sourdoughs, French viennoiserie, wedding cake sculpting, sugar paste artistry, and commercial deck oven operations.",
        longDescription:
            "Master the exact science and delicate art of commercial baking and French pastry. This comprehensive program trains students on artisan sourdough cultivation, laminated viennoiserie doughs (croissants, Danish), tiered wedding cake decoration, royal icing, and industrial bakery machinery. Perfect for students launching commercial bakeries or securing pastry chef roles worldwide.",
        tags: ["Artisan Breads", "Pastry Decors", "Cost Calculation"],
        image: "/images/chefsinkitchen.png",
        highlights: [
            "Croissant lamination, brioche & sourdough fermentation science",
            "Fondant sculpting, tiered wedding cake construction & royal icing",
            "Commercial deck oven calibration, dough proofing & batch scaling",
        ],
        competencies: [
            {
                title: "Yeast Science & Artisan Fermentation",
                description: "Cultivate wild sourdough starters, calculate baker's percentages, and manage dough proofing phases.",
            },
            {
                title: "Laminated Dough & Viennoiserie",
                description: "Butter block incorporation, multi-fold turns for flaky croissants, pain au chocolat, and Danish pastries.",
            },
            {
                title: "Cake Craft & Decor Artistry",
                description: "Sponge architecture, swiss meringue buttercream, fondant draping, and intricate sugar floral piping.",
            },
            {
                title: "Commercial Deck & Convection Ovens",
                description: "Temperature steam injections, rack rotation timing, and industrial spiral mixer maintenance.",
            },
        ],
        modules: [
            {
                title: "Module 01: Baking Science & Bread Fundamentals",
                duration: "25 Days",
                topics: [
                    "Flour protein gluten analysis and baker's hydration math",
                    "Sourdough, ciabatta, focaccia, and baguettes",
                    "Fermentation temperature control and bench resting",
                ],
            },
            {
                title: "Module 02: Viennoiserie & Laminated Pastries",
                duration: "25 Days",
                topics: [
                    "Single and double fold laminating techniques",
                    "Croissant shaping, proofing, and baking",
                    "Sweet and savory fillings and sugar glazes",
                ],
            },
            {
                title: "Module 03: Cakes, Tarts & Confectionery",
                duration: "25 Days",
                topics: [
                    "Genoise, chiffon, and velvet sponge formulations",
                    "Fruit tarts, lemon curd, and chocolate ganache glazes",
                    "Wedding cake doweling and multi-tier stabilization",
                ],
            },
            {
                title: "Module 04: Bakery Commercialization & CTEVT Skill Test",
                duration: "15 Days",
                topics: [
                    "Bakery recipe costing and retail packaging standards",
                    "CTEVT level skill exam demonstration and evaluation",
                ],
            },
        ],
        careerOutcomes: {
            roles: ["Pastry Chef", "Artisan Baker", "Cake Decorator", "Bakery Business Owner"],
            destinations: ["Boutique Cafes", "5-Star Hotels", "Overseas Cruise Ships", "Self-Employment"],
            salary: "NPR 35,000 - 80,000 / month | USD $700 - $1,400 / month",
        },
        eligibility: {
            education: "Minimum Class 8 / SEE (Class 10) Pass",
            age: "16 years and above",
            documents: ["Citizenship or Passport Copy", "2 PP Photos", "Academic Marksheet"],
        },
        faqs: [
            {
                question: "Do I get to take home the baked goods?",
                answer: "Yes, students sample, evaluate, and take home portions of their creations every day.",
            },
            {
                question: "Does this course cover fondant and wedding cakes?",
                answer: "Yes, our cake module thoroughly covers multi-tier wedding cakes, fondant sculpting, and modern buttercream styles.",
            },
        ],
    },
    {
        id: 3,
        slug: "barista-specialty-coffee-mastery",
        title: "Specialty Barista & Latte Art",
        category: "Specialty Beverage",
        subCategory: "Specialty Coffee",
        badge: "Fast Track Career",
        badgeColor: "bg-emerald-500",
        duration: "30 Days Intensive",
        hours: "120 Practical Hours",
        shifts: ["Morning (7:00 AM - 10:00 AM)", "Day (11:00 AM - 2:00 PM)", "Evening (3:00 PM - 6:00 PM)"],
        certification: "SCA Aligned",
        level: "SCA Certified Standard",
        practicalRatio: 85,
        theoryRatio: 15,
        description:
            "Extraction dialing, microfoam milk steaming, multi-pattern latte art (Rosetta, Swan), manual brewing (V60, Chemex, Aeropress), and café station management.",
        longDescription:
            "From green bean origins and brew ratio extraction science to advanced free-pour latte art. Designed for career baristas seeking top positions in specialty cafes across Kathmandu, Australia, Europe, and UAE. Master multi-group commercial espresso machines, commercial burr grinders, water chemistry, and manual pour-over methods.",
        tags: ["Latte Art", "Dial-in Roasts", "Machine Tech"],
        image: "/images/chefsinkitchen.png",
        highlights: [
            "Dialing in espresso grind size, flow rate & brew extraction ratio",
            "Silky microfoam milk texturing & advanced latte art (Swan, Rosetta)",
            "Manual pour-over brewing: V60, Chemex, Aeropress & Syphon",
        ],
        competencies: [
            {
                title: "Espresso Dialing & Extraction Science",
                description: "Calculate yield percentages, adjust grind micrometer settings, and prevent under/over extraction channeling.",
            },
            {
                title: "Milk Chemistry & Texture Dynamics",
                description: "Steam whole, oat, and almond milk to silky velvet microfoam with zero coarse bubbles at 60-65°C.",
            },
            {
                title: "Advanced Multi-Pattern Latte Art",
                description: "Master heart, tulip, multi-tier rosetta, winged tulip, and reverse swan pour designs.",
            },
            {
                title: "Specialty Manual Brew Bars",
                description: "Water temperature curve profiling with V60, Chemex, Kalita Wave, and cold brew immersion.",
            },
        ],
        modules: [
            {
                title: "Module 01: Coffee Botany & Espresso Mechanics",
                duration: "8 Days",
                topics: [
                    "Arabica vs. Robusta processing: Washed, Natural, and Honey",
                    "Commercial grinder anatomy, burr alignment, and dosing",
                    "Single vs double espresso shot evaluation and tasting notes",
                ],
            },
            {
                title: "Module 02: Milk Steaming & Free-Pour Artistry",
                duration: "10 Days",
                topics: [
                    "Milk protein stretching and whirlpool vortex techniques",
                    "Cup tilt, spout distance, and flow rate manipulation",
                    "Poured hearts, stacked tulips, rosettas, and swans",
                ],
            },
            {
                title: "Module 03: Manual Filter Methods & Signature Drinks",
                duration: "7 Days",
                topics: [
                    "V60 bloom dynamics, brew ratios, and TDS testing",
                    "Cold brew concentrates, iced lattes, and cafe mocktails",
                ],
            },
            {
                title: "Module 04: Cafe Bar Workflow & Equipment Maintenance",
                duration: "5 Days",
                topics: [
                    "Bar station speed drills, ticket management, and group head backflushing",
                    "Final practical barista assessment and certificate award",
                ],
            },
        ],
        careerOutcomes: {
            roles: ["Head Barista", "Cafe Manager", "Specialty Coffee Roaster", "Coffee Consultant"],
            destinations: ["Specialty Cafes in Nepal", "Australia & Canada Student Pathways", "Gulf & European Coffee Houses"],
            salary: "NPR 30,000 - 65,000 / month | AUD $28 - $36 / hour (Overseas)",
        },
        eligibility: {
            education: "No formal requirement (SEE pass preferred)",
            age: "16 years and above",
            documents: ["Citizenship or Passport Copy", "2 Passport Photos"],
        },
        faqs: [
            {
                question: "Do I get enough milk and coffee beans to practice latte art?",
                answer: "Yes, we provide unlimited coffee beans and fresh milk during practice sessions so you can pour until your technique is perfected.",
            },
            {
                question: "Is this certificate useful for students going to Australia?",
                answer: "Yes! Thousands of Nepali students in Australia use our barista certification to secure high-paying cafe jobs immediately upon arrival.",
            },
        ],
    },
    {
        id: 4,
        slug: "5-star-housekeeping-management",
        title: "5-Star Housekeeping Management",
        category: "Hotel Operations",
        subCategory: "Housekeeping Operations",
        badge: "Five-Star Standard",
        badgeColor: "bg-purple-500",
        duration: "45 Days Track",
        hours: "180 Practical Hours",
        shifts: ["Morning (7:00 AM - 10:00 AM)", "Day (11:00 AM - 2:00 PM)"],
        certification: "CTEVT Endorsed",
        level: "CTEVT Level 1 Standard",
        practicalRatio: 85,
        theoryRatio: 15,
        description:
            "Five-star luxury room inspection protocols, chemical handling & linen care, customer service etiquette, and PMS (Property Management Software) navigation.",
        longDescription:
            "Trained directly in model luxury hotel suites. Covers complete housekeeping operations from precision bed making, turndown services, and VIP amenities setup to eco-friendly chemical handling, floor buffing machines, and property management systems. Tailored for careers in luxury resorts, star hotels, and international cruise ships.",
        tags: ["Room Auditing", "Opera PMS", "Concierge Skills"],
        image: "/images/chefsinkitchen.png",
        highlights: [
            "Luxury bed making with hospital corners, duvet tucks & pillow staging",
            "Color-coded sanitation chemicals, stain removal & industrial laundry",
            "Guest service psychology, lost & found logs & room inspection checklists",
        ],
        competencies: [
            {
                title: "Luxury Room Turn-Down & Auditing",
                description: "Execute 5-star hotel room cleaning sequences in under 22 minutes to international quality standards.",
            },
            {
                title: "Chemical Safety & Floor Machines",
                description: "Safe operation of high-speed floor polishers, carpet extractors, and OSHA-compliant sanitizers.",
            },
            {
                title: "Linen & Inventory Management",
                description: "Stock rotation, par levels, laundry dispatch, and fabric preservation techniques.",
            },
        ],
        modules: [
            {
                title: "Module 01: Housekeeping Architecture & Guest Room Cleaning",
                duration: "15 Days",
                topics: ["Trolley organization, bed making, bathroom disinfection, and room inspection."],
            },
            {
                title: "Module 02: Public Area Maintenance & Industrial Machinery",
                duration: "15 Days",
                topics: ["Lobby marble crystallization, carpet shampooing, and chemical dilution."],
            },
            {
                title: "Module 03: Laundry Management & CTEVT Evaluation",
                duration: "15 Days",
                topics: ["Dry cleaning basics, linen inventory par levels, and final skill assessment."],
            },
        ],
        careerOutcomes: {
            roles: ["Housekeeping Executive", "Floor Supervisor", "Public Area Attendant", "Laundry Coordinator"],
            destinations: ["5-Star Hotels in Nepal", "Cruise Lines (Royal Caribbean, MSC)", "Gulf Luxury Resorts"],
            salary: "NPR 25,000 - 55,000 / month | USD $600 - $1,200 / month",
        },
        eligibility: {
            education: "Class 8 or SEE Pass",
            age: "18 years and above for overseas",
            documents: ["Citizenship or Passport", "2 Photos"],
        },
        faqs: [
            {
                question: "Do you train on real hotel beds and equipment?",
                answer: "Yes, our training lab features a dedicated mock 5-star hotel suite with luxury beds, bathrooms, and commercial cleaning trolleys.",
            },
        ],
    },
    {
        id: 5,
        slug: "bartending-beverage-mixology",
        title: "Bartending & Beverage Mixology",
        category: "Beverage Craft",
        subCategory: "Beverage & Mixology",
        badge: "Cruise Line Special",
        badgeColor: "bg-rose-500",
        duration: "30 Days Special",
        hours: "120 Practical Hours",
        shifts: ["Day (11:00 AM - 2:00 PM)", "Evening (3:00 PM - 6:00 PM)"],
        certification: "Industry Recognized",
        level: "International Bartender Guild",
        practicalRatio: 85,
        theoryRatio: 15,
        description:
            "Classic and modern mocktails, mixology chemistry, working flair, speed-pour techniques, bar cellar control, and guest behavior psychology for cruise liners.",
        longDescription:
            "Step behind a fully functional cocktail bar. Learn modern mixology, cocktail balance, classic recipe ratios (Sour, Fizz, Collins), fruit garnishing, speed-pouring accuracy, and crowd-pleasing working flair routines. Designed for cruise liners, luxury bars, and international resort properties.",
        tags: ["Classic Cocktails", "Speed Pouring", "Flair Acrobatics"],
        image: "/images/chefsinkitchen.png",
        highlights: [
            "Speed-pour accuracy, free pour measurement & count systems",
            "Working flair, tin juggling, shaker catches & ice craft",
            "Mixology chemistry: house syrups, bitters & cocktail balance",
        ],
        competencies: [
            {
                title: "Classic Cocktail Mastery",
                description: "Over 50 international IBA cocktail recipes, glassware pairing, and proper dilution.",
            },
            {
                title: "Working Flair & Bottle Showmanship",
                description: "Safe working flair tricks, tin spins, ice flips, and fluid service routines.",
            },
            {
                title: "Cellar Control & Bar Management",
                description: "Beverage stock taking, spoilage prevention, and responsible service of alcohol.",
            },
        ],
        modules: [
            {
                title: "Module 01: Spirits Knowledge & Free Pour Mechanics",
                duration: "10 Days",
                topics: ["Spirits distillation, bar tools, jigger vs speed pour, and station ergonomics."],
            },
            {
                title: "Module 02: Classical & Contemporary Cocktail Production",
                duration: "10 Days",
                topics: ["Shaken, stirred, muddled, and built cocktails with artisan garnishing."],
            },
            {
                title: "Module 03: Flair Bartending & Cruise Line Simulations",
                duration: "10 Days",
                topics: ["Flair routines, high-volume speed service drills, and practical assessment."],
            },
        ],
        careerOutcomes: {
            roles: ["Bartender / Mixologist", "Bar Supervisor", "Beverage Catering Manager"],
            destinations: ["Cruise Liners", "Dubai & Doha Nightlife", "Luxury Resorts"],
            salary: "NPR 30,000 - 70,000 / month | USD $750 - $1,600 / month",
        },
        eligibility: {
            education: "SEE (Class 10) Pass",
            age: "18 years and above",
            documents: ["Citizenship or Passport", "2 Photos"],
        },
        faqs: [
            {
                question: "Do you teach non-alcoholic mocktails as well?",
                answer: "Yes, our syllabus includes extensive modern zero-proof mocktails and specialty flavored iced teas.",
            },
        ],
    },
    {
        id: 6,
        slug: "certified-caregiver-healthcare-assistant",
        title: "Certified Caregiver & Healthcare Assistant",
        category: "Healthcare Services",
        subCategory: "Care Giver & Health",
        badge: "Japan & UK Target",
        badgeColor: "bg-cyan-500",
        duration: "3 Months SSW Prep",
        hours: "360 Practical Hours",
        shifts: ["Morning (7:00 AM - 10:00 AM)", "Day (11:00 AM - 2:00 PM)"],
        certification: "SSW / Overseas Valid",
        level: "CTEVT / SSW Japan Aligned",
        practicalRatio: 85,
        theoryRatio: 15,
        description:
            "Geriatric support, vital sign tracking, first-aid CPR certification, wheelchair ergonomics, and specific visa interview training for Japan (SSW) and Europe.",
        longDescription:
            "A specialized healthcare and geriatric nursing support course structured around international caregiving requirements for Japan (SSW Caregiver Visa), UK, Europe, and Israel. Students practice vital sign measurement, patient transfer ergonomics, Alzheimer's/dementia care, emergency CPR/first-aid, and basic Japanese terminology.",
        tags: ["BLS / CPR", "Elder Care", "Japan SSW Prep"],
        image: "/images/chefsinkitchen.png",
        highlights: [
            "Vital sign tracking (BP, pulse, oxygen, glucose) & BLS/CPR first-aid",
            "Patient transfer ergonomics, wheelchair maneuvering & bed repositioning",
            "Geriatric hygiene, feeding assistance & SSW visa interview prep",
        ],
        competencies: [
            {
                title: "Elderly Care & Hygiene Protocols",
                description: "Bed baths, oral care, pressure sore prevention, and incontinence care.",
            },
            {
                title: "Emergency Response & Vital Signs",
                description: "Digital and manual BP, pulse oximetry, diabetic monitoring, and AHA-aligned CPR.",
            },
            {
                title: "Safe Patient Mobility & Ergonomics",
                description: "Slide sheets, patient hoists, transfer boards, and wheelchair positioning without caregiver strain.",
            },
            {
                title: "Japan SSW & Overseas Interview Readiness",
                description: "Japanese caregiving vocabulary (Kaigo), ethics, and mock visa interview practice.",
            },
        ],
        modules: [
            {
                title: "Module 01: Caregiving Fundamentals & Human Biology",
                duration: "25 Days",
                topics: ["Geriatric anatomy, vital signs tracking, infection control, and medical ethics."],
            },
            {
                title: "Module 02: Daily Living Assistance & Bed Care",
                duration: "25 Days",
                topics: ["Hygiene, feeding techniques, catheter care guidelines, and skin inspection."],
            },
            {
                title: "Module 03: Mobility, Ergonomics & First Aid CPR",
                duration: "25 Days",
                topics: ["Wheelchair safety, bed transfers, Red Cross CPR protocol, and choking response."],
            },
            {
                title: "Module 04: Dementia Care & Overseas Certification",
                duration: "15 Days",
                topics: ["Psychological support, Kaigo Japanese terms, and CTEVT skill testing exam."],
            },
        ],
        careerOutcomes: {
            roles: ["Certified Caregiver", "Nursing Home Assistant", "Home Healthcare Aide", "Hospital Attendant"],
            destinations: ["Japan (Specified Skilled Worker Visa)", "United Kingdom (Health & Care Visa)", "Europe & Israel"],
            salary: "NPR 30,000 - 50,000 / month (Nepal) | JPY 200,000 - 260,000 / month (Japan)",
        },
        eligibility: {
            education: "SEE (Class 10) Pass or +2 Pass",
            age: "18 to 40 years",
            documents: ["Citizenship or Passport", "Academic Certificates", "PP Photos"],
        },
        faqs: [
            {
                question: "Is Japanese language taught along with caregiving?",
                answer: "Yes, students receive basic Japanese caregiving terminology (Kaigo Kotoba) needed for the Prometric skills test.",
            },
            {
                question: "Do you provide CPR certification?",
                answer: "Yes, certified first aid and CPR training is integrated into the course curriculum.",
            },
        ],
    },
];

export const getCourseBySlug = (slug: string): Course | undefined => {
    return courses.find((c) => c.slug === slug);
};
