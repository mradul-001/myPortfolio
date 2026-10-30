// All copy for the home page lives here. Edit text, links and numbers in this file.
// Text inside [square brackets] is a placeholder to replace.

import sclpImg from "../assets/comp2.png";
import smpImg from "../assets/smp2.png";
import appImg from "../assets/app.png";
import mygitImg from "../assets/mgit2.png";
import adobeLogo from "../assets/logos/adobe.png";
import triaLogo from "../assets/logos/tria.png";

const devicon = (path) => `https://cdn.jsdelivr.net/npm/devicon@2.16.0/icons/${path}`;

export const profile = {
  name: "Mradul Sonkar",
  role: "Software Engineer.",
  line: "Computer Science undergraduate at IIT Bombay.",
  email: "sonkarmradul@gmail.com",
  github: "https://github.com/mradul-001",
  linkedin: "https://www.linkedin.com/in/mr4du1/",
};

export const skills = [
  { name: "C++", icon: devicon("cplusplus/cplusplus-original.svg") },
  { name: "C", icon: devicon("c/c-original.svg") },
  { name: "Python", icon: devicon("python/python-original.svg") },
  { name: "JavaScript", icon: devicon("javascript/javascript-original.svg") },
  { name: "React", icon: devicon("react/react-original.svg") },
  { name: "Node.js", icon: devicon("nodejs/nodejs-original.svg") },
  { name: "Express", icon: devicon("express/express-original.svg"), invert: true },
  { name: "Flutter", icon: devicon("flutter/flutter-original.svg") },
  { name: "PyTorch", icon: devicon("pytorch/pytorch-original.svg") },
  { name: "MongoDB", icon: devicon("mongodb/mongodb-original.svg") },
  { name: "MySQL", icon: devicon("mysql/mysql-original.svg"), brighten: true },
  { name: "PostgreSQL", icon: devicon("postgresql/postgresql-original.svg") },
  { name: "Git", icon: devicon("git/git-original.svg") },
  { name: "Linux", icon: devicon("linux/linux-original.svg") },
  { name: "Bash", icon: devicon("bash/bash-original.svg"), invert: true },
];

export const experience = [
  {
    company: "Adobe",
    url: "https://www.adobe.com",
    logo: adobeLogo,
    role: "Product Intern",
    when: "May 2026 – Jul 2026",
    where: "Summer internship",
    points: [
      "Built an LLM-driven agent that automates crash and ANR root-cause analysis for Adobe Express, cutting triage from 2–3 hours of manual New Relic and Splunk digging to under 10 minutes.",
      "Designed a multi-skill pipeline integrating 5 MCP servers, including New Relic and Splunk.",
      "Separated context-fetching from reasoning in the pipeline, reducing the cost per analysis by about 98%.",
      "Framed an autonomous crash-reproduction pipeline that drives Android emulators with a perceive-and-act loop to verify root causes and give exact reproduction steps.",
    ],
  },
  {
    company: "Tria",
    url: "https://www.tria.so",
    logo: triaLogo,
    logoFill: true, // logo is already a full square tile
    role: "Frontend Intern",
    when: "Dec 2025 – Apr 2026",
    where: "Winter internship",
    points: [
      "Built 3 live internal dashboards with Next.js on the frontend and Node/Express REST APIs on the backend.",
      "Designed backend APIs that query and aggregate data across multiple SQL tables to compute dashboard metrics.",
      "Grouped SQL queries by metric instead of one large join, so slow metrics no longer hold up the rest.",
    ],
  },
];

export const projects = [
  {
    title: "SCLP: A Compiler for a C-like Language",
    image: sclpImg,
    text: "Compiler for a simplified C, built with Lex and Yacc for IIT Bombay's CS320. Builds the symbol table and AST, then generates three-address code, RTL and MIPS assembly.",
    tags: ["Lex", "Yacc", "MIPS"],
    href: "https://www.cse.iitb.ac.in/~uday/sclp-web/",
    linkLabel: "About SCLP",
  },
  {
    title: "smPredictor: An Adaptive Stock Price Predictor",
    image: smpImg,
    text: "An LSTM wrapped in a rolling regressor, so the model keeps learning from each new price. Reached an MAE of 11.96 (about 1% error) on live close prices across 10 NSE-listed stocks.",
    tags: ["PyTorch", "deep-river", "Streamlit"],
    href: "https://github.com/mradul-001/smPredictor",
    linkLabel: "Code",
  },
  {
    title: "NSS App: A Volunteer Management Platform",
    image: appImg,
    text: "App used by 450+ NSS IIT Bombay volunteers for registration, attendance, progress tracking and events, with role-based access for volunteers and admins. Built by a team of four.",
    tags: ["Flutter", "Express", "SQL"],
    href: "https://github.com/nssiitb/nssapp",
    linkLabel: "Code",
  },
  {
    title: "myGit: A Version Control System",
    image: mygitImg,
    text: "Git's core rebuilt in Python: content-addressed storage with SHA-1, a staging index, commits linked to their parent, and branches.",
    tags: ["Python", "SHA-1", "CLI"],
    href: "https://github.com/mradul-001/myGit",
    linkLabel: "Code",
  },
];

export const achievements = [
  { title: "JEE Advanced", detail: "All India Rank 1039 among 180,000+ candidates", year: "2023" },
  { title: "JEE Main", detail: "All India Rank 596 (99.96 percentile) among 1.1 million", year: "2023" },
  { title: "KVPY", detail: "All India Rank 833 among 90,000+ students, by IISc", year: "2021" },
  { title: "NTSE", detail: "National Talent Search scholarship, NCERT", year: "2021" },
];
