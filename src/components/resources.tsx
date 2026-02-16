import { Link } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'

export default function Resources() {
    return (
                <section className="pb-24 pt-12 mt-[94px]">
                        <div className="px-10 mx-auto max-w-6xl flex">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <h1 className="mt-8 font-bold text-balance md:text-[45px] leading-[100%] tracking-[-2px]">A Fully dedicated space and Resources for interns </h1>
                                <p className="mt-8 lg:leading-8 text-pretty text-[16px] text-[#09121D] lg:text-[24px]">We empower individuals to learn and innovate, and help organizations grow through digital solutions.</p>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
              asChild
              size="lg"
              className="px-[70px] border-2 text-[22px] font-bold border-white bg-[#E68E40] text-base hover:bg-[#ed994e] shadow"
            >
              <Link to="/">
                <span className="text-nowrap">Get Started</span>
              </Link>
            </Button>
                                  
                                </div>
                            </div>

                           <div className="w-1/2">
                             <img
                                className=""
                                src="/resource.png"
                                alt="Abstract Object"
                                height="400"
                                width="450"
                            />
                           </div>
                    </div>
                </section>
    )
}