import ProfileHero from "@/components/ProfileHero";
import PersonalInfo from "@/components/PersonalInfo";
import CvOptions from "@/components/CvOptions";
import ProjectInfographic from "@/components/ProjectInfographic";
import SocialLinks from "@/components/SocialLinks";

export default function CvPage() {
  return (
    <main className="page">
      <ProfileHero />
      <PersonalInfo />
      <hr className="divider" />
      <CvOptions />
      <ProjectInfographic />
      <SocialLinks />
    </main>
  );
}
