import { createFileRoute } from "@tanstack/react-router";
import ContactHero from "@/components/contact-hero";
import FAQsTwo from "@/components/faqs-2";
import CallToAction from "@/components/call-to-action";
import CallToActionThree from "@/components/call-to-action-three";
import FooterSection from "@/components/footer";
import MapSection from "@/components/map-section";

export const Route = createFileRoute("/contact")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <ContactHero />
      <MapSection />
      <FAQsTwo />
      <CallToAction />
      <CallToActionThree />
      <FooterSection />
    </div>
  );
}
