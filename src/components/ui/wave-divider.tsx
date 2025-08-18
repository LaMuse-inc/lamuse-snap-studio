import React from "react";

type WaveDividerProps = {
  position?: "top" | "bottom";
  className?: string;
  height?: number;
};

/**
 * Simple full-width SVG wave divider. The fill color follows the current text color.
 * Place inside a relatively positioned section. Example:
 * <WaveDivider position="bottom" className="text-white" />
 */
export const WaveDivider: React.FC<WaveDividerProps> = ({
  position = "bottom",
  className = "text-white",
  height = 120,
}) => {
  const style: React.CSSProperties = { height };
  const isTop = position === "top";
  return (
    <div
      className={`absolute left-0 right-0 ${
        isTop ? "-top-px" : "-bottom-px"
      } pointer-events-none ${className}`}
      style={style}
    >
      <svg
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
        className={`w-full h-full ${isTop ? "rotate-180" : ""}`}
      >
        <path
          d="M0,64 L80,58.7 C160,53,320,43,480,37.3 C640,32,800,32,960,48 C1120,64,1280,96,1360,112 L1440,128 L1440,0 L1360,0 C1280,0,1120,0,960,0 C800,0,640,0,480,0 C320,0,160,0,80,0 L0,0 Z"
          fill="currentColor"
        />
      </svg>
    </div>
  );
};


