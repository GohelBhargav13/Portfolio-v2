import GithubCommit from "./GithubCommit.tsx";
import type { projectCardProps } from "./ProjectCard.tsx";
import ProjectCard from "./ProjectCard.tsx";

// List of projects
const listOfProjects: projectCardProps[] = [
  {
    name: "PassAI",
    desc: "passAI which is provide the functionality like upload paper_pdf, analyze it and provide the answer or questions.",
    visibility: "public",
    mainLang: "JavaScript",
    viewLink: "https://github.com/GohelBhargav13/passAI",
  },
  {
    name: "DevHub",
    desc: "A platform about devs can share a fast latest tech news with dev community.",
    visibility: "public",
    mainLang: "JavaScript",
    viewLink: "https://github.com/GohelBhargav13/Devhub",
  },
  {
    name: "Tubex",
    desc: "A minimal HLS video streaming platform built with React, Node.js, Multer, FFmpeg, S3, and Socket.io Like Youtube.",
    visibility: "public",
    mainLang: "JavaScript",
    viewLink: "https://github.com/GohelBhargav13/Tubex",
  },
  {
    name: "AlumniConnect",
    desc: "A website that is the bridge between alumni and students.",
    visibility: "public",
    mainLang: "PHP",
    viewLink: "https://github.com/GohelBhargav13/AlumniConnect",
  },
  {
    name: "TaskHive",
    desc: "TaskHive helps teams manage projects, members, tasks, and subtasks.",
    visibility: "public",
    mainLang: "JavaScript",
    viewLink: "https://github.com/GohelBhargav13/TaskHive",
  },
  {
    name: "Portfolio",
    desc: "It's Everything About ME !!.",
    visibility: "public",
    mainLang: "JavaScript",
    viewLink: "https://github.com/GohelBhargav13/Portfolio",
  },
];

function ProjectOverview() {
  return (
    <div className="w-full max-w-342.5 min-w-0 p-2 sm:p-4">
      {/* Pinned Projects */}
      <h2 className="text-lg font-semibold mb-2">Pinned</h2>

      <div
        className="
        grid
        grid-cols-1
        sm:grid-cols-1
        md:grid-cols-2
        gap-3
        p-1 sm:p-2
        w-full
        min-w-0
      "
      >
        {listOfProjects.map((pro) => (
          <ProjectCard
            key={pro.name}
            name={pro.name}
            desc={pro.desc}
            mainLang={pro.mainLang}
            visibility={pro.visibility}
            viewLink={pro.viewLink}
          />
        ))}
      </div>

      {/* GitHub Contribution Graph */}
      <div
        className="
        flex
        flex-row
        items-start
        gap-2 sm:gap-3
        mt-6 sm:mt-10
        w-full
        min-w-0
      "
      >
        {/* Contribution Graph */}
        <div
          className="
          flex-1
          min-w-0
          overflow-x-auto
          overflow-y-hidden
        "
        >
          <GithubCommit />
        </div>

        {/* Contribution Years - Desktop Only */}
        <div
          className="
          hidden
          lg:flex
          flex-col
          shrink-0
          p-3
          py-4
          text-center
          gap-1
        "
        >
          <p className="bg-blue-600 w-18 p-1 rounded-xl">2026</p>

          <p className="hover:bg-gray-500/20 w-18 p-1.5 rounded-xl cursor-pointer">
            2025
          </p>

          <p className="hover:bg-gray-500/20 w-18 p-1.5 rounded-xl cursor-pointer">
            2024
          </p>

          <p className="hover:bg-gray-500/20 w-18 p-1.5 rounded-xl cursor-pointer">
            2023
          </p>
        </div>
      </div>

      {/* Contribution Activity */}
      <div
        className="
        hidden
        md:block
        mt-8 sm:mt-10
        w-full
        text-center
      "
      >
        <h3 className="text-lg sm:text-xl mb-5">Contribution activity</h3>

        <a
          href="https://github.com/GohelBhargav13?tab=overview&from=2026-09-01&to=2026-09-30"
          target="_blank"
          rel="noopener noreferrer"
          className="
            inline-block
            bg-gray-600/60
            p-2
            rounded-2xl
            border-2 border-gray-300/60
            hover:bg-gray-500/60
            transition-colors
          "
        >
          Show more activity
        </a>
      </div>
    </div>
  );
}

export default ProjectOverview;
