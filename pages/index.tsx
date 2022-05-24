import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { GetServerSideProps } from 'next'

const Home: NextPage = (props : any) => {
  return (
    <div>
      <header>

      </header>
      <main>
        <h1>{props.global.attributes.SiteName}</h1>
      </main>

      <footer>
       
      </footer>
    </div>
  )
}

export default Home
