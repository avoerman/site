import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Alex Voerman</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Alex Voerman
        </h1>
      </main>

      <footer className={styles.footer}>
          <a href={"https://github.com/avoerman/site.git"}>https://github.com/avoerman/site.git</a>
      </footer>
    </div>
  )
}
