import Profile from "../component/Profile";
import SkillSection from "../component/SkillSection";

function Skills() {
  return (
    <div className="w-full max-w-342.5 bg-gray-950/95 text-white">
      <div
        className="
        flex flex-col
        gap-4
        w-full
        p-3 sm:p-4
        lg:flex-row
        lg:items-start
        lg:gap-5
      "
      >
        {/* Profile Section */}
        <div
          className="
          hidden
          md:block
          w-full
          min-w-0
          lg:w-[28%]
          lg:shrink-0
        "
        >
          <Profile />
        </div>

        {/* Skills Section */}
        <div
          className="
          w-full
          min-w-0
          lg:flex-1
        "
        >
          <SkillSection />
        </div>
      </div>
    </div>
  );
}

export default Skills;
