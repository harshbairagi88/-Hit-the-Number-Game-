function makeBubble (){
    
    let clutter = ""
    
    for (let i = 0; i <= 113; i++){
    var rn = Math.floor(Math.random()*10)
    clutter += `<div class="h-14 w-14 bg-zinc-100 rounded-full flex justify-center items-center text-3xl cursor-pointer font-normal"> ${rn} </div>`
}

document.querySelector("#pbtm").innerHTML = clutter
}

var hitrn;
function hitval(){
    
    hitrn = Math.floor(Math.random()*10)
    document.querySelector("#hitval").innerHTML = hitrn
}


let timer = 30
function runTimer (){

    const timerInt = setInterval(function(){
        if(timer > 0){
            timer--
            document.querySelector("#timerVal").innerHTML = timer
        }
        else(
            clearInterval(timerInt),
            pbtm.innerHTML = "game over")
        
    }, 700)
    
}

let score = 0
function increaseScore(){

    score += 10
    document.querySelector("#scoreVal").innerHTML = score
}



const pbtm = document.querySelector("#pbtm")
pbtm.addEventListener("click", function(dets){
    var clickedNum = Number(dets.target.innerHTML)
    if(clickedNum === hitrn){

        increaseScore()
        makeBubble()
        hitval()
    }
  
    
})


makeBubble()
hitval()
runTimer()
