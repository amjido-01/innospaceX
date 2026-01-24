import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Play, Rocket } from "lucide-react";

export default function CallToAction() {
  return (
    <section
      className="relative py-16 md:py-32
        bg-[url('/call.jpg')]
        bg-cover bg-center bg-no-repeat"
    >
      {/* <div className="absolute inset-0 bg-black/40"></div> */}
      <div className="mx-auto max-w-5xl px6">
        <div className="">
             <div className="w-20 h-20 mb-20.75 text-black bg-[#ffffff] border-2 rounded-full flex items-center justify-center text-xl">
       <Rocket className=" w-10 h-10"/>
      </div>
          <h2 className="text-balance text-[60px] leading-[31.42px] font-bold text-[#FFFFFF]">
            Ready to be part of this Journey
          </h2>
          <p className="mt-8 text-[24px] text-white font-normal leading-[31.42px]">
            Take the next step with InnospaceX and turn your potential into
            impact.
          </p>

          <div className="mt-12 flex flex-wrap justifycenter gap-4">
            <Button
              asChild
              size="lg"
              className="px-10 py-5 border-2 text-[22px] font-bold border-[#000000] bg-[#FFFFFF] text-base"
            >
              <Link to="/">
                <span className="text-nowrap text-[#121212]">Get Started</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
