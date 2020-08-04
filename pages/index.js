import Head from 'next/head'
import Link from 'next/link';
import Router from 'next/router';

import styles from '../styles/Home.module.css'



const onClickHandler = (event) => {

    Router.push('/' + event.currentTarget.id);
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Voksne barn Trondheim</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to vbt
        </h1>

        <div className={styles.grid}>
          <a className={styles.card}  id="meetings" onClick={(event) => onClickHandler(event)}>
              <h3>Meetings &rarr;</h3>
            <p>Find out our meeting location and times</p>
          </a>

          <a className={styles.card} id="adultchildren" onClick={(event) => onClickHandler(event)}>
            <h3>Am I and adult children? &rarr;</h3>
            <p>Discover if you are an adult children like us</p>
          </a>

          <a className={styles.card} id="events" onClick={(event) => onClickHandler(event)}>
            <h3>Events &rarr;</h3>
            <p>Join us in some of our events</p>
          </a>

            <a className={styles.card} id="announcements" onClick={(event) => onClickHandler(event)}>
                <h3>Announcements &rarr;</h3>
                <p>Here you can read our announcements</p>
            </a>
        </div>
      </main>

    </div>
  )
}
