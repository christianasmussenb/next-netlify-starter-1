import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Partida!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenidos a my appp!" />
        <p className="description">
          Partir editando la seccion - <code>pages/index.js</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
