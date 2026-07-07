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

export const GET_EXPEREINCES = `*[_type=="experience"] | order(start_date desc){
  "id": _id, 
  "orgName": org_name,
  description,
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

export const GET_TIMELINE = `*[_type=="timeline"] | order(year asc)`;

export const GET_SOCIALMEDIA = `*[_type=="social-media"] | order(order asc) {
  title,
  link,
  main,
  icon->{
    name,
    packageName
  }
}`;
