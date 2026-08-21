import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const projects = [
    {
      number: "01",
      type: "FULL STACK APPLICATION",
      title: "FinSight",
      description:
        "A smart personal finance management platform for tracking income, expenses, savings and financial goals.",
      tech: ["React", "Spring Boot", "MySQL", "REST API"],
      github: "https://github.com/shivamyadav153/FinSight",
      color: "purple",
    },
    {
      number: "02",
      type: "WEB APPLICATION",
      title: "Rock Paper Scissors",
      description:
        "An interactive browser-based game with dynamic game logic and a clean responsive user interface.",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/shivamyadav153/Game-Rock-Paper-Scissors-",
      color: "blue",
    },
    {
      number: "03",
      type: "FRONTEND APPLICATION",
      title: "To-Do Application",
      description:
        "A responsive task management application designed to create, manage and track daily tasks efficiently.",
      tech: ["React", "JavaScript", "CSS"],
      github: "#",
      color: "pink",
    },
  ];

  const skills = [
    ["Java", "90%", "☕"],
    ["JavaScript", "85%", "JS"],
    ["React", "82%", "⚛"],
    ["Spring Boot", "78%", "SB"],
    ["SQL / MySQL", "85%", "DB"],
    ["DSA", "80%", "⌘"],
  ];

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      {/* BACKGROUND */}
      <div className="background-grid"></div>
      <div className="background-glow glow-one"></div>
      <div className="background-glow glow-two"></div>

      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#home" className="logo" onClick={closeMenu}>
          Shivam Yadav<span>.</span>
        </a>

        <div className={menuOpen ? "nav-links active" : "nav-links"}>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" onClick={closeMenu}>
            About
          </a>

          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>

          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>

          <a href="#experience" onClick={closeMenu}>
            Experience
          </a>

          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </div>

        <div className="nav-actions">
          <button
            className="theme-btn"
            onClick={() => setDarkMode((prev) => !prev)}
            aria-label="Toggle theme"
          >
            {darkMode ? "☀" : "☾"}
          </button>

          <button
            className="menu-btn"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* MAIN */}
      <main>
        {/* HERO */}
        <section id="home" className="hero">
          <div className="hero-left">
            <div className="status-badge">
              <span className="status-dot"></span>
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="hero-small">HELLO, I'M</p>

            <h1>
              Shivam <span>Yadav</span>
            </h1>

            <div className="role-line">
              <span className="role-prefix">&lt;</span>
              Software Developer
              <span className="role-suffix">/&gt;</span>
              <span className="role-cursor">|</span>
            </div>

            <p className="hero-description">
              Computer Science & Engineering student passionate about{" "}
              <strong>Java, DSA and Full Stack Development.</strong> I build
              modern, scalable and user-friendly applications that solve
              real-world problems.
            </p>

            <div className="hero-buttons">
              <a href="#projects" className="primary-btn">
                View My Work <span>↓</span>
              </a>

              <a
                href={`${import.meta.env.BASE_URL}shivam resume11.pdf`}
                download
                className="outline-btn"
              >
                ↓ Download Resume
              </a>
            </div>

            <div className="hero-socials">
              <a
                href="https://github.com/shivamyadav153"
                target="_blank"
                rel="noreferrer"
              >
                <span>GH</span>
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/shivam-yadav-b95779303"
                target="_blank"
                rel="noreferrer"
              >
                <span>in</span>
                LinkedIn
              </a>

              <a href="mailto:shivamy13072002@gmail.com">
                <span>@</span>
                Email
              </a>
            </div>
          </div>

          {/* PROFILE */}
          <div className="hero-right">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>

            <div className="profile-wrapper">
              <div className="profile-ring"></div>

              <div className="profile-image-container">
                <img
                  src={`${import.meta.env.BASE_URL}profile.jpg`}
                  alt="Shivam Yadav"
                  className="profile-image"
                />
              </div>
            </div>

            <div className="tech-badge badge-java">
              <span>☕</span>
              Java
            </div>

            <div className="tech-badge badge-react">
              <span>⚛</span>
              React
            </div>

            <div className="tech-badge badge-spring">
              <span>SB</span>
              Spring Boot
            </div>

            <div className="tech-badge badge-dsa">
              <span>⌘</span>
              DSA
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats">
          <div className="stat">
            <strong>3+</strong>
            <span>PROJECTS BUILT</span>
          </div>

          <div className="stat">
            <strong>5+</strong>
            <span>TECHNOLOGIES</span>
          </div>

          <div className="stat">
            <strong>100+</strong>
            <span>DSA PROBLEMS</span>
          </div>

          <div className="stat">
            <strong>∞</strong>
            <span>LEARNING MINDSET</span>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="section-label">
            <span>01</span>
            GET TO KNOW ME
          </div>

          <div className="section-title-row">
            <h2>
              About <span>Me</span>
            </h2>

            <p>
              A developer focused on building practical solutions and
              continuously improving technical skills.
            </p>
          </div>

          <div className="about-grid">
            <div className="about-main-card">
              <div className="card-number">01 / PROFILE</div>

              <h3>Building ideas into digital experiences.</h3>

              <p>
                I am a Computer Science and Engineering student with a strong
                interest in software development. I enjoy solving programming
                problems, learning new technologies and building real-world
                projects.
              </p>

              <p>
                My primary interests include Java, Data Structures & Algorithms,
                Full Stack Development and backend development using Spring
                Boot.
              </p>

              <div className="about-tags">
                <span>Problem Solving</span>
                <span>Clean Code</span>
                <span>Full Stack</span>
                <span>Continuous Learning</span>
              </div>
            </div>

            <div className="about-side-card">
              <div className="mini-icon">⌘</div>

              <h3>My Approach</h3>

              <p>
                Understand the problem → Design the solution → Build it → Test
                it → Improve it.
              </p>

              <div className="approach-line"></div>

              <span>ALWAYS LEARNING. ALWAYS BUILDING.</span>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-label">
            <span>02</span>
            MY TOOLKIT
          </div>

          <div className="section-title-row">
            <h2>
              Skills & <span>Technologies</span>
            </h2>

            <p>
              Technologies I use to turn ideas into reliable and scalable
              applications.
            </p>
          </div>

          <div className="skills-container">
            <div className="skills-list">
              {skills.map((skill) => (
                <div className="skill-item" key={skill[0]}>
                  <div className="skill-info">
                    <div className="skill-name">
                      <span className="skill-symbol">{skill[2]}</span>
                      {skill[0]}
                    </div>

                    <span>{skill[1]}</span>
                  </div>

                  <div className="skill-bar">
                    <div
                      className="skill-progress"
                      style={{ width: skill[1] }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="stack-card">
              <div className="stack-card-header">
                <span>TECH STACK</span>
                <span className="pulse"></span>
              </div>

              <div className="stack-grid">
                <div>
                  <strong>Languages</strong>
                  <p>Java</p>
                  <p>JavaScript</p>
                  <p>Python</p>
                  <p>C++</p>
                </div>

                <div>
                  <strong>Frontend</strong>
                  <p>React</p>
                  <p>HTML</p>
                  <p>CSS</p>
                  <p>Vite</p>
                </div>

                <div>
                  <strong>Backend</strong>
                  <p>Spring Boot</p>
                  <p>Node.js</p>
                  <p>REST API</p>
                </div>

                <div>
                  <strong>Tools</strong>
                  <p>Git</p>
                  <p>GitHub</p>
                  <p>MySQL</p>
                  <p>Docker</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section">
          <div className="section-label">
            <span>03</span>
            SELECTED WORK
          </div>

          <div className="section-title-row">
            <h2>
              Featured <span>Projects</span>
            </h2>

            <p>
              Some of the projects I have built while learning and applying
              software development concepts.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <div
                className={`project-card ${project.color}`}
                key={project.number}
              >
                <div className="project-card-top">
                  <span className="project-number">{project.number}</span>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="project-github"
                  >
                    GitHub ↗
                  </a>
                </div>

                <div className="project-icon">{"</>"}</div>

                <div className="project-type">{project.type}</div>

                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-view"
                >
                  View Project
                  <span>↗</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="section">
          <div className="section-label">
            <span>04</span>
            JOURNEY
          </div>

          <div className="section-title-row">
            <h2>
              Education & <span>Experience</span>
            </h2>

            <p>My learning journey and experience in software development.</p>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span className="timeline-date">
                  COMPUTER SCIENCE & ENGINEERING
                </span>

                <h3>B.Tech — Computer Science</h3>

                <p>
                  Currently pursuing Computer Science and Engineering with focus
                  on programming, DSA, software development and modern web
                  technologies.
                </p>

                <div className="timeline-tags">
                  <span>Java</span>
                  <span>DSA</span>
                  <span>DBMS</span>
                  <span>Web Development</span>
                </div>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-dot"></div>

              <div className="timeline-content">
                <span className="timeline-date">PROJECT DEVELOPMENT</span>

                <h3>Full Stack Development</h3>

                <p>
                  Built practical projects using React, Spring Boot, MySQL,
                  JavaScript and REST APIs while working on real-world
                  application ideas.
                </p>

                <div className="timeline-tags">
                  <span>React</span>
                  <span>Spring Boot</span>
                  <span>MySQL</span>
                  <span>GitHub</span>
                  <span>REST API</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="contact-inner">
            <div className="section-label">
              <span>05</span>
              LET'S CONNECT
            </div>

            <h2>
              Let's Build <span>Something Great.</span>
            </h2>

            <p>
              I'm open to discussing software development opportunities,
              projects, internships and interesting ideas.
            </p>

            <div className="contact-buttons">
              <a
                href="mailto:shivamy13072002@gmail.com"
                className="primary-btn"
              >
                ✉ Say Hello
              </a>

              <a
                href="https://www.linkedin.com/in/shivam-yadav-b95779303"
                target="_blank"
                rel="noreferrer"
                className="outline-btn"
              >
                LinkedIn ↗
              </a>
            </div>

            <p className="contact-email">shivamy13072002@gmail.com</p>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-brand">
          Shivam<span>.</span>
        </div>

        <p>© 2026 Shivam Yadav. Built with React.</p>

        <div className="footer-socials">
          <a
            href="https://github.com/shivamyadav153"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/shivam-yadav-b95779303"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:shivamy13072002@gmail.com">Email</a>
        </div>
      </footer>

      {/* BACK TO TOP */}
      {showTop && (
        <a href="#home" className="back-top">
          ↑
        </a>
      )}
    </div>
  );
}

export default App;
