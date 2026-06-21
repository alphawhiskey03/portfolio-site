import TestimonialsCard from "@/components/vengance-ui/testimonials-card";
import { Button } from "@/components/jolly-ui/button";
const items = [
  {
    id: 1,
    title: "Userflow",
    description: "Software Development Engineer",
    image: "./images/userflow.jpeg",
  },
  {
    id: 2,
    title: "BookMyRide",
    description: "Frontend Developer",
    image: "./images/bmr-round.png",
  },
  {
    id: 3,
    title: "Coko foundation",
    description: "JavaScript Developer",
    image: "/images/coko.jpeg",
  },
  {
    id: 4,
    title: "KS Global",
    description: "Web Developer",
    image: "/images/k_s_globals_logo.jpeg",
  },
];

const About = () => {
  return (
    <div className="flex-1 flex flex-col items-center">
      <p
        className="text-lg
                     drop-shadow-sm
                     w-3/4
                     text-center"
      >
        I am a passionate software developer with experience in JavaScript,
        Next.js, React.js, GraphQL, and Cypress. I enjoy collaborating with
        people, sharing my knowledge, and learning from my peers.
      </p>

      <p className="text-2xl text-left w-3/4 font-bold my-8 text-white">
        Work Experience
      </p>
      <TestimonialsCard width={600} items={items} />
    </div>
  );
};

export default About;
