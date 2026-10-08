import React from "react";
import { ParallaxComponent } from "@/components/ui/parallax-scrolling";

export default function ParallaxDemo() {
  return (
    <div className="w-full flex flex-col items-center">
      <ParallaxComponent />
      <div className="osmo-credits mt-3 text-center">
        <p className="osmo-credits__p text-[11px] text-slate-400 font-medium">
          Resource by{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.osmo.supply/"
            className="osmo-credits__p-a text-blue-600/70 hover:text-blue-600 underline underline-offset-2 transition-colors"
          >
            Osmo
          </a>
        </p>
      </div>
    </div>
  );
}
