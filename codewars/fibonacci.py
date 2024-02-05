def fibonacci(n: int) -> int:
    if n == 0:
        return 0
    if n == 1:
        return 1

    prev = 0
    current = 1

    for _ in range(2, n + 1):
        next_num = prev + current
        prev = current
        current = next_num

    return current
