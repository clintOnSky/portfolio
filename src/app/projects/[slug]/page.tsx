import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeIn } from "@/components/FadeIn";
import { getAllProjectSlugs, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.name} — Clinton Onaiwu`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="detail-page">
      <nav>
        <div className="nav-logo">
          <Link href="/#projects" className="detail-back">
            ← Back to Projects
          </Link>
        </div>
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
        <section className="detail-hero" id="overview">
          <FadeIn direction="right">
            <div className="detail-hero-content">
              <span className="detail-eyebrow">{project.role}</span>
              <h1 className="detail-name">{project.name}</h1>
              <p className="detail-desc">{project.overview}</p>
              {project.metrics.length > 0 && (
                <div className="metrics">
                  {project.metrics.map((m) => (
                    <span className="metric" key={m}>{m}</span>
                  ))}
                </div>
              )}
            </div>
          </FadeIn>
          <FadeIn direction="left">
            <Image
              src={project.icon}
              alt={project.iconAlt}
              width={160}
              height={160}
              className="hero-image"
              priority
            />
          </FadeIn>
        </section>

        {project.techDeepDive.length > 0 && (
          <>
            <div className="divider" />
            <section className="detail-section" id="technical">
              <FadeIn>
                <span className="section-label">Under the Hood</span>
                <h2>Technical Deep Dive</h2>
              </FadeIn>
              <div className="tech-deep-dive" style={{ marginTop: "2rem" }}>
                {project.techDeepDive.map((t, i) => (
                  <FadeIn key={t.title} direction="up" delay={i * 0.1}>
                    <div className="tech-card">
                      <h3>{t.title}</h3>
                      <p>{t.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>
            </section>
          </>
        )}

        <div className="divider" />
        <section className="detail-section" id="stack">
          <FadeIn>
            <span className="section-label">Built With</span>
            <h2>Tech Stack</h2>
          </FadeIn>
          <div className="tags" style={{ marginTop: "1.5rem" }}>
            {project.stack.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
        </section>

        {project.links.length > 0 && (
          <>
            <div className="divider" />
            <section className="detail-section" id="links">
              <FadeIn>
                <span className="section-label">Try It</span>
                <h2>Links</h2>
              </FadeIn>
              <div className="project-links" style={{ marginTop: "1.5rem" }}>
                {project.links.map((l) => (
                  <a
                    key={l.label}
                    className="project-link"
                    href={l.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {l.label}
                  </a>
                ))}
              </div>
            </section>
          </>
        )}

        <div className="divider" />
        <section className="detail-section">
          <FadeIn>
            <div className="contact-card">
              <h3>Interested in working together?</h3>
              <p>
                Whether it&apos;s a full-time role, freelance project, or just a
                conversation about mobile development — feel free to reach out.
              </p>
              <div className="contact-links">
                <a
                  href="mailto:clintonnonaiwu@gmail.com"
                  className="btn-primary"
                >
                  Email
                </a>
                <a
                  href="https://www.linkedin.com/in/clinton-onaiwu/"
                  className="btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/clintOnSky"
                  className="btn-ghost"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <footer>
        <FadeIn>Built with care · Clinton Onaiwu · 2025</FadeIn>
      </footer>
    </div>
  );
}
