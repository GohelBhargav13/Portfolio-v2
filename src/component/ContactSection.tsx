import { useState, type ChangeEvent, type KeyboardEvent } from "react";
import { toast } from "react-hot-toast";
import GithubCommit from "./GithubCommit";

function ContactSection() {
  const [userName, setUserName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [sendingEmail, setSendingEmail] = useState<string>("");
  const [isLoadingShow, setLoadingShow] = useState<boolean>(false);
  const [LoadingWidth, setLoadingWidth] = useState<number>(0);
  const [isStatementShow, setIsStatementShow] = useState<boolean>(false);

  // handle the key board event
  function handleKeyEvent(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key !== "Enter" || sendingEmail !== "y") return;
    if (isLoadingShow) return;

    if (e.key == "Enter" && sendingEmail === "y") {
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
    <>
      <div className="hidden sm:hidden md:hidden lg:block bg-[#0d1117] text-[#00ff95] font-mono p-4 rounded-lg shadow-lg border border-gray-700 w-[95%] sm:w-[85%] md:w-150 lg:w-175 mx-auto transition-all duration-300">
        {/* Top Bar */}
        <div className="flex space-x-2 mb-3">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <label htmlFor="username">D:\Games\Enter a Name{">"}</label>
            <input
              type="text"
              name="username"
              id="username"
              className="w-100 outline-0 bg-[#0d1117]"
              autoComplete="off"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setUserName(e.target.value)
              }
            />
          </div>
          {userName && (
            <div className="flex gap-2">
              <label htmlFor="username">
                D:\Enter a Email\{userName}
                {">"}
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-100 outline-0 bg-[#0d1117]"
                autoComplete="off"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
            </div>
          )}
          {email && (
            <div className="flex gap-2">
              <label htmlFor="username">
                D:\Send a Email\{"Y or N"}
                {">"}
              </label>
              <input
                type="text"
                name="sendemail"
                id="sendemail"
                className="w-100 outline-0 bg-[#0d1117]"
                onKeyUp={handleKeyEvent}
                autoComplete="off"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setSendingEmail(e.target.value.toLowerCase())
                }
              />
            </div>
          )}
          {isLoadingShow && email && userName && sendingEmail === "y" && (
            <div className="flex gap-1 items-center">
              <div className="w-full h-2 bg-gray-200 overflow-hidden">
                <span
                  style={{ width: `${LoadingWidth}%` }}
                  className="block h-10 bg-green-600 transition-all duration-500 ease-linear"
                />
              </div>
              <p className="text-green-600">
                {LoadingWidth}
                {"%"}
              </p>
            </div>
          )}

          {isStatementShow && (
            <div className="flex gap-2">
              <label htmlFor="username">
                D:\Email Sent Successfully\{userName}
                {">"}
              </label>
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-2">
        <div className="bg-gray-950/30 border-2 border-gray-300/30 rounded-sm h-full p-2 m-2 flex flex-col border-l-4 border-l-gray-500 rounded-l-2xl">
          <h3 className="font-bold text-2xl text-center">About passion</h3>
          <p>
            Hii , I am passionate about web, API , Servers and the Real-Time
            communication technologies And DevOps. I love to learn new things.
          </p>
        </div>
        <div className="bg-gray-950/30 border-2 border-gray-300/30 rounded-sm h-full p-2 m-2 flex flex-col border-l-4 border-l-gray-500 rounded-l-2xl">
          <h3 className="font-bold text-2xl text-center">About interest</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 text-center">
            <p className="bg-blue-800/50 p-1 border-l-4 border-l-blue-300  rounded-xl">
              Web Development
            </p>
            <p className="bg-blue-800/50 p-1 border-l-4 border-l-blue-300  rounded-xl">
              API Development
            </p>
            <p className="bg-blue-800/50 p-1 border-l-4 border-l-blue-300  rounded-xl">
              AI Agents
            </p>
            <p className="bg-blue-800/50 p-1 border-l-4 border-l-blue-300  rounded-xl">
              Saas developement
            </p>
          </div>
        </div>
        <div className="bg-gray-950/30 border-2 border-gray-300/30 rounded-sm h-full p-2 m-2 flex flex-col border-l-4 border-l-gray-500 rounded-l-2xl">
          <h3 className="font-bold text-2xl text-center">About education</h3>
          <div className="grid grid-cols-1 gap-2 text-center">
            <div className="bg-blue-800/50 p-5 border-l-4 border-l-blue-300 rounded-xl">
              <p>Diploma in Computer Engineering</p>
            </div>
            <div className="bg-blue-800/50 p-5 border-l-4 border-l-blue-300 rounded-xl">
              <p>Bachelors in Computer Engineering</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-10">
            <div className="w-[95%] sm:w-[75%] md:w-[85%] lg:w-[95%]">
                <GithubCommit />
            </div>
            <div className="p-6 py-4 text-center hover:cursor-pointer hidden sm:hidden md:hidden lg:block">
                <p className="bg-blue-600 w-18 p-1 rounded-xl">2026</p>
                <p className="hover:bg-gray-500/20 w-18 p-1.5 rounded-xl">2025</p>
                <p className="hover:bg-gray-500/20 w-18 p-1.5 rounded-xl">2024</p>
                <p className="hover:bg-gray-500/20 w-18 p-1.5 rounded-xl">2023</p>
            </div>
      </div>
    </>
  );
}

export default ContactSection;
