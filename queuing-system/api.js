// Validates a job and records it before forwarding.
const { save } = require("./db");

async function enqueue(job) {
  if (!job || typeof job.payload !== "object") throw new Error("payload required");
  return save({ ...job, status: "queued", queuedAt: new Date().toISOString() });
}

module.exports = { enqueue };
