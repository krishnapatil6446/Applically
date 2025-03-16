"use client";

import React, { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  vertical?: boolean;
  repeat?: number;
}

const Marquee = ({
  children,
  className = "",
  reverse = false,
  pauseOnHover = false,
  vertical = false,
  repeat = 1,
}: MarqueeProps) => {
  const content = React.useMemo(() => {
    return Array(repeat)
      .fill(0)
      .map((_, index) => (
        <div key={index} className="flex-shrink-0">
          {children}
        </div>
      ));
  }, [children, repeat]);

  return (
    <div
      className={`overflow-hidden relative ${
        vertical ? "h-80" : "w-full"
      } ${className}`}
      style={{
        maskImage: vertical
          ? "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
          : "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: vertical
          ? "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)"
          : "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        className={`flex ${
          vertical ? "flex-col" : "flex-row"
        } animate-marquee whitespace-nowrap ${
          pauseOnHover ? "hover:pause-animation" : ""
        } ${reverse ? "direction-reverse" : ""}`}
        style={{
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {content}
        {content} {/* Duplicate to create seamless loop */}
      </div>
    </div>
  );
};

export default Marquee;
