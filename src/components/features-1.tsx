import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Atom, MoveRight, Radio, Settings2, Sparkles, Zap } from "lucide-react";
import { Button } from "./ui/button";
import type { ReactNode } from "react";

const badges = [
  { icon: Radio, label: "Online classes" },
  { icon: Sparkles, label: "Physical classes" },
  { icon: Atom, label: "Hybrid classes" },
];

const cardData = [
  {
    title: "Customizable",
    description:
      "Extensive customization options, allowing you to tailor every aspect to meet your specific needs.",
    image: "/btcmp.jpg",
  },
  {
    title: "Full Control",
    description:
      "From design elements to functionality, you have complete control to create a unique and personalized experience.",
    image: "/btcmp.jpg",
  },
  {
    title: "Powered By AI",
    description:
      "Elements to functionality, you have complete control to create a unique experience.",
    image: "/btcmp.jpg",
  },
  {
    title: "Seamless Integration",
    description:
      "Easily integrate with your existing tools and workflows without any hassle.",
    image: "/btcmp.jpg",
  },
  {
    title: "Optimized Performance",
    description:
      "Our programs are designed for speed and efficiency, giving you the best results.",
    image: "/btcmp.jpg",
  },
  {
    title: "Expert Support",
    description:
      "Get guidance and assistance from experts whenever you need it.",
    image: "/btcmp.jpg",
  },
];

export default function Features() {
  return (
    <section className="bg-zinc-50 border-t py16 md:py32 dark:bg-transparent">
      <div className="@container mx-auto max-w-6xl px6">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-balance text-[42px] md:text-[52px] text-[#09121D] font-bold leading-tight tracking-tight">
            Join Our Exceptional Programs
          </h2>
          <p className="mt-6 text-[#09121D]/80 text-[16px] max-w-xl mx-auto">
            Learn, build, and grow with programs that take you from beginner to
            professional—no matter where you are in your tech journey.
          </p>
        </div>

        {/* Badges Section */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className="inline-flex items-center gap-2 px-5 py-2 border border-[#09121D] rounded-full bg-white shadow-sm hover:shadow-md transition"
              >
                <Icon className="w-4 h-4 text-[#09121D]" strokeWidth={2.5} />
                <span className="text-[#09121D] font-medium text-[15px]">
                  {badge.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Cards Section */}
        <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className="group overflow-hidden border border-zinc-200 shadowsm hover:shadow-lg transition duration-300"
            >
              <CardHeader className="px-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-48 w-full object-cover rounded-t-lg"
                />
              </CardHeader>

              <CardContent className="px-4">
                <h3 className="text-xl font-semibold text-[#09121D]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[15px] font-medium leading-[19.07px] text-[#333333]">
                  {card.description}
                </p>

                <div className="mt-6">
                  <Button className="bg-[#E68E40] hover:bg-[#d87e32] text-white flex items-center gap-2 px-5 py-2 border border-transparent">
                    <MoveRight className="w-5 h-5 mt-1" strokeWidth={3} />
                    Learn More
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
    />
    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
      {children}
    </div>
  </div>
);
