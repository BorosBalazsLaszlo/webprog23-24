const input = document.getElementById("kinyerendo")


input.addEventListener("keydown", function(event){
    if (event.key == "Space")
    {
        console.log(input.value)
    }
})