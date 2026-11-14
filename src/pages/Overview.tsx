import Profile from "../component/Profile"
import ProjectOverview from "../component/ProjectOverview"

function Overview() {
  return (
    <div className='max-w-1370 w-full bg-gray-950/95 text-white'>
        <div className="flex flex-col gap-4 w-full sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-row">
                <div className="w-[27%]">
                        <Profile />
                </div>
                <div className="w-3/4">
                    <ProjectOverview />
                </div>
        </div>
    </div>
  )
}

export default Overview