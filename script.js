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

const start_new_game = ()=>{
    document.getElementById('user_input').focus()
    word_gen();
    time = 10;
    score = 0;
    document.getElementById('user_input').value = ''
    document.getElementById('the_word').style.color ='black';
    document.getElementById('difficulty').value = 'easy';
    document.getElementById('game_screen').style.display = 'flex';
    document.getElementById('start_screen').style.display = 'none';
    document.getElementById('score').innerHTML = score
    document.getElementById('time_left').innerHTML = time
    document.getElementById('score_screen').style.display = 'none';
}

const score_screen=()=>{
    time = 0;
    document.getElementById('game_screen').style.display = 'none';
    document.getElementById('score_screen').style.display = 'block';
    document.getElementById('score2').innerHTML = score;
    document.getElementById('game_mode').innerHTML = document.getElementById('difficulty').value;
}

document.getElementById('start_game').addEventListener('click',()=>{
    start_new_game();
    console.log('start new game')
    game_running();
})
document.getElementById('start_game2').addEventListener('click',()=>{
    start_new_game();
    console.log('start new game')
    game_running();
})

document.getElementById('end_button').addEventListener('click',()=>{
    score_screen();
})


const word_gen = ()=>{
    const randomWord = `${z[Math.floor(Math.random()*1290)]} ${z[Math.floor(Math.random()*1290)]} ${z[Math.floor(Math.random()*1290)]}`
    word = randomWord
    document.getElementById('the_word').innerHTML = randomWord
    console.log(randomWord)
}

const game_running = ()=>{
    console.log(document.getElementById('difficulty').value)
    document.getElementById('the_word').style.color='black';
    const timer = setInterval(()=>{
        time--;
        if(time<=0){
            clearInterval(timer)
            score_screen();
        }
        document.getElementById('time_left').innerHTML = time
    },1000)
    document.getElementById('user_input').focus()
}

document.getElementById('user_input').addEventListener('input',(e)=>{
    if(e.target.value === word){
        if(document.getElementById('difficulty').value == 'easy'){
            time += 5
        }else if(document.getElementById('difficulty').value == 'medium'){
            time += 3
        }else{
            time += 2
        }
        score+=1
        document.getElementById('score').innerHTML = score;
        word_gen();
        e.target.value = '';
    }
})
document.getElementById('user_input').focus()
word_gen();