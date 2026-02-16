import HubHero from '@/components/hub-hero'
import { createFileRoute } from '@tanstack/react-router'
import Resources from '@/components/resources'
import Team from '@/components/team'
import CallToAction from '@/components/call-to-action'
import CallToActionThree from '@/components/call-to-action-three'
import FooterSection from '@/components/footer'
export const Route = createFileRoute('/our-hub')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
   <HubHero />
   <Resources />
   <Team />
   <CallToAction />
   <CallToActionThree />
   <FooterSection />
  </div>
}
