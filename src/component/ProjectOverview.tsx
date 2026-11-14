import GithubCommit from "./GithubCommit.tsx";
import type { projectCardProps } from "./ProjectCard.tsx"
import ProjectCard from "./ProjectCard.tsx";

// the list of projects 
const listOfProjects: projectCardProps[] = [
    { name: "PassAI", desc: "passAI which is provide the functionality like upload paper_pdf , analyze it and provide the answer or questions.", visibility:"public", mainLang: "JavaScript", viewLink: "https://github.com/GohelBhargav13/passAI" },
    { name: "DevHub", desc: "A platform about devs can share a fast latest tech news with dev community.", visibility:"public", mainLang: "JavaScript", viewLink: "https://github.com/GohelBhargav13/Devhub" },
    { name: "Tubex", desc: "A minimal HLS video streaming platform built with React, Node.js, Multer, FFmpeg, S3, and Socket.io Like Youtube.", visibility:"public", mainLang: "JavaScript", viewLink: "https://github.com/GohelBhargav13/Tubex" },
    { name: "AlumniConnect", desc: "A website that is the bridge between alumni and students.", visibility:"public", mainLang: "PHP", viewLink: "https://github.com/GohelBhargav13/AlumniConnect" },
    { name: "TaskHive", desc: "TaskHive helps teams manage projects, members, tasks, and subtasks.", mainLang: "JavaScript", viewLink: "https://github.com/GohelBhargav13/TaskHive", visibility: "public" },
    { name: "Portfolio", desc: "It's Everything About ME !!.", visibility:"public", mainLang: "JavaScript", viewLink: "https://github.com/GohelBhargav13/Portfolio" },
]

function ProjectOverview() {
  return (
    <div className="max-w-1370 w-full p-4">
      <h2 className="text-lg">Pinned</h2>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-3 p-2">
        { listOfProjects.map((pro) => (
            <ProjectCard 
                key={pro.name}
                name={pro.name}
                desc={pro.desc}
                mainLang={pro.mainLang}
                visibility={pro.visibility}
                viewLink={pro.viewLink}
            />  
        )) }
      </div>
      <div className="flex mt-10">
            <div className="w-[70%] sm:w-[75%] md:w-[85%] lg:w-[95%]">
                <GithubCommit />
            </div>
            <div className="p-6 py-4 text-center hover:cursor-pointer hidden sm:hidden md:hidden lg:block">
                <p className="bg-blue-600 w-18 p-1 rounded-xl">2026</p>
                <p className="hover:bg-gray-500/20 w-18 p-1.5 rounded-xl">2025</p>
                <p className="hover:bg-gray-500/20 w-18 p-1.5 rounded-xl">2024</p>
                <p className="hover:bg-gray-500/20 w-18 p-1.5 rounded-xl">2023</p>
            </div>
      </div>
      <div className="mt-10 w-full max-w-1370 text-center hidden sm:hidden md:block">
        <h3 className="text-xl mb-4">Contribution activity</h3>
        <a href="https://github.com/GohelBhargav13?tab=overview&from=2026-09-01&to=2026-09-30" target="_blank" className="bg-gray-600/60 mt-20 p-2 rounded-2xl border-2 border-gray-300/60">Show more activity</a>
      </div>
    </div>
  );
}

export default ProjectOverview;
