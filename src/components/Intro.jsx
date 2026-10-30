import { FileText, Github, Linkedin, Mail, Send } from "lucide-react";
import resume from "../assets/resume.pdf";
import { profile, skills } from "../data/content";

function Intro() {
  const socials = [
    { label: "GitHub", href: profile.github, icon: <Github className="h-5 w-5" strokeWidth={1.6} /> },
    { label: "LinkedIn", href: profile.linkedin, icon: <Linkedin className="h-5 w-5" strokeWidth={1.6} /> },
    { label: "Email", href: `mailto:${profile.email}`, icon: <Mail className="h-5 w-5" strokeWidth={1.6} /> },
  ];

  return (
    <section id="top" className="column pb-12 pt-32 sm:pt-40">
      <h1 className="text-4xl font-bold leading-[1.15] tracking-tight text-ink sm:text-5xl">
        {profile.name} — <span className="text-faint">{profile.role}</span>
      </h1>
      <p className="mt-4 text-lg text-muted">{profile.line}</p>

      <div className="mt-7 flex flex-wrap gap-3">
        <a href={resume} target="_blank" rel="noreferrer" className="btn-light card-shadow">
          <FileText className="h-4 w-4" />
          Resume / CV
        </a>
        <a href="#contact" className="btn-dark">
          <Send className="h-4 w-4" />
          Get in touch
        </a>
      </div>

      <div className="mt-6 flex gap-4">
        {socials.map(({ label, href, icon }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            aria-label={label}
            className="text-faint transition-colors hover:text-ink"
          >
            {icon}
          </a>
        ))}
      </div>

      <ul className="mt-10 flex flex-wrap gap-2" aria-label="Skills">
        {skills.map((s) => (
          <li
            key={s.name}
            className="inline-flex items-center gap-1.5 rounded-md border border-dashed border-border bg-surfacealt px-2 py-1 text-sm font-medium text-ink"
          >
            <img src={s.icon} alt="" className={`h-4 w-4 ${s.invert ? "dark:invert" : ""} ${s.brighten ? "dark:brightness-[2.2]" : ""}`}/>
            {s.name}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Intro;
