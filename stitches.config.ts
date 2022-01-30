import { createStitches } from '@stitches/react'

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      //hsl value
      1: '197, 37%, 24%', //dark blue
      2: '173, 58%, 39%', //blue
      3: '43, 74%, 66%', //gold
      4: '27, 87%, 67%', //orangy
      5: '12, 76%, 61%', //redish
    },
    fonts: {
      primary: 'Ubuntu',
      secondary: 'Segoe UI',
    },
    fontSizes: {
      1: '0.75rem', //12px
      2: '1rem', //16px
      3: '1.25rem', //20px
      4: '1.75rem', //28px
      5: '2rem', //32px
      6: '2.25rem', //36px
      7: '2.5rem', //40px
      8: '3rem', //48px
      9: '4rem', //64px
    },
    lineHeights: {
      heading: '1.2',
      paragraph: '1.6',
    },
  },
  media: {
    largeScreen: '(min-width: 1560px)',
    desktop: '(max-width: 1200px)',
    tablet: '(max-width: 990px)',
    mobileLandscape: '(max-width: 720px)',
    mobilePortrait: '(max-width: 480px)',
  },
})
