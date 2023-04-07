'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./Navbar.module.css";

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
];

const activeLink = {
  textDecoration: 'underline',
  color: 'blue'
}

const Navbar = () => {

  const path = usePathname();

  return (
    <nav className={styles.menu}>
      {
        menuItems.map(({ href, text }) => (
          <Link key={href} style={path === href ? activeLink : undefined} href={href}>{text}</Link>
        ))
      }
    </nav>
  );
}

export default Navbar;