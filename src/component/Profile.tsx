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

// declare the types of the other links
type otherLinksType = {
  icon: LucideIcon;
  name: string;
  link?: string;
};

// declare the type pf the achivements
type achivementType = {
  image: string;
};

// links of the other links section
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

// set of the achivements with types
const achivementsList: achivementType[] = [
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
    <div className="flex flex-col">
      <div className="flex flex-col p-5 gap-2">
        <div className="flex flex-row gap-2 sm:flex-row md:flex-col sm:gap-2">
          <img
            src={profilePic}
            alt="profilepic"
            className="rounded-[200px] w-20 h-20 border-2 border-gray-400 sm:w-20 sm:h-20 md:w-40 md:h-40 lg:w-70 lg:h-70"
          />
          <div className="flex flex-col gap-1">
            <p className="text-[18px] font-bold sm:text-[18px] md:text-[20px]">Bhargav</p>
            <p className="text-[18px] text-gray-400/80 sm:text-[18px] md:text-[20px]">GohelBhargav13 · he/him</p>
          </div>
        </div>
        <div className="max-w-100">
          <pre className="w-80 text-wrap text-[17px] sm:text-[17px] md:text-[21px]lg:text-2xl">
            Trust me i am SOFTWARE ENGINEER, Hello, I have Worked with Legecy
            technologies like PHP as well as work with modern technologies like MERN,
            Python (My Favorite) with some amazing projects.
          </pre>
          <button className="bg-gray-700/60 rounded-lg hover:cursor-pointer hover:bg-gray-600/50 w-70 mt-3 p-1.5 border-2 border-gray-600">
            git move resume
          </button>

          <div className="flex gap-0.5 mt-3 text-gray-300/80 hover:cursor-pointer">
            <p className="flex gap-1 hover:text-blue-500">
              <Users size={20} />
              <a
                href="https://github.com/GohelBhargav13?tab=followers"
                target="_blank"
              >
                followers
              </a>
            </p>
            <Dot />
            <p className="flex gap-1 hover:text-blue-500">
              <a
                href="https://github.com/GohelBhargav13?tab=following"
                target="_blank"
              >
                following
              </a>
            </p>
          </div>

          <div className="mt-3">
            {otherLinks.map((link) => (
              <div className="flex gap-2 p-1 text-[15px] sm:text-[16px] md:text-[17px] lg:text-[18px]" key={link.name}>
                <p className="text-gray-500/95">{<link.icon />}</p>
                {link.link ? (
                  <a className="hover:text-blue-600" href={link.link}>
                    {link.name}
                  </a>
                ) : (
                  <p>{link.name}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <hr className="text-gray-500/90 w-75 font-bold mt-2" />
         <LinkComp
          link="https://github.com/GohelBhargav13?tab=achievements"
          children="Achievements"
          key="Achievements"
        />
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4">
          {achivementsList.map((achive, i) => (
            <img
              key={i}
              width={90}
              src={achive.image}
              alt={`${achive.image}-${i}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Profile;
