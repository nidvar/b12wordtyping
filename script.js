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
document.getElementById('time_left').innerHTML = time

const word_gen = ()=>{
    const randomWord = `${z[Math.floor(Math.random()*1290)]} ${z[Math.floor(Math.random()*1290)]} ${z[Math.floor(Math.random()*1290)]}`
    word = randomWord
    document.getElementById('the_word').innerHTML = randomWord
    console.log(randomWord)
}

document.getElementById('start_button').addEventListener('click',()=>{
    console.log(document.getElementById('difficulty').value)
    document.getElementById('the_word').style.color='black';
    const timer = setInterval(()=>{
        time--;
        if(time<=0){
            clearInterval(timer)
        }
        document.getElementById('time_left').innerHTML = time
    },1000)
    document.getElementById('user_input').focus()
})

document.getElementById('user_input').addEventListener('input',(e)=>{
    if(e.target.value === word){
        if(document.getElementById('difficulty').value == 'easy'){
            score +=5
        }else if(document.getElementById('difficulty').value == 'medium'){
            score +=3
        }else{
            score +=2
        }
        score += 1;
        time+=4
        document.getElementById('score').innerHTML = score;
        word_gen();
        e.target.value = '';
    }
})
document.getElementById('user_input').focus()
word_gen();