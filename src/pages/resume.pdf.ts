import type { APIRoute } from "astro";
import { renderToBuffer } from "@react-pdf/renderer";
import { sanityClient } from "sanity:client";
import { GET_RESUME } from "@/queries";
import { buildResume, type SanityResume } from "@/components/resume/data";
import { ResumeDocument } from "@/components/resume/ResumeDocument";

/**
 * /resume.pdf — generated at build time from Sanity, so the downloadable
 * resume and the portfolio never drift apart.
 */
export const GET: APIRoute = async () => {
  const data = await sanityClient.fetch<SanityResume>(GET_RESUME);
  const resume = buildResume(data);
  const pdf = await renderToBuffer(ResumeDocument({ resume }));

  return new Response(new Uint8Array(pdf), {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="vignesh-s-software-engineer.pdf"',
    },
  });
};
