import Layout from '../components/Layout'
import Head from 'next/head'
import Link from 'next/link'

const MoreProjects = () => (
 
    
        <div className="container">
            <Head>
                <title>Robert Stepanov Portfolio</title>
                <meta name="description" content="More of my work" />
                <link rel="icon" href="/favicon.ico.png" />
            </Head>
            <div className="home-nav"><Link href="/"><a>Return Home</a></Link></div>
            <div className="more-projects">
                <h1>More Projects</h1>
            </div>
        </div>
    
  );

  export default MoreProjects;