import { Gemini, Replit, GooglePaLM, MagicUI } from "@/components/logos";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Sparkles } from "lucide-react";

export default function IntegrationsSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#FFE5D1] to-[#D3EAF7] py-24">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-between">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-300 rounded-full bg-white w-fit">
              <Sparkles className="w-4 h-4 text-orange-400" strokeWidth={2.5} />
              <span className="text-orange-400 font-medium text-sm">
                Our Services
              </span>
            </div>

            <h2 className="font-bold text-black tracking-tight text-4xl md:text-5xl leading-tight">
              Explore Our Exclusive <br /> Services Offering
            </h2>

            <p className="text-[#09121D] text-[15px] max-w-md leading-relaxed">
              In addition to our training programs, we deliver tailored tech
              solutions for organizations, government agencies, and educational
              institutions.
            </p>
          </div>

          {/* BUTTON */}
          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="px-[70px] border-2 text-[22px] font-bold border-white bg-[#E68E40] text-base"
            >
              <Link to="/">
                <span className="text-nowrap text-white">Get Started</span>
              </Link>
            </Button>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ServiceBox
              icon={<Gemini />}
              name="Services 1"
              description="A little description for it’s just a lorem ipsum yeah"
            />

            <ServiceBox
              icon={<Replit />}
              name="Services 2"
              description="A little description for it’s just a lorem ipsum yeah"
            />

            <ServiceBox
              icon={<GooglePaLM />}
              name="Services 3"
              description="A little description for it’s just a lorem ipsum yeah"
            />

            <ServiceBox
              icon={<MagicUI />}
              name="Services 4"
              description="A little description for it’s just a lorem ipsum yeah"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

const ServiceBox = ({
  icon,
  name,
  description,
}: {
  icon: React.ReactNode;
  name: string;
  description: string;
}) => {
  return (
    <div className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition-all">
      <div className="w-12 h-12 border-2 bg[#E68E40] rounded-full flex items-center justify-center text-white text-xl">
        {icon}
      </div>

      <h3 className="mt-4 text-[24px] leading-[26px] font-semibold">{name}</h3>

      <p className="mt-2 text-[16px] font-normal text-[#000000] leading-[26px]">
        {description}
      </p>
    </div>
  );
};
