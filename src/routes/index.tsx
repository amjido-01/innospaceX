import { createFileRoute } from '@tanstack/react-router'
import HeroSection from '@/components/hero-section'
import Features from '@/components/features-1'
import IntegrationsSection from '@/components/integrations-8'
import ContentSection from '@/components/content-5'
import MentorshipSection from '@/components/mentorship'

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
    </>
  )
}
