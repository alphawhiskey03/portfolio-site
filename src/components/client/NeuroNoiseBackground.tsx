import { NeuroNoise } from "@paper-design/shaders-react";

export function NeuroNoiseBackground() {
  return (
    <NeuroNoise
      className="fixed inset-0 -z-10 h-full w-full"
      speed={0.25}
      scale={2.2}
      colorBack="#030306"
      colorMid="#1a3a6e"
      colorFront="#6f8fc9"
      brightness={0.01}
      contrast={0.55}
    />
  );
}
