import Image from "next/image";
import Link from "next/link";
import { FadeIn, StaggerContainer, StaggerItem } from "@/components/FadeIn";
import { projects } from "@/data/projects";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { ScrollProgress } from "@/components/ScrollProgress";
import { MagneticButton } from "@/components/MagneticButton";
import { GlowCard } from "@/components/GlowCard";

export default function Portfolio() {
  return (
    <>
      <ScrollProgress />
      <AnimatedBackground />
      <nav>
        <div className="nav-logo">Clinton Onaiwu</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        <section className="hero" id="about">
          <FadeIn direction="right" delay={0.1}>
            <div className="hero-content">
              <span className="hero-eyebrow">Mobile App Developer</span>
              <h1 className="hero-name">
                Clinton
                <br />
                <span>Onaiwu</span>
              </h1>
              <p className="hero-desc">
                Hi, I am a passionate React Native developer with 3+ years
                building robust, user-friendly cross-platform mobile apps.
                Specialising in performance, scalability, and seamless user
                experiences.
              </p>
              <div className="hero-cta">
                <MagneticButton
                  href="mailto:clintonnonaiwu@gmail.com"
                  variant="primary"
                >
                  Get in touch
                </MagneticButton>
                <MagneticButton
                  href="/Clinton%20Onaiwu%20Resume.pdf"
                  target="_blank"
                  variant="ghost"
                  rel="noopener noreferrer"
                >
                  Download CV
                </MagneticButton>
                <MagneticButton
                  href="https://github.com/clintOnSky"
                  variant="ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </MagneticButton>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={0.3}>
            <div className="hero-image-wrapper">
              <Image
                src="/new-profile.jpeg"
                alt="Clinton Onaiwu"
                width={160}
                height={160}
                className="hero-image"
                priority
              />
            </div>
          </FadeIn>
        </section>

        <div className="divider" />

        <section id="skills">
          <FadeIn>
            <span className="section-label">Expertise</span>
            <h2>Skills &amp; Tools</h2>
            <p className="section-desc">
              My core tech stack for building production-grade mobile
              applications.
            </p>
          </FadeIn>

          <StaggerContainer delay={0.2}>
            <div className="skills-grid">
              <StaggerItem>
                <GlowCard className="skill-card">
                  <h3>Frameworks</h3>
                  <div className="tags">
                    <span className="tag">React Native</span>
                    <span className="tag">Expo</span>
                    <span className="tag">Reanimated</span>
                    <span className="tag">Expo Router</span>
                  </div>
                </GlowCard>
              </StaggerItem>
              <StaggerItem>
                <GlowCard className="skill-card">
                  <h3>State Management</h3>
                  <div className="tags">
                    <span className="tag">TanStack Query</span>
                    <span className="tag">Zustand</span>
                    <span className="tag">Redux / RTK</span>
                    <span className="tag">Context API</span>
                  </div>
                </GlowCard>
              </StaggerItem>
              <StaggerItem>
                <GlowCard className="skill-card">
                  <h3>Languages</h3>
                  <div className="tags">
                    <span className="tag">TypeScript</span>
                    <span className="tag">JavaScript</span>
                  </div>
                </GlowCard>
              </StaggerItem>
              <StaggerItem>
                <GlowCard className="skill-card">
                  <h3>Native &amp; Tooling</h3>
                  <div className="tags">
                    <span className="tag teal">EAS</span>
                    <span className="tag teal">MMKV</span>
                    <span className="tag teal">HealthKit</span>
                    <span className="tag teal">Google Fit</span>
                    <span className="tag teal">Stream SDK</span>
                    <span className="tag teal">CI/CD</span>
                  </div>
                </GlowCard>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </section>

        <div className="divider" />

        <section id="experience">
          <FadeIn>
            <span className="section-label">Work History</span>
            <h2>Experience</h2>
          </FadeIn>
          <div className="timeline" style={{ marginTop: "2rem" }}>
            <FadeIn direction="up">
              <div className="timeline-item">
                <div className="timeline-meta">
                  <div className="timeline-date">Jul 2025 – Present</div>
                  <div className="timeline-loc">Nigeria · Remote</div>
                </div>
                <div>
                  <div className="timeline-company">Staymello</div>
                  <div className="timeline-role">
                    Senior Mobile App Developer
                  </div>
                  <div className="timeline-type">Full-time · 11 mos</div>
                  <div className="timeline-body">
                    Building cross-platform mobile applications using React Native and TypeScript, delivering performant and user-centric experiences.
                  </div>
                  <div className="metrics">
                    <span className="metric">React Native</span>
                    <span className="metric">TypeScript</span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up">
              <div className="timeline-item">
                <div className="timeline-meta">
                  <div className="timeline-date">May 2025 – Apr 2026</div>
                  <div className="timeline-loc">United States · Remote</div>
                </div>
                <div>
                  <div className="timeline-company">Totum LLC.</div>
                  <div className="timeline-role">
                    Senior Mobile App Developer
                  </div>
                  <div className="timeline-type">Full-time · 1 yr</div>
                  <div className="timeline-body">
                    Jointly leading the mobile development department, managing a dual-lead structure to scale application features and optimize performance. Architecting robust, secure, and user-centric mobile applications for both workout enthusiasts and studios. Implementing CI/CD pipelines that improved deployment frequency by 99%.
                  </div>
                  <div className="metrics">
                    <span className="metric">
                      99% deployment frequency improvement via CI/CD
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up">
              <div className="timeline-item">
                <div className="timeline-meta">
                  <div className="timeline-date">Jan 2025 – May 2025</div>
                  <div className="timeline-loc">Remote</div>
                </div>
                <div>
                  <div className="timeline-company">Belarush</div>
                  <div className="timeline-role">
                    Mobile Application Developer
                  </div>
                  <div className="timeline-type">Full-time · 5 months</div>
                  <div className="timeline-body">
                    Rebuilt the Belachow Vendor and Rider apps for Android and
                    iOS from the ground up based on new product designs.
                    Collaborated with backend and frontend teams for seamless
                    system integration, and maintained the Belachow User app.
                  </div>
                  <div className="metrics">
                    <span className="metric">30% performance improvement</span>
                    <span className="metric">
                      25% increase in user retention
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn direction="up">
              <div className="timeline-item">
                <div className="timeline-meta">
                  <div className="timeline-date">Sep 2023 – Apr 2026</div>
                  <div className="timeline-loc">Lagos State, Nigeria · Remote</div>
                </div>
                <div>
                  <div className="timeline-company">Supplya | Seamless B2B Marketplace</div>
                  <div className="timeline-role">
                    Founding Mobile App Developer
                  </div>
                  <div className="timeline-type">Full-time · 2 yrs 8 mos</div>
                  <div className="timeline-body">
                    Solely responsible for building and maintaining the company&apos;s cross-platform mobile app using React Native and Expo. Optimized functionality, improving speed by 15% and user satisfaction by 30%. Integrated third-party APIs and collaborated with cross-functional teams to deliver reliable, high-quality releases.
                  </div>
                  <div className="metrics">
                    <span className="metric">15% speed improvement</span>
                    <span className="metric">
                      30% boost in user satisfaction
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        <div className="divider" />

        <section id="projects">
          <FadeIn>
            <span className="section-label">Work</span>
            <h2>Featured Projects</h2>
          </FadeIn>
          <StaggerContainer delay={0.2}>
            <div className="projects-grid" style={{ marginTop: "2rem" }}>
              {projects.map((p) => (
                <StaggerItem key={p.slug}>
                  <Link
                    href={`/projects/${p.slug}`}
                    className="project-card-link"
                  >
                    <GlowCard className="project-card">
                      <div className="project-header">
                        <div>
                          <div className="project-name">{p.name}</div>
                          <div className="project-role">{p.role}</div>
                        </div>
                        <div className="project-icon">
                          <Image
                            src={p.icon}
                            alt={p.iconAlt}
                            width={48}
                            height={48}
                            style={{
                              objectFit: "cover",
                              width: "100%",
                              height: "100%",
                            }}
                          />
                        </div>
                      </div>
                      <div className="project-desc">{p.description}</div>
                      <div className="project-stack">
                        {p.stack.map((t) => (
                          <span key={t}>{t}</span>
                        ))}
                      </div>
                      <div className="project-links">
                        {p.links.slice(0, 2).map((l) => (
                          <span key={l.label} className="project-link">
                            {l.label}
                          </span>
                        ))}
                      </div>
                    </GlowCard>
                  </Link>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </section>

        <div className="divider" />

        <section id="education">
          <FadeIn>
            <span className="section-label">Background</span>
            <h2>Education</h2>
          </FadeIn>
          <StaggerContainer delay={0.2}>
            <div className="edu-grid" style={{ marginTop: "2rem" }}>
              <StaggerItem>
                <GlowCard className="edu-card">
                  <div>
                    <div className="edu-degree">
                      M.Sc. Information Technology
                    </div>
                    <div className="edu-school">
                      National Open University of Nigeria (NOUN)
                    </div>
                  </div>
                  <div className="edu-year">2022 – 2024</div>
                </GlowCard>
              </StaggerItem>
              <StaggerItem>
                <GlowCard className="edu-card">
                  <div>
                    <div className="edu-degree">B.Sc. Industrial Physics</div>
                    <div className="edu-school">University of Benin</div>
                  </div>
                  <div className="edu-year">2016 – 2021</div>
                </GlowCard>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </section>

        <div className="divider" />

        <section id="contact">
          <FadeIn>
            <span className="section-label">Let&apos;s Talk</span>
            <GlowCard className="contact-card">
              <h3>Open to opportunities</h3>
              <p>
                Whether it&apos;s a full-time role, freelance project, or just a
                conversation about mobile development — feel free to reach out.
              </p>
              <div className="contact-links">
                <MagneticButton
                  href="mailto:clintonnonaiwu@gmail.com"
                  variant="primary"
                >
                  Email
                </MagneticButton>
                <MagneticButton
                  href="https://www.linkedin.com/in/clinton-onaiwu/"
                  variant="ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </MagneticButton>
                <MagneticButton
                  href="https://github.com/clintOnSky"
                  variant="ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </MagneticButton>
              </div>
            </GlowCard>
          </FadeIn>
        </section>
      </main>

      <footer>
        <FadeIn>Built with care · Clinton Onaiwu · 2025</FadeIn>
      </footer>
    </>
  );
}
