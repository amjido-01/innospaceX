import { Button } from "@/components/ui/button";
import { HeroHeader } from "./header";
import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import { Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import { WhatsAppModal } from "./whatsapp-modal";

export default function HeroSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <HeroHeader />
      <main className="overflow-x-hidden">
        <section className="mt-18">
          <div
            className="pb-24 pt-12 md:pb-32 lg:py-18"
            style={{
              backgroundImage: `url('/herobg.svg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="px-2 md:px-0 md:flex-row px6 lgblock relative mx-auto max-w-6xl flex flex-col md:flex-row items-stretch">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.2,
                    },
                  },
                }}
                className="mxauto max-w-lg text-start sm:text-left md:text-left lg:ml-0 lg:w-1/2 "
              >
                <motion.div
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.5, ease: "easeOut" },
                    },
                  }}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-orange-300 rounded-full w-fit"
                >
                  <Sparkles
                    className="w-4 h-4 text-orange-400"
                    strokeWidth={2.5}
                  />
                  <span className="text-orange-400 font-medium text-sm">
                    Welcome to InnospaceX
                  </span>
                </motion.div>

                <motion.h1
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
                    visible: {
                      opacity: 1,
                      y: 0,
                      filter: "blur(0px)",
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  className="mt-4 max-w-2xl text-[#09121D] tracking-[-4%] text-balance text-[42px] font-bold lg:text-6xl lg:mt16 xl:text-7xl leading-11.5 md:leading-[100%] lg:leading-[66.74px]"
                >
                  Empowering The Next Generation of Innovators
                </motion.h1>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeOut" },
                    },
                  }}
                  className="mt-3.5 lg:mt-6 max-w-2xl lg:w-100 lg:leading-8 text-pretty text-[16px] text-[#09121D] lg:text-[24px]"
                >
                  We empower individuals to learn and innovate, and help
                  organizations grow through digital solutions.
                </motion.p>

                <motion.div
                  variants={{
                    hidden: { opacity: 0, scale: 0.9 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: {
                        type: "spring",
                        stiffness: 200,
                        damping: 20,
                      },
                    },
                  }}
                  className="mt-7.75 md:mt-4.5 lg:mt-13 flex justify-start flexcol items-center mdjustify-center gap-2 sm:flex-row lg:justify-start"
                >
                  <Button
                    onClick={() => setIsModalOpen(true)}
                    size="lg"
                    className="px-20 border-2 text-[22px] cursor-pointer font-bold border-white bg-[#E68E40] text-base hover:bg-[#ed994e]"
                  >
                    <span className="text-nowrap text-white">Get Started</span>
                  </Button>
                </motion.div>
              </motion.div>

              <div className="mt-7.5 md:mt-0 grid grid-cols-2 border2 gap-3 grid-rows-2 md:w-1/2">
                {/* Top left - VR image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="col-span-1 row-span-2"
                >
                  <img
                    src="/img3.jpeg"
                    alt="Person wearing VR headset with purple lighting"
                    className="w-75.25 sm:w-100 md:w-75.25 h-full object-cover rounded-3xl"
                  />
                </motion.div>

                {/* Top right - Workspace image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="col-span-1 row-span-1"
                >
                  <img
                    src="/robotics.jpg"
                    alt="Overhead view of workspace with laptops and tech"
                    className="w-75.25 sm:w-100 md:w-75.25 h-full object-cover rounded-3xl"
                  />
                </motion.div>

                {/* Bottom right - Team image */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
                  whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="col-span-1 row-span-1"
                >
                  <img
                    src="/sa.jpeg"
                    alt="People working together on tech project"
                    className="w-75.25 h-full sm:w-100 md:w-75.25 object-cover rounded-3xl"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-background pb-16 md:pb-32 mt-9.75">
          <div className="group relative m-auto max-w-6xl px-2">
            <div className="flex flex-col items-center md:flex-row">
              {/* TEXT CONTAINER */}
              <div className="md:max-w-95 md:pr6 md:border-r border-muted">
                <p className="textend text-sm md:text-base leading-relaxed">
                  We’ve worked and partnered with{" "}
                  <span className="font-semibold text-[#E68E40]">
                    20+ companies{" "}
                  </span>
                  and organizations across different industries.
                </p>
              </div>

              {/* LOGO SLIDER CONTAINER */}
              <div className="relative py-6 md:w-[calc(100%-16rem)]">
                <InfiniteSlider speedOnHover={10} speed={20} gap={50}>
                  <div className="flex">
                    <img
                      className="mx-auto h-15 w-fit dark:invert"
                      src="/asibiti.png"
                      alt="asibiti.ng Logo"
                      height="50"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-15 w-fit dark:invert"
                      src="/mata.png"
                      alt="mata a fasaha"
                      height="50"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-15 w-fit dark:invert"
                      src="/logo.png"
                      alt="innospacex"
                      height="50"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-15 w-fit dark:invert"
                      src="/bia.png"
                      alt="Bia"
                      height="50"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-15 w-fit dark:invert"
                      src="/wolf.png"
                      alt="Wolf auto mobile"
                      height="50"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-15 w-fit dark:invert"
                      src="/kk-l.jpeg"
                      alt="Laravel Logo"
                      height="50"
                      width="auto"
                    />
                  </div>
                  <div className="flex">
                    <img
                      className="mx-auto h-15 w-fit dark:invert"
                      src="/learnoch-logo.png"
                      alt="Lilly Logo"
                      height="50"
                      width="auto"
                    />
                  </div>
                  {/* <div className="flex">
                    <img
                      className="mx-auto h-6 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/openai.svg"
                      alt="OpenAI Logo"
                      height="24"
                      width="auto"
                    />
                  </div> */}
                </InfiniteSlider>

                {/* GRADIENT BLUR EDGES */}
                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-16"></div>
                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-16"></div>
                <ProgressiveBlur
                  className="pointer-events-none absolute left-0 top-0 h-full w-16"
                  direction="left"
                  blurIntensity={1}
                />
                <ProgressiveBlur
                  className="pointer-events-none absolute right-0 top-0 h-full w-16"
                  direction="right"
                  blurIntensity={1}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      <WhatsAppModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message="Hello! I want to get started with InnospaceX."
      />
    </>
  );
}
