import '../styles/app.css'
import { SessionProvider } from 'next-auth/react'

import { Layout } from '@/components/Layout'

const App = ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default App
