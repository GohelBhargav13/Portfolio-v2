import { ChevronDown, BookBookmark, Link } from "lucide-react";

// declare the type for the each project
type projectStructure = {
  name: string;
  des: string;
  visibility: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
};

// the project array with above types
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
    <div className="flex flex-col gap-5 p-5">
      <div className="flex w-full max-w-1370 items-center">
        <div className="hidden sm:hidden md:hidden lg:block">
          <input
            type="text"
            placeholder="Find a repository..."
            className="w-100 border-gray-700 border-2 p-1.5 rounded-lg hidden md:block lg:block"
          />
        </div>
        <div className="w-full flex gap-1">
          <div className="flex gap-1.5 bg-gray-500/30 border-2 border-gray-600 p-2 px-6 m-1 rounded-xl hover:cursor-pointer">
            <button className="hidden sm:hidden md:block">Type</button>
            <ChevronDown />
          </div>
          <div className="flex gap-1.5 bg-gray-500/30 border-2 border-gray-600 p-2 px-6 m-1 rounded-xl hover:cursor-pointer">
            <button className="hidden sm:hidden md:block">Language</button>
            <ChevronDown />
          </div>
          <div className="flex gap-1.5 bg-gray-500/30 border-2 border-gray-600 p-2 px-6 m-1 rounded-xl hover:cursor-pointer">
            <button className="hidden sm:hidden md:block">Sort</button>
            <ChevronDown />
          </div>
          <div className="flex gap-1.5 bg-green-500/80 border-2 border-gray-600 p-2 px-6 m-1 rounded-xl hover:cursor-pointer">
            <BookBookmark />
            <button className="hidden sm:hidden md:block">New</button>
          </div>
        </div>
      </div>
      <hr className="text-gray-600" />
      <div className="grid grid-cols-1 gap-1.5">
        {projectList.map((pro, i) => (
          <>
            <div className="flex flex-col gap-2.5" key={i}>
              <div className="flex gap-2">
                <div className="max-w-100 flex">
                  <div>
                    <p className="text-blue-500 font-bold text-lg hover:cursor-pointer hover:border-b-2 hover:border-b-blue-600 w-39 sm:39 md:42">
                      {pro.name}
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-400/80 border-2 border-gray-600 p-0.5 rounded-xl bg-gray-950">
                      {pro.visibility}
                    </p>
                  </div>
                </div>
                <div className="w-full text-end">
                  <button className=" bg-gray-500/30 border-2 border-gray-100/20 p-2 w-30 px-6 rounded-md hover:cursor-pointer">
                    Star
                  </button>
                </div>
              </div>
              <div className="flex gap-2">
                <div className="max-w-200">
                  <p className="text-gray-400 w-100 sm:w-100 md:w-120 lg:w-150">
                    {pro.des}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 text-center">
                {pro.techStack.map((skill, i) => (
                  <>
                    <p key={i} className="bg-blue-800/50 p-1 rounded-xl">
                      {skill}
                    </p>
                  </>
                ))}
              </div>
              <div className="flex gap-1">
                <code className="text-gray-500">GITHUB:-</code>
                <a
                  className="text-blue-500 font-bold text-md hover:cursor-pointer flex gap-0.5 hover:border-b-2 hover:border-blue-500"
                  target="_blank"
                  href={pro.githubLink}
                >
                  <Link size={18} />
                  Link
                </a>
              </div>
              <div className="flex gap-1">
                <code className="text-gray-500">LIVELINK:-</code>
                <a
                  className="text-blue-500 font-bold text-md hover:cursor-pointer flex gap-0.5 hover:border-b-2 hover:border-blue-500"
                  target="_blank"
                  href={pro.liveLink}
                >
                  <Link size={18} />
                  Link
                </a>
              </div>
              
              <hr className="text-gray-600" />
            </div>
            <br />
          </>
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
