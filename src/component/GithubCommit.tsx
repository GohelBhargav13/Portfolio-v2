import { GitHubCalendar } from "react-github-calendar";

function GithubCommit() {
  return (
    <div className="w-full min-w-0 overflow-hidden">
      <div className="w-full min-w-0 overflow-x-auto overflow-y-hidden">
        <div className="min-w-max sm:min-w-0">
          <GitHubCalendar
            username="GohelBhargav13"
            colorScheme="dark"
            showTotalCount
            blockSize={12}
            blockMargin={3}
            fontSize={12}
          />
        </div>
      </div>
    </div>
  );
}

export default GithubCommit;
