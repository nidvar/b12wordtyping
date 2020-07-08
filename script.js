//x is from data file

const y = x.split(' ').join(',').split('.').join(',').split(',')

const z = y.filter(a=>{
    if(a != ''){
        return true
    }
})

let score = 0;
let time = 10;
let word = ''
document.getElementById('score').innerHTML = score

const word_gen = ()=>{
    const randomWord = `${z[Math.floor(Math.random()*1290)]} ${z[Math.floor(Math.random()*1290)]} ${z[Math.floor(Math.random()*1290)]}`
    word = randomWord
    document.getElementById('the_word').innerHTML = randomWord
    console.log(randomWord)
}

document.getElementById('user_input').addEventListener('input',(e)=>{
    if(e.target.value === word){
        score += 1;
        document.getElementById('score').innerHTML = score;
        word_gen();
        e.target.value = '';
    }
})

word_gen();