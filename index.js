function clock(){
    const hoursArrow = document.querySelector('.hour')
    const minArrow = document.querySelector('.min')
    const secArrow = document.querySelector('.sec')
    const deg = 6
    setInterval(() =>{
    const day = new Date()

    const hours = day.getHours() * 30
    const minutes = day.getMinutes() * deg
    const sec = day.getSeconds() *deg

    hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
    minArrow.style.transform = `rotateZ(${minutes}deg)`
    secArrow.style.transform = `rotateZ(${sec}deg)`

}, 0)
}

clock()