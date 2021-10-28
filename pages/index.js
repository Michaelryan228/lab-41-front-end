import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Pixar Theory</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div>
          <p>
            Boo is the old lady in "Brave"
          </p>
        </div>
      </main>

      <footer>
        <p>
          &copy;Michael Ryan 2021
        </p>
      </footer>
    </div>
  )
}
