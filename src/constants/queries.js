export const GET_MAINCONTENT = `*[_type=="main-content"][0]{
    gist,
    about_me,
    tech_description,
    mobile,
    email,
    city,
    geo_region,
    state,
    country,
    keywords
    
}`;
export const GET_PROJECTS = `*[_type == "projects"] {
    _id,
    title,
    description,
    thumbnail,
    category,
    technologies[]-> {
      _id,
      title
    },
    source,
    link,
    project_type,
  } | order(order asc)`;
export const GET_TECHNOLOGIES = `*[_type=="technology"]{
  title,
  link,
  category,
    featured,
  icon->{
    name,
    packageName
  }
} | order(category asc)`;
export const GET_EXPEREINCES = `*[_type=="experience"]{
  org_name,
  description,
  role,
  logo,
  org_link,
  start_date,
  end_date,

  technologies[]->{
    title,
    icon->{
    name,
    packageName,
    }
  },
  projects[]->{
    title,
    thumbnail, 
    link,
  }
} | order(start_date desc)
  `;
export const GET_TIMELINE = `*[_type=="timeline"] | order(year asc)`;
export const GET_SOCIALMEDIA = `*[_type=="social-media"]{
  title,
  link,
  main,
  icon->{
    name,
    packageName,
  } 
} | order(order asc)`;
