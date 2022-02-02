import Footer from 'components/Footer/Footer.index'
import AboutSection from 'components/sections/AboutSection/AboutSection.index'
import WelcomeSection from 'components/sections/WelcomeSection/WelcomeSection.index'
import WorkSection from 'components/sections/WorkSection/WorkSection.index'

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
