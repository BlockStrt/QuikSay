import Head from 'next/head'
import React, {useState} from 'react'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import PopCard from '../components/popcard'
import PopTwo from '../components/poptwo'
import PopThree from '../components/popthree'
import PopFour from '../components/popfour'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [showModal, setShowModel] = useState(false);
  const [showModalTwo, setShowModelTwo] = useState(false);
  const [showModalThree, setShowModelThree] = useState(false);
  const [showModalFour, setShowModelFour] = useState(false);

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
            Do Not Enter
          </p>
          <div>
            <a
              href=""
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
            onClick={()=>{setShowModel(true)}}
            
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Events <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              I think you might want to be here.&nbsp;Come Quick!
            </p>
          </a>

          <a
            // href=""
            className={styles.card}
            onClick={()=>{setShowModelTwo(true)}}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              About Us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
            Anniversary Group is the sound of music’s most unique&nbsp;acts!
            </p>
          </a>

          <a
            // href=""
            className={styles.card}
            onClick={()=>{setShowModelThree(true)}}

            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Artist <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Visit acts of the new gen.&nbsp;
            </p>
          </a>

          <a
            // href=""
            className={styles.card}
            onClick={()=>{setShowModelFour(true)}}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>
              Contact Us <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Speak with us now!
            </p>
          </a>
        </div>
        { showModal ? (
          <div className={styles.popcard}>
        <PopCard/>
        <button
        className='closebutton'
        onClick={()=>{setShowModel(false)}}
        >Close</button>
        </div>
        
        ) : null}
        { showModalTwo ? (
          <div className={styles.popcard}>
        <PopTwo/>
        <button
        className='closebutton'
        onClick={()=>{setShowModelTwo(false)}}
        >Close</button>
        </div>
        
        ) : null}
        { showModalThree ? (
          <div className={styles.popcard}>
        <PopThree/>
        <button
        className='closebutton'
        onClick={()=>{setShowModelThree(false)}}
        >Close</button>
        </div>
        
        ) : null}
        { showModalFour ? (
          <div className={styles.popcard}>
        <PopFour/>
        <button
        className='closebutton'
        onClick={()=>{setShowModelFour(false)}}
        >Close</button>
        </div>
        
        ) : null}
      </main>
    </>
  )
}
