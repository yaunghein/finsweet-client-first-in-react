import { styled } from 'stitches.config'

const MaxWidth = styled('div', {
  width: '100%',
  variants: {
    size: {
      xxLarge: { maxWidth: '80rem' },
      xLarge: { maxWidth: '64rem' },
      large: { maxWidth: '48rem' },
      medium: { maxWidth: '32rem' },
      small: { maxWidth: '20rem' },
      xSmall: { maxWidth: '16rem' },
      xxSmall: { maxWidth: '12rem' },
    },
    marginAuto: {
      true: { margin: '0 auto' },
    },
  },
})

export default MaxWidth
