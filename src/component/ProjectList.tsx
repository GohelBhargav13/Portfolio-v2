import { ChevronDown, BookBookmark, Link } from "lucide-react";

// Declare the type for each project
type projectStructure = {
  name: string;
  des: string;
  visibility: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
};

// Project array
const projectList: projectStructure[] = [
  {
    name: "PassAI",
    visibility: "Public",
    des: "An AI powered paper analyzer for the GTU students, Now students can easily analyze there papers with ease.",
    techStack: ["ReactJs", "flask", "mysql", "redis"],
    githubLink: "https://github.com/GohelBhargav13/passAI",
    liveLink: "https://pass-ai-pro.vercel.app/",
  },
  {
    name: "DevHub",
    visibility: "Public",
    des: "A platform where devs can share a latest tech news, tech updates with tech community.",
    techStack: [
      "ReactJs",
      "ExpressJs",
      "Postgresql",
      "Socket.io",
      "drizzle",
      "JWT",
      "TailwindCSS",
    ],
    githubLink: "https://github.com/GohelBhargav13/Devhub",
    liveLink: "https://devhub-self.vercel.app/",
  },
  {
    name: "Personal Portfolio",
    visibility: "Public",
    des: "A personal portfolio website that contains all information about me.",
    techStack: ["ReactJs", "TailwindCSS", "lucide-react(icons)"],
    githubLink: "https://github.com/GohelBhargav13/Portfolio",
    liveLink: "https://portfolio-chi-mocha-94.vercel.app/",
  },
  {
    name: "TubeX",
    visibility: "Public",
    des: "A Video Streaming Platform where users can watch videos and Admin can upload/manage videos.",
    techStack: [
      "ReactJs",
      "ExpressJs",
      "MongoDB",
      "Socket.io",
      "mongoose",
      "JWT",
      "ffmpeg",
      "AWS S3",
      "TailwindCSS",
    ],
    githubLink: "https://github.com/GohelBhargav13/Tubex",
    liveLink: "https://tube-x.vercel.app/",
  },
  {
    name: "AlumniConnect",
    visibility: "Public",
    des: "A bridge between Students and Alumni — post jobs, apply, and connect.",
    techStack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap"],
    githubLink: "https://github.com/GohelBhargav13/AlumniConnect",
    liveLink: "https://alumniconnect.infinityfree.io/alumni/landing.php",
  },
];

function ProjectList() {
  return (
    <div className="flex min-w-0 w-full flex-col gap-4 sm:gap-5 p-3 sm:p-4 md:p-5">
      {/* Search and Filters */}
      <div className="flex w-full min-w-0 flex-col gap-3 lg:flex-row lg:items-center">
        {/* Search */}
        <div className="hidden lg:block lg:flex-1">
          <input
            type="text"
            placeholder="Find a repository..."
            className="w-full max-w-md rounded-lg border-2 border-gray-700 bg-transparent p-2 outline-none focus:border-blue-500"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex w-full min-w-0 items-center gap-1 sm:gap-2 lg:w-auto lg:justify-end">
          <div className="flex flex-1 items-center justify-center gap-1 rounded-xl border-2 border-gray-600 bg-gray-500/30 p-2 hover:cursor-pointer sm:flex-none sm:px-4">
            <button className="hidden sm:block">Type</button>
            <ChevronDown size={18} />
          </div>

          <div className="flex flex-1 items-center justify-center gap-1 rounded-xl border-2 border-gray-600 bg-gray-500/30 p-2 hover:cursor-pointer sm:flex-none sm:px-4">
            <button className="hidden sm:block">Language</button>
            <ChevronDown size={18} />
          </div>

          <div className="flex flex-1 items-center justify-center gap-1 rounded-xl border-2 border-gray-600 bg-gray-500/30 p-2 hover:cursor-pointer sm:flex-none sm:px-4">
            <button className="hidden sm:block">Sort</button>
            <ChevronDown size={18} />
          </div>

          <div className="flex flex-1 items-center justify-center gap-1 rounded-xl border-2 border-gray-600 bg-green-500/80 p-2 hover:cursor-pointer sm:flex-none sm:px-4">
            <BookBookmark size={18} />
            <button className="hidden sm:block">New</button>
          </div>
        </div>
      </div>

      <hr className="border-gray-600" />

      {/* Project List */}
      <div className="flex w-full min-w-0 flex-col gap-4">
        {projectList.map((pro, i) => (
          <div key={i} className="flex min-w-0 flex-col gap-3">
            {/* Project Header */}
            <div className="flex min-w-0 items-center justify-between gap-2">
              <div className="flex min-w-0 flex-wrap items-center gap-2">
                <p className="max-w-full break-all text-base font-bold text-blue-500 hover:cursor-pointer hover:border-b-2 hover:border-b-blue-600 sm:text-lg">
                  {pro.name}
                </p>

                <span className="shrink-0 rounded-xl border-2 border-gray-600 bg-gray-950 px-2 py-0.5 text-xs text-gray-400/80 sm:text-sm">
                  {pro.visibility}
                </span>
              </div>

              <div className="shrink-0">
                <button className="rounded-md border-2 border-gray-100/20 bg-gray-500/30 px-3 py-1.5 text-sm hover:cursor-pointer sm:px-5 sm:py-2">
                  Star
                </button>
              </div>
            </div>

            {/* Project Description */}
            <div className="w-full min-w-0">
              <p className="break-all text-sm leading-relaxed text-gray-400 sm:text-base">
                {pro.des}
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {pro.techStack.map((skill, index) => (
                <span
                  key={index}
                  className="rounded-xl bg-blue-800/50 px-2 py-1 text-center text-xs sm:text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <code className="shrink-0 text-xs text-gray-500 sm:text-sm">
                GITHUB:
              </code>

              <a
                className="flex items-center gap-1 break-all text-sm font-bold text-blue-500 hover:border-b-2 hover:border-blue-500 sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
                href={pro.githubLink}
              >
                <Link size={16} className="shrink-0" />
                Link
              </a>
            </div>

            {/* Live Link */}
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <code className="shrink-0 text-xs text-gray-500 sm:text-sm">
                LIVELINK:
              </code>

              <a
                className="flex items-center gap-1 break-all text-sm font-bold text-blue-500 hover:border-b-2 hover:border-blue-500 sm:text-base"
                target="_blank"
                rel="noopener noreferrer"
                href={pro.liveLink}
              >
                <Link size={16} className="shrink-0" />
                Link
              </a>
            </div>

            <hr className="mt-1 border-gray-600" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
