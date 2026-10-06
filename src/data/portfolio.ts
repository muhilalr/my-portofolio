import heroImg from "../assets/hero.png";
import heroBg from "../assets/alam.avif";
import ctaBg from "../assets/cta.avif";

/* ============ ISI / GANTI DATA DI SINI ============ */
export const NAME = { first: "M. Hilal", last: "Ramadhan" };
export const EMAIL = "muhammadhilalra@gmail.com";

// Isi dengan URL / import gambar milikmu. Kosong = pakai gradient pengganti.
export const HERO_BG = heroBg;
export const PHOTO = heroImg;
export const CTA_BG = ctaBg;
const projectAssets = import.meta.glob(
  "../assets/projects/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

const getProjectShots = (slug: string) =>
  Object.entries(projectAssets)
    .filter(([path]) => path.includes(`/projects/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, image]) => image);

const certificateAssets = import.meta.glob(
  "../assets/certficates/**/*.{png,PNG,jpg,JPG,jpeg,JPEG,webp,WEBP}",
  { eager: true, query: "?url", import: "default" },
) as Record<string, string>;

const getCertificateImages = (slug: string) =>
  Object.entries(certificateAssets)
    .filter(([path]) => path.includes(`/certficates/${slug}/`))
    .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
    .map(([, image]) => image);

export const bg = (src: string, fallback: string) =>
  src ? `url(${src}) center/cover no-repeat, ${fallback}` : fallback;

export const NAV = ["Home", "About", "Experience", "Projects", "Contact"];
export const TITLES = [
  "Software Engineer",
  "Fullstack Developer",
  "Web Developer",
];

const TECH_ICON_SOURCE: string = "custom";

// Tempel SVG buatan sendiri di sini. Kunci harus sama dengan nama teknologi.
// Contoh: "React": '<svg viewBox="0 0 24 24">...</svg>'
const TECH_CUSTOM_SVGS: Record<string, string> = {
  "Node.js": `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#81CD39" d="M119.878 31.1164C124.797 28.3008 131.203 28.2883 136.117 31.1164C160.839 45.0855 185.569 59.0332 210.287 73.0108C214.937 75.6296 218.046 80.8038 217.999 86.1608V170.206C218.034 175.785 214.617 181.083 209.712 183.642C185.071 197.535 160.442 211.444 135.805 225.337C130.786 228.207 124.251 227.986 119.387 224.88C112 220.598 104.6 216.336 97.2121 212.058C95.7022 211.158 94.0004 210.442 92.9345 208.978C93.8766 207.708 95.5618 207.55 96.9309 206.995C100.014 206.014 102.847 204.44 105.679 202.913C106.396 202.423 107.27 202.611 107.957 203.049C114.274 206.671 120.536 210.399 126.874 213.986C128.226 214.767 129.595 213.73 130.751 213.086C154.931 199.419 179.141 185.805 203.318 172.134C204.214 171.703 204.709 170.752 204.636 169.771C204.653 142.046 204.64 114.317 204.645 86.5918C204.747 85.4785 204.103 84.455 203.096 83.999C178.541 70.1702 153.997 56.3205 129.446 42.4882C128.575 41.8893 127.426 41.8878 126.554 42.4837C102.002 56.3205 77.4638 70.1832 52.9124 84.011C51.9092 84.4675 51.236 85.4745 51.3554 86.5918C51.3596 114.317 51.3554 142.046 51.3554 169.775C51.2682 170.756 51.801 171.687 52.6906 172.109C59.2422 175.824 65.8024 179.513 72.3582 183.216C76.0516 185.203 80.5863 186.385 84.6555 184.862C88.2463 183.574 90.7633 179.909 90.6948 176.097C90.7288 148.534 90.6778 120.967 90.7203 93.4078C90.6309 92.1841 91.7912 91.1731 92.981 91.2885C96.1292 91.267 99.281 91.2461 102.429 91.297C103.743 91.267 104.647 92.5847 104.485 93.8174C104.472 121.555 104.519 149.293 104.464 177.03C104.472 184.423 101.435 192.467 94.5973 196.084C86.1737 200.447 75.7619 199.522 67.4399 195.338C60.2355 191.742 53.3603 187.498 46.2838 183.646C41.3661 181.101 37.966 175.782 38.0006 170.207V86.1608C37.949 80.6929 41.1825 75.4248 45.9764 72.8445C70.6133 58.9408 95.2461 45.0261 119.878 31.1164Z"/><path fill="#81CD39" d="M141.372 89.3351C152.117 88.6433 163.62 88.9255 173.289 94.2185C180.776 98.2754 184.926 106.789 185.058 115.106C184.849 116.227 183.676 116.846 182.605 116.769C179.488 116.765 176.369 116.812 173.252 116.748C171.929 116.799 171.161 115.58 170.995 114.411C170.099 110.431 167.928 106.49 164.183 104.57C158.433 101.692 151.767 101.837 145.497 101.897C140.92 102.139 135.998 102.536 132.12 105.227C129.143 107.266 128.239 111.382 129.301 114.697C130.303 117.077 133.05 117.845 135.299 118.553C148.248 121.94 161.97 121.602 174.672 126.059C179.931 127.876 185.075 131.409 186.875 136.915C189.23 144.295 188.198 153.115 182.947 159.039C178.689 163.914 172.488 166.568 166.303 168.009C158.075 169.844 149.536 169.891 141.18 169.076C133.323 168.18 125.146 166.116 119.081 160.763C113.894 156.259 111.361 149.241 111.612 142.469C111.672 141.325 112.811 140.527 113.907 140.621C117.046 140.596 120.186 140.587 123.325 140.626C124.58 140.536 125.509 141.62 125.574 142.802C126.152 146.593 127.577 150.573 130.884 152.82C137.264 156.937 145.271 156.655 152.577 156.77C158.63 156.502 165.425 156.421 170.364 152.42C172.97 150.138 173.742 146.32 173.038 143.036C172.275 140.263 169.374 138.971 166.883 138.126C154.1 134.083 140.224 135.55 127.565 130.977C122.425 129.161 117.455 125.727 115.481 120.447C112.726 112.974 113.988 103.73 119.789 98.0061C125.445 92.312 133.609 90.1192 141.372 89.3346V89.3351"/></svg>`,
  Docker: `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#2396ED" rx="60"/><path fill="#fff" d="M141.187 122.123H161.904V103.379H141.187V122.123ZM116.525 122.123H137.241V103.379H116.525V122.123ZM92.3554 122.123H113.072V103.379H92.3554V122.123ZM68.1859 122.123H88.4093V103.379H68.1859V122.123ZM43.5233 122.123H64.2399V103.379H43.5233V122.123ZM68.1859 99.4333H88.4093V80.6896H68.1859V99.4333ZM92.3554 99.4333H113.072V80.6896H92.3554V99.4333ZM116.525 99.4333H137.241V80.6896H116.525V99.4333ZM116.525 76.7436H137.241V58H116.525V76.7436ZM228 113.738C228 113.738 219.121 105.352 200.871 108.312C198.898 94.0075 183.607 85.6222 183.607 85.6222C183.607 85.6222 169.303 102.886 179.661 122.123C176.702 123.603 171.769 125.576 164.37 125.576H28.7257C26.2594 134.948 26.2594 197.097 94.3284 197.097C143.16 197.097 179.661 174.408 196.925 132.974C222.574 134.948 228 113.738 228 113.738Z"/></svg>`,
  "Express.js": `<svg xmlns="http://www.w3.org/2000/svg" width="256" height="256" fill="none" viewBox="0 0 256 256"><rect width="256" height="256" fill="#242938" rx="60"/><path fill="#fff" d="M228 182.937C225.089 184.04 221.875 184.037 218.965 182.931C216.056 181.824 213.652 179.69 212.209 176.932C203.146 163.365 193.138 150.41 183.519 137.177L179.348 131.617C167.894 146.963 156.44 161.697 145.987 176.988C144.625 179.624 142.352 181.675 139.59 182.759C136.828 183.844 133.766 183.887 130.975 182.882L173.955 125.223L133.977 73.1236C136.855 72.0845 140.003 72.0702 142.89 73.0832C145.777 74.0962 148.226 76.0744 149.824 78.6838C159.109 92.2506 169.396 105.206 179.626 118.94C189.913 105.317 200.088 92.3062 209.596 78.8506C210.965 76.2574 213.24 74.258 215.988 73.2328C218.735 72.2076 221.764 72.2281 224.497 73.2904L208.984 93.8631C202.034 103.037 195.195 112.267 187.967 121.219C187.384 121.741 186.918 122.379 186.599 123.093C186.28 123.807 186.115 124.58 186.115 125.362C186.115 126.143 186.28 126.916 186.599 127.63C186.918 128.344 187.384 128.982 187.967 129.504C201.256 147.13 214.433 164.811 228 182.937V182.937Z"/><path fill="#fff" d="M28 124.5C29.1676 118.94 29.8905 112.879 31.5029 107.208C41.122 73.0129 80.3214 58.7788 107.288 79.9632C123.079 92.3624 127.027 109.933 126.249 129.727H37.2855C35.8399 165.09 61.3611 186.441 93.9994 175.543C99.2938 173.649 104.033 170.467 107.79 166.283C111.547 162.099 114.202 157.045 115.517 151.578C117.241 146.018 120.021 145.073 125.303 146.685C124.433 153.454 122.04 159.938 118.303 165.649C114.567 171.36 109.584 176.149 103.73 179.657C94.0573 184.947 82.96 187.042 72.0247 185.644C61.0894 184.246 50.8763 179.426 42.8457 171.873C34.9011 162.94 30.0973 151.654 29.1676 139.735C29.1676 137.845 28.4448 135.954 28.0556 134.175C28.0185 130.876 28 127.651 28 124.5ZM37.3967 122.109H117.853C117.352 96.4769 101.172 78.2951 79.5986 78.1283C55.5785 77.7947 38.3976 95.5873 37.3411 121.998L37.3967 122.109Z"/></svg>`,
};

export const TECH_STACK = [
  ["JavaScript", "javascript/javascript-original.svg"],
  ["TypeScript", "typescript/typescript-original.svg"],
  ["PHP", "php/php-original.svg"],
  ["Dart", "dart/dart-original.svg"],
  ["Laravel", "laravel/laravel-original.svg"],
  ["Next.js", "nextjs/nextjs-original.svg"],
  ["React", "react/react-original.svg"],
  ["Node.js", "nodejs/nodejs-original-wordmark.svg"],
  ["Express.js", "express/express-original.svg"],
  ["Flutter", "flutter/flutter-original.svg"],
  ["Bootstrap", "bootstrap/bootstrap-original.svg"],
  ["Tailwind CSS", "tailwindcss/tailwindcss-original.svg"],
  ["MySQL", "mysql/mysql-original-wordmark.svg"],
  ["Supabase", "supabase/supabase-original.svg"],
  ["Git", "git/git-original.svg"],
  ["Docker", "docker/docker-original.svg"],
  ["Postman", "postman/postman-original.svg"],
].map(([name, devicon]) => ({
  name,
  svg: TECH_ICON_SOURCE === "custom" ? TECH_CUSTOM_SVGS[name] : undefined,
  icon: `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${devicon}`,
}));

export const PROJECTS = [
  {
    slug: "pojok-literasi",
    t: "Pojok Literasi Statistik",
    stack: ["TypeScript", "Next.js", "Laravel", "Tailwind CSS", "MySQL"],
    f: "black",
    shots: getProjectShots("pojok-literasi"),
    description:
      "Pojok Literasi Statistik is a digital innovation developed in collaboration with the BPS Provinsi Kepulauan Bangka Belitung, with the aim of improving statistical literacy among students and college students in the digital age. The features on this website were developed to support an interactive and informative platform for statistical literacy.",
    features: [
      "Educational Content: Articles, infographics, and instructional videos on statistics.",
      "Interactive Tools: Statistical calculators, statistical simulations, and data visualizations (box plots, histograms, etc.).",
      "Monthly Quizzes & Challenges: Interactive quizzes, leaderboards, and progress history.",
      "Internship & Research Portal: Online registration, status tracking, report uploads, and portfolio.",
    ],
  },
  {
    slug: "hris",
    t: "Dashboard HRIS KodingYuk!",
    stack: ["TypeScript", "Next.js", "Tailwind CSS"],
    f: "black",
    shots: getProjectShots("hris"),
    description:
      "The KodingYuk! HRIS Dashboard is an integrated human resources management system developed to streamline HR operations and efficiently monitor the performance of employees and interns at KodingYuk!. The features on this website are directly connected to the Odoo 17 ERP system to provide data on attendance, leave requests, and the recruitment process.",
    features: [
      "Performance & Analytics Dashboard: HR data visualization",
      "Attendance Management: Real-time monitoring of employee attendance.",
      "Leave Management: Submission and approval of employee leave balances synchronized with Odoo HR.",
      "Recruitment Workflow (Kanban Stages): Interactive monitoring of candidates and progression through applicant stages.",
    ],
  },
  {
    slug: "ky-wiki",
    t: "KY-Wiki",
    stack: ["TypeScript", "Next.js", "Tailwind CSS", "MySQL"],
    f: "black",
    shots: getProjectShots("ky-wiki"),
    description:
      "KY-Wiki is a digital documentation management system developed to simplify the centralized management, search, and access of information and SOPs at KodingYuk!. The systemâ€™s features are designed to support team collaboration and the presentation of structured documentation.",
    features: [
      "Article & Category Management: Creation, editing, and organization of documentation/SOPs.",
      "Role-Based Access Control (RBAC): Allocation of access rights between Admins and Users (User Management & Rights to Manage Categories/Articles).",
      "Live Search & Quick Navigation: Instant search feature to quickly find guides, SOPs, or article categories.",
      "Markdown Editor & Viewer: Support for writing clean, structured Markdown-based content for both technical and non-technical documentation.",
    ],
  },
  {
    slug: "spbe",
    t: "Sistem Pemerintahan Berbasis Elektronik",
    stack: ["PHP", "Laravel", "MySQL"],
    f: "black",
    shots: getProjectShots("spbe"),
    description:
      "The SPBE Service Information System is a management system developed in collaboration with Dinas Komunikasi dan Informatika Provinsi Kepulauan Bangka Belitung with the aim of improving the effectiveness of digital government governance, integrating public services, and providing efficient government administrative services.",
    features: [
      "SPBE Service Management: Management of public service categories and government administration, including data on agencies, sectors, and applicants.",
      "Inspection Report (BAP) & PDF Export: Creation of official BAP documents and automatic export to PDF format.",
      "Follow-Up Tracking: A system for tracking and assigning follow-up actions for service improvements or evaluations.",
      "Notifications & Activity Logs: A system for sending follow-up notifications via email and recording system activity logs.",
    ],
  },
  {
    slug: "dinkominfotik",
    t: "Web Dinkominfotik",
    stack: ["PHP", "Laravel", "Tailwind CSS", "MySQL"],
    f: "black",
    shots: getProjectShots("dinkominfotik"),
    description:
      "The official public website developed for Dinas Komunikasi, Informatika, dan Statistik Kabupaten Bangka with the aim of providing a public service information center, transparency of local government activities, as well as access to official data and news for the public. The features of this website are developed to support transparent and informative digital information services.",
    features: [
      "News & Announcements Management: Publication of articles, news about official events, and important announcements from government agencies.",
      "Public Data & Attachments: Transparent management and download of documents, statistical data, and public information attachments.",
      "Event Photo & Video Gallery: Documentation of agency activities in the form of photos and videos.",
      "Dynamic Menu & Banner Management: Configuration of the websiteâ€™s navigation structure, hero sliders, and promotional banners.",
      "Integrated Admin Panel: A full-featured Filament-based content management dashboard to make it easier for agency administrators to update information.",
    ],
  },
  {
    slug: "iot",
    t: "API IoT Agrikultur",
    stack: ["JavaScript", "Node.js", "Express.js", "MySQL"],
    f: "black",
    shots: getProjectShots("iot"),
    description:
      "An IoT backend for smart agriculture designed for automation and real-time monitoring of farm conditions. The system integrates IoT protocols with modern web architecture to collect sensor telemetry, record environmental data history, remotely control actuators, and schedule automatic irrigation systems.",
    features: [
      "Real-time Sensor Monitoring",
      "Remote Actuator Control",
      "Automated Irrigation Scheduling",
      "Historical Telemetry Logging",
      "Device Provisioning & Pairing",
      "Role-Based Access Control (RBAC)",
    ],
  },
];

export const CERTIFICATES = [
  {
    t: "Full-Stack Development",
    o: "Digital Talent Scholarship",
    images: getCertificateImages("fullstack"),
  },
  {
    t: "Front-End & Back-End Development",
    o: "Digital Talent Scholarship",
    images: getCertificateImages("frontend-backend"),
  },
  {
    t: "Project-Based Virtual Intern : Frontend Developer",
    o: "Core Initiative - Rakamin Academy",
    images: getCertificateImages("rakamin"),
  },
  {
    t: "Frontend - React",
    o: "MySkill",
    images: getCertificateImages("react"),
  },
  {
    t: "Frontend - VueJS",
    o: "MySkill",
    images: getCertificateImages("vue"),
  },
  {
    t: "CSS, JavaScript And Python Complete Course",
    o: "Udemy",
    images: getCertificateImages("css-js-python"),
  },
  {
    t: "Belajar Dasar Pemrograman JavaScript",
    o: "Dicoding Indonesia",
    images: getCertificateImages("dicoding-js"),
  },
];

export const EXPERIENCES = [
  {
    role: "System Developer Intern",
    company: "PT Koding Yuk Academy",
    period: "Apr 2026 - Sep 2026",
  },
  {
    role: "Web Developer Intern",
    company:
      "Dinas Komunikasi dan Informatika Provinsi Kepulauan Bangka Belitung",
    period: "Feb 2026 - Jul 2026",
  },
  {
    role: "Lab Assistant - Basic Programming Algorithm",
    company: "Politeknik Manufaktur Negeri Bangka Belitung",
    period: "Agu 2025 - Jan 2026",
  },
  {
    role: "IT Intern",
    company: "Dinas Komunikasi, Informatika, dan Statistik Kabupaten Bangka",
    period: "Agu 2024 - Jan 2025",
  },
  {
    role: "Department of Research and Action",
    company:
      "Badan Eksekutif Mahasiswa Politeknik Manufaktur Negeri Bangka Belitung",
    period: "Jul 2023 - Jul 2024",
  },
];
