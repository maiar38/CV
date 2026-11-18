import Icon from "@/components/Icon";
import { cv } from "@/lib/profile";

export default function CvDownload() {
  return (
    <section className="section" aria-labelledby="cv-heading">
      <h2 id="cv-heading" className="section__title">
        View CV
      </h2>
      <a
        className="action-card"
        href={cv.href}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Icon name="file" className="action-card__lead" />
        <span className="action-card__text">
          <span className="action-card__title">{cv.title}</span>
          <span className="action-card__sub">{cv.subtitle}</span>
        </span>
        <span className="action-card__cta">
          View CV
          <Icon name="external" size={16} />
        </span>
      </a>
      <p className="note">View or download my CV in a new tab.</p>
    </section>
  );
}
