const btnInclude = document.getElementById('btnInclude')
const inputSearch = document.getElementById('inputSearch')


const Numbers = [1,3,5,7,9]

function SearchCoincidence (){
    if(Numbers.includes(parseInt(inputSearch.value))){
        console.log("El numero Que elegiste esta en la lista esta en la lista" )
    }
    else {
        console.log ("El numero que buscas no apararece en la lista")
    }

    console.log(inputSearch.value)
}




btnInclude.addEventListener('click',SearchCoincidence )