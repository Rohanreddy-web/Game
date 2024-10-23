
let timer = document.querySelector(".timer")
let hit = document.getElementsByClassName("hit")[0]
let cont = document.querySelector(".cont")

function numb() {
    let balls = " "
    for (let index = 0; index < 66; index++) {
        let ran1 = Math.random() * 10
        balls += `<div class="ball">${Math.ceil(ran1)}</div>`
    }
    document.querySelector(".cont").innerHTML = balls

}
function times() {
    timer.style.color = "red"
    let times1 = 60
    let T = setInterval(() => {
        let t = times1--
        if (t >= 0) {
            timer.textContent = t

        }
        else {
            cont.innerHTML = `<img src="img.svg" alt="">`
            try {
                let audio = new Audio("gameover.mp3");
                audio.play()
            } catch (error) {
                console.log(error);
            }

            clearInterval(T)
            return 0

        }


    }, 1000);

}
let ran
function hits() {
    ran = Math.ceil(Math.random() * 10)
    hit.textContent = ran
}
function score() {
    let totalscore = 0
    cont.addEventListener("click", (eobj) => {
        let a = parseInt(eobj.target.textContent)//event bubbling
        if (a === ran) {
            totalscore += 10

        }
        else {
            totalscore -= 10
            if (totalscore<=-10) {
                totalscore=0
            }
        }
        document.querySelector(".score").innerHTML = totalscore
        hits()
        numb()

    })
}
//TODO: start the game hear by calling all the 
let main = () => {
    times()
    hits()
    score()
    numb()
}
main()
