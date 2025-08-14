// AnimatedCheckWithGSAP.jsx
// React component: animated check mark using GSAP
// Instructions:
// 1) Install GSAP: `npm install gsap`
// 2) Import and use <AnimatedCheck /> in your app.
// 3) The default export is a small demo component with a Play button to replay the animation.

import React, { useRef, useEffect, useCallback, useState } from "react";
import { gsap } from "gsap";

// Simple, self-contained component that draws a circle and then "writes" a check mark.
// Props:
//  - size: number (px) - default 120
//  - stroke: color - default '#16a34a' (green)
//  - duration: total seconds - default 0.9
//  - onComplete: callback

export function AnimatedCheck({ size = 120, stroke = '#16a34a', duration = 0.9, onComplete }) {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const checkRef = useRef(null);
  const tlRef = useRef(null);

  const play = useCallback(() => {
    // kill previous timeline if exists
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    const circleEl = circleRef.current;
    const checkEl = checkRef.current;

    // get path lengths for smooth 'draw' effect
    const circleLength = circleEl.getTotalLength();
    const checkLength = checkEl.getTotalLength();

    // reset styles
    gsap.set(circleEl, {
      strokeDasharray: circleLength,
      strokeDashoffset: circleLength,
      transformOrigin: '50% 50%'
    });

    gsap.set(checkEl, {
      strokeDasharray: checkLength,
      strokeDashoffset: checkLength,
      opacity: 0
    });

    const tl = gsap.timeline({ defaults: { ease: 'power1.out' }, onComplete: onComplete });

    // draw circle quickly
    tl.to(circleEl, { strokeDashoffset: 0, duration: duration * 0.5 })
      // a tiny bounce/scale on the container to make it pop
      .to(containerRef.current, { scale: 1.04, duration: 0.12, yoyo: true, repeat: 1 }, '-=0.08')
      // draw the check
      .to(checkEl, { strokeDashoffset: 0, opacity: 1, duration: duration * 0.6 }, '-=0.05')
      // subtle stroke width pulse to emphasise completion
      .to([circleEl, checkEl], { attr: { 'stroke-width': 4 }, duration: 0.08, yoyo: true, repeat: 1 }, '>-0.04');

    tlRef.current = tl;
  }, [duration, onComplete]);

  useEffect(() => {
    // initial play
    play();

    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, [play]);

  const svgSize = size;
  const viewBox = "0 0 100 100"; // we use a 100x100 SVG coordinate system for easier math

  return (
    <div style={{ display: 'inline-block', transformOrigin: '50% 50%' }} ref={containerRef}>
      <svg
        width={svgSize}
        height={svgSize}
        viewBox={viewBox}
        role="img"
        aria-label="Success"
      >
        {/* Circle */}
        <path
          ref={circleRef}
          d="M50 8.5
             a41.5 41.5 0 1 1 0 83
             a41.5 41.5 0 1 1 0 -83"
          fill="none"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* Check Mark (two-segment path) */}
        {/* Coordinates chosen to look good inside 100x100 viewBox */}
        <path
          ref={checkRef}
          d="M30 53 L44 66 L72 36"
          fill="none"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

