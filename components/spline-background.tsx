"use client";

import { useState } from "react";

export function SplineBackground() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="absolute inset-0 z-10 overflow-hidden">
      <div
        className={`w-full h-full transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <iframe
          // src="https://my.spline.design/macbookprocopy-fa847e18f87c733c99a8c7d7e5b8935d/"
          // src="https://my.spline.design/nexbotrobotcharacterconcept-9c3411babb1647fcb1d12fc2a1c61d61/"
          src="https://my.spline.design/worldplanet-236d00b6438830c6ba0daa2542b24802/"
          // src="https://my.spline.design/cubic-384037281e3032cb00511704a5f9fc77/"
          frameBorder="0"
          width="100%"
          height="100%"
          title="3D World Planet Background"
          onLoad={() => setIsLoaded(true)}
          style={{
            pointerEvents: "none",
            background: "transparent",
          }}
        />
      </div>
      <div
        className={`absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-600/5 transition-opacity duration-1000 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      />
    </div>
  );
}
