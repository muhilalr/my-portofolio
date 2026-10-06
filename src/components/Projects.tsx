import { ArrowRight, Award, ChevronDown } from "lucide-react";

type Tech = { name: string; icon: string; svg?: string };
type Project = { slug: string; t: string; stack: string[]; f: string; shots: string[]; description: string; features: string[] };
type Certificate = { t: string; o: string; images: string[] };

type ProjectsProps = {
  projects: Project[];
  certificates: Certificate[];
  technologies: Tech[];
  tab: "projects" | "certificates";
  expanded: boolean;
  onTabChange: (tab: "projects" | "certificates") => void;
  onToggleExpanded: () => void;
  onProjectOpen: (project: Project) => void;
  onCertificateOpen: (certificate: Certificate) => void;
};

export function Projects({ projects, certificates, technologies, tab, expanded, onTabChange, onToggleExpanded, onProjectOpen, onCertificateOpen }: ProjectsProps) {
  const techByName = (name: string) => technologies.find((tech) => tech.name === name);
  return <section id="projects" className="jc-sec jc-svc"><div className="jc-lbl jc-reveal">Selected Work</div><h2 className="jc-reveal">Projects &amp; Certificates</h2><div className="jc-bar" />
    <div className="jc-showcase-tabs" role="tablist" aria-label="Selected work type"><button type="button" role="tab" aria-selected={tab === "projects"} className={`jc-showcase-tab ${tab === "projects" ? "active" : ""}`} onClick={() => onTabChange("projects")}>Projects</button><button type="button" role="tab" aria-selected={tab === "certificates"} className={`jc-showcase-tab ${tab === "certificates" ? "active" : ""}`} onClick={() => onTabChange("certificates")}>Certificates</button></div>
    <div className="jc-showcase-grid" key={tab}>{tab === "projects" ? projects.slice(0, expanded ? projects.length : 3).map((project, index) => <article key={project.t} className="jc-showcase-card"><div className="jc-showcase-preview" style={{ background: project.shots[0] ? `url(${project.shots[0]}) center/cover no-repeat, ${project.f}` : project.f }}><span className="jc-showcase-index">0{index + 1} / PROJECT</span></div><div className="jc-showcase-body"><h3>{project.t}</h3><div className="jc-stack-row" aria-label={`Technology stack: ${project.stack.join(", ")}`}>{project.stack.map((name) => { const tech = techByName(name); return tech ? tech.svg ? <span key={name} className="jc-tech-icon" title={name} dangerouslySetInnerHTML={{ __html: tech.svg }} /> : <img key={name} src={tech.icon} alt={name} title={name} /> : null; })}</div><button type="button" className="jc-showcase-link" onClick={() => onProjectOpen(project)}>View Details <ArrowRight size={13} /></button></div></article>) : certificates.slice(0, expanded ? certificates.length : 3).map((certificate, index) => <article key={certificate.t} className="jc-showcase-card jc-certificate-card"><div><div className="jc-certificate-mark"><Award size={22} /><span>Certificate 0{index + 1}</span></div><h3>{certificate.t}</h3><p className="jc-certificate-org">{certificate.o}</p></div><div className="jc-certificate-footer"><button type="button" className="jc-showcase-link" onClick={() => onCertificateOpen(certificate)}>View Details <ArrowRight size={13} /></button></div></article>)}</div>
    {(tab === "projects" ? projects.length : certificates.length) > 3 && <button type="button" className={`jc-show-more ${expanded ? "expanded" : ""}`} onClick={onToggleExpanded}>{expanded ? "Show Less" : "Show More"}<ChevronDown size={14} /></button>}
  </section>;
}
