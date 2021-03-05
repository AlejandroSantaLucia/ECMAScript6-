const btnFlat1 = document.getElementById('btn-flat1')
const btnFlat2 = document.getElementById('btn-flat2')
const btnFlatMap = document.getElementById('btn-flatMap')
const btntrimStart = document.getElementById('btn-trimStart')
const btntrimEnd = document.getElementById('btn-trimEnd')
const btnObjectEntries = document.getElementById('btn-entries')



const grupo = [1,2,3,[1,2,3,[1,2,3]]]

function showFlat1 (){
    console.log(grupo.flat())
}

btnFlat1.addEventListener('click', showFlat1)


function showFlat2 (){
    console.log(grupo.flat(2))
}

btnFlat2.addEventListener('click', showFlat2)


const grupoB = [1,2,3,4,5,6]

function showFlatMap(){
    console.log(grupoB.flatMap(value => [value, value *2]))

}

btnFlatMap.addEventListener('click', showFlatMap)


//////////////////////



const StringPueba = "       Alejandro       "


function showTrimStart (){
    console.log(StringPueba)
    console.log(StringPueba.trimStart())
}

btntrimStart.addEventListener('click',showTrimStart )



function showTrimEnd (){
    console.log(StringPueba)
    console.log(StringPueba.trimEnd())
}
btntrimEnd.addEventListener('click',showTrimEnd )



/////////////////////////////////

const ArrayEntries = [["perosna", "alejandro"],["edad", 32]]

function showObjectEntries (){
    console.log(Object.fromEntries(ArrayEntries))
}


btnObjectEntries.addEventListener('click', showObjectEntries)
