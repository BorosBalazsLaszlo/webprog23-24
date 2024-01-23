function kicsereles(arr) {
    const kozepso = Math.floor(arr.length / 2);
    const head = arr.slice(0, kozepso);
    const tail = arr.slice(kozepso);
    const kicserelt = [...tail, ...head];
    return kicserelt;
}