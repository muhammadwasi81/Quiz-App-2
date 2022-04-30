let userName = localStorage.getItem('name')
let userPoint = localStorage.getItem('points')
let userTime = localStorage.getItem('time')

document.querySelector('.name').innerHTML = userName
document.querySelector('.points').innerHTML = userPoint
console.log(userPoint)
document.querySelector('.time').innerHTML = userTime
