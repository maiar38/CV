/**
 * All page content lives here so the components stay presentational.
 * Update links or wording in this file only.
 */

export const CV_URL =
  "https://drive.google.com/file/d/1f0FsM52CF629yyfj_OsCb653KSg72za0/view?usp=drive_link";

export const profile = {
  name: "Maiar Emam",
  title: "Software Engineer",
  badge: "Full Stack Developer",
  portrait: {
    src: "/images/portrait.webp",
    alt: "Portrait of Maiar Emam",
  },
};

export const personalInfo: { label: string; value: string }[] = [
  {
    label: "Education",
    value: "Computer Science & Information Systems, Mansoura University — 2025",
  },
  { label: "Specialization", value: "Software Engineering" },
  {
    label: "Diploma",
    value: "AI-Based Software Development — Digilians",
  },
];

export type CvIcon = "monitor" | "database" | "layers";

export const cvOptions: {
  title: string;
  stack: string;
  icon: CvIcon;
  href: string;
}[] = [
  {
    title: "Frontend Developer",
    stack: "React · Next.js · TypeScript",
    icon: "monitor",
    href: CV_URL,
  },
  {
    title: "Backend Developer",
    stack: "Node.js · Express.js · MongoDB",
    icon: "database",
    href: CV_URL,
  },
  {
    title: "Full Stack Developer",
    stack: "Frontend + Backend",
    icon: "layers",
    href: CV_URL,
  },
];

export const addadak = {
  eyebrow: "DigiLians Graduation Project",
  title: "Addadak Infographic",
  description:
    "A team-built utility metering and billing platform. My part: the Notification Server behind its billing, payment and usage alerts.",
  image: {
    src: "/images/addadak-infographic.webp",
    width: 2667,
    height: 1500,
    alt: "Addadak — DigiLians graduation project infographic: smart utility management ecosystem to monitor, predict and pay electricity, gas and water bills.",
  },
  pdf: "/files/addadak-infographic.pdf",
  repo: "https://github.com/Toka999/Addadak",
};

export type LinkIcon = "globe" | "github" | "linkedin";

export const links: {
  label: string;
  display: string;
  href: string;
  icon: LinkIcon;
}[] = [
  {
    label: "Personal Website",
    display: "maiar-portfolio.vercel.app",
    href: "https://maiar-portfolio.vercel.app",
    icon: "globe",
  },
  {
    label: "GitHub",
    display: "github.com/maiar38",
    href: "https://github.com/maiar38",
    icon: "github",
  },
  {
    label: "LinkedIn",
    display: "linkedin.com/in/maiar-emam",
    href: "https://www.linkedin.com/in/maiar-emam/",
    icon: "linkedin",
  },
];
