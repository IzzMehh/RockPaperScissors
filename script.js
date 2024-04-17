let gameData = {
    win : 0,
    lose: 0,
    tie: 0,
};

let pts = {
    user:0,
    computer:0,
};

let userResponse = 0;
let count = 0;
if(localStorage.getItem('Game Data')===null){
    localStorage.setItem('Game Data',JSON.stringify(gameData));
}
if(localStorage.getItem('Points')==null){
    localStorage.setItem('Points',JSON.stringify(pts));
}
if(localStorage.getItem('Game Played')==null){
    localStorage.setItem('Game Played',JSON.stringify(count));
}
let updateData = JSON.parse(localStorage.getItem('Game Data'));
let points = JSON.parse(localStorage.getItem('Points'));
let gameCount = JSON.parse(localStorage.getItem('Game Played'));

document.getElementById('score-count-user').innerText =`${points.user}`;
document.getElementById('score-count-computer').innerText =`${points.computer}`;
document.getElementById('game-count').innerText = `Game Count: ${gameCount}`;


function algorithm(){
    let computerChoice = Math.random()*3;
    
    if(computerChoice<=1 && userResponse==1){
        document.getElementById('user-choice').innerText = 'Rock';
        document.getElementById('computer-choice').innerText = 'Scissors';
        document.getElementById('result').innerText ='You Won'
        document.getElementById('result').style.color = 'rgb(102, 126, 234)';
        updateData.win++;
        points.user++;
    }
    else if(computerChoice<=2 && userResponse==1){
        document.getElementById('user-choice').innerText = 'Rock';
        document.getElementById('computer-choice').innerText = 'Paper';
        document.getElementById('result').innerText ='You Lose'
        document.getElementById('result').style.color = 'rgb(245, 101, 101)';
        updateData.lose++;
        points.computer++;
    }
    else if(computerChoice<=3 && userResponse==1){
        document.getElementById('user-choice').innerText = 'Rock';
        document.getElementById('computer-choice').innerText = 'Rock';
        document.getElementById('result').innerText ='Draw'
        document.getElementById('result').style.color = 'rgb(66, 153, 225)';
        updateData.tie++;
    }
    else if(computerChoice<=1 && userResponse==2){
        document.getElementById('user-choice').innerText = 'Paper';
        document.getElementById('computer-choice').innerText = 'Rock';
        document.getElementById('result').innerText ='You Won'
        document.getElementById('result').style.color = 'rgb(102, 126, 234)';
        updateData.win++;
        points.user++;
    }
    else if(computerChoice<=2 && userResponse==2){
        document.getElementById('user-choice').innerText = 'Paper';
        document.getElementById('computer-choice').innerText = 'Scissors';
        document.getElementById('result').innerText ='You Lose'
        document.getElementById('result').style.color = 'rgb(245, 101, 101)';
        updateData.lose++;
        points.computer++;
    }
    else if(computerChoice<=3 && userResponse==2){
        document.getElementById('user-choice').innerText = 'Paper';
        document.getElementById('computer-choice').innerText = 'Paper';
        document.getElementById('result').innerText ='Draw'
        document.getElementById('result').style.color = 'rgb(66, 153, 225)';
        updateData.tie++;
    }
    else if(computerChoice<=1 && userResponse==3){
        document.getElementById('user-choice').innerText = 'Scissors';
        document.getElementById('computer-choice').innerText = 'Paper';
        document.getElementById('result').innerText ='You Won'
        document.getElementById('result').style.color = 'rgb(102, 126, 234)';
        updateData.win++;
        points.user++;
    }
    else if(computerChoice<=2 && userResponse==3){
        document.getElementById('user-choice').innerText = 'Scissors';
        document.getElementById('computer-choice').innerText = 'Rock';
        document.getElementById('result').innerText ='You Lose'
        document.getElementById('result').style.color = 'rgb(245, 101, 101)';
        updateData.lose++;
        points.computer++;
    }
    else if(computerChoice<=3 && userResponse==3){
        document.getElementById('user-choice').innerText = 'Scissors';
        document.getElementById('computer-choice').innerText = 'Scissors';
        document.getElementById('result').innerText ='Draw'
        document.getElementById('result').style.color = 'rgb(66, 153, 225)';
        updateData.tie++;
    }

    localStorage.setItem('Game Data', JSON.stringify(updateData));
    localStorage.setItem('Points', JSON.stringify(points)); 
    localStorage.setItem('Game Played',++gameCount);

    document.getElementById('score-count-user').innerText = `${points.user}`;
    document.getElementById('score-count-computer').innerText = `${points.computer}`;
    document.getElementById('game-count').innerText = `Game Count: ${localStorage.getItem('Game Played')}`
};


document.getElementById('btn1').onclick = function(){
    userResponse = 1;
    algorithm();
};
document.getElementById('btn2').onclick = function(){
    userResponse = 2;
    algorithm();
};
document.getElementById('btn3').onclick = function(){
    userResponse = 3;
    algorithm();
};

document.getElementById('btn4').onclick = function(){
    updateData = { win: 0, lose: 0, tie: 0 };
    points = { user: 0, computer: 0 };
    gameCount = 0;
    document.getElementById('score-count-user').innerText = '0';
    document.getElementById('score-count-computer').innerText = '0';
    document.getElementById('game-count').innerText = 'Game Count: 0';
    localStorage.setItem('Game Data', JSON.stringify(gameData));
    localStorage.setItem('Points', JSON.stringify(pts));
    localStorage.setItem('Game Played', gameCount);
}