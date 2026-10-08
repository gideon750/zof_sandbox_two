// Queuing system API (sandbox stand-in): accepts jobs and hands them to the forwarder.
const express = require("express");
const { enqueue } = require("./api");

const app = express();
app.use(express.json());
app.post("/jobs", async (req, res) => res.status(202).json(await enqueue(req.body)));
app.get("/healthz", (_req, res) => res.json({ status: "ok" }));
app.listen(process.env.PORT || 3000);
