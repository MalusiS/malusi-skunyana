// src/components/sections/Hero.jsx
import React from "react";
import { ArrowDown } from "lucide-react";

const Hero = React.memo(function Hero() {
  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="
        min-h-[100svh] md:min-h-[92svh]   {/* ← Full viewport on mobile only */}
        flex flex-col items-center justify-center
        pt-6 md:pt-12
        text-center
        px-4 sm:px-8
        text-white
        bg-gradient-to-br from-violet-700 via-purple-700 to-fuchsia-600
        relative overflow-hidden
      "
    >
      {/* Subtle texture overlay */}
      <div
        className="absolute inset-0 bg-black/10"
        aria-hidden="true"
      />
      {/* Radial highlight for depth */}
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_0%,transparent_70%)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 motion-reduce:animate-none">
        <h1
          id="hero-title"
          className="
            text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem]   {/* Restored to 5xl for proper visual weight */}
            font-extrabold tracking-tight
            mb-5 sm:mb-8   {/* Increased breathing room below the name */}
            drop-shadow-2xl
            text-balance leading-[1.1]
          "
        >
          Malusi Skunyana
        </h1>

        <h2 className="
          text-xl sm:text-3xl md:text-4xl   {/* Bumped up to xl so it reads clearly */}
          font-light
          mb-8 sm:mb-10   {/* Restored generous spacing before the paragraph */}
          text-violet-100
        ">
          Front-End Developer
        </h2>

        <p
          className="
            max-w-[90%] sm:max-w-2xl
            mx-auto
            text-lg sm:text-xl md:text-2xl   {/* Bumped to lg to fill the space beautifully */}
            font-light
            leading-relaxed
            text-violet-100/90
            drop-shadow-sm
            text-balance
          "
        >
          I build{" "}
          <strong className="font-semibold text-white">
            clean, accessible, and data-driven web applications
          </strong>
          , bridging analytical problems and technical solutions — currently
          advancing into full-stack engineering.
        </p>

        <a
          href="#about"
          aria-label="Scroll to the About section to learn more about my background and journey"
          className="
            group mt-10 sm:mt-12   {/* Pushed the button down gracefully */}
            inline-flex items-center gap-3
            px-6 py-3 sm:px-10 sm:py-4
            text-base sm:text-xl font-semibold
            rounded-full
            text-violet-900 bg-white
            shadow-xl
            hover:shadow-2xl hover:bg-gray-50 hover:scale-105
            focus:outline-none focus:ring-4 focus:ring-white/60
            transition-all duration-300
          "
        >
          My Background & Journey
          <ArrowDown
            size={22}
            className="group-hover:translate-y-1 transition-transform duration-300"
            aria-hidden="true"
          />
        </a>
      </div>
    </section>
  );
});

export default Hero;
