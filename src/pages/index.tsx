import AboutSection from 'components/AboutSection/AboutSection.index'
import Footer from 'components/Footer/Footer.index'
import WelcomeSection from 'components/WelcomeSection/WelcomeSection.index'
import WorkSection from 'components/WorkSection/WorkSection.index'

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
