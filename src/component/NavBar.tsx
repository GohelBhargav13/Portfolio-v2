import { type LucideIcon ,Menu, FolderGit2, GitPullRequestArrow, CircleDot, BookBookmark, MessageSquareDiff, BookOpen, PanelsTopLeft, Certificate, MailPen, BrainCircuit } from "lucide-react"
import githubLogo from "../assets/github_logo.png"
import profilePic from "../assets/profile_pic.jpg"
import { useNavigate } from "react-router"
import { useState } from "react";

// declare the routes types
type navbarRoutesTypes = {
    icon:LucideIcon,
    name: string;
    counts?: number
}

// define the routes as per the features
const routes: navbarRoutesTypes[] = [
    { "icon": BookOpen, "name":"OverView" },
    { "icon": PanelsTopLeft, "name":"Projects" },
    { "icon": BrainCircuit, "name":"Skills" },
    { "icon": Certificate, "name":"Certificate" },
    { "icon": MailPen, "name":"Contact" },
]

function NavBar() {
    const [currentPage, setCurrentPage] = useState<string>("OverView")
    const navigate = useNavigate()

    // handle the current page updation
    function handleCurrentPage(currentPage: string){
        setCurrentPage(currentPage)
    }

    // handle the navigation between pages
    function handleNavigation(route: string){
        navigate(`/${route}`)
    }
  return (
    <div className="max-w-1370 w-full bg-linear-to-br from-black to-gray-950 text-white font-sans border-b-2 border-b-gray-500">
        <div className="w-full p-3 flex">
            <div className="flex gap-4 w-full items-center">
                <Menu className="text-gray-400 border-2 border-gray-600 rounded-sm p-0.5 hover:bg-gray-800/75 hover:cursor-pointer" size={30} />
                <img src={githubLogo} alt="github logo" className="w-8" />
                <p className="font-semibold text-md hidden md:block lg:block ">GohelBhargav</p>
            </div>
            <div className="flex gap-2 w-full justify-end items-center">
               <input type="text" placeholder="🔍 Type / to search" className="border-gray-700 border-2 p-1 rounded-lg hidden md:block lg:block" />
               <FolderGit2 className="text-gray-400 border-2 border-gray-600 rounded-lg p-1 hover:cursor-pointer hidden md:hidden lg:block" size={30} />
               <GitPullRequestArrow className="text-gray-400 border-2 border-gray-600 rounded-lg p-1 hover:cursor-pointer hidden md:hidden lg:block" size={30} />
               <CircleDot className="text-gray-400 border-2 border-gray-600 rounded-lg p-0.5 hover:cursor-pointer hidden md:hidden lg:block" size={30} />
               <BookBookmark className="text-gray-400 border-2 border-gray-600 rounded-lg p-1 hover:cursor-pointer hidden md:hidden lg:block" size={30} />
               <MessageSquareDiff className="text-gray-400 border-2 border-gray-600 rounded-lg p-1 hover:cursor-pointer hidden md:hidden lg:block" size={30} />
               <img src={profilePic} alt="profile_pic" className="w-11 rounded-[40px] border-2 border-gray-600" />
            </div>
        </div>
        <div className="w-full p-1">
            <div className="flex gap-5">
                { routes.map((route) => (
                    <div onClick={() => [handleCurrentPage(route.name), handleNavigation(route.name.toLowerCase())]} className={`flex gap-2 p-2 ${route.name === currentPage ? "border-b-2 border-b-orange-400" : ""} hover:bg-gray-700/50 hover:cursor-pointer hover:rounded-lg`} key={route.name}>
                        <button><route.icon className="text-gray-500 font-bold" /></button>
                        <p>{route.name}</p>
                    </div>
                )) }
            </div>
        </div>
    </div>
  )
}

export default NavBar