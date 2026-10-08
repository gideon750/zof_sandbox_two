# zof_sandbox_two

Sandbox for the Zof GitHub App. It mirrors the **structure** of Zof-AI's queuing system (an API and
worker plus three parts: forwarder, processor, collector) with small stand-in code, so the System
Graph sees the same services, tiers and owners without the real source. `zof.yaml` declares them.

- `queuing-system/`: tier 0, owned by team-core (part3-collector by team-platform).
- `services/payments/`: tier 0 example service.

`main` is protected by a ruleset that requires the `Zof / Control` check from the Zof app.
