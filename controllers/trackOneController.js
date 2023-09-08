// let data = {
//   slackUsername: "Niero",
//   backend: true,
//   age: 28,
//   bio: "Software / Engineer",
// };

// {
//   "slack_name": "example_name",
//   "current_day": "Monday",
//   "utc_time": "2023-08-21T15:04:05Z",
//   "track": "backend",
//   "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
//   "github_repo_url": "https://github.com/username/repo",
//   "status_code": 200
// }

// {
//   "slack_name": "example_name",
//   "current_day": "Monday",
//   "utc_time": "2023-08-21T15:04:05Z",
//   "track": "backend",
//   "github_file_url": "https://github.com/username/repo/blob/main/file_name.ext",
//   "github_repo_url": "https://github.com/username/repo",
//   "status_code": 200
// }

const dayOfWeekName = new Date().toLocaleString("default", { weekday: "long" });
// console.log(dayOfWeekName); // 👉️ Sunday

// utc date
// const now = new Date();

// const isoString = now.toISOString();

// console.log(isoString);

// const now = new Date();

// const year = now.getUTCFullYear();
// const month = now.getUTCMonth() + 1;
// const day = now.getUTCDate();
// const hours = now.getUTCHours();
// const minutes = now.getUTCMinutes();
// const seconds = now.getUTCSeconds();
// const milliseconds = now.getUTCMilliseconds();

// console.log(`${year}-${month}-${day}
//             ${hours}:${minutes}:${seconds}:${milliseconds}Z`);

//   "utc_time": "2023-08-21T15:04:05Z",

// const utc_time = `${year}-0${month}-0${day}T${hours}:${minutes}:${milliseconds}Z`;

// console.log(utc_time);

module.exports.getData = async (req, res) => {
  const currentDate = new Date();
  // const current_day = daysOfWeek[currentDate.getDay()];
  const utc_time = currentDate.toISOString().replace(/\.\d+Z$/, "Z");
  try {
    // console.log(req.query);

    const { slack_name, track } = req.query;

    res.status(200).json({
      slack_name: slack_name,
      current_day: dayOfWeekName,
      utc_time: utc_time,
      track: track,
      github_file_url:
        "https://github.com/Nierowheezy/backend-task/blob/main/app.js",
      github_repo_url: "https://github.com/Nierowheezy/backend-task.git",
      status_code: 200,
    });
  } catch (err) {
    res.status(404).json({ errors: { msg: "Something went wrong." } });
  }
};
