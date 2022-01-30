import { styled } from 'stitches.config'

const Text = styled('p', {
  fontFamily: '$secondary',
  fontWeight: '500',
  fontSize: '$2',
  lineHeight: '$paragraph',
  textAlign: 'left',
  color: 'hsl($1)',

  variants: {
    font: {
      primary: { fontFamily: '$primary' },
    },
    weight: {
      bold: { fontWeight: '700' },
      semi: { fontWeight: '600' },
      thin: { fontWeight: '300' },
    },
    color: {
      blue: { color: 'hsl($2)' },
      gold: { color: 'hsl($3)' },
      orangy: { color: 'hsl($4)' },
      redish: { color: 'hsl($5)' },
    },
    align: {
      left: { textAlign: 'left' },
      center: { textAlign: 'center' },
      right: { textAlign: 'right' },
    },
    size: {
      huge: {
        fontSize: '$9',
        '@tablet': { fontSize: '$8' },
        '@mobileLandscape': { fontSize: '$6' },
      },
      large: {
        fontSize: '$8',
        '@tablet': { fontSize: '$7' },
        '@mobileLandscape': { fontSize: '$4' },
      },
      medium: {
        fontSize: '$5',
        '@tablet': { fontSize: '$4' },
        '@mobileLandscape': { fontSize: '$3' },
      },
    },
  },
})

export default Text
