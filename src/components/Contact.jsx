import { useState } from "react";
import { Check, Copy, Mail } from "lucide-react";
import { profile } from "../data/content";
import { Reveal } from "../hooks/useReveal";

function Contact() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${profile.email}`;
    }
  };

  return (
    <>
      <section id="contact" className="column py-14">
        <Reveal className="rounded-2xl border border-dashed border-border px-6 py-12 text-center">
          <p className="text-lg text-muted">Thanks for scrolling this far. Let's talk.</p>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            <a href={`mailto:${profile.email}`} className="btn-dark">
              <Mail className="h-4 w-4" />
              Send an email
            </a>
            <button onClick={copy} className="btn-light">
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : profile.email}
            </button>
          </div>
        </Reveal>
      </section>

      <footer className="column pb-10 pt-6 text-center text-sm text-faint">
        © {new Date().getFullYear()} {profile.name}
      </footer>
    </>
  );
}

export default Contact;
