import profilePic from "../assets/profile_pic.jpg";

import {
  type LucideIcon,
  Users,
  Dot,
  MapPin,
  Clock,
  Link,
  CircleFadingPlus,
} from "lucide-react";

import LinkComp from "../component/Link.tsx";

// Other links types
type otherLinksType = {
  icon: LucideIcon;
  name: string;
  link?: string;
};

// Achievement types
type achievementType = {
  image: string;
};

// Other links
const otherLinks: otherLinksType[] = [
  { icon: MapPin, name: "India" },
  { icon: Clock, name: "19:05 (UTC -12:00)" },
  {
    icon: Link,
    name: "https://portfolio-chi-mocha-94.vercel.app/",
    link: "https://portfolio-chi-mocha-94.vercel.app/",
  },
  {
    icon: CircleFadingPlus,
    name: "in/bhargav-gohel-968919303",
    link: "https://www.linkedin.com/in/bhargav-gohel-968919303/",
  },
];

// Achievements list
const achievementsList: achievementType[] = [
  {
    image:
      "https://github.githubassets.com/assets/pull-shark-default-498c279a747d.png",
  },
  {
    image:
      "https://github.githubassets.com/assets/yolo-default-be0bbff04951.png",
  },
];

function Profile() {
  return (
    <div className="flex flex-col w-full min-w-0">
      <div className="flex flex-col w-full p-3 sm:p-4 md:p-5 gap-3">
        {/* Profile Image and Information */}
        <div
          className="
          flex flex-row
          items-center
          gap-3
          w-full
          min-w-0
          md:flex-col
          md:items-start
          md:gap-3
        "
        >
          <img
            src={profilePic}
            alt="profilepic"
            className="
              rounded-full
              w-20 h-20
              sm:w-24 sm:h-24
              md:w-36 md:h-36
              lg:w-44 lg:h-44
              object-cover
              border-2 border-gray-400
              shrink-0
            "
          />

          <div className="flex flex-col gap-1 min-w-0">
            <p className="text-lg sm:text-xl font-bold">Bhargav</p>

            <p className="text-sm sm:text-base md:text-lg text-gray-400/80 break-all">
              GohelBhargav13 · he/him
            </p>
          </div>
        </div>

        {/* Profile Description */}
        <div className="w-full min-w-0">
          <p
            className="
            w-full
            text-sm
            sm:text-base
            md:text-lg
            lg:text-base
            text-gray-200
            leading-relaxed
            break-all
          "
          >
            Trust me i am SOFTWARE ENGINEER, Hello, I have Worked with Legacy
            technologies like PHP as well as work with modern technologies like
            MERN, Python (My Favorite) with some amazing projects.
          </p>

          {/* Resume Button */}
          <button
            className="
            w-full
            sm:w-auto
            sm:min-w-52
            mt-3
            p-2
            rounded-lg
            bg-gray-700/60
            border-2 border-gray-600
            hover:bg-gray-600/50
            transition-colors
            cursor-pointer
          "
          >
            git move resume
          </button>

          {/* Followers and Following */}
          <div
            className="
            flex flex-wrap
            items-center
            gap-1
            mt-3
            text-sm
            sm:text-base
            text-gray-300/80
          "
          >
            <p className="flex items-center gap-1 hover:text-blue-500 cursor-pointer">
              <Users size={18} />

              <a
                href="https://github.com/GohelBhargav13?tab=followers"
                target="_blank"
                rel="noopener noreferrer"
              >
                followers
              </a>
            </p>

            <Dot />

            <p className="hover:text-blue-500 cursor-pointer">
              <a
                href="https://github.com/GohelBhargav13?tab=following"
                target="_blank"
                rel="noopener noreferrer"
              >
                following
              </a>
            </p>
          </div>

          {/* Other Links */}
          <div className="flex flex-col gap-1 mt-3 w-full">
            {otherLinks.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.name}
                  className="
                    flex
                    items-start
                    gap-2
                    p-1
                    w-full
                    min-w-0
                    text-sm
                    sm:text-base
                    lg:text-sm
                    text-gray-300
                  "
                >
                  <Icon size={18} className="text-gray-500 shrink-0 mt-0.5" />

                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        min-w-0
                        break-all
                        hover:text-blue-600
                        transition-colors
                      "
                    >
                      {item.name}
                    </a>
                  ) : (
                    <p className="break-all">{item.name}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Divider */}
        <hr className="w-full border-gray-500/90 mt-2" />

        {/* Achievements Heading */}
        <LinkComp
          link="https://github.com/GohelBhargav13?tab=achievements"
          children="Achievements"
          key="Achievements"
        />

        {/* Achievements */}
        <div
          className="
          grid
          grid-cols-2
          sm:grid-cols-2
          md:grid-cols-4
          lg:grid-cols-2
          gap-2
          w-full
          justify-items-center
        "
        >
          {achievementsList.map((achievement, index) => (
            <img
              key={index}
              width={90}
              src={achievement.image}
              alt={`Achievement ${index + 1}`}
              className="
                w-16 h-16
                sm:w-20 sm:h-20
                md:w-20 md:h-20
                lg:w-16 lg:h-16
                object-contain
              "
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
