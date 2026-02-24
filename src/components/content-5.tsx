import { Play } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32 bg-[#FAFAFA]">
      <div className="mx-auto max-w-6xl space-y-8 px-2 md:space-y-12">
        <div className="mx-auto max-w-xl space--6 md:text-center md:space-y12">
          <h2 className="font-bold text-black tracking-tight text-4xl md:text-5xl leading-tight">
            Who We Are
          </h2>
          <p className="text-[#09121D] text-[15px] leading-relaxed">
           We exist to inspire innovation, develop skills, and connect communities through technology and collaboration.
          </p>
        </div>
        <img
          className="rounded-(--radius) h-137.5 object-cover mx-auto w-262.5"
          src="/d1.jpeg"
          alt="team image"
          height=""
          width=""
          loading="lazy"
        />

        <div className=" max-w-4xl text-center mx-auto">
            <p className="text-[#09121D] leading-9.5 text-[20px] font-normal">At InnospaceX, we inspire curiosity, drive technological growth, and support innovators of all ages and backgrounds. Through 21st-century skills and creative problem-solving, we empower individuals to become independent thinkers, creators, and leaders of tomorrow. We are also dedicated to delivering superior service that consistently meets and exceeds customer expectations. Our commitment to excellence ensures a remarkable experience for every client.</p>
        </div>

        <div className="relative mx-auto flex flex-col md:flex-row justify-between items-center gap-y-6">
            <div className="flex items-center gap-2">
          <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/maxleiter.png"
                alt="@maxleiter"
              />
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarImage
                src="https://github.com/evilrabbit.png"
                alt="@evilrabbit"
              />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
             <p className="text-[24px] leading-[100%] font-normal">
              <span className=" font-bold">20+</span> Clients and Partners
            </p>
            </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-orange-300 rounded-full bg-white w-fit ">
            <Play
              className="text-white bg-[#E68E40] w-8 h-8 p-1 border2 bg[#E68E40] rounded-full flex items-center justify-center textxl"
              strokeWidth={2.5}
            />
            <span className="text-orange-400 font-semibold leading-9 text-[20px]">
              See How We Work
            </span>
          </div>
          <div>
            <p className="text-[24px] leading-[100%] font-normal">
              Over <span className=" font-bold">100+</span> Students Graduated
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
