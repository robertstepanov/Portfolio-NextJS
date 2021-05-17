import Link from 'next/link'
import styles from '../styles/Navbar.module.scss'

const Navbar = () => (
    <div className={styles.nav_container}>
    <div className={styles.nav_logo}>
       {/* Figure out how to add svg's */}
        <Link href="#home"><img src="/images/navlogo.svg" alt="Robert's Logo" /></Link>
        
    </div>
    <ul className={styles.nav_list}>
        <li><Link href="#home"><a>Home</a></Link></li>
        <li><Link href="#about"><a>About</a></Link></li>
        <li><Link href="#projects"><a>Projects</a></Link></li>
        <li><Link href="#contact"><a>Contact</a></Link></li>
        
    </ul>

    <style jsx>{`

      
      img {
        width: 250px;
        
         
      `}</style>
    </div>
);

export default Navbar;