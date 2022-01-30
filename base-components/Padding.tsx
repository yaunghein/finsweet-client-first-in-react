import { styled } from 'stitches.config'

const Padding = styled('div', {
  variants: {
    space: {
      tiny: { padding: '.125rem' },
      xxSmall: { padding: '0.25rem' },
      xSmall: { padding: '0.5rem' },
      small: { padding: '1rem' },
      medium: {
        padding: '2rem',
        '@tablet': { padding: '1.5rem' },
        '@mobileLandscape': { padding: '1.5rem' },
      },
      large: {
        padding: '3rem',
        '@tablet': { padding: '2.5rem' },
        '@mobileLandscape': { padding: '1.5rem' },
      },
      xLarge: {
        padding: '4rem',
        '@tablet': { padding: '3rem' },
        '@mobileLandscape': { padding: '2rem' },
      },
      xxLarge: {
        padding: '5rem',
        '@tablet': { padding: '4rem' },
        '@mobileLandscape': { padding: '3rem' },
      },
      huge: {
        padding: '6rem',
        '@tablet': { padding: '5rem' },
        '@mobileLandscape': { padding: '3.5rem' },
      },
      xHuge: {
        padding: '8rem',
        '@tablet': { padding: '6rem' },
        '@mobileLandscape': { padding: '4rem' },
      },
      xxHuge: {
        padding: '12rem',
        '@tablet': { padding: '8rem' },
        '@mobileLandscape': { padding: '4.5rem' },
      },
    },
    direction: {
      top: { paddingLeft: '0rem', paddingRight: '0rem', paddingBottom: '0rem' },
      bottom: { paddingLeft: '0rem', paddingRight: '0rem', paddingTop: '0rem' },
      left: { paddingRight: '0rem', paddingTop: '0rem', paddingBottom: '0rem' },
      right: { paddingLeft: '0rem', paddingTop: '0rem', paddingBottom: '0rem' },
      vertical: { paddingLeft: '0rem', paddingRight: '0rem' },
      horizontal: { paddingTop: '0rem', paddingBottom: '0rem' },
    },
  },
})

export default Padding
