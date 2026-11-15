import { ExternalLink } from "lucide-react";

// Type for the structure of the certificate
type providerTypes = "udemy" | "mongodb" | "ibm" | "coursera";

type certificateType = {
  name: string;
  provider: providerTypes;
  credentialLink: string;
  issueDate: string;
  skills?: string[];
};

// Certificate list
const certificateList: certificateType[] = [
  {
    provider: "udemy",
    credentialLink:
      "https://udemy-certificate.s3.amazonaws.com/pdf/UC-018f36a2-7d3b-4668-a4e5-c1555cf78392.pdf",
    issueDate: "Apr 2026",
    name: "Node.js - Beginner to Advance course with projects",
    skills: ["node.js", "express.js", "mongodb", "docker"],
  },
  {
    provider: "mongodb",
    credentialLink:
      "https://www.credly.com/badges/171f97bd-5e31-4360-9af0-c64f080f4f9d/linked_in_profile",
    issueDate: "Aug 2025",
    name: "CRUD Operations in MongoDB",
    skills: ["mongodb"],
  },
  {
    provider: "ibm",
    credentialLink:
      "https://www.credly.com/badges/4e65d528-d040-46f1-9b09-9453abd34893/linked_in_profile",
    issueDate: "Dec 2024",
    name: "Web Development Fundamentals",
    skills: ["HTML", "CSS", "javaScript"],
  },
];

// Provider logos
type providerLogos = Record<providerTypes, string>;

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
    <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
      {certificateList.map((certi) => (
        <div
          key={certi.name}
          className="flex h-full min-w-0 flex-col rounded-sm border-2 border-gray-300/30 bg-gray-950/30 p-3 sm:p-4"
        >
          {/* Provider Logo */}
          <div className="flex h-24 items-center justify-center rounded-xl border-2 border-gray-500 bg-gray-700/60 p-3 sm:h-28 md:h-32">
            <img
              src={commonProvider[certi.provider]}
              className="h-full max-h-16 w-full max-w-45 object-contain sm:max-h-20"
              alt={`${certi.provider} logo`}
            />
          </div>

          {/* Certificate Name */}
          <div className="w-full min-w-0 py-3">
            <p className="break-all text-center text-base text-gray-400 sm:text-lg">
              {certi.name}
            </p>
          </div>

          {/* Issue Date */}
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
            <code className="shrink-0 text-xs sm:text-sm">Issue date:</code>

            <p className="text-sm text-gray-400 sm:text-base">
              {certi.issueDate}
            </p>
          </div>

          {/* Skills */}
          {certi.skills && (
            <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-start">
              <code className="shrink-0 text-xs sm:text-sm">
                Skills Learned:
              </code>

              <div className="flex min-w-0 flex-wrap gap-2">
                {certi.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg bg-blue-800/40 px-2 py-1 text-xs text-gray-400 sm:text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Credential Link */}
          <div className="mt-auto w-full pt-4">
            <a
              href={certi.credentialLink}
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-gray-600 bg-gray-700/70 p-2 text-sm transition-colors hover:bg-gray-600/70 sm:text-base"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>Show credential</span>
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CertificateSection;
