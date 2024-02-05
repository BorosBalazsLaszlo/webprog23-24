function insertDash(num) {
    const numStr = num.toString();

    let result = numStr[0];

    for (let i = 1; i < numStr.length; i++) {
        const currentDigit = parseInt(numStr[i]);
        const previousDigit = parseInt(numStr[i - 1]);

        if (currentDigit % 2 === 1 && previousDigit % 2 === 1) {
            result += '-' + numStr[i];
        } else {
            result += numStr[i];
        }
    }

    return result;
}
