import Navbar from "./Navbar";
import Footer from "./Footer";
import stt from "../assets/stt2.png";
import smp from "../assets/smp2.png";
import att from "../assets/att.png";
import mgit from "../assets/mgit2.png";
import pcheck from "../assets/pcheck.png";
import comp from "../assets/comp2.png";
import fm from "../assets/fm2.png";
import app from "../assets/app.png";

function Projects() {
  return (
    <>
      <Navbar></Navbar>

      <section className="text-white">
        <div class="mx-auto md:px-48 px-8 md:py-12 py-12 w-full">
          <h2 className="text-white mb-8 md:text-3xl text-xl font-bold font-oddlini">
            Projects
          </h2>
          <div class="flex flex-wrap -m-4">
            {/* Stock market predictor */}
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-lg overflow-hidden flex flex-col">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={smp}
                  alt="blog"
                />
                <div class="p-6 bg-[rgba(39,39,43,.4)] flex-grow flex flex-col">
                  <h1 class="font-zain text-2xl md:text-[26px] font-bold text-white mb-2">
                    Stock Market Predictor
                  </h1>
                  <p class="leading-normal mb-3 font-roboto text-[16px] font-light text-gray-400">
                    A stock market predictor using LSTM and PyTorch, wrapped in
                    a RollingRegressor for real-time forecasting based on
                    historical features.
                  </p>
                  <div class="flex items-end flex-wrap flex-grow cursor-pointer">
                    <a
                      href="https://github.com/mradul-001/smPredictor"
                      target="_blank"
                      class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* voxelectra */}
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-lg overflow-hidden flex flex-col">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={stt}
                  alt="blog"
                />
                <div class="p-6 bg-[rgba(39,39,43,.4)] flex-grow flex flex-col">
                  <h1 class="font-zain text-2xl md:text-[26px] font-bold text-white mb-2">
                    Speech to Text Converter
                  </h1>
                  <p class="leading-normal mb-3 font-roboto text-[16px] font-light text-gray-400">
                    A speech-to-text converter built using the Wav2Vec
                    transformer model for accurate transcription of audio inputs
                    into text.
                  </p>
                  <div class="flex items-end flex-wrap flex-grow cursor-pointer">
                    <a
                      href="https://github.com/mradul-001/voxElectra"
                      target="_blank"
                      class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Plagiarism Detector */}
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-lg overflow-hidden flex flex-col">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={pcheck}
                  alt="blog"
                />
                <div class="p-6 bg-[rgba(39,39,43,.4)] flex-grow flex flex-col">
                  <h1 class="font-zain text-2xl md:text-[26px] font-bold text-white mb-2">
                    Plagiarism Checker
                  </h1>
                  <p class="leading-normal mb-3 font-roboto text-[16px] font-light text-gray-400">
                    A multithreaded plagiarism checker using the KMP algorithm
                    for efficient string matching across files with mutex-based
                    concurrency control.
                  </p>
                  <div class="flex items-end flex-wrap flex-grow cursor-pointer">
                    <a
                      href="https://github.com/mradul-001"
                      target="_blank"
                      class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* mygit */}
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-lg overflow-hidden flex flex-col">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={mgit}
                  alt="blog"
                />
                <div class="p-6 bg-[rgba(39,39,43,.4)] flex-grow flex flex-col">
                  <h1 class="font-zain text-2xl md:text-[26px] font-bold text-white mb-2">
                    Version Control System
                  </h1>
                  <p class="leading-normal mb-3 font-roboto text-[16px] font-light text-gray-400">
                    A custom version control system built from scratch with core
                    features like commit, diff, and log, mimicking Git in file
                    tracking logic.
                  </p>
                  <div class="flex items-end flex-wrap flex-grow cursor-pointer">
                    <a
                      href="https://github.com/mradul-001/myGit"
                      target="_blank"
                      class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Attendance portal */}
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-lg overflow-hidden flex flex-col">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={att}
                  alt="blog"
                />
                <div class="p-6 bg-[rgba(39,39,43,.4)] flex-grow flex flex-col">
                  <h1 class="font-zain text-2xl md:text-[26px] font-bold text-white mb-2">
                    Attendance Portal
                  </h1>
                  <p class="leading-normal mb-3 font-roboto text-[16px] font-light text-gray-400">
                    An attendance portal for NSS IITB that records geolocation,
                    timestamp, and student details in real-time, built using
                    JavaScript and PHP with a MySQL backend.
                  </p>
                  <div class="flex items-end flex-wrap flex-grow cursor-pointer">
                    <a
                      href="https://github.com/nssiitb/nssAttPortal"
                      target="_blank"
                      class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* NSS IITB App */}
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-lg overflow-hidden flex flex-col">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={app}
                  alt="blog"
                />
                <div class="p-6 bg-[rgba(39,39,43,.4)] flex-grow flex flex-col">
                  <h1 class="font-zain text-2xl md:text-[26px] font-bold text-white mb-2">
                    NSS IITB App
                  </h1>
                  <p class="leading-normal mb-3 font-roboto text-[16px] font-light text-gray-400">
                    A cross-platform NSS IITB app built with Flutter, featuring
                    geolocation-based attendance and real-time activity
                    notifications.
                  </p>
                  <div class="flex items-end flex-wrap flex-grow cursor-pointer">
                    <a
                      href="https://github.com/nssiitb/nssapp"
                      target="_blank"
                      class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Reports - Compilers */}
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-lg overflow-hidden flex flex-col">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={comp}
                  alt="blog"
                />
                <div class="p-6 bg-[rgba(39,39,43,.4)] flex-grow flex flex-col">
                  <h1 class="font-zain text-2xl md:text-[26px] font-bold text-white mb-2">
                    Compilers
                  </h1>
                  <p class="leading-normal mb-3 font-roboto text-[16px] font-light text-gray-400">
                    A detailed report on compilers explaining the core stages of
                    compilation including lexical analysis, syntax and semantic
                    parsing, intermediate code generation, and optimization
                    techniques.
                  </p>
                  <div class="flex items-end flex-wrap flex-grow cursor-pointer">
                    <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Reports - Financial Maths */}
            <div class="p-4 md:w-1/3">
              <div class="h-full rounded-lg overflow-hidden flex flex-col">
                <img
                  class="lg:h-48 md:h-36 w-full object-cover object-center"
                  src={fm}
                  alt="blog"
                />
                <div class="p-6 bg-[rgba(39,39,43,.4)] flex-grow flex flex-col">
                  <h1 class="font-zain text-2xl md:text-[26px] font-bold text-white mb-2">
                    Financial Maths
                  </h1>
                  <p class="leading-normal mb-3 font-roboto text-[16px] font-light text-gray-400">
                    A comprehensive report on financial mathematics covering the
                    simple market model, classification of risky and risk-free
                    assets, fundamentals of portfolio management, and the
                    pricing and use of financial options.
                  </p>
                  <div class="flex items-end flex-wrap flex-grow cursor-pointer">
                    <a class="text-indigo-400 inline-flex items-center md:mb-2 lg:mb-0">
                      Learn More
                      <svg
                        class="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                        fill="none"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </>
  );
}

export default Projects;
