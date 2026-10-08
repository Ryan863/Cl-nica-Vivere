"use client";
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
  children: ReactNode;
  showRadialGradient?: boolean;
}

export const AuroraBackground = ({
  className,
  children,
  showRadialGradient = true,
  ...props
}: AuroraBackgroundProps) => {
  return (
    <div
      className={cn(
        "relative flex flex-col items-center justify-center bg-[#F8FAFC] text-slate-900 transition-bg overflow-hidden",
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            `
            [--white-gradient:repeating-linear-gradient(100deg,var(--color-white)_0%,var(--color-white)_7%,var(--color-transparent)_10%,var(--color-transparent)_12%,var(--color-white)_16%)]
            [--blue-gradient:repeating-linear-gradient(100deg,rgba(11,99,246,0.18)_10%,rgba(0,82,212,0.15)_15%,rgba(56,189,248,0.22)_20%,rgba(219,234,254,0.35)_25%,rgba(99,102,241,0.12)_30%)]
            [background-image:var(--white-gradient),var(--blue-gradient)]
            [background-size:300%,_200%]
            [background-position:50%_50%,50%_50%]
            filter blur-[24px]
            after:content-[""] after:absolute after:inset-0 after:[background-image:var(--white-gradient),var(--blue-gradient)] 
            after:[background-size:200%,_100%] 
            after:animate-aurora after:[background-attachment:fixed] after:mix-blend-multiply
            pointer-events-none
            absolute -inset-[10px] opacity-70 will-change-transform`,
            showRadialGradient &&
              `[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--color-transparent)_75%)]`
          )}
        />
      </div>
      {children}
    </div>
  );
};
