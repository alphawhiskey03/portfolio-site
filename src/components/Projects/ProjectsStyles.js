import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 25px 25px 0 0;
  object-fit: cover;
  overflow: hidden;
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding: 3rem;
  place-items: center;
  column-gap: 2rem;
  row-gap: 3rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`;
export const BlogCard = styled.div`
  border-radius: 25px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`;

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.title ? "2rem" : "1rem")};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: "Droid Serif", serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  display: flex;
  justify: center;
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  transition: height 2s ease-in-out;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 1rem;
  }
`;

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
  color: #d4c0c0;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: rgba(181, 0, 0, 1) 30%;
  border-radius: 5px;
  margin: 1px;
  transition: 0.5s;
  &:hover {
    background: #801414;
  }
`;

export const TagList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
  color: #d8bfbf;
  font-size: 1.5rem;
  padding: 3px;
  margin: 4px;
  border-radius: 5px;
  border: 0.5px solid white;
  &:hover {
    border: 0.5px solid rgba(181, 0, 0, 1);
  }
`;

export const ProjectTypeContainer = styled.div`
  display: flex;
  max-width: 900px;
  alignitems: center;
  border-bottom: 0.1px solid red;
  padding: 30px;
  cursor: pointer;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 20px;
  }
`;

export const ChevronSpan = styled.span`
  flex-grow: 1;
  font-weight: 800;
  font-size: 30px;
  color: ${(props) => `${props.theme.colors.primary1};`};
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 20px;
  }
`;

export const ProjectTypeHeader = styled.span`
  font-weight: 800;
  flex-basis: 300px;
  font-size: 30px;
  color: ${(props) => `${props.theme.colors.primary1};`};

  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  flex-grow: 5;
  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 15px;
  }
`;

export const ReadMoreBtn = styled.button`
  background: none;
  border: none;
  color: ${(props) => props.theme.colors.secondary};
  cursor: pointer;
  margin-left: 50px;
  @media ${(props) => props.theme.breakpoints.sm} {
    margin-left: 10px;
  }
`;

export const TagLink = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const ProjectLinkContainer = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const ProjectTypeLink = styled.h5`
  padding: 10px;
  border: 1px solid ${(props) => props.theme.colors.secondary};
  border-radius: 10px;
  margin: 5px;
  cursor: pointer;
  color: ${(props) => `${props.theme.colors.primary1};`};

  &:hover {
    border: 1px solid silver;
  }
`;
