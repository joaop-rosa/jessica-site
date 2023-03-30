import Head from 'next/head';
import { Banner } from '../components/banner';
import { Header } from '../components/header';
import s from './index.module.css';

export default function Home() {
  return (
    <div className={s.background}>
      <Head>
        <title>Jéssica Birck</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className={s.container}>
          <Banner />

      </div>
     
      

    
    </div>
  )
}
