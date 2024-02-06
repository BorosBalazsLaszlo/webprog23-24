// Mean vs. Median
function meanVsMedian(szam)
{
    const mean = szam.reduce((acc, curr) => acc + curr, 0) / szam.length;
    let median = 0;
    const kozepso = Math.floor(szam.length / 2);
    const sorted = szam.sort((a, b) => a - b);

    if (szam.length % 2 === 0)
    {
        median = ((sorted[kozepso - 1] + sorted[kozepso]) / 2);
    }
    else
    {
        median = sorted[kozepso];
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

console.log(meanVsMedian([1, 1, 1]), ' >> same');
console.log(meanVsMedian([1, 2, 37]), ' >> mean');
console.log(meanVsMedian([7, 14, -70]), ' >> median');
