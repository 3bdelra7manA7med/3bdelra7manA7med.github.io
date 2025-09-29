import Link from "next/link";
import styles from "./Footer.module.css";
import { contactInfo } from "@/data/config";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.section}>
            <h3 className={styles.title}>Connect</h3>
            <div className={styles.links}>
              <a
                href={contactInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                GitHub
              </a>
              <a
                href={contactInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                LinkedIn
              </a>
              <a href={`mailto:${contactInfo.email}`} className={styles.link}>
                Email
              </a>
            </div>
          </div>

          <div className={styles.section}>
            <h3 className={styles.title}>Navigate</h3>
            <div className={styles.links}>
              <Link href="/" className={styles.link}>
                Home
              </Link>
              <Link href="/about" className={styles.link}>
                About
              </Link>
              <Link href="/projects" className={styles.link}>
                Projects
              </Link>
              <Link href="/contact" className={styles.link}>
                Contact
              </Link>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {new Date().getFullYear()} Abdelrahman Ahmed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
