export const GET_MAINCONTENT = `*[_type=="main-content"][0]{
  gist,
  role,
  "aboutMe": about_me,
  "techDescription": tech_description,
  mobile,
  email,
  city,
  "geoRegion": geo_region,
  state,
  country,
  keywords
}`;

export const GET_PROJECTS = `*[_type == "projects"] | order(order asc) {
  "id":_id,
  title,
  description,
  thumbnail,
  category,
  technologies[]->{
    "id": _id,
    title
  },
  source,
  link,
  "projectType": project_type
}`;

export const GET_TECHNOLOGIES = `*[_type=="technology"] | order(category asc){
  title,
  link,
  category,
  featured,
  icon->{
    name,
    packageName
  }
}`;

export const GET_EXPERIENCES = `*[_type=="experience"] | order(start_date desc){
  "id": _id, 
  "orgName": org_name,
  "orgSlug": org_slug,
  body,

  role,
  logo,
  "orgLink": org_link,
  "startDate": start_date,
  "endDate": end_date,

  technologies[]->{
    title,
    icon->{
      name,
      packageName
    }
  },

  projects[]->{
    title,
    thumbnail,
    link
  }
} `;

export const GET_SOCIALMEDIA = `*[_type=="social-media"] | order(order asc) {
  title,
  link,
  main,
  icon->{
    name,
    packageName
  }
}`;

export const GET_RESUME = `{
  "main": *[_type=="main-content"][0]{ email, mobile, role, "aboutMe": about_me },
  "experiences": *[_type=="experience"] | order(start_date desc){
    "orgName": org_name,
    role,
    "startDate": start_date,
    "endDate": end_date,
    body,
    "technologies": technologies[]->title
  },
  "socials": *[_type=="social-media" && main == true] | order(order asc){ title, link }
}`;
