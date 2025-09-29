import Link from "next/link";
import styles from "./projects.module.css";
import { projects } from "@/data/config";

export default function Projects() {
  return (
    <div className={styles.projects}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>My Projects</h1>
            <p className={styles.heroSubtitle}>
              A collection of projects I&apos;ve worked on, showcasing my skills
              and creativity
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className={styles.projectsSection}>
        <div className="container">
          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <div key={project.id} className={styles.projectCard}>
                <div className={styles.projectImage}>
                  <div className={styles.imagePlaceholder}>
                    <span>{project.title.charAt(0)}</span>
                  </div>
                </div>

                <div className={styles.projectContent}>
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>

                  <div className={styles.projectTech}>
                    {project.technologies.map((tech, index) => (
                      <span key={index} className={styles.techTag}>
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className={styles.projectLinks}>
                    {project.liveUrl !== "#" ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.projectLink} ${styles.liveLink}`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Live Demo
                      </a>
                    ) : (
                      <span
                        className={`${styles.projectLink} ${styles.disabledLink}`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Coming Soon
                      </span>
                    )}
                    {project.githubUrl !== "#" ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.projectLink} ${styles.githubLink}`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        GitHub
                      </a>
                    ) : (
                      <span
                        className={`${styles.projectLink} ${styles.disabledLink}`}
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                        Coming Soon
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.ctaSection}>
        <div className="container">
          <div className={styles.ctaContent}>
            <h2>Want to work together?</h2>
            <p>
              I&apos;m always interested in new opportunities and
              collaborations.
            </p>
            <Link href="/contact" className={styles.ctaButton}>
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
