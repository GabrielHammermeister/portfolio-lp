// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
   export interface DefaultTheme {
      primary: string
      primaryVariant: string
      secondary: string
      secondaryVariant: string
      dark: string
      light: string
   }
}
