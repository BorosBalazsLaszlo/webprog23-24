let str = "hell5o wor6ld"


function getNumberFromString(str)
{
    var szam = str.replace(/\D/g, "") //  /\D = Nem Numeric karakter, /g global 
    console.log(szam)
}

getNumberFromString();