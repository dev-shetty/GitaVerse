import Head from "next/head"
import GitaQuotes from "../components/gita-quotes"

export default function Home() {
  return (
    <div>
      <Head>
        <title>GitaVerse</title>
        <meta
          name="description"
          content="Chrome Extension for motivational Quotes from Gita"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen flex justify-center items-center">
        <h1>Hello World</h1>
      </main>
    </div>
  )
}
