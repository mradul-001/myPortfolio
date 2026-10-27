import { about, profile } from "../data/content";
import Section from "./Section";

function About() {
  return (
    <Section id="about" label="In short" title="About">
      <h3 className="text-lg font-semibold text-ink">{profile.name}</h3>
      <p className="mt-2 text-[15px] leading-relaxed text-muted">{about.text}</p>
    </Section>
  );
}

export default About;
