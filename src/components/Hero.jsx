import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import anime from "../assets/animation2.lottie?url";

function Hero() {
  return (
    <>
      <section class="text-gray-400">
        <div class="mx-auto flex md:px-48 px-8 md:py-24 py-16 md:flex-row flex-col items-start md:items-center">
          <div class="lg:flex-grow md:w-1/2 lg:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 class="title-font text-lg md:text-4xl mb-4 text-white font-audiowide font-semibold">
              CS undergrad, open-source contributor & algorithmic problem solver
            </h1>
            <p class="my-4 font-outfit md:text-xl leading-tight">
              I'm Mradul Sonkar, a CS undergrad at IIT Bombay passionate about
              algorithms, systems, and building open-source tools that solve
              real-world problems.
            </p>
          </div>

          <div className="md:w-1/3 w-full md:scale-150 flex-grow flex items-start justify-center">
            <DotLottieReact src={anime} loop autoplay />
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;