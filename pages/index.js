import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starterrrrr!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my apppppppp!" />
        <p className="description">
          Get started by eddddditing <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
