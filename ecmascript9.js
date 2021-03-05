const btnReposo = document.getElementById('btn-reposo')
const btnReposo2 = document.getElementById('btn-reposo2')
const btnReposo3 = document.getElementById('btn-reposo3')


const obj= {
    nombre: "alejandro",
    age: 33,
    country: "Argentina"
}

function OperadorDeReposo(){
    let {nombre, ...all} = obj
    console.log(nombre,all)

}

btnReposo.addEventListener('click', OperadorDeReposo)


function OperadorDeReposo2(){
    let {country, ...all} = obj
    console.log(all)

}

btnReposo2.addEventListener('click', OperadorDeReposo2)



const obj2= {
    nombre: "alejandro",
    age: 33,
}
const obj3= {
    ...obj2,
    country: "Argentina"
}

function OperadorDeReposo3(){
    console.log(obj3)

}

btnReposo3.addEventListener('click', OperadorDeReposo3)




