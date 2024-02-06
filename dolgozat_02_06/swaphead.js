// Swap the head and the tail
function swapHeadAndTail(arr) {
    let kozepso = Math.floor(arr.lenght / 2);
    let head = arr.slice(0, kozepso);
    let tail = arr.slice(kozepso);
    let kicserelt = [...tail, ...head]
    return kicserelt
}

console.log(swapHeadAndTail([ 1, 2, 3, 4, 5 ]), [ 4, 5, 3, 1, 2 ]);
console.log(swapHeadAndTail([ -1, 2 ]), [ 2, -1 ]);
console.log(swapHeadAndTail([ 1, 2, -3, 4, 5, 6, -7, 8 ]), [ 5, 6, -7, 8, 1, 2, -3, 4 ]);
