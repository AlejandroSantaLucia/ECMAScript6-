let Person = {
    'name': 'Alejandro',
    'age': 33,
    'country': 'ARG'
}
const btnDesestructurar = document.getElementById('btn-desestructurar')

function pushBottonDesestructurar(e){
    e.addEventListener('click',  ()=>  {        

        console.log("resultado sin desestructurar" + " " + Person.name, Person.age, Person.country)

        let {name, age, country} = Person;
        console.log("resultado desestructurado" + " " + name, age, country)
    })}

pushBottonDesestructurar (btnDesestructurar)