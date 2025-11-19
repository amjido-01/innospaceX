import React from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { HeroHeader } from "./Header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className=" mt-[72px]">
          <div className="pb-24 pt-12 md:pb-32 lg:py-[72px] bg-gradient-to-br from-[#d9eaf7] via-[#e9eff8] to-[#faefe7]
">
            <div className="relative mx-auto flex max-w-6xl border2 flexcol px6 lgblock">
              <div className="mx-auto max-w-lg border2 text-center lg:ml-0 lg:w-1/2 lg:text-left">

                <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-300 rounded-full bg-white w-fit">
                  <Sparkles
                    className="w-4 h-4 text-orange-400"
                    strokeWidth={2.5}
                  />
                  <span className="text-orange-400 font-medium text-sm">
                    Welcome to InnovspaceX
                  </span>
                </div>

                <h1 className="mt-4 max-w-2xl text-[#09121D] text-balance text-5xl font-bold md:text-6xl lg:mt16 xl:text-7xl">
                  Empowering The Next Generation of Innovators
                </h1>
                <p className="mt-6 max-w-2xl text-pretty text-xl text-[#09121D]">
                  We empower individuals to learn and innovate, and help
                  organizations grow through digital solutions.
                </p>

                <div className="mt-13 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                  <Button asChild size="lg" className="px-20 border-2 text-[22px] font-bold border-white bg-[#E68E40] text-base">
                    <Link to="/">
                      <span className="text-nowrap text-white">Get Started</span>
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 border2 gap-3 grid-rows-2 h-fit">
                {/* Top left - VR image */}
                <div className="col-span-1 row-span-2">
                  <img
                    src="/vr.jpg"
                    alt="Person wearing VR headset with purple lighting"
                    className="w-[301px] h-full object-cover rounded-3xl"
                  />
                </div>

                {/* Top right - Workspace image */}
                <div className="col-span-1 row-span-1">
                  <img
                    src="/team.jpg"
                    alt="Overhead view of workspace with laptops and tech"
                    className="w-[301px] h-full object-cover rounded-3xl"
                  />
                </div>

                {/* Bottom right - Team image */}
                <div className="col-span-1 row-span-1">
                  <img
                    src="/children.jpg"
                    alt="People working together on tech project"
                    className="w-[301px] h-full object-cover rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background pb-16 md:pb-32 mt-[39px]">
  <div className="group relative m-auto max-w-6xl px6">
    <div className="flex flex-col items-center md:flex-row">
      {/* TEXT CONTAINER */}
      <div className="md:max-w-[380px] md:pr6 md:border-r border-muted">
        <p className="textend text-sm md:text-base leading-relaxed">
          We’ve worked and partnered with <span className="font-semibold text-[#E68E40]">20+ companies </span> 
          and organizations across different industries.
        </p>
      </div>

      {/* LOGO SLIDER CONTAINER */}
      <div className="relative py-6 md:w-[calc(100%-16rem)]">
        <InfiniteSlider speedOnHover={20} speed={40} gap={90}>
          <div className="flex">
            <img
              className="mx-auto h-5 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/nvidia.svg"
              alt="Nvidia Logo"
              height="20"
              width="auto"
            />
          </div>
          <div className="flex">
            <img
              className="mx-auto h-4 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/column.svg"
              alt="Column Logo"
              height="16"
              width="auto"
            />
          </div>
          <div className="flex">
            <img
              className="mx-auto h-4 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/github.svg"
              alt="GitHub Logo"
              height="16"
              width="auto"
            />
          </div>
          <div className="flex">
            <img
              className="mx-auto h-5 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/nike.svg"
              alt="Nike Logo"
              height="20"
              width="auto"
            />
          </div>
          <div className="flex">
            <img
              className="mx-auto h-5 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
              alt="Lemon Squeezy Logo"
              height="20"
              width="auto"
            />
          </div>
          <div className="flex">
            <img
              className="mx-auto h-4 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/laravel.svg"
              alt="Laravel Logo"
              height="16"
              width="auto"
            />
          </div>
          <div className="flex">
            <img
              className="mx-auto h-7 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/lilly.svg"
              alt="Lilly Logo"
              height="28"
              width="auto"
            />
          </div>
          <div className="flex">
            <img
              className="mx-auto h-6 w-fit dark:invert"
              src="https://html.tailus.io/blocks/customers/openai.svg"
              alt="OpenAI Logo"
              height="24"
              width="auto"
            />
          </div>
        </InfiniteSlider>

        {/* GRADIENT BLUR EDGES */}
        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-16"></div>
        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-16"></div>
        <ProgressiveBlur
          className="pointer-events-none absolute left-0 top-0 h-full w-16"
          direction="left"
          blurIntensity={1}
        />
        <ProgressiveBlur
          className="pointer-events-none absolute right-0 top-0 h-full w-16"
          direction="right"
          blurIntensity={1}
        />
      </div>
    </div>
  </div>
</section>

      </main>
    </>
  );
}
