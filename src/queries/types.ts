export interface SanityImage {
  _type: "image";
  asset: {
    _ref: string;
    _type: "reference";
  };
}

export interface MainContent {
  gist: string;
  aboutMe: string;
  techDescription: string;
  mobile: string;
  email: string;
  city: string;
  geoRegion: string;
  state: string;
  country: string;
  keywords: string[];
}

export interface Technology {
  title: string;
  link: string;
  category: string;
  featured: boolean;
  icon: {
    name: string;
    packageName: string;
  };
}

export interface ProjectTechnology {
  _id: string;
  title: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: SanityImage;
  category: string;
  technologies: ProjectTechnology[];
  source?: string;
  link?: string;
  projectType: string;
}

export interface ExperienceTechnology {
  title: string;
  icon: {
    name: string;
    packageName: string;
  };
}

export interface ExperienceProject {
  title: string;
  thumbnail: SanityImage;
  link?: string;
}

export interface Experience {
  id: string;
  orgName: string;
  description: string;
  role: string;
  logo: SanityImage;
  orgLink?: string;
  startDate: string;
  endDate: string;

  technologies: ExperienceTechnology[];
  projects: ExperienceProject[];
}

export interface SocialMedia {
  title: string;
  link: string;
  main: boolean;
  icon: {
    name: string;
    packageName: string;
  };
}

/**
 * Update this once you share the timeline schema/query fields.
 */
export interface Timeline {
  [key: string]: unknown;
}

// Query Result Types

export type MainContentResponse = MainContent;
export type ProjectsResponse = Project[];
export type TechnologiesResponse = Technology[];
export type ExperiencesResponse = Experience[];
export type TimelineResponse = Timeline[];
export type SocialMediaResponse = SocialMedia[];
