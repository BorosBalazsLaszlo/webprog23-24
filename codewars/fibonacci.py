def fibonacci(n: int) -> int:
    if n == 0:
        return 0
    if n == 1:
        return 1

    elozo = 0
    jelenlegi = 1

    for _ in range(2, n + 1):
        kovetkezo = elozo + jelenlegi
        elozo = jelenlegi
        jelenlegi = kovetkezo

    return jelenlegi
