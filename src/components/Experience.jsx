import { experience } from "../data/content";
import Section from "./Section";

function Experience() {
  return (
    <Section id="experience" label="Featured" title="Experience">
      <div className="space-y-10">
        {experience.map((e) => (
          <article key={e.company}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
              <div className="flex items-center gap-3">
                {e.logo ? (
                  <img
                    src={e.logo}
                    alt={`${e.company} logo`}
                    className={`h-10 w-10 shrink-0 rounded-lg ${
                      e.logoFill ? "ring-1 ring-border" : "border border-border bg-white p-2"
                    }`}
                  />
                ) : (
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border bg-surface text-base font-bold text-ink">
                    {e.company[0]}
                  </div>
                )}
                <div>
                  <a href={e.url} target="_blank" rel="noreferrer" className="font-semibold text-ink hover:underline">
                    {e.company}
                  </a>
                  <div className="text-sm text-muted">{e.role}</div>
                </div>
              </div>
              <div className="pl-[3.25rem] text-sm text-muted sm:pl-0 sm:text-right">
                <div>{e.when}</div>
                <div>{e.where}</div>
              </div>
            </div>
            <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-muted">
              {e.points.map((p) => (
                <li key={p} className="flex gap-2">
                  <span className="select-none text-faint">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </Section>
  );
}

export default Experience;
