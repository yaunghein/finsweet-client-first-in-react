import { styled } from 'stitches.config'

const Visibility = styled('div', {
  variants: {
    hide: {
      all: { display: 'none' },
      tablet: {
        display: 'block',
        '@tablet': { display: 'none' },
      },
      mobileLandscape: {
        display: 'block',
        '@mobileLandscape': { display: 'none' },
      },
      mobilePortrait: {
        display: 'block',
        '@mobilePortrait': { display: 'none' },
      },
    },
    show: {
      all: { display: 'block' },
      tablet: {
        display: 'none',
        '@tablet': { display: 'block' },
      },
      mobileLandscape: {
        display: 'none',
        '@mobileLandscape': { display: 'block' },
      },
      mobilePortrait: {
        display: 'none',
        '@mobilePortrait': { display: 'block' },
      },
    },
  },
})

export default Visibility
