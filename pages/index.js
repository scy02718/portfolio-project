import Image from 'next/image'
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>CHAN YOO</title>
      </Head>
    <Main/>
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  )
}
