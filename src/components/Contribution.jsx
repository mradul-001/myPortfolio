import { useState } from "react";
import GitHubCalendar from "react-github-calendar";

function Contribution() {
  const [year, setyear] = useState(2025);
  return (
    <>
      <div className="mx-auto md:px-48 px-8 md:py-12 py-12 w-full">
        <h2 className="text-white mb-4 md:text-3xl text-xl font-bold font-oddlini">
          Contribution Graph
        </h2>
        <div class="flex md:flex-row flex-col items-start">
          <div className="bg-[rgba(39,39,43,.4)] font-oddlini p-8 rounded-lg text-white overflow-auto w-full md:w-auto">
            <GitHubCalendar
              username="mradul-001"
              blockSize={14}
              blockMargin={6}
              year={year}
            />
          </div>
          <div className="flex md:flex-col mt-4 md:m-0">
            <button
              onClick={() => setyear(2025)}
              className={`font-oddlini text-sm  mx-3 mb-2 py-[8px] px-6 rounded-md text-white 
                ${year === 2025 ? "bg-blue-500" : "bg-[rgba(39,39,43,.4)]"} 
                hover:outline hover:outline-[rgba(255,255,255,0.3)] hover:outline-1`}
            >
              2025
            </button>

            <button
              onClick={() => setyear(2024)}
              className={`font-oddlini text-sm  mx-3 mb-2 py-[8px] px-6 rounded-md text-white 
                ${year === 2024 ? "bg-blue-500" : "bg-[rgba(39,39,43,.4)]"} 
                hover:outline hover:outline-[rgba(255,255,255,0.3)] hover:outline-1`}
            >
              2024
            </button>

            <button
              onClick={() => setyear(2023)}
              className={`font-oddlini text-sm  mx-3 mb-2 py-[8px] px-6 rounded-md text-white 
                ${year === 2023 ? "bg-blue-500" : "bg-[rgba(39,39,43,.4)]"} 
                hover:outline hover:outline-[rgba(255,255,255,0.3)] hover:outline-1`}
            >
              2023
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contribution;
