import Head from 'next/head'
import Layout from '../components/Layout'
import Image from 'next/image'

const Landing = () => (
  <Layout>
    <div className="container">
      <Head>
          <title>Robert Stepanov Portfolio</title>
          <meta name="description" content="Welcome to my Portfolio" />
          <link rel="icon" href="/favicon.ico.png" />
      </Head>
      <div className="welcome">
        <h1>Helloooo!</h1>
        <a href="/moreProjects">More Projects</a>
      </div>
    </div>
  </Layout>
  );

  export default Landing;

