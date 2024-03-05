function squareUp(n) {
    const result = [];

    for (let sor = 1; sor <= n; sor++) {
        for (let oszl = 1; oszl <= n; oszl++) {
            if (oszl <= n - sor) {
                result.push(0); 
            } else {
                result.push(n - oszl + 1); 
            }
        }
    }

    return result;
}
