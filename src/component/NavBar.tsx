import {
  type LucideIcon,
  Menu,
  FolderGit2,
  GitPullRequestArrow,
  CircleDot,
  BookBookmark,
  MessageSquareDiff,
  BookOpen,
  PanelsTopLeft,
  Certificate,
  MailPen,
  BrainCircuit,
  Search,
} from "lucide-react";

import githubLogo from "../assets/github_logo.png";
import profilePic from "../assets/profile_pic.jpg";
import { useNavigate } from "react-router";
import { useState } from "react";

type navbarRoutesTypes = {
  icon: LucideIcon;
  name: string;
};

const routes: navbarRoutesTypes[] = [
  { icon: BookOpen, name: "OverView" },
  { icon: PanelsTopLeft, name: "Projects" },
  { icon: BrainCircuit, name: "Skills" },
  { icon: Certificate, name: "Certificate" },
  { icon: MailPen, name: "Contact" },
];

function NavBar() {
  const [currentPage, setCurrentPage] = useState("OverView");
  const navigate = useNavigate();

  function handleNavigation(route: string) {
    setCurrentPage(route);
    navigate(`/${route.toLowerCase()}`);
  }

  return (
    <div className="w-full max-w-342.5 bg-linear-to-br from-black to-gray-950 text-white font-sans border-b-2 border-b-gray-500">
      {/* Top Navbar */}
      <div className="w-full px-3 py-2 sm:p-3 flex items-center gap-2 sm:gap-4">
        {/* Left Section */}
        <div className="flex gap-2 sm:gap-4 items-center flex-1 min-w-0">
          <Menu
            size={28}
            className="shrink-0 text-gray-400 border-2 border-gray-600 rounded-sm p-0.5 cursor-pointer hover:bg-gray-800/75"
          />

          <img
            src={githubLogo}
            alt="github logo"
            className="w-7 sm:w-8 shrink-0"
          />

          <p className="font-semibold text-sm sm:text-md hidden xs:block truncate">
            GohelBhargav
          </p>
        </div>

        {/* Right Section */}
        <div className="flex gap-2 sm:gap-3 items-center justify-end shrink-0">
          {/* Search */}
          <div className="hidden sm:flex items-center border-2 border-gray-700 rounded-lg px-2">
            <Search size={16} className="text-gray-500" />
            <input
              type="text"
              placeholder="Type / to search"
              className="bg-transparent p-1.5 outline-none text-sm w-28 md:w-40"
            />
          </div>

          {/* GitHub Icons - Desktop Only */}
          <div className="hidden lg:flex gap-2 items-center">
            <FolderGit2
              className="text-gray-400 border-2 border-gray-600 rounded-lg p-1 cursor-pointer"
              size={30}
            />

            <GitPullRequestArrow
              className="text-gray-400 border-2 border-gray-600 rounded-lg p-1 cursor-pointer"
              size={30}
            />

            <CircleDot
              className="text-gray-400 border-2 border-gray-600 rounded-lg p-0.5 cursor-pointer"
              size={30}
            />

            <BookBookmark
              className="text-gray-400 border-2 border-gray-600 rounded-lg p-1 cursor-pointer"
              size={30}
            />

            <MessageSquareDiff
              className="text-gray-400 border-2 border-gray-600 rounded-lg p-1 cursor-pointer"
              size={30}
            />
          </div>

          {/* Profile */}
          <img
            src={profilePic}
            alt="profile_pic"
            className="w-8 h-8 sm:w-11 sm:h-11 rounded-full border-2 border-gray-600 object-cover"
          />
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="w-full px-2 sm:px-3 pb-1 overflow-x-auto scrollbar-hide">
        <div className="flex gap-2 sm:gap-4 min-w-max">
          {routes.map((route) => {
            const Icon = route.icon;
            const isActive = route.name === currentPage;

            return (
              <button
                key={route.name}
                onClick={() => handleNavigation(route.name)}
                className={`
                  flex items-center gap-1.5 sm:gap-2
                  px-2 sm:px-3 py-2
                  text-xs sm:text-sm whitespace-nowrap
                  transition-colors duration-200
                  hover:bg-gray-700/50 hover:rounded-lg
                  ${
                    isActive
                      ? "border-b-2 border-b-orange-400 text-white"
                      : "text-gray-400"
                  }
                `}
              >
                <Icon size={17} className="shrink-0" />
                <span>{route.name}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
