from ledger import balance


def test_balance_sums_entries():
    assert balance([5, -2, 3]) == 6


def test_balance_of_nothing_is_zero():
    assert balance([]) == 0
