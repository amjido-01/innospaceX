import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Mail, SendHorizonal } from "lucide-react";

export default function CallToActionThree() {
  return (
   <section className="py-16 md:py-32 bg-linear-to-b from-[#FFF4EA] to-[#FFD9B3]">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Sign up for our weekly Newsletters
          </h2>
          <p className="mt-4 w-1/2 text-center mx-auto">
            Get the latest updates on programs, events, and tech
            opportunities—delivered straight to your inbox.
          </p>

          <form action="" className="mx-auto mt-8 w-[90%]">
            <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-sm border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2">
              <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

              <input
                placeholder="Your mail address"
                className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                type="email"
              />
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Button
                asChild
                size="lg"
                className="px-10 py-5 border-2 text-[22px] font-bold border-[#ffffff] bg-[#000000] text-base"
              >
                <Link to="/">
                  <span className="text-nowrap text-[#FFFFFF]">
                    Subscribe Now 
                  </span>
                </Link>
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
