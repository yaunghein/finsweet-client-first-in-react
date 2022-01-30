import { Text, PagePadding, Container, Padding, MaxWidth, Visibility } from '@/base-components'

export default function Home() {
  return (
    <section>
      <PagePadding>
        <Container size='large'>
          <Padding direction='vertical' space='xxLarge'>
            <MaxWidth size='xLarge' marginAuto>
              <Text as='h1' color='redish' size='huge' weight='bold'>
                FinSweet Client First into ReactJS
              </Text>
            </MaxWidth>
          </Padding>
        </Container>
      </PagePadding>
    </section>
  )
}
