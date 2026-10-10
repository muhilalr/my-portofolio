import { useEffect, useRef, useState } from "react";
import "./App.css";
import { About } from "./components/About";
import { CertificateModal } from "./components/CertificateModal";
import { ContactCta } from "./components/ContactCta";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Marquee } from "./components/Marquee";
import { Navbar } from "./components/Navbar";
import { ProjectModal } from "./components/ProjectModal";
import { Projects } from "./components/Projects";
import {
  bg,
  CERTIFICATES,
  CTA_BG,
  EMAIL,
  EXPERIENCES,
  HERO_BG,
  NAME,
  NAV,
  PHOTO,
  PROJECTS,
  TECH_STACK,
  TITLES,
} from "./data/portfolio";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const root = ref.current;
    if (!root) return;
    const revealSelector = ".jc-reveal,.jc-reveal-left,.jc-reveal-right,.jc-bar,.jc-showcase-card,.jc-timeline-item";
    const observed = new WeakSet<Element>();
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const parent = entry.target.closest(".jc-stack-grid,.jc-showcase-grid,.jc-timeline");
          if (parent) {
            const siblings = Array.from(parent.querySelectorAll(revealSelector));
            const isTechStack = parent.classList.contains("jc-stack-grid");
            (entry.target as HTMLElement).style.transitionDelay =
              `${siblings.indexOf(entry.target as Element) * (isTechStack ? 55 : 120)}ms`;
          }
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
            window.setTimeout(() => {
              (entry.target as HTMLElement).style.transitionDelay = "";
          }, parent?.classList.contains("jc-stack-grid") ? 450 : 750);
        }),
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" },
    );
    const observeNewElements = () => {
      root.querySelectorAll(revealSelector).forEach((element) => {
        if (!element.classList.contains("visible") && !observed.has(element)) {
          observed.add(element);
          observer.observe(element);
        }
      });
    };
    const mutations = new MutationObserver(observeNewElements);
    observeNewElements();
    mutations.observe(root, { childList: true, subtree: true });
    return () => { observer.disconnect(); mutations.disconnect(); };
  }, []);
  return ref;
}

export default function App() {
  const rootRef = useScrollReveal();
  const [titleIndex, setTitleIndex] = useState(0);
  const [typedTitle, setTypedTitle] = useState(() =>
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches
      ? TITLES[0]
      : "",
  );
  const [isDeleting, setIsDeleting] = useState(false);
  const [showcaseTab, setShowcaseTab] = useState<"projects" | "certificates">(
    "projects",
  );
  const [showcaseExpanded, setShowcaseExpanded] = useState({
    projects: false,
    certificates: false,
  });
  const [experienceExpanded, setExperienceExpanded] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    (typeof PROJECTS)[number] | null
  >(null);
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof CERTIFICATES)[number] | null
  >(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeCertificateSlide, setActiveCertificateSlide] = useState(0);
  const [activeNav, setActiveNav] = useState<string | null>(null);

  useEffect(() => {
    if (!selectedProject && !selectedCertificate) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedProject(null);
        setSelectedCertificate(null);
      }
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [selectedProject, selectedCertificate]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const title = TITLES[titleIndex];
    const complete = typedTitle === title;
    const empty = typedTitle.length === 0;
    const timer = window.setTimeout(
      () => {
        if (complete && !isDeleting) setIsDeleting(true);
        else if (empty && isDeleting) {
          setTitleIndex((index) => (index + 1) % TITLES.length);
          setIsDeleting(false);
        } else if (isDeleting)
          setTypedTitle(title.slice(0, typedTitle.length - 1));
        else setTypedTitle(title.slice(0, typedTitle.length + 1));
      },
      complete && !isDeleting ? 1800 : isDeleting ? 55 : 95,
    );
    return () => window.clearTimeout(timer);
  }, [isDeleting, titleIndex, typedTitle]);

  return (
    <div className="jc" id="home" ref={rootRef}>
      <Navbar items={NAV} activeItem={activeNav} onNavigate={setActiveNav} />
      <Hero
        background={bg(
          HERO_BG,
          "linear-gradient(180deg,#2a5b8f 0%,#17385c 35%,#0f2540 65%,#0a111f 100%)",
        )}
        photo={PHOTO}
        name={NAME}
        title={typedTitle}
      />
      <Marquee />
      <About technologies={TECH_STACK} />
      <Projects
        projects={PROJECTS}
        certificates={CERTIFICATES}
        technologies={TECH_STACK}
        tab={showcaseTab}
        expanded={showcaseExpanded[showcaseTab]}
        onTabChange={setShowcaseTab}
        onToggleExpanded={() =>
          setShowcaseExpanded((state) => ({
            ...state,
            [showcaseTab]: !state[showcaseTab],
          }))
        }
        onProjectOpen={(project) => {
          setSelectedProject(project);
          setActiveSlide(0);
        }}
        onCertificateOpen={(certificate) => {
          setSelectedCertificate(certificate);
          setActiveCertificateSlide(0);
        }}
      />
      <Experience
        items={EXPERIENCES}
        expanded={experienceExpanded}
        onToggle={() => setExperienceExpanded((state) => !state)}
      />
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          index={PROJECTS.indexOf(selectedProject)}
          technologies={TECH_STACK}
          slide={activeSlide}
          onClose={() => setSelectedProject(null)}
          onSlideChange={setActiveSlide}
        />
      )}
      {selectedCertificate && (
        <CertificateModal
          certificate={selectedCertificate}
          slide={activeCertificateSlide}
          onClose={() => setSelectedCertificate(null)}
          onSlideChange={setActiveCertificateSlide}
        />
      )}
      <ContactCta
        background={bg(
          CTA_BG,
          "linear-gradient(180deg,#2b4a86 0%,#1b2a52 55%,#0f1a34 100%)",
        )}
        email={EMAIL}
      />
      <Footer />
    </div>
  );
}
