"""Ledger service (e2e-joint test fixture)."""


def balance(entries):
    return sum(entries)


def credit(entries, amount):
    """e2e-joint 1791815174: happy-path change on the tier-1 ledger service."""
    return [*entries, amount]


def debit(entries, amount):
    """e2e-joint: second commit (re-plan after F10)."""
    return [*entries, -amount]


def total(entries):
    """e2e-joint: third commit, after approval (must invalidate it)."""
    return balance(entries)
