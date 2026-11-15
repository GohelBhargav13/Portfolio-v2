import { BookBookmark, ChevronsUp } from "lucide-react";

export type projectCardProps = {
  name: string;
  visibility: string;
  desc: string;
  mainLang: string;
  viewLink: string;
};

function ProjectCard({
  name,
  visibility,
  desc,
  mainLang,
  viewLink,
}: projectCardProps) {
  return (
    <div className="w-full min-w-0 h-full">
      <div
        className="
        bg-gray-950/30
        border-2 border-gray-300/30
        rounded-md
        h-full
        flex flex-col
        hover:border-gray-400/50
        transition-colors
      "
      >
        {/* Card Header */}
        <div
          className="
          flex
          items-center
          gap-2 sm:gap-3
          p-3
          w-full
          min-w-0
        "
        >
          {/* Project Icon */}
          <BookBookmark size={19} className="shrink-0 text-gray-400" />

          {/* Project Name */}
          <a
            href={viewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="
              text-blue-500
              font-bold
              text-sm sm:text-base lg:text-lg
              hover:border-b-2
              hover:border-blue-500
              min-w-0
              truncate
            "
          >
            {name}
          </a>

          {/* Visibility */}
          <span
            className="
            text-gray-400/80
            border border-gray-600
            px-2 py-0.5
            text-xs sm:text-sm
            rounded-xl
            bg-gray-950
            shrink-0
          "
          >
            {visibility}
          </span>

          {/* Expand Icon */}
          <div className="ml-auto shrink-0 text-gray-400">
            <ChevronsUp size={18} />
          </div>
        </div>

        {/* Project Description */}
        <div
          className="
          px-3
          pb-3
          flex-1
          min-w-0
        "
        >
          <p
            className="
            text-gray-400
            text-xs sm:text-sm
            leading-relaxed
            break-all
          "
          >
            {desc}
          </p>
        </div>

        {/* Programming Language */}
        <div
          className="
          flex
          items-center
          gap-2
          px-3
          pb-3
          mt-auto
        "
        >
          <span
            className="
            bg-amber-200/90
            rounded-full
            w-3 h-3
            shrink-0
          "
          />

          <p className="text-gray-400 text-xs sm:text-sm">{mainLang}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
