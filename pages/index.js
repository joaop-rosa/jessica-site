import Head from 'next/head';
import styles from './index.module.css';

export default function Home() {
  return (
    <div className={styles.background}>
      <Head>
        <title>Jéssica Birck</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      

      

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
