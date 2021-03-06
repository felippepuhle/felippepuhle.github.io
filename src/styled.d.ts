import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    isDarkMode: boolean
    colors: {
      main: string
      error: string
    }
  }
}
