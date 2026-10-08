"""Tier-0 payment service (sandbox)."""


def charge(amount_cents: int) -> dict[str, int | str]:
    if amount_cents <= 0:
        raise ValueError("amount must be positive")
    return {"status": "charged", "amount_cents": amount_cents}


def charge_with_retry(amount_cents: int, attempts: int = 3) -> dict[str, int | str]:
    last: Exception | None = None
    for _ in range(attempts):
        try:
            return charge(amount_cents)
        except ValueError as exc:
            last = exc
    raise RuntimeError("charge failed") from last
