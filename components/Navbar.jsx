import Link from 'next/link'
import { useState } from 'react';
import style from '../styles/Navbar.module.css'
const Navbar = () => {
  const [open, setOpen] = useState(false)
    return (
        <div className={style.container}>
            <Link href='/'>
                <a>AV0CAD0</a>
            </Link>
            <ul className={style.list}>
        <li className={style.listItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={style.listItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
      <div className={style.hamburger} onClick={() => setOpen(!open)}>
        <div className={style.line} />
        <div className={style.line} />
        <div className={style.line} />
      </div>
      <ul onClick={()=>setOpen(false)} className={style.menu} style={{ right: open ? "0px" : "-50vw" }}>
        <li className={style.menuItem}>
          <Link href="/">HOME</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/design">DESIGN</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/development">DEVELOPMENT</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/production">PRODUCTION</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/products/photography">PHOTOGRAPHY</Link>
        </li>
        <li className={style.menuItem}>
          <Link href="/contact">CONTACT</Link>
        </li>
      </ul>
        </div>
    );
};

export default Navbar;