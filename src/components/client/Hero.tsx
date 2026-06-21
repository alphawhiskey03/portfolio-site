import Links from "./Links";
import { Hand } from "lucide-react";
import LiquidMetalButton from "@/components/vengance-ui/liquid-metal";
import { TypewriterText } from "../jolly-ui/typewritter-text";

const Hero = () => {
  const handleConnect = () => {
    const contactMe = document.getElementById("contact-me");
    console.log(contactMe);
    contactMe?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="relative h-screen w-full">
      <div className="flex flex-col justify-center items-center gap-4 h-full">
        <h1
          className="text-5xl 
                         sm:text-5xl 
                         md:text-6xl 
                         lg:text-7xl 
                         font-bold 
                         tracking-tighter 
                         leading-[1.1] 
                         text-transparent 
                         bg-clip-text 
                         bg-linear-to-b 
                         from-white
                         via-white
                         to-zinc-500
                         drop-shadow-sm
                         "
        >
          Hello world,
          <br /> I'm Vignesh!
        </h1>

        <TypewriterText
          className="font-space font-bold"
          words={["A Software Engineer", "A Movie Buff"]}
        />
        <Links />
        <LiquidMetalButton
          onClick={handleConnect}
          icon={<Hand size={16} />}
          size="md"
          borderWidth={5}
          metalConfig={{
            colorBack: "#888888",
            colorTint: "#ffffff",
            distortion: 0.15,
            speed: 0.4,
          }}
        >
          Let's Connect
        </LiquidMetalButton>
      </div>
    </div>
  );
};

export default Hero;
