import Icon from "@/components/Icon";
import { addadak } from "@/lib/profile";

export default function ProjectInfographic() {
  return (
    <section className="section" aria-labelledby="addadak-heading">
      <p className="eyebrow">{addadak.eyebrow}</p>
      <h2 id="addadak-heading" className="section__title">
        {addadak.title}
      </h2>
      <a
        className="action-card"
        href={addadak.pdf}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="file" className="action-card__lead" />
        <span className="action-card__text">
          <span className="action-card__title">Addadak — Project Infographic (PDF)</span>
          <span className="action-card__sub">{addadak.description}</span>
        </span>
        <span className="action-card__cta">
          View Infographic
          <Icon name="external" size={16} />
        </span>
      </a>
    </section>
  );
}
