import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Field, FieldGroup } from "@/components/ui/field";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Link } from "@tanstack/react-router";

export default function ContactForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col gap-6 max-w-6xl mx-auto h-[600px]",
        className,
      )}
      {...props}
    >
      <Card className="overflow-hidden p-0 h-full">
        <CardContent className="grid p-0 md:grid-cols-2 h-full">
          <div className="relative hidden md:flex flex-col justify-center p-12 gap-4">
            <h1 className="text-[#09121D] font-semibold text-[45px] leading-[120%] tracking-tight">
              We are always Ready to help you and Answer your Questions{" "}
            </h1>
            <p className="text-[#09121D] text-[20px] leading-relaxed opacity-80">
              Experience What is Like To be at InnospaceX, Let add some more
              convincing english here
            </p>
          </div>
          <form className="p-6 md:p12 flex flex-col justify-center">
            <FieldGroup className="p-6 bg-[#FAFAFA] rounded-[10px]">
              <div className=" my-[40px] items-center gap-2 text-center">
                <h1 className="text-[32px] leading-[100%] text-[#09121D] font-bold">
                  Get in Touch
                </h1>
              </div>
              <Field>
                <Input
                  id="name"
                  type="text"
                  placeholder="John Doe"
                  required
                  className="h-[50px] placeholder:text-[#AAAAAA] placeholder:text-[14px] placeholder:font-regular leading-[100%] border-[#AAAAAA] border-[1px]"
                />
              </Field>
              <Field>
                <Input
                  id="email"
                  type="email"
                  placeholder="m@example.com"
                  required
                  className="h-[50px] placeholder:text-[#AAAAAA] placeholder:text-[14px] placeholder:font-regular leading-[100%] border-[#AAAAAA] border-[1px]"
                />
              </Field>
              <Field>
                <Input
                  id="subject"
                  type="text"
                  placeholder="Subject"
                  required
                  className="h-[50px] placeholder:text-[#AAAAAA] placeholder:text-[14px] placeholder:font-regular leading-[100%] border-[#AAAAAA] border-[1px]"
                />
              </Field>
              <Field>
                <Textarea
                  id="message"
                  placeholder="Message"
                  required
                  className="h[50px] placeholder:text-[#AAAAAA] placeholder:text-[14px] placeholder:font-regular leading-[100%] border-[#AAAAAA] border-[1px]"
                />
              </Field>
              <Field className="w-1/2">
                <Button
                  asChild
                  size="lg"
                  className="px-10 w-full border-2 text-[22px] font-bold border-white bg-[#E68E40] text-base hover:bg-[#ed994e]"
                >
                  <Link to="/">
                    <span className="text-nowrap text-white">Send Message</span>
                  </Link>
                </Button>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
