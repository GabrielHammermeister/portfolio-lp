// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
   export interface DefaultTheme {
      background: {
         primary: string
         secondary: string
      }
      text: {
         primary: string
         light: string
         dark: string
      }
   }
}
