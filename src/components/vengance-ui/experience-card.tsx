"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Experience } from "@/queries/types";
import { getFormattedDateAndExperience, urlFor } from "@/utils";

interface ExperienceCardProps {
  /** Array of testimonial items to display */
  items: Experience[];
  /** Additional CSS classes for the container */
  className?: string;
  /** Width of the card stack (default: 400) */
  width?: number;
  /** Whether to show navigation arrows (default: true) */
  showNavigation?: boolean;
  /** Whether to show the counter (default: true) */
  showCounter?: boolean;
  /** Whether to enable auto-play (default: false) */
  autoPlay?: boolean;
  /** Auto-play interval in ms (default: 3000) */
  autoPlayInterval?: number;
}

export function ExperienceCard({
  items,
  className,
  width = 400,
  showNavigation = true,
  showCounter = true,
  autoPlay = false,
  autoPlayInterval = 3000,
}: ExperienceCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const activeItem = items[activeIndex];

  const { formattedDate, duration } = getFormattedDateAndExperience(
    activeItem.startDate,
    activeItem.endDate,
  );

  // Auto-play effect
  React.useEffect(() => {
    if (!autoPlay || items.length <= 1) return;

    const interval = setInterval(() => {
      setDirection(1);
      setActiveIndex((prev) => (prev + 1) % items.length);
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [autoPlay, autoPlayInterval, items.length]);

  const triggerTransition = (fn: () => void) => {
    setIsTransitioning(true);
    fn();
    setTimeout(() => setIsTransitioning(false), 750);
  };

  const handleNext = () => {
    if (activeIndex < items.length - 1)
      triggerTransition(() => {
        setDirection(1);
        setActiveIndex(activeIndex + 1);
      });
  };

  const handlePrev = () => {
    if (activeIndex > 0)
      triggerTransition(() => {
        setDirection(-1);
        setActiveIndex(activeIndex - 1);
      });
  };

  // Pre-calculate rotations for visual variety
  const rotations = useMemo(() => [4, -2, -9, 7], []);

  if (!items || items.length === 0) {
    return null;
  }

  return (
    <motion.div
      className={cn(
        "flex items-center justify-center p-8 rounded-xl border w-full",
        className,
      )}
      style={{ maxWidth: `${width}px` }}
      animate={{
        backgroundColor: isTransitioning
          ? "rgba(255,255,255,0)"
          : "rgba(255,255,255,0.05)",
        borderColor: isTransitioning
          ? "rgba(255,255,255,0)"
          : "rgba(255,255,255,0.1)",
        backdropFilter: isTransitioning ? "blur(0px)" : "blur(12px)",
        boxShadow: isTransitioning
          ? "0 0 0 0 rgba(0,0,0,0)"
          : "0 10px 15px -3px rgba(0,0,0,0.2)",
      }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <div
        className="relative grid grid-cols-[1fr] md:grid-cols-[auto_1fr] md:grid-rows-[auto_auto_auto] gap-x-8 gap-y-2 w-full"
        style={{ perspective: "1400px" }}
      >
        {/* Counter */}
        {showCounter && (
          <div className="row-start-1 md:col-start-2 md:row-start-1 text-right font-mono text-sm text-neutral-400">
            {activeIndex + 1} / {items.length}
          </div>
        )}

        {/* Image Card Stack */}
        <div className="row-start-2 col-start-1 md:row-start-1 row-span-3 relative w-56 h-56 shrink-0 self-center">
          <AnimatePresence custom={direction}>
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              const offset = index - activeIndex;

              const imageUrl = urlFor(item.logo).url();

              return (
                <motion.div
                  key={item.id}
                  className="absolute inset-0 w-full h-full overflow-hidden border-[6px] border-white/10 bg-white/5 backdrop-blur-md shadow-2xl rounded-[50%]"
                  initial={{
                    x: offset * 15,
                    y: Math.abs(offset) * 6,
                    z: -150 * Math.abs(offset),
                    scale: 0.85 - Math.abs(offset) * 0.04,
                    rotateZ: rotations[index % 4],
                    opacity: isActive ? 1 : 0.5,
                    zIndex: 10 - Math.abs(offset),
                  }}
                  animate={
                    isActive
                      ? {
                          x: [offset * 15, direction === 1 ? -200 : 200, 0],
                          y: [Math.abs(offset) * 6, 0, 0],
                          z: [-200, 150, 250],
                          scale: [0.85, 1.05, 1],
                          rotateZ: [rotations[index % 4], -5, 0],
                          opacity: 1,
                          zIndex: 100,
                        }
                      : {
                          x: offset * 15,
                          y: Math.abs(offset) * 6,
                          z: -150 * Math.abs(offset),
                          rotateZ: rotations[index % 4],
                          scale: 0.85 - Math.abs(offset) * 0.04,
                          opacity: 0.55,
                          zIndex: 10 - Math.abs(offset),
                        }
                  }
                  exit={{
                    x: direction === 1 ? -250 : 250,
                    z: -260,
                    scale: 0.75,
                    rotateZ: direction === 1 ? -10 : 10,
                    opacity: 0,
                  }}
                  transition={{
                    duration: 0.75,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  <img
                    src={imageUrl}
                    alt={item.role}
                    className="w-full h-full object-cover cursor-pointer"
                    draggable={false}
                    onClick={() => {
                      window.open(item.orgLink, "_blank");
                    }}
                  />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Text Area */}
        <div className="col-start-1 md:col-start-2 md:row-start-1 flex flex-col justify-center h-56 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.35 }}
            >
              <h3 className="text-xl font-bold text-white line-clamp-1">
                {activeItem.role}
              </h3>
              <p className="text-sm text-blue-300 font-light mt-2">
                {activeItem.orgName}
              </p>
              <p className="text-xs text-gray-400">
                {formattedDate} | {duration}
              </p>
              <p className="text-sm text-white mt-1 line-clamp-7">
                {activeItem.description}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        {showNavigation && items.length > 1 && (
          <div
            className="col-start-1 
               md:col-start-2 
               md:row-start-3 
               flex 
               gap-2  
               m-auto 
               -mt-2 
               md:mt-4  
               md:m-0 
               pt-10
               lg:pt-0
               "
          >
            <button
              disabled={activeIndex === 0}
              onClick={handlePrev}
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all cursor-pointer",
                activeIndex === 0
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-white/10 hover:border-white/20 hover:scale-105",
              )}
              aria-label="Previous card"
            >
              <ArrowLeft className="w-4 h-4 text-neutral-300" />
            </button>
            <button
              disabled={activeIndex === items.length - 1}
              onClick={handleNext}
              className={cn(
                "flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md transition-all cursor-pointer",
                activeIndex === items.length - 1
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-white/10 hover:border-white/20 hover:scale-105",
              )}
              aria-label="Next card"
            >
              <ArrowRight className="w-4 h-4 text-neutral-300" />
            </button>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export default ExperienceCard;
