const firstName = ["Alejadro", "carlos", "pedro", "juan"]
const lastName = ["Santa", "garcia", "gomez", "ramirez"]

// const firstNameListado = firstName.map((Nombres)=> {
//     return Nombres.firstName
// })

let init = 0
let count = 0
// const firstNameNumber = count
// const lastNameNumber = count



const btn = document.getElementById('btn-prueba')


let NombreCompleto = `${firstName[count]} ${lastName[count]}`

// console.log(NombreCompleto)

function pushBotton(e){
    e.addEventListener('click',  ()=>  {       

        
        console.log(NombreCompleto);
        count ++;
        console.log(count)
        
    })
}

pushBotton (btn)



// function (NombreCompleto){    
//         console.log(NombreCompleto)    
// }




// function unirNombre (name, lastName){
//     console.log (NombreCompleto)
// }