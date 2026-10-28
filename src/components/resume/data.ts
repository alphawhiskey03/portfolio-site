import { resumeConfig } from "@/content/resume";
import { prettyUrl } from "@/utils";

/** A Sanity portable-text block, reduced to what the resume reads. */
interface Block {
  _type: string;
  listItem?: string;
  children?: { text: string; marks?: string[] }[];
}

export interface SanityResume {
  main: { email: string; mobile: string; role: string; aboutMe: string };
  experiences: {
    orgName: string;
    role: string;
    startDate: string;
    endDate: string;
    body?: Block[];
    technologies?: string[];
  }[];
  socials: { title: string; link: string }[];
}

export interface ResumeExperience {
  role: string;
  org: string;
  dates: string;
  subtitle?: string;
  bullets: string[];
  technologies: string[];
}

export interface Resume {
  name: string;
  email: string;
  phone: string;
  links: { label: string; href: string }[];
  experiences: ResumeExperience[];
  certifications: typeof resumeConfig.certifications;
  education: typeof resumeConfig.education;
  skills: typeof resumeConfig.skills;
}

const monthYear = (date: string) =>
  new Date(date).toLocaleDateString("en-US", { month: "short", year: "numeric" });

const dateRange = (start: string, end: string) =>
  `${monthYear(start)} – ${start === end ? "Present" : monthYear(end)}`;

/** "6381946670" -> "+91 63819 46670" */
const prettyPhone = (digits: string) =>
  digits.length === 10 ? `+91 ${digits.slice(0, 5)} ${digits.slice(5)}` : digits;

const blockText = (block: Block) =>
  (block.children ?? []).map((child) => child.text).join("").trim();

const isBold = (block: Block) =>
  (block.children ?? []).length > 0 &&
  (block.children ?? []).every((child) => child.marks?.includes("strong"));

/**
 * The experience body convention in Sanity: an optional bold opening paragraph
 * is the subtitle (team · what the company does); bullet-list items are the
 * resume bullets.
 */
const parseBody = (body: Block[] = []) => {
  const blocks = body.filter((block) => block._type === "block");
  const first = blocks[0];
  const subtitle =
    first && !first.listItem && isBold(first) ? blockText(first) : undefined;
  const bullets = blocks
    .filter((block) => block.listItem === "bullet")
    .map(blockText)
    .filter(Boolean);
  return { subtitle, bullets };
};

export function buildResume(data: SanityResume): Resume {
  const socialsByTitle = new Map(data.socials.map((s) => [s.title, s.link]));
  const links = [
    { label: prettyUrl(resumeConfig.website), href: resumeConfig.website },
    ...resumeConfig.socialOrder
      .map((title) => socialsByTitle.get(title))
      .filter((href): href is string => Boolean(href))
      .map((href) => ({ label: prettyUrl(href), href })),
  ];

  const experiences = data.experiences
    .map((exp) => {
      const { subtitle, bullets } = parseBody(exp.body);
      return {
        role: exp.role,
        org: exp.orgName,
        dates: dateRange(exp.startDate, exp.endDate),
        subtitle,
        bullets,
        technologies: exp.technologies ?? [],
      };
    })
    // Only roles written up with bullet points make the one-page resume,
    // most recent first, capped to keep it to a single page.
    .filter((exp) => exp.bullets.length > 0)
    .slice(0, resumeConfig.maxRoles);

  return {
    name: resumeConfig.name,
    email: data.main.email,
    phone: prettyPhone(data.main.mobile),
    links,
    experiences,
    certifications: resumeConfig.certifications,
    education: resumeConfig.education,
    skills: resumeConfig.skills,
  };
}
