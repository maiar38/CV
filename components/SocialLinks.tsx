import Icon from "@/components/Icon";
import { links } from "@/lib/profile";

export default function SocialLinks() {
  return (
    <footer className="links card">
      <ul className="links__grid">
        {links.map((link) => (
          <li key={link.label} className="links__item">
            <Icon name={link.icon} size={40} className="links__icon" />
            <span className="links__label">{link.label}</span>
            <a href={link.href} target="_blank" rel="noopener noreferrer">
              {link.display}
              <Icon name="external" size={14} />
            </a>
          </li>
        ))}
      </ul>
    </footer>
  );
}
