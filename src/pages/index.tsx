import Footer from 'components/Footer/Footer.index'
import { AboutSection } from 'components/Sections/AboutSection/AboutSection.index'
import WelcomeSection from 'components/Sections/WelcomeSection/WelcomeSection.index'
import WorkSection from 'components/Sections/WorkSection/WorkSection.index'

export default function Home() {
   return (
      <>
         <WelcomeSection />
         <AboutSection />
         <WorkSection />
         <Footer />
      </>
   )
}
