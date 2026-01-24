import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '@/components/hero-section'
import Features from '@/components/features-1'
import IntegrationsSection from '@/components/integrations-8'
import ContentSection from '@/components/content-5'
import MentorshipSection from '@/components/mentorship'
import Impacts from '@/components/impacts'
import { AnimatedTestimonialsDemo } from '@/components/animated-testimonials'
import CallToAction from '@/components/call-to-action'
import CallToActionThree from '@/components/call-to-action-three'
import FooterSection from '@/components/footer'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <>
    <HeroSection />
    <Features />
    <IntegrationsSection />
    <ContentSection />
    <MentorshipSection />
    <Impacts />
    <AnimatedTestimonialsDemo />
    <CallToAction />
    <CallToActionThree />
    <FooterSection />
    </>
  )
}
