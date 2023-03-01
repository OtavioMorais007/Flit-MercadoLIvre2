const marketPlace = document.querySelector(".marketItems")
const select = document.querySelector("select")

select.addEventListener ("change", (e) => {
    if(e.target.value === '2'){
        marketPlace.style.gridTemplateColumns = "auto auto"  
    }
    if(e.target.value === '3'){
        marketPlace.style.gridTemplateColumns = "auto auto auto"  
    }
    if(e.target.value === '5'){
        marketPlace.style.gridTemplateColumns = "auto auto auto auto auto"  
    }
})