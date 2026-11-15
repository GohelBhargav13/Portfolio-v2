import { BrainCog } from "lucide-react";
import type { ReactNode } from "react";

// Type for the skills style
type skillsType = {
  icon: ReactNode;
  skillName: string;
  percentage: string;
};

// Skills list
const skillList: skillsType[] = [
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg"
        alt="HTML"
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
    ),
    skillName: "HTML",
    percentage: "80",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
        alt="CSS"
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
    ),
    skillName: "CSS",
    percentage: "50",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg"
        alt="JavaScript"
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
    ),
    skillName: "JS",
    percentage: "80",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
        alt="React"
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
    ),
    skillName: "React.js",
    percentage: "70",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg"
        alt="Node.js"
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
    ),
    skillName: "node.js",
    percentage: "70",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg"
        alt="Express"
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
    ),
    skillName: "express.js",
    percentage: "70",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg"
        alt="MongoDB"
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
    ),
    skillName: "mongodb",
    percentage: "60",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg"
        alt="PHP"
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
    ),
    skillName: "php",
    percentage: "70",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
        alt="Python"
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
    ),
    skillName: "python",
    percentage: "70",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg"
        alt="Docker"
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
    ),
    skillName: "docker",
    percentage: "50",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg"
        alt="AWS"
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
    ),
    skillName: "aws",
    percentage: "40",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg"
        alt="Git"
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
    ),
    skillName: "git",
    percentage: "70",
  },
  {
    icon: (
      <img
        src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg"
        alt="MySQL"
        className="h-10 w-10 sm:h-12 sm:w-12"
      />
    ),
    skillName: "mysql",
    percentage: "70",
  },
];

function SkillSection() {
  return (
    <div className="flex w-full min-w-0 flex-col gap-5 p-3 sm:p-4 md:p-5">
      {/* Heading */}
      <div className="flex w-full flex-col items-center justify-center">
        <BrainCog size={56} className="sm:h-16 sm:w-16 md:h-20 md:w-20" />

        <p className="mt-2 text-xl font-mono sm:text-2xl">SKILLS</p>
      </div>

      {/* Skills Grid */}
      <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {skillList.map((skill) => (
          <div
            key={skill.skillName}
            className="flex h-full min-w-0 flex-col rounded-sm border-2 border-gray-300/30 bg-gray-950/30 p-3 sm:p-4"
          >
            {/* Skill Icon and Name */}
            <div className="flex min-w-0 items-center gap-3">
              <div className="flex shrink-0 items-center justify-center">
                {skill.icon}
              </div>

              <div className="min-w-0">
                <p className="break-all text-base font-bold text-blue-500 sm:text-lg">
                  {skill.skillName}
                </p>
              </div>
            </div>

            {/* Knowledge Percentage */}
            <div className="mt-3 flex flex-wrap items-center gap-x-2 gap-y-1">
              <code className="text-xs sm:text-sm">Knowledge Percent:</code>

              <p className="text-sm text-gray-400 sm:text-base">
                {skill.percentage}%
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSection;
