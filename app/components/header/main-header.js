import logoImg from "@/assets/logo.png";
import Image from "next/image";
import MainHeaderBackground from "@/app/components/header/main-header-background";
import NavLink from "./nav-link";

import classes from "./main-header.module.css";
import Link from "next/link";

export default function Header() {
  const navLinks = [
    { href: "/meals", label: "Browse Meals" },
    { href: "/community", label: "Foodies Community" },
  ];

  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link href="/" className={classes.logo}>
          <Image src={logoImg} alt="Logo" priority />
          NextLevel Food
        </Link>
        <nav className={classes.nav}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <NavLink href={link.href}>{link.label}</NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
}
