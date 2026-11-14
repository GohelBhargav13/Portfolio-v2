import { BookBookmark, ChevronsUp } from "lucide-react"

export type projectCardProps = {
    name: string;
    visibility: string;
    desc: string;
    mainLang: string;
    viewLink: string;
}

function ProjectCard({ name, visibility, desc, mainLang, viewLink }: projectCardProps) {
  return (
    <div>
    <div className="bg-gray-950/30 border-2 border-gray-300/30 rounded-sm h-full  ">
      <div className="flex gap-3 p-3 items-center">
        <div>
          <BookBookmark />
        </div>
        <div>
          <a href={viewLink} className="text-blue-500 font-bold text-lg hover:cursor-pointer hover:border-b-2 hover:border-blue-500" target="_blank">
            {name}
          </a>
        </div>
        <div>
          <p className="text-gray-400/80 border-2 border-gray-600 p-0.5 rounded-xl bg-gray-950">
            { visibility }
          </p>
        </div>
        <div className="w-full justify-items-end">
          <ChevronsUp />
        </div>
      </div>
      <div className="p-2">
        <p className="text-gray-400 text-start">
          {desc}
        </p>
      </div>
      <div className="flex gap-1 p-2">
        <div className="flex items-center gap-1">
          <span className="bg-amber-200/90 rounded-2xl w-4 h-4"></span>
          <p className="text-gray-400">{ mainLang }</p>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProjectCard;
