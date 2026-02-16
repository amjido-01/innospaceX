import { HeroHeader } from "./header";
import ContactForm from "./contact-form";

export default function HubHero() {
  return (
    <div>
      <HeroHeader />
      <main className="overflow-x-hidden ">
        <section className="mt-18">
          <div
            className="pb-24 pt-12 md:pb-32 lg:py-18 bg-cover bg-center bg-no-repeat 
             overflow-hidden"
            //  bg-linear-to-br from-[#d9eaf7] via-[#e9eff8] to-[#faefe7]
            style={{ backgroundImage: 'url(/contact.png)' }}
          >
            <div className="mx-auto max-w-6xl">
              <div className="mxauto w-[100%] md:w-[60%] ">
                <h1 className="mt-4 text-[#09121D] tracking-[-4%] text-balance text-[42px] font-bold lg:text-6xl lg:mt16 xl:text-7xl leading-11.5 md:leading-[100%] lg:leading-[66.74px]">
                  Reach out to <span className="text-[#008AD8]">Innospace<span className="text-[#E68E40]">X</span></span>
                </h1>
                <p className="mt-3.5 lg:mt-6 lg:leading-8 text-pretty text-[16px] text-[#09121D] lg:text-[24px]">
                  We empower individuals to learn and innovate, and help
                  organizations grow through digital solutions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className="w-full -mt-[2rem]">
        <ContactForm />
      </div>
    </div>
  );
}
