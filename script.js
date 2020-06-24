const y = x.split(' ').join(',').split('.').join(',').split(',')
console.log(y)
console.log(y[Math.floor(Math.random()*1290)])
console.log(y[Math.floor(Math.random()*1290)])

const word = `${y[Math.floor(Math.random()*1290)]} ${y[Math.floor(Math.random()*1290)]} ${y[Math.floor(Math.random()*1290)]}`

document.getElementById('the_word').innerHTML = word