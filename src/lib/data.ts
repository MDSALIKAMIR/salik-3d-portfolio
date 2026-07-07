export const PORTFOLIO_DATA = {
  name: "Md Salik Amir",
  role: ["Frontend Developer", "Web Developer", "DevOps Enthusiast"],
  tagline: "Building futuristic digital experiences with modern web technologies.",
  location: "Madhubani, Bihar, India",
  email: "mdsalikamir@gmail.com",
  WhatsApp: "+91 78588 02094",
  phone: "+91 78588 02094",
  social: {
    github: "https://github.com/MDSALIKAMIR/",
    linkedin: "https://www.linkedin.com/in/md-salik-amir-955307342//",
    instagram: "https://www.instagram.com/innocent_salik_01?igsh=NjI3NG1iZmVyMGxo/",
  },
  about: `Passionate Frontend Developer and DevOps Enthusiast with a strong interest in building responsive web applications and learning modern DevOps practices. Skilled in HTML, CSS, JavaScript, React, Python, Linux, Git, Docker, and Jenkins. I enjoy solving real-world problems, exploring new technologies, and continuously improving my development and automation skills.`,
};

export const SKILLS = [
  { name: "HTML", level: 85, category: "frontend", icon: "🌐" },
  { name: "CSS", level: 80, category: "frontend", icon: "🎨" },
  { name: "JavaScript", level: 75, category: "frontend", icon: "⚡" },
  { name: "React.js", level: 70, category: "frontend", icon: "⚛️" },
  { name: "Linux", level: 80, category: "OS", icon: "🐧" },
  { name: "Git", level: 90, category: "tools", icon: "🌿" },
  { name: "GitHub", level: 90, category: "tools", icon: "🐙" },
  { name: "Docker", level: 75, category: "Automation", icon: "🐳" },
  { name: "Jenkins", level: 70, category: "Automation", icon: "🤖" },
  { name: "Python", level: 70, category: "backend", icon: "🐍" }
];

{/*export const SERVICES = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Crafting pixel-perfect, responsive UIs with React, Next.js & modern CSS.",
    icon: "🖥️",
    features: ["React / Next.js", "Responsive Design", "Performance Optimization"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    id: 2,
    title: "Full Stack Development",
    description: "End-to-end web apps with robust backends and polished frontends.",
    icon: "⚡",
    features: ["MERN Stack", "REST APIs", "Database Design"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    id: 3,
    title: "Portfolio Websites",
    description: "Premium, animated portfolios that make a lasting first impression.",
    icon: "🚀",
    features: ["3D Animations", "Custom Designs", "Fast Loading"],
    gradient: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    title: "E-commerce Development",
    description: "Full-featured online stores with cart, payment, and admin systems.",
    icon: "🛒",
    features: ["Product Management", "Payment Integration", "Admin Dashboard"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    id: 5,
    title: "Responsive Web Design",
    description: "Mobile-first websites that look perfect on every screen size.",
    icon: "📱",
    features: ["Mobile-First", "Cross-Browser", "Accessibility"],
    gradient: "from-pink-500 to-rose-500",
  },
];
*/}
// lib/data.ts

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string; // e.g. "March 2025"
  image: string; // path in /public, e.g. "/certificates/aws-cloud.png"
  credentialUrl?: string;
  description?: string;
  skills?: string[];
}

export const CERTIFICATES: Certificate[] = [
   {
    id: "cert-1",
    title: "Cybersecurity Symposium",
    issuer: "AKATI Security",
    date: "19 Oct 2024",
    image: "/certificates/akati.jpg",
  },
    {
    id: "cert-2",
    title: "Digital Productivity",
    issuer: "NIIT Foundation",
    date: "10 Jan 2025",
    image: "/certificates/niit.jpg",
  },
   {
    id: "cert-3",
    title: "Business Intelligence Using Advanced Excel & Power BI",
    issuer: "ExcelR",
    date: "20 Mar 2025",
    image: "/certificates/excelr.jpg",
  },
    {
    id: "cert-4",
    title: "SQL and Relational Databases 101",
    issuer: "IBM",
    date: "08 Aug 2025",
    image: "/certificates/ibm-sql.jpg",
  },
    {
    id: "cert-5",
    title: "Python 101 for Data Science",
    issuer: "IBM",
    date: "09 Aug 2025",
    image: "/certificates/ibm-python.jpg",
  },
    {
    id: "cert-6",
    title: "Data Science Tools ",
    issuer: "IBM",
    date: "19 May 2026",
    image: "/certificates/ibm-datasciencetools.jpg",
  },
  {
    id: "cert-7",
    title: "AI Webinar",
    issuer: "GUVI × HCL",
    date: "11 Apr 2026",
    image: "/certificates/guvi-hcl.jpeg",
  },
 
];
export const PROJECTS = [
 {
  id: 1,
  title: "Nexus E-commerce Frontend",
  description:
    "A modern and responsive e-commerce frontend featuring a premium UI, product pages, shopping cart interface, wishlist, authentication screens, and smooth animations. Built to showcase frontend development skills with a clean and interactive user experience.",
  tech: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"],
  github: "https://github.com/MDSALIKAMIR/DevOps-Project",
  live: "https://mdsalikamir.github.io/DevOps-Project/",
  color: "#00d4ff",
  gradient: "from-blue-600 to-cyan-500",
  category: "Frontend",
},
  {
    id: 2,
    title: "3D Portfolio Website",
    description:
      "Interactive animated portfolio with Three.js, Framer Motion, and premium UI effects that push the boundaries of web design.",
    tech: ["Next.js", "Three.js", "GSAP", "Tailwind CSS"],
    github: "https://github.com/MDSALIKAMIR/salik-3d-portfolio",
    live: "#",
    color: "#8b5cf6",
    gradient: "from-purple-600 to-pink-500",
    category: "Frontend",
  },
  // {
  //   id: 3,
  //   title: "Graphical Calculator",
  //   description:
  //     "A modern calculator project with graphical interface and advanced mathematical calculation capabilities.",
  //   tech: ["C++", "GUI", "Algorithm Design"],
  //   github: "https://github.com/",
  //   live: "#",
  //   color: "#00ffff",
  //   gradient: "from-cyan-600 to-teal-500",
  //   category: "Software",
  // },
];

export const EXPERIENCE = [
{
  year: "2024 - 2025",
  title: "Frontend Developer",
  company: "Personal Projects & Learning",
  description:
    "Building responsive and modern user interfaces using HTML, CSS, JavaScript, and React through hands-on projects.",
  skills: ["HTML", "CSS", "JavaScript", "React"],
},
{
  year: "2025 - 2025",
  title: "Web Developer",
  company: "Personal Projects & Learning",
  description:
    "Developing responsive websites and integrating frontend with backend technologies while improving web development skills.",
  skills: ["React", "Node.js", "MongoDB", "Git"],
},
{
  year: "2026 - 2026",
  title: "DevOps Trainee",
  company: "C-DAC Training Center",
  description:
    "Learning DevOps fundamentals including Linux, Git, Docker, Jenkins, Bash scripting, and CI/CD through practical training and projects.",
  skills: ["Linux", "Git", "Docker", "Jenkins"],
},
];

