import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MentorshipSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12 space-y-10">
      {/* Top Section */}
      <Card className="bg-[#E68E40] border-none rounded-2xl">
        <CardContent className="grid md:grid-cols-2 gap-8 p-10 items-center">
          
          {/* Text Block */}
          <div className="text-white">
            <h2 className="text-3xl font-bold leading-tight">
              Learn from Experienced <br /> Mentors
            </h2>

            <p className="mt-4 text-lg">
              Our instructors are not just experts in tech—they’re mentors who
              guide you every step of the way to help you grow and succeed.
            </p>

            <Button
              variant="default"
              className="mt-6 bg-white text-black hover:bg-neutral-200 rounded-xl px-6 py-3 font-semibold shadow-md"
            >
              Get Started
            </Button>
          </div>

          {/* Image */}
          <div>
            <img
              src="/guide.jpg"
              alt="Mentor guiding student"
              width={500}
              height={400}
              className="rounded-xl w-full h-auto object-cover"
            />
          </div>
        </CardContent>
      </Card>

      {/* Bottom Two Cards */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* Community Card */}
        <Card className="bg-[#2C7A7B] border-none rounded-2xl text-white">
          <CardContent className="p-10 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-3xl font-bold">Community of Innovators</h3>
              <p className="mt-3 text-lg">
                Join a growing network of students, creators, and startups
                building solutions that matter.
              </p>
            </div>

            <img
              src="/community.jpg"
              alt="Community working together"
              width={500}
              height={400}
              className="rounded-xl mt-6 w-full object-cover"
            />
          </CardContent>
        </Card>

        {/* Practical Experience Card */}
        <Card className="bg-[#266347] border-none rounded-2xl text-white">
          <CardContent className="p-10 flex flex-col justify-between h-full">
            <div>
              <h3 className="text-3xl font-bold">Practical Experience</h3>
              <p className="mt-3 text-lg">
                Build hands-on projects that solve real challenges. Learn by
                doing, not just watching.
              </p>
            </div>

            <img
              src="/practical.jpg"
              alt="Practical coding experience"
              width={500}
              height={400}
              className="rounded-xl mt-6 w-full object-cover"
            />
          </CardContent>
        </Card>

      </div>
    </section>
  );
}
