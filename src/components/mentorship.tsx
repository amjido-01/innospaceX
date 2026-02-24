import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";

export default function MentorshipSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      {/* Top Section */}
      <Card className="bg-[#E68E40] border-2 rounded-2xl overflow-hidden">
        <CardContent className="grid md:grid-cols-2 gap-8 p-10 items-end pb-0">
          {/* Text Block */}
          <div className="text-white pb-10">
            <h2 className="text-[45px] font-bold leading-12 tracking-[-4%]">
              Learn from Experienced Mentors
            </h2>
            <p className="mt-[19px] text-[20px] font-normal leading-[27px]">
              Our instructors are not just experts in tech—they're mentors who
              guide you every step of the way to help you grow and succeed.
            </p>
            <Button
              asChild
              size="lg"
              className="px-[70px] mt-[78px] border-2 text-[22px] font-bold text-[#000000] border-[#000000] bg-white text-base"
            >
              <Link to="/">
                <span className="text-nowrap">Get Started</span>
              </Link>
            </Button>
          </div>
          {/* Image */}
          <div className="self-end -mb-6">
            <img
              src="/img2.jpeg"
              alt="Mentor guiding student"
              className="rounded-t-2xl w-full h-auto object-cover"
            />
          </div>
        </CardContent>
      </Card>

      {/* Bottom Two Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        {/* Community Card */}
        <Card className="bg-[#3A7D7C] relative border-none rounded-2xl text-white">
          <CardContent className="p-10 flex flex-col justify-between h-full">
            <div className="text-center mb-[58px]">
              <h3 className="text-[45px] leading-9 tracking[-4%] font-bold">Community of Innovators</h3>
              <p className="mt-4 text-[20px] leading-[27.5px]">
                Join a growing network of students, creators, and startups
                building solutions that matter.
              </p>
            </div>

            <div className="absolute mt-[58px] bottom-0">
              <img
              src="/img9.jpeg"
              alt="Community working together"
              width={500}
              height={400}
              className="rounded-t-2xl  w-[428px] h-[289px] object-cover"
            />
            </div>
          </CardContent>
        </Card>

        {/* Practical Experience Card */}
        <Card className="bg-[#256847] relative border-none rounded-2xl text-white">
          <CardContent className="p-10 flex flex-col justify-between h-full">
            <div className="text-center">
              <h3 className="text-[45px] leading-9 tracking[-4%] font-bold">Practical Experience</h3>
              <p className="mt-4 text-[20px] leading-[27.5px]">
                Build hands-on projects that solve real challenges. Learn by
                doing, not just watching.
              </p>
            </div>

           <div>
             <img
              src="/img5.jpeg"
              alt="Practical coding experience"
              width={500}
              height={400}
              className="rounded-xl w-[428px] h-[289px] object-cover"
            />
           </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
