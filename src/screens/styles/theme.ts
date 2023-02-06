import { extendTheme } from 'native-base'

export const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: '#5953c4',
      100: '#C8C6EC',
      200: '#B6ACAC',
    },
    // Redefinig only one shade, rest of the color will remain same.
    secondary: {
      50: '#C1C0CC',
      100: '#F05E5E',
    },
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
    mono: 'Roboto_500Medium',
  },
  fontSizes: {
    sm: 12,
    md: 16,
    lg: 20,
  },
})
