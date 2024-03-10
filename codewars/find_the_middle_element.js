function gimme(arr) {
    const sorted = arr.slice(0).sort((a, b) => a - b);
    const kozepso = sorted[1];

    const index = arr.indexOf(kozepso);

    return index;
}
