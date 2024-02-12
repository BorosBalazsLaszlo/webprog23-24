function every(arr, interval, start) {
    interval = interval || 1;
    start = start || 0;

    var result = [];

    for (var i = start; i < arr.length; i += interval) {
        result.push(arr[i]);
    }

    return result;
}
