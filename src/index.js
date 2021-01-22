const core = require("@actions/core");
const github = require("@actions/github");
const { isValid } = require("./validator");

function run() {
  const pattern = core.getInput("pattern");
  const title =
    github.context.payload &&
    github.context.payload.pull_request &&
    github.context.payload.pull_request.title;

  core.info(title);

  if (!isValid({ pattern, title })) {
    core.setFailed(
      `Pull request title "${title}" does not match regex pattern "${pattern}".`
    );
  }
}

run();
