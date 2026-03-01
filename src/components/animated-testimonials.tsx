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
    {
      quote:
        "InnospaceX = awesome learning experience, dope trainers, and a collab vibe! 😊",
      name: "Abdulrauf Naseer Ahmed",
      designation: "SIWES Student",
      src: "ab.jpeg",
    },
    {
      quote:
        "My experience in innovation space X is on the bootstrap. It is all about short cut way to doing your code",
      name: "Muhammad Ibrahim kani",
      designation: "SIWES Student",
      src: "muhd.jpeg",
    },
    {
      quote:
        "My SIWES at InnospaceX was practical and impactful. I gained real-world web development experience with great support from the team, and I’m glad I chose them.",
      name: "Zainab Ahmad Sa'id",
      designation: "SIWES Student",
      src: "zee.jpeg",
    },
    {
      quote:
        "I’m happy to be doing my SIWES at InnospaceX. The experience has been engaging, helping me gain practical skills and improve professionally.",
      name: "Maryam Muhammad Yusuf",
      designation: "SIWES Student",
      src: "fati.jpeg",
    },
    {
      quote:
        "My name is Muhammad Muhammad Makama. Here at Innovation SpaceX, in the Cyber Security department, we are learning networking. So far, we have completed Cisco Packet Tracer and worked with Event Viewer, and we are currently working with Kali Linux.",
      name: "Muhammad Muhammad Makama",
      designation: "SIWES Student",
      src: "makama.jpeg",
    },
    {
      quote:
        "In InnoSpaceX I learn networking under networking we done Cisco packet Tracer, the we Encryption and Decryption and Window event viewer and the end we start Kali Linux",
      name: "Fatima Abubakar Imam",
      designation: "Cyber Security Student",
      src: "fatima.jpeg",
    },
    {
      quote:
        "In InnoSpaceX I learn networking under networking we done Cisco packet Tracer, the we Encryption and Decryption and Window event viewer and the end we start Kali Linux",
      name: "Suleman Musa Imam",
      designation: "Cyber Security Student",
      src: "sule.jpeg",
    },
  ];
  return (
    <div className="mt-16 bg-[#D7F0F4CC]">
      <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
    </div>
  );
}
