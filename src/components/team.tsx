import { Linkedin, Sparkles } from "lucide-react";

const members = [
  {
    name: "Sammy Poundz",
    role: "Executive Director",
    avatar: "/sam.jpeg",
    link: "https://www.linkedin.com/in/sammy-poundz-207749253/",
  },
  {
    name: "Abubakar Muhammad Ala",
    role: "Chief Operating Officer",
    avatar: "/ala2.JPG",
    link: "https://www.linkedin.com/in/abubakar-muhammad-ala/",
  },
  {
    name: "Salma Gambo",
    role: "Chief Financial Officer",
    avatar: "/salma.jpeg",
    link: "https://www.linkedin.com/in/salma-gambo-034683185/",
  },
  {
    name: "Faruq Abiodun",
    role: "Chief Technology Officer",
    avatar: "farex.jpeg",
    link: "https://www.linkedin.com/in/faruq-abiodun-a10015239/",
  },
  {
    name: "Abdullatif Abdulkharim",
    role: "Head of Acedamy",
    avatar: "abdul.jpeg",
    link: "https://www.linkedin.com/in/abdullatif-abdulkarim-104397235/",
  },
  {
    name: "Emediong Bassey",
    role: "Data Scientist",
    avatar: "emmy.png",
    link: "https://www.linkedin.com/in/emediong-bassey/",
  },
  {
    name: "Francis Olorunfemi Jacob",
    role: "Cybersecurity Expert",
    avatar: "francis.jpeg",
    link: "https://www.linkedin.com/in/francis-olorunfemi-jacob",
  },
  {
    name: "Precious Nwachukwu",
    role: "UI/UX Designer",
    avatar: "precious.jpeg",
    link: "https://www.linkedin.com/in/preciouschukwu",
  },
  {
    name: "Muhammad Niimatullah",
    role: "Product Designer",
    avatar: "niima.jpeg",
    link: "https://www.linkedin.com/in/muhammad-niimatullah-1776a9241",
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
            Meet the passionate individuals behind InnospaceX, dedicated to
            fostering innovation, growth, and excellence in technology and
            entrepreneurship.
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
                  className="h-96 w-full object-cover object-top grayscale transition-all duration-500 hover:grayscale-0"
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
                  <p className="text-[12px] text-[#09121D] mt-0.5">
                    {member.role}
                  </p>
                </div>

                {/* Small Rounded Box - Right Side */}
                <a
                  href={member.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-5 right-4 bg-white rounded-xl w-12 h-12 shadow-lg flex items-center justify-center transition-colors hover:bg-zinc-50"
                >
                  <Linkedin className="w-4 h-4 text-[#0077b5]" fill="#0077b5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
