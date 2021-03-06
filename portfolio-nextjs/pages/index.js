import Head from 'next/head'
import Layout from '../components/Layout'
import styles from '/styles/Landing.module.scss'

import Image from 'next/image'

const Landing = () => (
  <Layout>
    <div className={styles.container}>
      <Head>
          <title>Robert Stepanov Portfolio</title>
          <meta name="description" content="Welcome to my Portfolio" />
          <link rel="icon" href="/favicon.ico.png" />
      </Head>
      <Image
        className={styles.landingImage}
        src="/images/road_1920x1080.png"
        alt="windy road"
        layout='fill'
        objectFit='cover'
        objectPosition='centner'
        />
      <div className={styles.welcome}>
        <h1>Helloooo!</h1>
        <a href="/moreProjects">More Projects</a>
      </div>
      {/* <img src="images/road_1920x1080.png" alt="Winding Road" /> */}
    </div>
  </Layout>

  );

  export default Landing;

