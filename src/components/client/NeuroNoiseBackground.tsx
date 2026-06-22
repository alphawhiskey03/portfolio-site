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
      speed={0.4}
      scale={1.2}
      colorBack="#050508"
      colorMid="#1a3a6e"
      colorFront="#ffffff"
      brightness={0.01}
      contrast={0.5}
    />
  );
}
