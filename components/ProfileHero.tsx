import Image from "next/image";
import { profile } from "@/lib/profile";

export default function ProfileHero() {
  return (
    <header className="hero card">
      <div className="hero__photo">
        <Image
          src={profile.portrait.src}
          alt={profile.portrait.alt}
          width={320}
          height={320}
          sizes="(max-width: 600px) 140px, 180px"
          priority
        />
      </div>
      <h1 className="hero__name">{profile.name}</h1>
      <p className="hero__title">{profile.title}</p>
      <p className="badge">{profile.badge}</p>
    </header>
  );
}
