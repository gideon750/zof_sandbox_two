// part1-forwarder (sandbox stand-in): Forwards queued jobs to the processor.
const express = require("express");

const app = express();
app.use(express.json());
app.post("/forwarder", (req, res) => res.status(202).json({ accepted: true, id: req.body.id }));
app.get("/healthz", (_req, res) => res.json({ status: "ok" }));
app.listen(process.env.PORT || 3000);
