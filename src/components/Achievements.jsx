import { achievements } from "../data/content";
import Section from "./Section";

function Achievements() {
  return (
    <Section id="achievements" label="Recognition" title="Achievements">
      <ul className="divide-y divide-border border-y border-border">
        {achievements.map((a) => (
          <li key={a.title} className="flex items-baseline justify-between gap-4 py-3.5">
            <div>
              <span className="font-semibold text-ink">{a.title}</span>
              <span className="ml-2 text-[15px] text-muted">{a.detail}</span>
            </div>
            <span className="shrink-0 text-sm text-faint">{a.year}</span>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export default Achievements;
