const L = (n, L0, L1, add) => {
    const result = [L0, L1]; 

    for (let i = 2; i < n; i++) {
        const nextNum = result[i - 1] + result[i - 2] + add;
        result.push(nextNum);
    }

    return result;
}
