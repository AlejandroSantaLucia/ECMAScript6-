const btnEntries = document.getElementById('btnEntries')
const btnValues = document.getElementById('btnValues')


const data ={
    front:"Alejandro",
    back: "Noe",
    design: "Pepe"

};


function showEntries (){
    const entries = Object.entries(data)
    console.log(entries)
    console.log(entries.length)

}
btnEntries.addEventListener('click', showEntries)


function showValues (){
    const values = Object.values(data)
    console.log(values)
}

btnValues.addEventListener('click', showValues)



////// Padding
const btnPadStart = document.getElementById('btnPadStart')
const btnPadEnd = document.getElementById('btnPadEnd')

const Saludo = "Hola"


function showPadStart (){
    console.log(Saludo.padStart(6,'ey'))
}

btnPadStart.addEventListener('click', showPadStart)

function showPadEnd (){
    console.log(Saludo.padEnd(6,'ey'))
}

btnPadEnd.addEventListener('click', showPadEnd)