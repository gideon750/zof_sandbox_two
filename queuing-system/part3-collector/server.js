// part3-collector (sandbox stand-in): Collects results and sends them to collector-service.
const express = require("express");

const app = express();
app.use(express.json());
app.post("/collector", (req, res) => res.status(202).json({ accepted: true, id: req.body.id }));
app.get("/healthz", (_req, res) => res.json({ status: "ok" }));
app.listen(process.env.PORT || 3000);
