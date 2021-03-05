

const helloWorld = ()=>{
    return new Promise ((resolve, reject)=> {
        (true)
        ? setTimeout(() =>resolve("Hola Mundo"), 3000)
        : reject (new error ("test error"))
    })
};




helloWorld ()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log("ya finalizo"))

/////////////////////////////

const btnRegex = document.getElementById('btn-regex')

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];

function showRegex (){
    console.log(year, month, day);
}

btnRegex.addEventListener('click', showRegex)
