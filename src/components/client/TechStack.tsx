import { FaReact, FaNodeJs } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { BsTypescript } from "react-icons/bs";
import {
  SiMui,
  SiShadcnui,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiStorybook,
} from "react-icons/si";

const TechStack = () => {
  return (
    <div className="flex-1 flex flex-col items-center gap-4 mt-10">
      <Section title="Core">
        <IconCard>
          <FaReact />
        </IconCard>
        <IconCard>
          <FaNodeJs />
        </IconCard>
        <IconCard>
          <GrGraphQl />
        </IconCard>
        <IconCard>
          <BsTypescript />
        </IconCard>
      </Section>
      <Section title="UI">
        <IconCard>
          <SiStorybook />
        </IconCard>
        <IconCard>
          <SiShadcnui />
        </IconCard>
        <IconCard>
          <SiTailwindcss />
        </IconCard>
      </Section>
      <Section title="DB">
        <IconCard>
          <SiPostgresql />
        </IconCard>
        <IconCard>
          <SiMongodb />
        </IconCard>
      </Section>
    </div>
  );
};

const IconCard = ({ children }: { children: React.ReactNode }) => (
  <div
    className="p-4 rounded-xl 
      text-5xl
      border border-white/10
      bg-white/5
      backdrop-blur-md
      shadow-lg shadow-black/20
      transition-all duration-200
      cursor-pointer
      hover:bg-white/10 hover:border-blue-300 hover:text-blue-300"
  >
    {children}
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <>
    <p className="text-2xl font-bold font-space text-center">{title}</p>
    <div className="flex items-center gap-4 flex-wrap justify-center">
      {children}
    </div>
  </>
);

export default TechStack;
