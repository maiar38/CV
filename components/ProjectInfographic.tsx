import Image from "next/image";
import Icon from "@/components/Icon";
import { addadak } from "@/lib/profile";

export default function ProjectInfographic() {
  const { image } = addadak;

  return (
    <section className="section" aria-labelledby="addadak-heading">
      <p className="eyebrow">{addadak.eyebrow}</p>
      <h2 id="addadak-heading" className="section__title">
        {addadak.title}
      </h2>
      <p className="section__lead">{addadak.description}</p>

      <figure className="infographic">
        <a
          className="infographic__frame"
          href={image.src}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open the Addadak infographic at full size"
        >
          <Image
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            sizes="(max-width: 1080px) 100vw, 1040px"
            quality={90}
          />
        </a>
        <p className="infographic__hint">Swipe sideways to explore · tap to open full size</p>
        <figcaption className="infographic__actions">
          <a
            className="button"
            href={image.src}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="expand" size={18} />
            View full size
          </a>
          <a className="button" href={addadak.pdf} download>
            <Icon name="file" size={18} />
            Download PDF
          </a>
          <a
            className="button"
            href={addadak.repo}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon name="github" size={18} />
            Source code
          </a>
        </figcaption>
      </figure>
    </section>
  );
}
