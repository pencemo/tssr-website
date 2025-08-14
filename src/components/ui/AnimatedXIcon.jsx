
import React, { useRef, useEffect, useCallback, useState } from "react";
import { gsap } from "gsap";

export function AnimatedX({ size = 120, stroke = '#dc2626', duration = 0.9, onComplete }) {
  const containerRef = useRef(null);
  const circleRef = useRef(null);
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const tlRef = useRef(null);

  const play = useCallback(() => {
    if (tlRef.current) {
      tlRef.current.kill();
      tlRef.current = null;
    }

    const circleEl = circleRef.current;
    const line1El = line1Ref.current;
    const line2El = line2Ref.current;

    const circleLength = circleEl.getTotalLength();
    const line1Length = line1El.getTotalLength();
    const line2Length = line2El.getTotalLength();

    gsap.set(circleEl, {
      strokeDasharray: circleLength,
      strokeDashoffset: circleLength
    });

    gsap.set([line1El, line2El], {
      strokeDasharray: (i, target) => target.getTotalLength(),
      strokeDashoffset: (i, target) => target.getTotalLength(),
      opacity: 0
    });

    const tl = gsap.timeline({ defaults: { ease: 'power1.out' }, onComplete });

    tl.to(circleEl, { strokeDashoffset: 0, duration: duration * 0.5 })
      .to(containerRef.current, { scale: 1.04, duration: 0.12, yoyo: true, repeat: 1 }, '-=0.08')
      .to(line1El, { strokeDashoffset: 0,opacity: 1, duration: duration * 0.4 }, '-=0.05')
      .to(line2El, { strokeDashoffset: 0,opacity: 1, duration: duration * 0.4 }, '-=0.3')
      .to([circleEl, line1El, line2El], { attr: { 'stroke-width': 4 }, duration: 0.08, yoyo: true, repeat: 1 }, '>-0.04');

    tlRef.current = tl;
  }, [duration, onComplete]);

  useEffect(() => {
    play();
    return () => {
      if (tlRef.current) tlRef.current.kill();
    };
  }, [play]);

  const svgSize = size;
  const viewBox = "0 0 100 100";

  return (
    <div style={{ display: 'inline-block', transformOrigin: '50% 50%' }} ref={containerRef}>
      <svg
        width={svgSize}
        height={svgSize}
        viewBox={viewBox}
        role="img"
        aria-label="Error"
      >
        {/* Circle */}
        <path
          ref={circleRef}
          d="M50 8.5 a41.5 41.5 0 1 1 0 83 a41.5 41.5 0 1 1 0 -83"
          fill="none"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
        />

        {/* X Lines */}
        <path
          ref={line1Ref}
          d="M32 32 L68 68"
          fill="none"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          ref={line2Ref}
          d="M68 32 L32 68"
          fill="none"
          stroke={stroke}
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}