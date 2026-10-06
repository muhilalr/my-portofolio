import { ArrowRight, Mail, User } from "lucide-react";

type HeroProps = { background: string; photo: string; name: { first: string; last: string }; title: string };

export function Hero({ background, photo, name, title }: HeroProps) {
  return (
    <header className="jc-hero" style={{ background }}>
      {photo ? <div className="jc-photo-wrap">
        <div className="jc-photo-glow" /><div className="jc-photo-ring2" /><div className="jc-photo-ring" />
        <div className="jc-photo-frame"><img className="jc-photo" src={photo} alt={`${name.first} ${name.last}`} /></div>
        <div className="jc-photo-dot d1" /><div className="jc-photo-dot d2" /><div className="jc-photo-dot d3" /><div className="jc-photo-dot d4" />
        <div className="jc-photo-status"><span>Available for Work</span><small>Open to meaningful projects</small></div>
        <div className="jc-orbit-note"><span>BUILD</span><i /><span>SHIP</span><i /><span>SCALE</span></div>
      </div> : <div className="jc-ph"><User size={380} strokeWidth={1} /></div>}
      <div className="jc-hero-in">
        <div className="jc-hello">Hello, I'm</div>
        <h1>{name.first} {name.last}<span>{title}<i className="jc-cursor" /></span></h1>
        <p className="d">Passionate about pursuing a career as a Software Engineer and leveraging technology to develop digital solutions that improve efficiency and drive innovation.</p>
        <div className="jc-cta-row"><a href="#projects" className="jc-btn">View My Work <ArrowRight size={14} /></a><a href="#contact" className="jc-btn ghost"><Mail size={14} /> Contact Me</a></div>
      </div>
    </header>
  );
}
