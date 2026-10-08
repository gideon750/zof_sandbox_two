// Moves queued jobs to part1-forwarder.
const { jobs } = require("./db");

function next() {
  return jobs.find((j) => j.status === "queued") || null;
}

module.exports = { next };
