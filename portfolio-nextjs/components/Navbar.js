import Link from 'next/link'

const Navbar = () => (
    <div className="nav-container">
    <div className="nav-logo">
        <img src="images/RS_favicon.png" alt="Robert Stepanov Logo" />
    </div>
    <ul>
        <li><Link href="#home"><a>Home</a></Link></li>
        <li><Link href="#about"><a>About</a></Link></li>
        <li><Link href="#projects"><a>Projects</a></Link></li>
        <li><Link href="#contact"><a>Contact</a></Link></li>
        
    </ul>

    <style jsx>{`

      .nav-container {
          background-color: #222;
      }

      img {
        width: 50px;
        
         
      `}</style>
    </div>
);

export default Navbar;