import Icon from "@/components/Icon";
import { cvOptions } from "@/lib/profile";

export default function CvOptions() {
  return (
    <section className="section" aria-labelledby="cv-heading">
      <h2 id="cv-heading" className="section__title">
        Choose Your CV
      </h2>
      <ul className="cv-list">
        {cvOptions.map((cv) => (
          <li key={cv.title}>
            <a
              className="cv-item"
              href={cv.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon name="download" className="cv-item__download" />
              <span className="cv-item__text">
                <span className="cv-item__title">{cv.title}</span>
                <span className="cv-item__stack">{cv.stack}</span>
              </span>
              <Icon name={cv.icon} size={30} className="cv-item__icon" />
            </a>
          </li>
        ))}
      </ul>
      <p className="note">View or download the CV that best matches your needs.</p>
    </section>
  );
}
