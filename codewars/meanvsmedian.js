function meanVsMedian(numbers)
{
    const mean = numbers.reduce((acc, curr) => acc + curr, 0) / numbers.length;
    let median = 0;
    const mid = Math.floor(numbers.length / 2);
    const sorted = numbers.sort((a, b) => a - b);

    if (numbers.length % 2 === 0)
    {
        median = ((sorted[mid - 1] + sorted[mid]) / 2);
    }
    else
    {
        median = sorted[mid];
    }

    if (mean > median)
    {
        return("mean")
    }
    else if (median > mean)
    {
        return("median")
    }
    else if (median == mean)
    {
        return("same")
    }
}
