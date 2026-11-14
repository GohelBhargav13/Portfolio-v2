import { BrainCog } from "lucide-react";
import type { ReactNode } from "react";

// type for the skills style
type skillsType = {
  icon: ReactNode;
  skillName: string;
  percentage: string;
};

// skills list
const skillList: skillsType[] = [
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" width="50" height="50" />
    ),
    skillName: "HTML",
    percentage: "80",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" width="50" height="50"/>
    ),
    skillName: "CSS",
    percentage: "50",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" width="50" height="50" />
    ),
    skillName: "JS",
    percentage: "80",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" width="50" height="50" />
    ),
    skillName: "React.js",
    percentage: "70",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" width="50" height="50" />
    ),
    skillName: "node.js",
    percentage: "70",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" width="50" height="50" />
    ),
    skillName: "express.js",
    percentage: "70",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" width="50" height="50" />
    ),
    skillName: "mongodb",
    percentage: "60",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" width="50" height="50" />
    ),
    skillName: "php",
    percentage: "70",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" width="50" height="50" />
    ),
    skillName: "python",
    percentage: "70",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" width="50" height="50" />
    ),
    skillName: "docker",
    percentage: "50",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original.svg" width="50" height="50" />
    ),
    skillName: "aws",
    percentage: "40",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" width="50" height="50" />
    ),
    skillName: "git",
    percentage: "70",
  },
  {
    icon: (
      <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg" width="50" height="50" />
    ),
    skillName: "mysql",
    percentage: "70",
  },
];

function SkillSection() {
  return (
    <div className="flex flex-col p-5">
      <div className="w-full justify-items-center">
        <p>
          <BrainCog size={80} />
        </p>
        <p className="mt-2 text-2xl font-mono">SKILLS</p>
      </div>
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {skillList.map((skill) => (
          <div className="bg-gray-950/30 border-2 border-gray-300/30 rounded-sm h-full p-2 m-2" key={skill.skillName}>
            <div className="flex gap-3 p-3 items-center">
              <div>
                { skill.icon }
              </div>
              <div>
                <a
                  href="/skills"
                  className="text-blue-500 font-bold text-lg hover:cursor-pointer hover:border-b-2 hover:border-blue-500"
                >
                  {skill.skillName}
                </a>
              </div>
            </div>
            <div className="p-2 flex gap-2">
                <code>Knowledge Percent:-</code>
              <p className="text-gray-400 text-start">{skill.percentage}{'%'}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillSection;
