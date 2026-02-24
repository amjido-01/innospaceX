import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      // quote:
      //   "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      quote:
        "My experience at InnospaceX has been amazing — I’ve gained practical skills and grown more confident in tech.",
      name: "Idris Ahmad",
      designation: "Intern @ InnospaceX",
      src: "garba.jpeg",
    },
    {
      quote:
        "Completed six weeks @ InnospaceX Academy, gaining hands-on experience in HTML, CSS, responsive design, Git/GitHub, and building projects strengthening my skills as a software engineer.",
      name: "Dauda A Dauda",
      designation: "Ex-Student of InnospaceX",
      src: "dauda.jpeg",
    },
    {
      quote:
        "My time at InnospaceX was transformative. I gained hands-on skills in ethical hacking, network security, and vulnerability analysis, building real confidence through practical, mentorship-driven learning.",
      name: "Garba haladu galadima",
      designation: "Cybersecurity student",
      src: "name.jpeg",
    },
    {
      quote:
        "My experience at InnospaceX has been impactful. I gained practical skills, built confidence, and grew academically and professionally in a supportive environment.",
      name: "Zainab Ali sadi",
      designation: "SIWES Student",
      src: "zainab.jpeg",
    },
    {
      quote:
        "In InnoSpaceX I learn networking under networking we done Cisco packet Tracer, the we Encryption and Decryption and Window even if viewer and the end we start Kali Linux.",
      name: "Bilkisu Lawan",
      designation: "SIWES Student",
      src: "bilkisu.jpeg",
    },
  ];
  return (
    <div className="mt-16 bg-[#D7F0F4CC]">
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
}
