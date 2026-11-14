import Profile from "../component/Profile"
import ProjectList from "../component/ProjectList"

function Projects() {
  return (
    <div className='max-w-1370 w-full bg-gray-950/95 text-white'>
        <div className="flex flex-col gap-4 w-full sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row">
                <div className="w-[28%] hidden sm:hidden md:block">
                    <Profile />
                </div>
                <div className="w-3/4">
                    <ProjectList />
                </div>
        </div>
    </div>
  )
}

export default Projects