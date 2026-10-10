import { BriefcaseBusiness } from "lucide-react";

type NavbarProps = {
  items: string[];
  activeItem: string | null;
  onNavigate: (item: string) => void;
};

export function Navbar({ items, activeItem, onNavigate }: NavbarProps) {
  return (
    <nav className="jc-nav">
      <a
        href="https://muhilalr.vercel.app"
        className="jc-logo"
        onClick={() => onNavigate("Home")}
      >
        <b>
          <span>Muhilal</span>
        </b>
      </a>
      <div className="jc-links">
        {items.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className={activeItem === item ? "on" : ""}
            onClick={() => onNavigate(item)}
          >
            {item}
          </a>
        ))}
      </div>
      <a href="#contact" className="jc-btn jc-hire">
        <BriefcaseBusiness size={14} /> Hire Me
      </a>
    </nav>
  );
}
