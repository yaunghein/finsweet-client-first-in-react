import { styled } from 'stitches.config'

const Margin = styled('div', {
  variants: {
    space: {
      tiny: { margin: '.125rem' },
      xxSmall: { margin: '0.25rem' },
      xSmall: { margin: '0.5rem' },
      small: { margin: '1rem' },
      medium: {
        margin: '2rem',
        '@tablet': { margin: '1.5rem' },
        '@mobileLandscape': { margin: '1.5rem' },
      },
      large: {
        margin: '3rem',
        '@tablet': { margin: '2.5rem' },
        '@mobileLandscape': { margin: '1.5rem' },
      },
      xLarge: {
        margin: '4rem',
        '@tablet': { margin: '3rem' },
        '@mobileLandscape': { margin: '2rem' },
      },
      xxLarge: {
        margin: '5rem',
        '@tablet': { margin: '4rem' },
        '@mobileLandscape': { margin: '3rem' },
      },
      huge: {
        margin: '6rem',
        '@tablet': { margin: '5rem' },
        '@mobileLandscape': { margin: '3.5rem' },
      },
      xHuge: {
        margin: '8rem',
        '@tablet': { margin: '6rem' },
        '@mobileLandscape': { margin: '4rem' },
      },
      xxHuge: {
        margin: '12rem',
        '@tablet': { margin: '8rem' },
        '@mobileLandscape': { margin: '4.5rem' },
      },
    },
    direction: {
      top: { marginLeft: '0rem', marginRight: '0rem', marginBottom: '0rem' },
      bottom: { marginLeft: '0rem', marginRight: '0rem', marginTop: '0rem' },
      left: { marginRight: '0rem', marginTop: '0rem', marginBottom: '0rem' },
      right: { marginLeft: '0rem', marginTop: '0rem', marginBottom: '0rem' },
      vertical: { marginLeft: '0rem', marginRight: '0rem' },
      horizontal: { marginTop: '0rem', marginBottom: '0rem' },
    },
    auto: {
      true: { margin: '0 auto' },
    },
  },
})

export default Margin
