import Link from "next/link";
import styles from "./page.module.css";
import { personalInfo } from "@/data/config";

export default function Home() {
  return (
    <div className={styles.home}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Hi, I&apos;m{" "}
                <span className={styles.highlight}>{personalInfo.name}</span>
              </h1>
              <h2 className={styles.heroSubtitle}>{personalInfo.title}</h2>
              <p className={styles.heroBio}>{personalInfo.bio}</p>
              <div className={styles.heroActions}>
                <Link
                  href="/projects"
                  className={`${styles.button} ${styles.buttonPrimary}`}
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className={`${styles.button} ${styles.buttonSecondary}`}
                >
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className={styles.heroAvatar}>
              <div className={styles.avatarPlaceholder}>
                <span>{personalInfo.name.charAt(0)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview */}
      <section className={styles.skillsPreview}>
        <div className="container">
          <h3 className={styles.sectionTitle}>What I Work With</h3>
          <div className={styles.skillsGrid}>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>⚛️</div>
              <h4>Frontend</h4>
              <p>React, Next.js, TypeScript</p>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>🔧</div>
              <h4>Backend</h4>
              <p>Node.js, Python, APIs</p>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>💾</div>
              <h4>Database</h4>
              <p>MongoDB, PostgreSQL</p>
            </div>
            <div className={styles.skillCard}>
              <div className={styles.skillIcon}>☁️</div>
              <h4>Cloud</h4>
              <p>AWS, Docker, Git</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Preview */}
      <section className={styles.projectsPreview}>
        <div className="container">
          <h3 className={styles.sectionTitle}>Featured Projects</h3>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <h4>E-Commerce Platform</h4>
              <p>Full-featured online store with payment integration</p>
              <div className={styles.projectTech}>
                <span>Next.js</span>
                <span>TypeScript</span>
                <span>Stripe</span>
              </div>
            </div>
            <div className={styles.projectCard}>
              <h4>Task Management App</h4>
              <p>Collaborative workspace with real-time updates</p>
              <div className={styles.projectTech}>
                <span>React</span>
                <span>Node.js</span>
                <span>Socket.io</span>
              </div>
            </div>
          </div>
          <div className={styles.projectsAction}>
            <Link
              href="/projects"
              className={`${styles.button} ${styles.buttonOutline}`}
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
