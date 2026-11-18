import { personalInfo } from "@/lib/profile";

export default function PersonalInfo() {
  return (
    <section className="info" aria-labelledby="info-heading">
      <h2 id="info-heading" className="eyebrow">
        Personal Information
      </h2>
      <dl className="info__list">
        {personalInfo.map((item) => (
          <div key={item.label} className="info__row">
            <dt>{item.label}:</dt>
            <dd>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
