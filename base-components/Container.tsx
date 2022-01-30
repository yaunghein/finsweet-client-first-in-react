import { styled } from 'stitches.config'

const Container = styled('div', {
  width: '100%',
  margin: '0 auto',

  variants: {
    size: {
      huge: { maxWidth: '1920px' },
      large: { maxWidth: '1560px' },
      medium: { maxWidth: '1024px' },
      small: { maxWidth: '768px' },
    },
  },
})

export default Container
