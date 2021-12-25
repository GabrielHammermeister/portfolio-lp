import NavBar from 'components/NavBar/NavBar.index'
import WelcomeSection from 'components/WelcomeSection/WelcomeSection.index'
import { Layout } from 'styles/Global.styles'

export default function Home() {
   return (
      <>
         <NavBar />
         <Layout>
            <WelcomeSection />
         </Layout>
      </>
   )
}
