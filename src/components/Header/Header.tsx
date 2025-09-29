"use client";

import Link from "next/link";
import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            Abdelrahman
          </Link>

          <button
            className={styles.menuButton}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </span>
          </button>

          <div
            className={`${styles.menu} ${isMenuOpen ? styles.menuOpen : ""}`}
          >
            <Link
              href="/"
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/projects"
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </Link>
            <Link
              href="/contact"
              className={styles.navLink}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
