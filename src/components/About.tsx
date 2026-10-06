import { Download } from "lucide-react";

type Tech = { name: string; icon: string; svg?: string };
export function About({ technologies }: { technologies: Tech[] }) {
  return (
    <section id="about" className="jc-about">
      <div className="jc-reveal-left">
        <div className="jc-lbl">About Me</div>
        <h2>
          Building Solutions That
          <br />
          Make an Impact
        </h2>
        <p>
          An individual who is enthusiastic about exploring the world of
          information technology. Interested in web development, programming,
          and the application of digital solutions to support efficiency and
          innovation. Works collaboratively and is highly committed to producing
          quality results.
        </p>
        <a
          href="https://drive.google.com/file/d/1RF1t9CxyklRjNrM3IBkY14klxnwVZLiV/view?usp=drive_link"
          className="jc-btn"
        >
          Download CV <Download size={14} />
        </a>
      </div>
      <div className="jc-tech-stack jc-reveal-right">
        <div className="jc-stack-heading">
          <span>Tech Stack &amp; Tools</span>
          <i />
        </div>
        <div className="jc-stack-grid">
          {technologies.map((tech) => (
            <div
              className="jc-tech jc-reveal"
              key={tech.name}
              title={tech.name}
            >
              {tech.svg ? (
                <span
                  className="jc-tech-icon"
                  aria-hidden="true"
                  dangerouslySetInnerHTML={{ __html: tech.svg }}
                />
              ) : (
                <img src={tech.icon} alt={`${tech.name} logo`} loading="lazy" />
              )}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
