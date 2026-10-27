import { Reveal } from "../hooks/useReveal";

// Every section: a small gray label above a bold heading.
function Section({ id, label, title, children }) {
  return (
    <section id={id} className="column py-12 sm:py-14">
      <Reveal>
        <p className="text-sm text-muted">{label}</p>
        <h2 className="mt-0.5 text-2xl font-bold tracking-tight text-ink">{title}</h2>
        <div className="mt-6">{children}</div>
      </Reveal>
    </section>
  );
}

export default Section;
