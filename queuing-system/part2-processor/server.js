// part2-processor (sandbox stand-in): Runs each job and reports the result.
const express = require("express");

const app = express();
app.use(express.json());
app.post("/processor", (req, res) => res.status(202).json({ accepted: true, id: req.body.id }));
app.get("/healthz", (_req, res) => res.json({ status: "ok" }));
app.listen(process.env.PORT || 3000);
