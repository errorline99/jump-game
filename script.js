var click = document.querySelector('.click')
var jum = document.querySelector('.jum')
var jump = document.querySelector('.jump')
var finish = document.querySelector('.game-over')
var start = document.querySelector('.start')
const body = document.querySelector('.body')
var emoji = document.querySelectorAll('.child')
var gameOver = false
var allow = true
var height = 0


click.addEventListener('click', ()=>{
    if(allow){
        height = 0
        jum.style.transform = 'translateY(' + height + 'px)'
        allow = false
    } else {
        height = -30
        jum.style.transform = 'translateY(' + height + 'px)'
        allow = true
        console.log('gg')
    }
})


function obs(){
    var randomTime = Math.random() * 4000
    let obstacalPosition = 800

    const obstacal = document.createElement('div')
    if (!gameOver) obstacal.classList.add('obstacal')
    jump.appendChild(obstacal)



    

    obstacal.style.transform = 'translateX( '+ obstacalPosition +'px)'


    let timerId = setInterval(function(){
        if(obstacalPosition === 0 && height === 0){
            console.log('game over')
            gameOver = true
            finish.innerHTML = 'gameover'        
        }

        obstacalPosition -= 10
        obstacal.style.transform = 'translateX(' + obstacalPosition + 'px)'
    },90)



    setTimeout(obs, randomTime)

   

}





start.addEventListener('click', function(){
    obs()
    body.classList.toggle('black')
})

for(var i = 0 ; i < emoji.length ; i++) {
    emoji[i].addEventListener('click', function(evt){
        jum.innerText = ''
        jum.innerText += evt.target.innerText
    })
}
