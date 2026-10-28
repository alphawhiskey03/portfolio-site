/**
 * Resume facts that do not live in Sanity yet.
 * Experience, contact details and social links are pulled from Sanity at build
 * time (see src/pages/resume.pdf.ts); everything here is the remainder of the
 * template. Move a section into Sanity by adding a document type for it and
 * dropping it from this file.
 */
export const resumeConfig = {
  name: "Vignesh S",
  /** Most recent roles to include; more than this spills onto a second page. */
  maxRoles: 3,
  website: "https://therealvig.com",
  /** Socials (by Sanity title) to print in the header, in this order. */
  socialOrder: ["linkedin", "github"],
  certifications: [
    {
      title: "Apollo Graph Developer – Associate",
      issuer: "Apollo GraphQL",
      date: "Apr 2023",
    },
  ],
  education: [
    {
      title: "Bachelor of Computer Applications (BCA)",
      institution: "Dr. G.R. Damodaran College of Science, Coimbatore",
      date: "Mar 2021",
    },
  ],
  skills: [
    { label: "Languages", items: ["JavaScript", "TypeScript", "HTML", "CSS"] },
    {
      label: "Frontend",
      items: ["React", "Next.js", "Redux", "Tailwind CSS", "Storybook", "Chrome Extensions"],
    },
    {
      label: "Backend and APIs",
      items: ["GraphQL", "Apollo", "Node.js", "Express", "REST APIs"],
    },
    {
      label: "Testing and DevOps",
      items: ["Playwright", "Cypress", "Jest", "CircleCI", "Sentry", "Git"],
    },
    {
      label: "AI",
      items: ["RAG", "LLM integrations", "MCP", "Claude Code Agent Skills", "Cursor"],
    },
  ],
};
