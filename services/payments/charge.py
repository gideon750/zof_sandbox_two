"""Tier-0 payment service (sandbox)."""


def charge(amount_cents: int) -> dict[str, int | str]:
    if amount_cents <= 0:
        raise ValueError("amount must be positive")
    return {"status": "charged", "amount_cents": amount_cents}
