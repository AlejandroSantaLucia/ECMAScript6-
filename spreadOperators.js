let team1 = ["claudio", "juan", "david"]
let team2 = ["laura", "maria", "ana"]

let instructor = "alejandro"

let btnSpread = document.getElementById("btn-spread")

function pushBtnSpread (){
    btnSpread.addEventListener('click', ()=> {
        console.log(instructor, team1, team2)
    })
}

pushBtnSpread(btnSpread)