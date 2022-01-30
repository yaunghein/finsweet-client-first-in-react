import type { AppProps } from 'next/app'
import { PageWrapper, MainWrapper } from '@/base-components'
import 'styles/reset.css'
import 'styles/global.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PageWrapper>
      {/* //Nav */}
      <MainWrapper>
        <Component {...pageProps} />
      </MainWrapper>
      {/* //Footer */}
    </PageWrapper>
  )
}
