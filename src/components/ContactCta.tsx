import { ArrowRight } from "lucide-react";
export function ContactCta({ background, email }: { background: string; email: string }) {
  return <section id="contact" className="jc-cta" style={{ background }}><h3 className="jc-reveal">Let's Build a Digital World!</h3><p className="jc-reveal">Have a project in mind? I'd love to hear about it. Let's create something amazing together.</p><a href={`mailto:${email}`} className="jc-btn jc-reveal">Get In Touch <ArrowRight size={14} /></a></section>;
}
