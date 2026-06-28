import { createImageUrlBuilder } from "@sanity/image-url";

const CONFIG = {
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID,
  dataset: import.meta.env.PUBLIC_SANITY_DATASET ?? "production",
};

export const calculateExperience = (startDate: Date, endDate: Date): string => {
  const startMonth = startDate.getFullYear() * 12 + startDate.getMonth();
  const endMonth = endDate.getFullYear() * 12 + endDate.getMonth();
  const monthInterval = endMonth - startMonth;

  const years = Math.floor(monthInterval / 12);
  const months = monthInterval % 12;
  let exp = "";
  if (years >= 1) {
    exp += `${years > 1 ? `${years} yrs` : `${years} yr`}`;
  }
  if (months >= 1) {
    exp += ` ${months > 1 ? `${months} mos` : `${months} mo`}`;
  }

  return exp;
};

export const urlFor = (source: any) =>
  createImageUrlBuilder(CONFIG).image(source);

export const getFormattedDateAndExperience = (
  startDate: string,
  endDate: string,
) => {
  const opts = { year: "numeric", month: "short" } as const;
  const startTimeStamp = new Date(startDate);
  const endTimeStamp = new Date(endDate);

  const currentOrg = startDate === endDate;

  const formattedDate = `${startTimeStamp.toLocaleDateString(
    "en-US",
    opts,
  )} - ${
    currentOrg ? "present" : endTimeStamp.toLocaleDateString("en-US", opts)
  }`;

  const duration = calculateExperience(
    startTimeStamp,
    currentOrg ? new Date() : endTimeStamp,
  );

  return {
    formattedDate,
    duration,
  };
};
