import Link from 'next/link'

const Navbar = () => (
    <ul>
        <li><Link href="#home"><a>Home</a></Link></li>
        <li><Link href="#about"><a>About</a></Link></li>
        <li><Link href="#projects"><a>Projects</a></Link></li>
        <li><Link href="#contact"><a>Contact</a></Link></li>
        
    </ul>
);

export default Navbar;