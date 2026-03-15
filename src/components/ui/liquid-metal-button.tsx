"use client";

import { Sparkles } from "lucide-react";
import type React from "react";
import { useEffect, useMemo, useRef, useState } from "react";

type ButtonSize = "xs" | "sm" | "md" | "lg";

const SIZE_WIDTHS: Record<ButtonSize, number> = {
  xs: 100,
  sm: 142,
  md: 220,
  lg: 350,
};

interface LiquidMetalButtonProps {
  label?: string;
  onClick?: () => void;
  viewMode?: "text" | "icon";
  size?: ButtonSize;
  icon?: React.ReactNode;
}

export function LiquidMetalButton({
  label = "Get Started",
  onClick,
  viewMode = "text",
  size = "sm",
  icon,
}: LiquidMetalButtonProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [ripples, setRipples] = useState<
    Array<{ x: number; y: number; id: number }>
  >([]);

  const shaderRef = useRef<HTMLDivElement>(null);
  const shaderMount = useRef<any>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const rippleId = useRef(0);

  const dimensions = useMemo(() => {
    if (viewMode === "icon") {
      return {
        width: 46,
        height: 46,
        innerWidth: 42,
        innerHeight: 42,
      };
    }

    const buttonWidth = SIZE_WIDTHS[size];

    return {
      width: buttonWidth,
      height: 46,
      innerWidth: buttonWidth - 4,
      innerHeight: 42,
    };
  }, [viewMode, size]);

  useEffect(() => {
    const styleId = "shader-canvas-style-exploded";

    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");

      style.id = styleId;

      style.textContent = `
        .shader-container-exploded canvas {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          border-radius: 100px !important;
        }

        @keyframes ripple-animation {
          0% {
            transform: translate(-50%, -50%) scale(0);
            opacity: 0.6;
          }
          100% {
            transform: translate(-50%, -50%) scale(4);
            opacity: 0;
          }
        }
      `;

      document.head.appendChild(style);
    }

    const loadShader = async () => {
      try {
        const { liquidMetalFragmentShader, ShaderMount } =
          await import("@paper-design/shaders");

        if (shaderRef.current) {
          if (shaderMount.current?.dispose) {
            shaderMount.current.dispose();
          }

          shaderMount.current = new ShaderMount(
            shaderRef.current,
            liquidMetalFragmentShader,
            {
              u_repetition: 4,
              u_softness: 0.5,
              u_shiftRed: 0.3,
              u_shiftBlue: 0.3,
              u_distortion: 0,
              u_contour: 0,
              u_angle: 45,
              u_scale: 8,
              u_shape: 0,
              u_offsetX: 0.1,
              u_offsetY: -0.1,
            },
            undefined,
            0,
          );

          // The ShaderMount creates a canvas at default 300x150 and
          // renders immediately when speed > 0, before the ResizeObserver
          // has a chance to set the correct dimensions. Deferring the
          // animation start lets the ResizeObserver fire first, ensuring
          // the first render uses the correct canvas size and viewport.
          requestAnimationFrame(() => {
            shaderMount.current?.setSpeed?.(0.6);
          });
        }
      } catch (error) {
        console.error("[v0] Failed to load shader:", error);
      }
    };

    loadShader();

    return () => {
      if (shaderMount.current?.dispose) {
        shaderMount.current.dispose();
        shaderMount.current = null;
      }
    };
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    shaderMount.current?.setSpeed?.(1);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setIsPressed(false);
    shaderMount.current?.setSpeed?.(0.6);
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (shaderMount.current?.setSpeed) {
      shaderMount.current.setSpeed(2.4);

      setTimeout(() => {
        if (isHovered) {
          shaderMount.current?.setSpeed?.(1);
        } else {
          shaderMount.current?.setSpeed?.(0.6);
        }
      }, 300);
    }

    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();

      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const ripple = { x, y, id: rippleId.current++ };

      setRipples((prev) => [...prev, ripple]);

      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== ripple.id));
      }, 600);
    }

    onClick?.();
  };

  return (
    <div className="relative inline-block">
      <div
        style={{
          perspective: "1000px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        <div
          style={{
            position: "relative",
            width: `${dimensions.width}px`,
            height: `${dimensions.height}px`,
            transformStyle: "preserve-3d",
            transition:
              "all 0.8s cubic-bezier(0.34,1.56,0.64,1), width 0.4s ease, height 0.4s ease",
          }}
        >
          {/* TEXT / ICON LAYER */}

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              transform: "translateZ(20px)",
              zIndex: 30,
              pointerEvents: "none",
            }}
          >
            {viewMode === "icon" && (
              <Sparkles
                size={16}
                style={{
                  color: "#666",
                  filter: "drop-shadow(0px 1px 2px rgba(0,0,0,0.5))",
                }}
              />
            )}

            {viewMode === "text" && (
              <>
                {icon}

                <span
                  className="text-gray-500"
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    whiteSpace: "nowrap",
                  }}
                >
                  {label}
                </span>
              </>
            )}
          </div>

          {/* INNER METAL SURFACE */}

          <div
            style={{
              position: "absolute",
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              transform: `translateZ(10px) ${
                isPressed ? "translateY(1px) scale(0.98)" : ""
              }`,
              zIndex: 20,
            }}
          >
            <div
              style={{
                width: `${dimensions.innerWidth}px`,
                height: `${dimensions.innerHeight}px`,
                margin: "2px",
                borderRadius: "100px",
                background: "linear-gradient(180deg,#202020 0%,#000000 100%)",
              }}
            />
          </div>

          {/* METAL BORDER + SHADER */}

          <div
            style={{
              position: "absolute",
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              transform: "translateZ(10px)",
              zIndex: 10,
            }}
          >
            <div
              style={{
                width: `${dimensions.width}px`,
                height: `${dimensions.height}px`,
                borderRadius: "100px",
                background: "rgb(0 0 0 / 0)",
              }}
            >
              <div
                ref={shaderRef}
                className="shader-container-exploded"
                style={{
                  borderRadius: "100px",
                  overflow: "hidden",
                  position: "relative",
                  width: "100%",
                  height: "100%",
                }}
              />
            </div>
          </div>

          {/* CLICKABLE BUTTON */}

          <button
            ref={buttonRef}
            onClick={handleClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={() => setIsPressed(true)}
            onMouseUp={() => setIsPressed(false)}
            style={{
              position: "absolute",
              width: `${dimensions.width}px`,
              height: `${dimensions.height}px`,
              background: "transparent",
              border: "none",
              cursor: "pointer",
              transform: "translateZ(20px)",
              zIndex: 40,
              borderRadius: "100px",
              overflow: "hidden",
            }}
          >
            {ripples.map((ripple) => (
              <span
                key={ripple.id}
                style={{
                  position: "absolute",
                  left: ripple.x,
                  top: ripple.y,
                  width: "20px",
                  height: "20px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 70%)",
                  pointerEvents: "none",
                  animation: "ripple-animation 0.6s ease-out",
                }}
              />
            ))}
          </button>
        </div>
      </div>
    </div>
  );
}
