import { Download } from "lucide-react";
import LiquidMetalButton from "@/components/vengance-ui/liquid-metal";

interface ResumeButtonProps {
  /** Public path of the PDF, e.g. "/resume.pdf" */
  href: string;
  /** File name the browser saves it as */
  fileName?: string;
}

export function ResumeButton({
  href,
  fileName = "vignesh-s-software-engineer.pdf",
}: ResumeButtonProps) {
  const handleClick = () => {
    const link = document.createElement("a");
    link.href = href;
    link.download = fileName;
    link.click();
  };

  return (
    <LiquidMetalButton
      onClick={handleClick}
      icon={<Download size={16} />}
      size="sm"
      borderWidth={4}
      metalConfig={{
        colorBack: "#888888",
        colorTint: "#ffffff",
        distortion: 0.15,
        speed: 0.4,
      }}
    >
      Resume
    </LiquidMetalButton>
  );
}
