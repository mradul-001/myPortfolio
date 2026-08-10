import HeroGraphic from "./HeroGraphic";

function Hero() {
  return (
    <>
      <section class="text-muted">
        <div class="mx-auto flex md:px-48 px-8 md:py-28 py-16 md:flex-row flex-col items-start md:items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <span class="font-outfit text-sm tracking-[0.2em] uppercase text-accent mb-4">
              Portfolio
            </span>
            <h1 class="title-font text-2xl md:text-5xl mb-6 text-ink font-marcellus leading-tight">
              CS undergrad, open-source contributor & algorithmic problem solver
            </h1>
            <p class="my-2 font-outfit md:text-lg leading-relaxed max-w-xl">
              I'm Mradul Sonkar, a CS undergrad at IIT Bombay passionate about
              algorithms, systems, and building open-source tools that solve
              real-world problems.
            </p>
          </div>

          <div className="md:w-1/2 w-full flex-grow flex items-start justify-center">
            <HeroGraphic />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;