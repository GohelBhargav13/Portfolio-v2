import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import { toast } from "react-hot-toast";
import GithubCommit from "./GithubCommit";

function ContactSection() {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [sendingEmail, setSendingEmail] = useState<string>("");
  const [isLoadingShow, setLoadingShow] = useState<boolean>(false);
  const [loadingWidth, setLoadingWidth] = useState<number>(0);
  const [isStatementShow, setIsStatementShow] = useState<boolean>(false);

  // Handle keyboard event
  function handleKeyEvent(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter" || sendingEmail !== "y") return;
    if (isLoadingShow) return;

    if (e.key === "Enter" && sendingEmail === "y") {
      toast.success("Email sending...");
      setLoadingShow(true);

      let loadingWidthRef = setInterval(() => {
        setLoadingWidth((prev) => {
          if (prev >= 100) {
            toast.success("Email sent...");
            clearInterval(loadingWidthRef);
            setLoadingShow(false);
            setIsStatementShow(true);
            setLoadingWidth(0);

            return 0;
          }

          return prev + 10;
        });
      }, 500);
    }
  }

  return (
    <div className="flex w-full min-w-0 flex-col gap-5">
      {/* Terminal Contact Section */}
      <div className="mx-auto w-full max-w-4xl rounded-lg border border-gray-700 bg-[#0d1117] p-3 font-mono text-sm text-[#00ff95] shadow-lg transition-all duration-300 sm:p-4 sm:text-base">
        {/* Terminal Top Bar */}
        <div className="mb-4 flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500" />
          <span className="h-3 w-3 rounded-full bg-yellow-500" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>

        <div className="flex min-w-0 flex-col gap-3">
          {/* Username Input */}
          <div className="flex min-w-0 flex-wrap items-center gap-2">
            <label htmlFor="username" className="shrink-0 break-all">
              D:\Games\Enter a Name{">"}
            </label>

            <input
              type="text"
              name="username"
              id="username"
              className="min-w-0 flex-1 bg-transparent outline-none"
              autoComplete="off"
              value={userName}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUserName(e.target.value)
              }
            />
          </div>

          {/* Email Input */}
          {userName && (
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <label htmlFor="email" className="break-all">
                D:\Enter a Email\{userName}
                {">"}
              </label>

              <input
                type="email"
                name="email"
                id="email"
                className="min-w-0 flex-1 bg-transparent outline-none"
                autoComplete="off"
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </div>
          )}

          {/* Send Email Confirmation */}
          {email && (
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <label htmlFor="sendemail" className="break-all">
                D:\Send a Email\{"Y or N"}
                {">"}
              </label>

              <input
                type="text"
                name="sendemail"
                id="sendemail"
                className="min-w-0 flex-1 bg-transparent outline-none"
                value={sendingEmail}
                onKeyUp={handleKeyEvent}
                autoComplete="off"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSendingEmail(e.target.value.toLowerCase())
                }
              />
            </div>
          )}

          {/* Loading Progress */}
          {isLoadingShow && email && userName && sendingEmail === "y" && (
            <div className="flex items-center gap-2">
              <div className="h-2 flex-1 overflow-hidden bg-gray-200">
                <span
                  style={{ width: `${loadingWidth}%` }}
                  className="block h-full bg-green-600 transition-all duration-500 ease-linear"
                />
              </div>

              <p className="shrink-0 text-green-600">{loadingWidth}%</p>
            </div>
          )}

          {/* Success Message */}
          {isStatementShow && (
            <div className="min-w-0 break-all">
              <label htmlFor="username">
                D:\Email Sent Successfully\{userName}
                {">"}
              </label>
            </div>
          )}
        </div>
      </div>

      {/* About Cards */}
      <div className="grid w-full min-w-0 grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
        {/* About Passion */}
        <div className="flex h-full min-w-0 flex-col rounded-sm rounded-l-2xl border-2 border-gray-300/30 border-l-4 border-l-gray-500 bg-gray-950/30 p-3 sm:p-4">
          <h3 className="mb-3 text-center text-xl font-bold sm:text-2xl">
            About passion
          </h3>

          <p className="break-all text-sm leading-relaxed sm:text-base">
            Hii, I am passionate about web, API, Servers and the Real-Time
            communication technologies And DevOps. I love to learn new things.
          </p>
        </div>

        {/* About Interest */}
        <div className="flex h-full min-w-0 flex-col rounded-sm rounded-l-2xl border-2 border-gray-300/30 border-l-4 border-l-gray-500 bg-gray-950/30 p-3 sm:p-4">
          <h3 className="mb-3 text-center text-xl font-bold sm:text-2xl">
            About interest
          </h3>

          <div className="grid grid-cols-2 gap-2 text-center">
            <p className="break-all rounded-xl border-l-4 border-l-blue-300 bg-blue-800/50 p-2 text-sm sm:text-base">
              Web Development
            </p>

            <p className="break-all rounded-xl border-l-4 border-l-blue-300 bg-blue-800/50 p-2 text-sm sm:text-base">
              API Development
            </p>

            <p className="break-all rounded-xl border-l-4 border-l-blue-300 bg-blue-800/50 p-2 text-sm sm:text-base">
              AI Agents
            </p>

            <p className="break-all rounded-xl border-l-4 border-l-blue-300 bg-blue-800/50 p-2 text-sm sm:text-base">
              Saas development
            </p>
          </div>
        </div>

        {/* About Education */}
        <div className="flex h-full min-w-0 flex-col rounded-sm rounded-l-2xl border-2 border-gray-300/30 border-l-4 border-l-gray-500 bg-gray-950/30 p-3 sm:p-4">
          <h3 className="mb-3 text-center text-xl font-bold sm:text-2xl">
            About education
          </h3>

          <div className="grid grid-cols-1 gap-2 text-center">
            <div className="rounded-xl border-l-4 border-l-blue-300 bg-blue-800/50 p-4 sm:p-5">
              <p className="break-all text-sm sm:text-base">
                Diploma in Computer Engineering
              </p>
            </div>

            <div className="rounded-xl border-l-4 border-l-blue-300 bg-blue-800/50 p-4 sm:p-5">
              <p className="break-all text-sm sm:text-base">
                Bachelors in Computer Engineering
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* GitHub Contribution Calendar */}
      <div className="mt-4 flex w-full min-w-0 flex-col gap-3 lg:mt-10 lg:flex-row">
        <div className="w-full min-w-0 flex-1 overflow-hidden">
          <GithubCommit />
        </div>

        {/* Year Selection - Desktop */}
        <div className="hidden shrink-0 cursor-pointer p-4 text-center lg:block">
          <p className="w-18 rounded-xl bg-blue-600 p-1">2026</p>

          <p className="w-18 rounded-xl p-1.5 hover:bg-gray-500/20">2025</p>

          <p className="w-18 rounded-xl p-1.5 hover:bg-gray-500/20">2024</p>

          <p className="w-18 rounded-xl p-1.5 hover:bg-gray-500/20">2023</p>
        </div>
      </div>
    </div>
  );
}

export default ContactSection;
