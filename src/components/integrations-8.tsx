import { Button } from "@/components/ui/button";
import {
  Binary,
  GraduationCap,
  LoaderPinwheel,
  School,
  Sparkles,
} from "lucide-react";
import { ServiceBox } from "./service-box";
import { WhatsAppModal } from "./whatsapp-modal";
import { useState } from "react";
export default function IntegrationsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="w-full py-24">
      <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-12 px-2">
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
            InnospaceX is a technology ecosystem committed to developing talent, building digital solutions, and driving innovation.

Through our Academy, we equip students and professionals with practical, industry-ready digital skills. Through structured mentorship, we guide aspiring tech leaders and innovators toward clear career and entrepreneurial paths. Through our software development services, we design and build scalable digital products for startups, businesses, and institutions. And through our Tech Hub, we provide a collaborative space where ideas are nurtured, partnerships are formed, and innovation thrives.

At InnospaceX, we don’t just teach technology — we build people, products, and possibilities.
            </p>
          </div>

          {/* BUTTON */}
          <div className="mt-10">
            <Button
              asChild
              onClick={() => setIsModalOpen(true)}
              size="lg"
              className="px-17.5 border-2 text-[22px] font-bold border-white bg-[#E68E40] text-base cursor-pointer hover:bg-[#ed994e]"
            >
                <span className="text-nowrap text-white">Get Started</span>
            </Button>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ServiceBox
              icon={<LoaderPinwheel />}
              name="Mentorship & Talent Development"
              description="Guiding the Next Generation of Tech Leaders.
We provide structured mentorship for students, interns, and aspiring innovators."
            />

            <ServiceBox
              icon={<Binary />}
              name="Software & Product Development"
              description="Turning Ideas into Scalable Digital Solutions.
We design and develop powerful, user-focused digital products for startups, SMEs, NGOs, and institutions."
            />

            <ServiceBox
              icon={<GraduationCap />}
              name="Technology Academy"
              description="InnospaceX Academy equips students with practical, industry-relevant digital skills designed for today’s tech-driven world."
            />

            <ServiceBox
              icon={<School />}
              name="Innovation & Tech Hub"
              description="Where Ideas Meet Execution.
InnospaceX Tech Hub is a collaborative ecosystem for creators, founders, and organizations."
            />
          </div>
        </div>
      </div>
        <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="Hello! I want to get started with InnospaceX."
      />
    </section>
  );
}
