"""Ledger service (e2e-joint test fixture)."""


def balance(entries):
    return sum(entries)


def credit(entries, amount):
    """e2e-joint 1791815174: happy-path change on the tier-1 ledger service."""
    return [*entries, amount]
