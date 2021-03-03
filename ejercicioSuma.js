
const btnSum = document.getElementById("btn-sum")
const inputA = document.getElementById("numberA")
const inputB = document.getElementById("numberB")
const respuesta = document.getElementById("respuesta")





function sumar (){ 
    console.log ( parseInt(inputA.value)  + parseInt(inputB.value)   )

}

// sumar(btnSum)

btnSum.addEventListener('click', sumar)

// console.log(inputA)