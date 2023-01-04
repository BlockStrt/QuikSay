import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Quiksay" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Need a fairly perfect essay?
          </p>
          <div>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              By{' '}
              <Image
                src="/notreal.jpg"
                alt="Vercel Logo"
                className={styles.vercelLogo}
                width={100}
                height={100}
                priority
              />
            </a>
          </div>
        </div>

        <div className={styles.center}>
          <Image
            className={styles.logo}
            src="/anni.svg"
            alt="Next.js Logo"
            width={180}
            height={370}
            priority
          />
          <div className={styles.thirteen}>
            <Image
              src="/anni.svg"
              alt="13"
              width={300}
              height={90}
              priority
            />
          </div>
        </div>

        <div className={styles.grid}>
          <a
           
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Smting Convincing <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Explaining why this works and&nbsp;How fast.
            </p>
          </a>

          <a
            // href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Learn <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Reasons why you'll learn using our&nbsp;service!
            </p>
          </a>

          <a
            // href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Simple about us&nbsp; display papers already written.
            </p>
          </a>

          <a
            // href=""
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Start Now <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Instantly write a well written essay you can comfortably learn from
              in a fashionable amount of&nbsp;time.
            </p>
          </a>
        </div>
      </main>
    </>
  )
}
