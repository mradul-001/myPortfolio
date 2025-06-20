import { Link } from "react-router-dom";
import reactimg from "../assets/react.png";

function Footer() {
  return (
    <>
      <footer class="text-gray-400">
        <div class="md:px-48 px-8 md:py-12 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <div className="logo">
            <Link
              to="/"
              className="font-extrabold font-audiowide md:text-[32px] text-[24px]"
            >
              MS
            </Link>
          </div>
          <p class="font-oddlini text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
            © 2025 Mradul Sonkar
          </p>
          <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center items-center sm:justify-start">
            <a href="mailto:sonkarmradul@gmail.com" class="ml-3">
              <img
                width="26"
                height="50"
                src="assets/gmail.png"
                alt="linkedin"
              />
            </a>

            <a href="https://github.com/mradul-001" class="ml-3 text-gray-400">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M12 0a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.37-1.33-1.74-1.33-1.74-1.09-.75.08-.74.08-.74 1.2.09 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0C17 4.2 18 4.52 18 4.52c.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0012 0z"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/mr4du1/"
              class="ml-3 text-gray-400"
            >
              <img width="22" height="50" src="assets/l.png" alt="linkedin" />
            </a>
            <a
              href="https://www.instagram.com/mr4du1_/"
              class="ml-3 text-gray-400"
            >
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
