const programmingLanguages = [
  { name: "C++", icon: "https://img.icons8.com/color/48/c-plus-plus-logo.png" },
  { name: "C", icon: "https://img.icons8.com/color/48/c-programming.png" },
  { name: "Python", icon: "https://img.icons8.com/color/48/python.png" },
  {
    name: "JavaScript",
    icon: "https://img.icons8.com/color/48/javascript--v1.png",
  },
  { name: "Dart", icon: "https://img.icons8.com/color/48/dart.png" },
  { name: "HTML", icon: "https://img.icons8.com/color/48/html-5--v1.png" },
  { name: "CSS", icon: "https://img.icons8.com/color/48/css3.png" },
  { name: "MySQL", icon: "https://img.icons8.com/fluency/48/my-sql.png" },
  { name: "LaTeX", icon: "https://img.icons8.com/fluency/48/texshop.png" },
];

const frameworksLibrariesTools = [
  { name: "React", icon: "https://img.icons8.com/color/48/react-native.png" },
  {
    name: "Tailwind",
    icon: "https://img.icons8.com/color/48/tailwind_css.png",
  },
  { name: "Node.js", icon: "https://img.icons8.com/color/48/nodejs.png" },
  { name: "Express", icon: "https://img.icons8.com/ios/150/express-js.png" },
  { name: "Flutter", icon: "https://img.icons8.com/color/48/flutter.png" },
  {
    name: "TensorFlow",
    icon: "https://img.icons8.com/color/48/tensorflow.png",
  },
  { name: "Pandas", icon: "https://img.icons8.com/color/48/pandas.png" },
  { name: "Numpy", icon: "https://img.icons8.com/color/48/numpy.png" },
  { name: "Scikit-learn", icon: "assets/scikit-learn.png" },
];

const utilitiesPlatforms = [
  { name: "Git", icon: "https://img.icons8.com/color/48/git.png" },
  { name: "GitHub", icon: "https://img.icons8.com/glyph-neue/64/github.png" },
  {
    name: "VS Code",
    icon: "https://img.icons8.com/color/48/visual-studio-code-2019.png",
  },
  { name: "Bash", icon: "assets/bash.png" },
];

export default function TechStack() {
  return (
    <div className="mx-auto md:px-48 px-8 md:py-12 py-8 w-full">
      <h2 className="text-white mb-4 md:text-3xl text-xl font-bold font-oddlini">
        Skills
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/3 mb-8">
          <h1 className="w-full text-white md:text-lg font-oddlini mb-2">
            Programming Languages
          </h1>
          <div className="flex flex-col text-gray-400">
            {programmingLanguages.map((ele, idx) => (
              <p
                key={idx}
                className="hover:bg-[rgba(39,39,43,.5)] px-2 py-1 font-zain text-xl flex items-center gap-2 rounded cursor-pointer"
              >
                <img src={ele.icon} alt={ele.name} className="w-5 h-5" />
                {ele.name}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3 mb-8">
          <h1 className="w-full text-white md:text-lg font-oddlini mb-2">
            Frameworks / Libraries
          </h1>
          <div className="flex flex-col text-gray-400">
            {frameworksLibrariesTools.map((ele, idx) => (
              <p
                key={idx}
                className="hover:bg-[rgba(39,39,43,.5)] px-2 py-1 font-zain text-xl flex items-center gap-2 rounded cursor-pointer"
              >
                <img src={ele.icon} alt={ele.name} className="w-5 h-5" />
                {ele.name}
              </p>
            ))}
          </div>
        </div>

        <div className="w-full md:w-1/3 mb-8">
          <h1 className="w-full text-white md:text-lg font-oddlini mb-2">
            Utilities / Platforms
          </h1>
          <div className="flex flex-col text-gray-400">
            {utilitiesPlatforms.map((ele, idx) => (
              <p
                key={idx}
                className="hover:bg-[rgba(39,39,43,.5)] px-2 py-1 font-zain text-xl flex items-center gap-2 rounded cursor-pointer"
              >
                <img src={ele.icon} alt={ele.name} className="w-5 h-5" />
                {ele.name}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
