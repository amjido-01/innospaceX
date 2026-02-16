import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Globe, LayoutDashboard, Bot, Rocket, SearchCheck } from "lucide-react";
// import { Button } from "./ui/button";

const badges = [
  { icon: SearchCheck, label: "All" },
  { icon: Globe, label: "Web apps" },
  { icon: LayoutDashboard, label: "Mobile apps" },
  { icon: Bot, label: "Robotics" },
  { icon: Rocket, label: "Startups" },
];

const cardData = [
  {
    title: "InnospaceX",
    description: "Empowering The Next Generation of Innovators",
    image: "/innospace.png",
    lable: "Web app",
  },
  {
    title: "Simkash",
    image: "/simkash.png",
    description: "All-in-one SIM & Payments Platform",
    lable: "Mobile app",
  },
  {
    title: "Powered By AI",
    description:
      "Elements to functionality, you have complete control to create a unique experience.",
    image: "/p1.jpg",
    lable: "Robotics",
  },
];

export default function Impacts() {
  return (
    <section className="bg-zinc-50 mt-23.5 border-t py16 md:py32 dark:bg-transparent">
      <div className="@container mx-auto max-w-6xl px-2">
        {/* Header Section */}
        <div className="md:text-center">
          <h2 className="text-balance text-[42px] md:text-[52px] text-[#09121D] font-bold leading-tight tracking-tight">
            Our Impact
          </h2>
          <p className="mt-2 text-[#09121D]/80 text-[16px] max-w-xl mx-auto">
            Discover how our team, students and startups are building creative
            tech solutions.
          </p>
        </div>

        {/* Badges Section */}
        <div className="mt-10 flex flex-wrap justify-center gap-4 md:gap-6">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            const isAll = badge.label === "All";

            return (
              <div
                key={index}
                className={`inline-flex items-center gap-2 px-5 py-2 border rounded-full shadow-sm hover:shadow-md transition
          ${
            isAll
              ? "bg-[#333333] border-[#09121D] text-white"
              : "bg-white border-[#09121D] text-[#09121D]"
          }
        `}
              >
                <Icon
                  className={`w-4 h-4 ${isAll ? "text-white" : "text-[#09121D]"}`}
                  strokeWidth={2.5}
                />
                <span className="font-medium text-[15px]">{badge.label}</span>
              </div>
            );
          })}
        </div>

        {/* Cards Section */}
        <div className="mx-auto mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cardData.map((card, index) => (
            <Card
              key={index}
              className="group h[500px] overflow-hidden border border-zinc-200 shadow-none hover:shadow-lg transition duration-300"
            >
              <CardHeader className="px-4">
                <img
                  src={card.image}
                  alt={card.title}
                  className="h-[340px] w-full object-cover rounded-lg"
                />
              </CardHeader>

              <CardContent className="px-4">
                <div
                  key={index}
                  className="inline-flex items-center gap-2 px-5 py-2 border border-[#09121D] rounded-full bg-white shadow-sm hover:shadow-md transition"
                >
                  <span className="text-[#09121D] font-medium text-[15px]">
                    {card.lable}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mt-3 text-[#09121D]">
                  {card.title}
                </h3>
                <p className="mt-2 text-[15px] font-medium leading-[19.07px] text-[#333333]">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
