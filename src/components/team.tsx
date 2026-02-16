import { Sparkles } from "lucide-react";

const members = [
  {
    name: "Muhammad Abubakar",
    role: "Founder - CEO",
    avatar: "/ala.JPG",
    link: "#",
  },
  {
    name: "Elijah Jones",
    role: "Co-Founder - CTO",
    avatar: "/ala1.JPG",
    link: "#",
  },
  {
    name: "Isabella Garcia",
    role: "Sales Manager",
    avatar: "/ala2.JPG",
    link: "#",
  },
  {
    name: "Henry Lee",
    role: "UX Engeneer",
    avatar: "https://alt.tailus.io/images/team/member-four.webp",
    link: "#",
  },
  {
    name: "Ava Williams",
    role: "Interaction Designer",
    avatar: "https://alt.tailus.io/images/team/member-five.webp",
    link: "#",
  },
  {
    name: "Olivia Miller",
    role: "Visual Designer",
    avatar: "https://alt.tailus.io/images/team/member-six.webp",
    link: "#",
  },
];

export default function Team() {
  return (
    <section className="bg-zinc-50 mt-23.5 mb-[275px] border-t py16 md:py32 dark:bg-transparent">
      <div className="@container mx-auto max-w-6xl px-2">
        {/* Header Section */}
        <div className=" flex items-center justify-center my-5">
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-300 rounded-full bg-white w-fit">
            <Sparkles className="w-4 h-4 text-orange-400" strokeWidth={2.5} />
            <span className="text-orange-400 font-medium text-sm">
              Our Team
            </span>
          </div>
        </div>

        <div className="md:text-center">
          <h2 className="text-balance text-[42px] md:text-[52px] text-[#09121D] font-bold leading-tight tracking-tight">
            Meet Our Team
          </h2>
          <p className="mt-2 text-[#09121D]/80 text-[16px] max-w-xl mx-auto">
            Experience What is Like To be at InnospaceX, Let add some more
            convincing english here
          </p>
        </div>

        {/* Cards Section */}
        <div className="mt-[21px] mt-[41px]">
          <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {members.map((member, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl"
              >
                <img
                  className="h-96 w-full object-cover object-top graysale transition-all duration-500 hover:grayscale-0"
                  src={member.avatar}
                  alt="team member"
                  width="826"
                  height="1239"
                />
                {/* Member Info Container - Left Side */}
                <div className="absolute bottom-4 left-0 bg-white rounded-r-xl px-5 py-2 shadow-lg w-[65%] leading-[100%]">
                  <h3 className="text-[15px] font-semibold text-[#09121D]">
                    {member.name}
                  </h3>
                  <p className="text-[12px] text-[#09121D] mt-0.5">{member.role}</p>
                </div>

                {/* Small Rounded Box - Right Side */}
                <div className="absolute bottom-5 right-4 bg-white rounded-xl w-12 h-12 shadow-lg flex items-center justify-center"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
