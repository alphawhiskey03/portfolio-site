import { Hand } from "lucide-react";
import LiquidMetalButton from "@/components/vengance-ui/liquid-metal";

export function ConnectButton() {
  const handleClick = () => {
    document.getElementById("contact-me")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <LiquidMetalButton
      onClick={handleClick}
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
  );
}
