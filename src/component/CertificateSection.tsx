import { ExternalLink } from "lucide-react";

// type for the strucutre of the certificate
type providerTypes = "udemy" | "mongodb" | "ibm" | "coursera";

type certificateType = {
  name: string;
  provider: providerTypes;
  credentiaLink: string;
  issueDate: string;
  skills?: string[];
};

// certificate list with types
const certificateList: certificateType[] = [
  {
    provider: "udemy",
    credentiaLink:
      "https://udemy-certificate.s3.amazonaws.com/pdf/UC-018f36a2-7d3b-4668-a4e5-c1555cf78392.pdf",
    issueDate: "Apr 2026",
    name: "Node.js - Beginner to Advance course with projects",
    skills: ["node.js", "express.js", "mongodb", "docker"],
  },
  {
    provider: "mongodb",
    credentiaLink:
      "https://www.credly.com/badges/171f97bd-5e31-4360-9af0-c64f080f4f9d/linked_in_profile",
    issueDate: "Aug 2025",
    name: "CRUD Operations in MongoDB",
    skills: ["mongodb"],
  },
  {
    provider: "ibm",
    credentiaLink:
      "https://www.credly.com/badges/4e65d528-d040-46f1-9b09-9453abd34893/linked_in_profile",
    issueDate: "Dec 2024",
    name: "Web Development Fundamentals",
    skills: ["HTML", "CSS", "javaScript"],
  },
];

type providerLogos = Record<providerTypes, string>;

// common provider with the links
const commonProvider: providerLogos = {
  udemy:
    "https://cdn.brandfetch.io/idTqV2BNgX/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  mongodb:
    "https://cdn.brandfetch.io/ideyyfT0Lp/theme/dark/idO6r-bq1D.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  ibm: "https://cdn.brandfetch.io/id75EGi9lC/theme/dark/logo.svg?c=1dxbfHSJFAPEGdCLU4o5B",
  coursera:
    "https://cdn.brandfetch.io/idyWgRtYa5/w/820/h/116/theme/dark/logo.png?c=1dxbfHSJFAPEGdCLU4o5B",
};

function CertificateSection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2">
      {certificateList.map((certi) => (
        <>
          <div
            className="bg-gray-950/30 border-2 border-gray-300/30 rounded-sm h-full p-2 m-2 flex flex-col"
            key={certi.name}
          >
            <div className="flex bg-gray-700/60 border-2 border-gray-500 rounded-xl p-3 justify-center ">
              <img
                src={commonProvider[certi.provider]}
                width="250"
                height="250"
                alt=""
              />
            </div>
            <div className="w-full p-2">
              <p className="text-gray-400 text-center text-lg">{certi.name}</p>
            </div>
            <div className="flex gap-2">
              <code>Issue date:- </code>
              <p className="text-gray-400 text-center text-lg">
                {certi.issueDate}
              </p>
            </div>

            {certi.skills && (
              <div className="flex gap-2">
                <code>Skills Learned:- </code>
                <div className="grid grid-cols-3 gap-1">
                  {certi.skills.map((skill) => (
                    <>
                      <p
                        key={skill}
                        className="text-gray-400 text-center text-lg"
                      >
                        {skill}{","}
                      </p>
                    </>
                  ))}
                </div>
              </div>
            )}

            <div className="w-full p-1">
              <a
                href={certi.credentiaLink}
                className="bg-gray-700/70 p-2 flex gap-1 rounded-xl border-2 border-gray-600 justify-center"
                target="_blank"
              >
                <p>Show credential</p>
                <ExternalLink />
              </a>
            </div>
          </div>
        </>
      ))}
    </div>
  );
}

export default CertificateSection;
