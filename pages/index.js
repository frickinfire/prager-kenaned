import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kenan Thompson Fanpage</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img src="https://ntvb.tmsimg.com/assets/assets/73227_v9_bb.jpg?w=270&h=360">
        <p className="description">
         Get Kenaned, Dennis
        </p>
      </main>

      <Footer />
    </div>
  )
}
