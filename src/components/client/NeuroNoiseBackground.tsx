import { NeuroNoise } from "@paper-design/shaders-react";

export function NeuroNoiseBackground() {
  return (
    <NeuroNoise
      style={{
        position: "fixed",
        inset: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
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
