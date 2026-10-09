// part3-collector (sandbox stand-in): collects each job's result and sends it to collector-service.
const express = require("express");
const axios = require("axios");

// collector-service lives in its own repository (zof_sandbox_collector); queuing calls it, not the reverse.
const COLLECTOR_SERVICE_URL = process.env.COLLECTOR_SERVICE_URL || "http://collector-service:3000";

const app = express();
app.use(express.json());
app.post("/collector", async (req, res) => {
  const { id, outcome } = req.body;
  await axios.post(`${COLLECTOR_SERVICE_URL}/results`, { jobId: id, outcome });
  res.status(202).json({ accepted: true, id });
});
app.get("/healthz", (_req, res) => res.json({ status: "ok" }));
app.listen(process.env.PORT || 3000);
