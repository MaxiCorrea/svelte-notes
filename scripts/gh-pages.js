import { publish } from "gh-pages";

publish(
  "public",
  {
    branch: "gh-pages",
    silent: true,
    repo:
      "https://" +
      process.env.PERSONAL_ACCESS_TOKEN +
      "@github.com/maxicorrea/svelte-notes.git",
    user: {
      name: "MaxiCorrea",
      email: "jmaxicorrea@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
