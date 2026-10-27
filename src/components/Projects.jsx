import { ArrowUpRight } from "lucide-react";
import { profile, projects } from "../data/content";
import Section from "./Section";

function Projects() {
  return (
    <Section id="projects" label="Featured" title="Projects">
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="flex flex-col overflow-hidden rounded-xl border border-border bg-surface card-shadow">
            <div className="aspect-[16/10] overflow-hidden border-b border-border">
              <img src={p.image} alt="" className="h-full w-full scale-[1.45] object-cover" loading="lazy" />
            </div>
            <div className="flex flex-1 flex-col p-5">
              <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-ink">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              <div className="mt-auto flex items-center justify-between gap-3 pt-5">
                <span className="truncate text-xs text-faint">{p.tags.join(" · ")}</span>
                <a
                  href={p.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex shrink-0 items-center gap-1 text-sm font-medium text-accent hover:underline"
                >
                  {p.linkLabel}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>

      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="mt-6 flex w-full items-center justify-center gap-1 rounded-lg border border-border bg-surface py-2.5 text-sm font-medium text-ink transition-colors hover:bg-surfacealt"
      >
        More on GitHub
        <ArrowUpRight className="h-3.5 w-3.5" />
      </a>
    </Section>
  );
}

export default Projects;
