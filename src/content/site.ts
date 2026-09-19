export type DocketNode = {
  id: string;
  label: string;
  detail: string;
  tone: "violet" | "green" | "orange" | "red";
  x: number;
  y: number;
};

export type ExperienceRecord = {
  id: string;
  organisation: string;
  role: string;
  period: string;
  summary: string;
  responsibilities: string[];
  tags: string[];
  source: "CV supplied by owner" | "LinkedIn profile";
  published: boolean;
};

export type PublicRecord = {
  id: string;
  section: "activity" | "achievement";
  title: string;
  organisation?: string;
  period?: string;
  summary: string;
  published: boolean;
  source: "CV supplied by owner" | "LinkedIn profile";
};

export type PublicationRecord = {
  id: string;
  title: string;
  venue: string;
  details: string;
  published: boolean;
  source: "CV supplied by owner";
};

export const siteConfig = {
  person: {
    name: "Mitanshi Khandelwal",
    roleLabel: "Law student · Legal researcher · Emerging corporate-law professional",
    school: "Symbiosis Law School, Noida",
    studyStage: "Final-year BBA. LL.B · Expected 2027",
    email: "khandelwalmitanshi@gmail.com",
    phone: "+91 6350059029",
    linkedinUrl: "https://www.linkedin.com/in/mitanshikhandelwal/",
  },
  positioning: {
    headline: "A legal research record for the questions shaping tomorrow’s organisations.",
    introduction:
      "Mitanshi Khandelwal is a final-year BBA. LL.B student at Symbiosis Law School, Noida. She is open to learning, currently exploring cyber law, and building toward a career in corporate law.",
    focusAreas: [
      "Corporate law",
      "Cyber law",
      "Tech laws",
      "Dispute resolution",
      "Legal research",
    ],
    profileLine: "Civil & criminal litigation · Tech laws & dispute resolution · CS Executive (pursuing)",
  },
  notices: {
    content:
      "This public record combines owner-supplied résumé information with selected LinkedIn details. Role summaries describe the work listed in the supplied résumé and do not disclose confidential matter information.",
    legal:
      "This website is a professional portfolio. It does not provide legal advice and does not create a lawyer–client relationship.",
  },
};

export const education = [
  {
    course: "BBA. LL.B",
    institute: "Symbiosis Law School, Noida",
    grade: "7.4 / 10 GPA",
    year: "Expected 2027",
    note: "8th semester listed on the supplied résumé",
  },
  {
    course: "Class 12th",
    institute: "St Xavier’s School Nevta, Jaipur",
    grade: "72%",
    year: "2021",
    note: "",
  },
  {
    course: "Class 10th",
    institute: "St Xavier’s School Nevta, Jaipur",
    grade: "82%",
    year: "2019",
    note: "",
  },
];

export const docketNodes: DocketNode[] = [
  {
    id: "corporate",
    label: "Corporate law",
    detail: "The professional direction Mitanshi is currently working toward.",
    tone: "violet",
    x: 14,
    y: 52,
  },
  {
    id: "cyber",
    label: "Cyber law",
    detail: "An active area of exploration connected to tech-law and public workshops.",
    tone: "green",
    x: 56,
    y: 35,
  },
  {
    id: "arbitration",
    label: "Arbitration",
    detail: "Built through research and case-brief work during the GAIL legal internship.",
    tone: "orange",
    x: 78,
    y: 21,
  },
  {
    id: "advocacy",
    label: "Advocacy",
    detail: "Reflected in moot-court participation, court-master responsibilities, and litigation research.",
    tone: "red",
    x: 47,
    y: 74,
  },
];

export const experienceRecords: ExperienceRecord[] = [
  {
    id: "khaitan",
    organisation: "Khaitan & Co., Noida",
    role: "Intern",
    period: "January 2026",
    summary: "Commercial litigation, regulatory research, and structured legal analysis across diverse practice areas.",
    responsibilities: [
      "Conducted research across commercial litigation, civil procedure, criminal law, and constitutional law, including the Commercial Courts Act, CPC, PMLA, Article 14, bail jurisprudence, and appellate procedures.",
      "Assisted on litigation work through case compilations, FIR collation, exemption applications, indemnity notices, and case-law indices.",
      "Researched cryptocurrency regulation, insolvency law, OTT content governance, intermediary liability, trade marks, export compliance, and environmental regulations.",
      "Prepared structured legal briefs and opinions, supporting comparative case analysis, statutory interpretation, and precedent-based arguments.",
    ],
    tags: ["Commercial litigation", "Regulatory research", "Constitutional law", "Tech policy"],
    source: "CV supplied by owner",
    published: true,
  },
  {
    id: "gail",
    organisation: "GAIL (India) Ltd.",
    role: "Legal Intern",
    period: "December 2025",
    summary: "Arbitration, energy-sector regulation, competition law, and commercial statutory research.",
    responsibilities: [
      "Prepared case briefs on ongoing arbitration matters involving GAIL (India) Ltd.",
      "Drafted a legal opinion on the interplay between the Indian Contract Act, the Securities Contracts (Regulation) Act, and the IFSCA framework.",
      "Prepared briefs on newly notified labour laws and competition-law issues in the gas sector, including the role of PNGRB.",
      "Prepared a research note on grounds of appeal under Sections 34 and 37 of the Arbitration and Conciliation Act.",
      "Conducted statutory and regulatory research related to the gas and energy sector.",
    ],
    tags: ["Arbitration", "Energy law", "Competition law", "Regulatory research"],
    source: "CV supplied by owner",
    published: true,
  },
  {
    id: "circle-of-counsels",
    organisation: "Circle of Counsels",
    role: "Intern",
    period: "June – July 2025",
    summary: "PMLA research, Benami-law analysis, and contractual-dispute opinion work.",
    responsibilities: [
      "Researched the Prevention of Money Laundering Act, 2002, focusing on Sections 5, 8, and 17(1)(a), including Vijay Madanlal Choudhary v. UOI and Pavan Dibbur v. ED.",
      "Researched the retrospective operation of Benami laws and their implications.",
      "Assisted in drafting a rejoinder in an ongoing PMLA matter.",
      "Prepared a legal opinion on contractual disputes involving Defect Liability Period clauses and Operations & Maintenance obligations.",
    ],
    tags: ["PMLA", "Benami law", "Contract disputes", "Legal opinions"],
    source: "CV supplied by owner",
    published: true,
  },
  {
    id: "rahul-jayshri",
    organisation: "Rahul & Jayshri Associates & Co.",
    role: "Intern",
    period: "February 2025",
    summary: "Drafting exposure across commercial, corporate, contractual, and intellectual-property documents.",
    responsibilities: [
      "Drafted affidavits, rent agreements, service agreements, marketing proposals, non-disclosure agreements, Articles of Association, and Memoranda of Association.",
      "Worked on intellectual-property-law contract drafting.",
    ],
    tags: ["Contract drafting", "Corporate documents", "IP law"],
    source: "CV supplied by owner",
    published: true,
  },
  {
    id: "shalinder-kaur",
    organisation: "Chambers of Hon’ble Shalinder Kaur, Delhi High Court",
    role: "Judicial Intern",
    period: "December 2024",
    summary: "Judicial research and case-brief preparation across constitutional, service, contempt, and RERA matters.",
    responsibilities: [
      "Drafted advance and supplementary case briefs for contempt appeals and RERA appeals, including writ petitions concerning administrative orders and constitutional validity.",
      "Worked on service-related disputes in the Armed Forces.",
      "Prepared a summary of Gurwinder Singh v. State of Punjab focused on service law and administrative jurisprudence.",
      "Summarised PUCL v. Union of India with attention to constitutional law, public interest, and statutory interpretation.",
      "Conducted research on statutes, precedents, and procedural rules to support judicial decision-making.",
    ],
    tags: ["Judicial research", "Constitutional law", "Service law", "RERA"],
    source: "CV supplied by owner",
    published: true,
  },
  {
    id: "raj-deepak-rastogi",
    organisation: "Chambers of Mr. Raj Deepak Rastogi, Additional Solicitor General of India, High Court of Rajasthan, Jaipur",
    role: "Intern",
    period: "July 2023",
    summary: "Research briefs spanning constitutional law, real-estate law, assisted reproductive technology, and land administration.",
    responsibilities: [
      "Researched and prepared briefs on the right to livelihood under Article 21 of the Constitution of India and the principle of reasonable classification.",
      "Researched real-estate law, including delayed project completion and refund under Section 18 of RERA, 2016.",
      "Researched Section 21 of the Assisted Reproductive Technology Act, 2021.",
      "Researched the Cantonment & Land Administration Rules, 1937.",
    ],
    tags: ["Constitutional law", "RERA", "Real-estate law", "Public law"],
    source: "CV supplied by owner",
    published: true,
  },
];

export const publications: PublicationRecord[] = [
  {
    id: "rti-data-protection",
    title: "Unearthing RTI and Decoding Data Protection Act 2023",
    venue: "Right to Informa: Law, Policy and Governance · RGNUL, Patiala",
    details: "Published research paper. ISBN: 978-93-84166-46-5.",
    published: true,
    source: "CV supplied by owner",
  },
  {
    id: "algorithmic-cartels",
    title: "Algorithmic Cartels: Rethinking Antitrust Law in the Age of Blockchain",
    venue: "International Journal of Legal Developments and Allied Issues · Vol. 12, Issue 1",
    details: "January–February 2026 · ISSN: 2454-1273 · Co-authored.",
    published: true,
    source: "CV supplied by owner",
  },
];

export const publicRecords: PublicRecord[] = [
  {
    id: "legal-ararth-director",
    section: "activity",
    title: "Director, Legal Ararth",
    organisation: "Legal Ararth (NGO)",
    period: "Public profile record",
    summary: "Director of an NGO whose stated vision is to promote legal awareness among youth.",
    published: true,
    source: "CV supplied by owner",
  },
  {
    id: "moot-court-society",
    section: "activity",
    title: "Moot Court Society & Court Master",
    organisation: "Symbiosis Law School, Noida",
    period: "May 2023 – May 2024",
    summary: "Served as Court Master for the Nascent Moot Court Competition and was a member of the Moot Court Society.",
    published: true,
    source: "CV supplied by owner",
  },
  {
    id: "legal-awareness-workshops",
    section: "activity",
    title: "Legal awareness workshops",
    organisation: "Schools in Ghaziabad and Noida",
    summary: "Conducted workshops on Child Sexual Abuse, Cyber Smart, Youth Safety Advocacy, and Cyber Law.",
    published: true,
    source: "CV supplied by owner",
  },
  {
    id: "legal-marathon",
    section: "achievement",
    title: "Legal Marathon participant",
    organisation: "Dhir & Dhir Associates",
    summary: "Shortlisted and participated in the Legal Marathon organised by Dhir & Dhir Associates.",
    published: true,
    source: "CV supplied by owner",
  },
  {
    id: "amend-constitution",
    section: "achievement",
    title: "Winner — Drafting Segment",
    organisation: "Amend Your Constitution Competition · UPES",
    summary: "Won the drafting segment of the competition organised by UPES.",
    published: true,
    source: "CV supplied by owner",
  },
  {
    id: "themis-moot",
    section: "achievement",
    title: "Octa-finalist",
    organisation: "4th Themis National Moot Court Competition · Christ Lavasa, Pune",
    summary: "Advanced to the octa-final round.",
    published: true,
    source: "CV supplied by owner",
  },
  {
    id: "nascent-moot",
    section: "achievement",
    title: "Nascent Moot Court Competition",
    organisation: "Symbiosis Law School, Noida",
    period: "2023",
    summary: "Cleared the Nascent Moot Court Competition conducted by Symbiosis Law School, Noida.",
    published: true,
    source: "CV supplied by owner",
  },
  {
    id: "financial-literacy",
    section: "achievement",
    title: "Outstanding Position",
    organisation: "National Financial Literacy Assessment Test · NISC",
    summary: "Conferred an outstanding position in the assessment test.",
    published: true,
    source: "CV supplied by owner",
  },
  {
    id: "oxyopia",
    section: "achievement",
    title: "Merit Position",
    organisation: "All India Oxyopia Examination · CREDENT",
    summary: "Secured a merit position in the examination.",
    published: true,
    source: "CV supplied by owner",
  },
];
