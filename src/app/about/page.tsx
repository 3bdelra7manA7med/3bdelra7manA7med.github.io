import styles from "./about.module.css";
import { aboutInfo, personalInfo } from "@/data/config";

export default function About() {
  return (
    <div className={styles.about}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroContent}>
            <h1>About Me</h1>
            <p className={styles.heroSubtitle}>
              Get to know more about my journey, skills, and passions
            </p>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className={styles.bioSection}>
        <div className="container">
          <div className={styles.bioContent}>
            <div className={styles.bioText}>
              <h2>My Story</h2>
              <p>{aboutInfo.longBio}</p>
              <div className={styles.personalInfo}>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Location:</span>
                  <span>{personalInfo.location}</span>
                </div>
                <div className={styles.infoItem}>
                  <span className={styles.infoLabel}>Email:</span>
                  <span>{personalInfo.email}</span>
                </div>
              </div>
            </div>
            <div className={styles.bioAvatar}>
              <div className={styles.avatarPlaceholder}>
                <span>{personalInfo.name.charAt(0)}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.skillsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Technical Skills</h2>
          <div className={styles.skillsGrid}>
            {aboutInfo.skills.map((skill, index) => (
              <div key={index} className={styles.skillItem}>
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.experienceSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Experience</h2>
          <div className={styles.experienceList}>
            {aboutInfo.experience.map((exp, index) => (
              <div key={index} className={styles.experienceItem}>
                <div className={styles.experienceHeader}>
                  <h3>{exp.title}</h3>
                  <span className={styles.experiencePeriod}>{exp.period}</span>
                </div>
                <h4 className={styles.experienceCompany}>{exp.company}</h4>
                <p className={styles.experienceDescription}>
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interests Section */}
      <section className={styles.interestsSection}>
        <div className="container">
          <h2 className={styles.sectionTitle}>Interests & Hobbies</h2>
          <div className={styles.interestsGrid}>
            {aboutInfo.interests.map((interest, index) => (
              <div key={index} className={styles.interestItem}>
                <span>{interest}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
