import type React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { BsTypescript, BsJavascript } from "react-icons/bs";
import {
  SiMui,
  SiShadcnui,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiStripe,
  SiN8N,
  SiSocketdotio,
  SiStorybook,
} from "react-icons/si";
import { IoExtensionPuzzleOutline } from "react-icons/io5";

const items = [
  {
    title: "Frontend & SDK",
    description:
      " Work across the web app, Specialized in building and maintaing SDKs, chrome extensions",
    technologies: [
      {
        title: "React",
        icon: <FaReact />,
      },
      {
        title: "JavaScript",
        icon: <BsJavascript />,
      },
      {
        title: "WebSockets",
        icon: <SiSocketdotio />,
      },
      { title: "Storybook", icon: <SiStorybook /> },
      {
        title: "Chrome extensions",
        icon: <IoExtensionPuzzleOutline />,
      },
    ],
  },
  {
    title: "Full stack applications",
    description:
      "Full stack applications with auth, payments and test suites, analytics and infra",
    technologies: [
      {
        title: "Node.js",
        icon: <FaNodeJs />,
      },
      {
        title: "GraphQL",
        icon: <GrGraphQl />,
      },
      {
        title: "Stripe",
        icon: <SiStripe />,
      },
      {
        title: "MongoDB",
        icon: <SiMongodb />,
      },
    ],
  },
  {
    title: "AI worflows",
    description: "N8n Ai workflows, chatbots, rag tools and agents",
    technologies: [
      {
        title: "N8n",
        icon: <SiN8N />,
      },
      { title: "ChromaDB" },
    ],
  },
];

interface CardProps {
  title: string;
  description: string;
  technologies: {
    title: string;
    icon?: React.ReactElement;
  }[];
}

const Card: React.FC<CardProps> = ({ title, description, technologies }) => {
  return (
    <div
      className="rounded-md
    w-3/4
    p-4
    border border-white/10
    bg-white/5
    backdrop-blur-md
    shadow-lg shadow-black/20
    "
      key={title}
    >
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
      <div className="flex items-center gap-2  mt-4 flex-wrap">
        {technologies.map((technology) => (
          <div
            key={technology.title}
            className="flex 
            items-center 
            gap-2 
            border 
            border-white/10 
            rounded-md 
            p-2
            cursor-pointer
            hover:border-blue-300
            "
          >
            {technology.icon && <span>{technology.icon}</span>}
            <span className="text-xs">{technology.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const WhatIDo = () => {
  return (
    <div
      className="flex 
         flex-col 
         gap-4 
         items-center 
         justify-center
         mt-10"
    >
      {items.map((item) => (
        <Card
          key={item.title}
          title={item.title}
          description={item.description}
          technologies={item.technologies}
        />
      ))}
    </div>
  );
};

export default WhatIDo;
