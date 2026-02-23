import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Atom, MoveRight, Radio, Sparkles } from "lucide-react";
import { Button } from "./ui/button";

const badges = [
  { icon: Sparkles, label: "Physical classes" },
  { icon: Radio, label: "Online classes" },
  { icon: Atom, label: "Hybrid classes" },
];

const cardData = [
  {
    title: "Web development",
    description:
      "Master the art of building high-performance, responsive websites using the latest industry-standard frameworks and modern dev tools.",
    image: "/btcmp.jpg",
  },
  {
    title: "Robotics",
    description:
      "From circuit design to autonomous intelligence—engineer the future by bringing complex machines to life through hands-on robotics training.",
    image: "/robotics.jpg",
  },
  {
    title: "Data Science",
    description:
      "Transform raw information into strategic gold. Learn to uncover hidden patterns and drive decision-making with powerful data analytics.",
    image: "/data.jpg",
  },
  {
    title: "Cybersecurity",
    description:
      "Become the ultimate digital guardian. Learn to neutralize sophisticated threats and architect unbreakable defense systems for the modern web.",
    image: "/img5.jpeg",
  },
  {
    title: "AI and Machine Learning",
    description:
      "Step into the vanguard of innovation. Architect intelligent systems that think, learn, and evolve using cutting-edge neural networks.",
    image: "/ai.jpg",
  },
  {
    title: "Mobile App Development",
    description:
      "Build the apps that define tomorrow. Create seamless, high-impact experiences for iOS and Android that millions will love.",
    image: "/mobile.jpg",
  },
];

export default function Features() {
  return (
    <section className="border-t py16 md:py32 dark:bg-transparent">
      <div className="@container mx-auto max-w-6xl px-2">
        {/* Header Section */}
        <div className="md:text-center">
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
