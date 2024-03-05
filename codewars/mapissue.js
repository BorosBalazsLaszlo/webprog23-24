var func = function(item){
    return item%2 == 0;
}

function map(arr, somefunction)
{
    if (arr.filter(a => isNaN(a) == false).length > 0)
    {
        return 'array should cotain only numbers'
    }
    if (typeof somefunction != 'function' )
    {
        return 'given argument is not a function'
    }

    output = [];

    for (let i = 0; i < arr.length;i++)
    {
        output.push(somefunction(arr[i]))
    }

    return output;
}
