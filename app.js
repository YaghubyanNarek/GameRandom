const $ = document.querySelectorAll('.game__btn');
const _$_ = document.querySelector('.game');
const $$ = document.querySelector('.reply');
const $_$ = document.querySelector('.main__game');
const _$$_ = document.querySelector('.points');
const again = document.querySelector('.again');
const playThen = document.querySelector('.playThen');
const btn = document.querySelectorAll('.btn');
const main = document.querySelector('.main');

let randomNumber;
let _ = []; 
let _$ = [];
let arr1 = [];
let arr2 =[];

let win = '';

for(let i = 0; i < 5; i++){
    _$[i] = document.createElement('div');
    _$[i].className = 'pointsItem';
    _$$_.appendChild(_$[i]);
    
}

for(let i = 0; i < 64; i++){
    _[i] = document.createElement('div');
    _[i].className = 'item';
    $_$.appendChild(_[i]);
}

$[0].addEventListener('click',()=>{
    _$_.classList.add('gaming')
})

$$.addEventListener('click',()=>{
    _$_.classList.remove('gaming');
    setTimeout(() =>{
        location.reload();
    },400)
})

let countOfOpen = 0;

_.forEach($$$ => {
    $$$.onclick = () =>{
        if(countOfOpen < 5){
            randomNumber = Math.round(Math.random() * 64);
            arr1.push(randomNumber);
            $$$.classList.add('addClassItem');
            $$$.innerHTML = randomNumber;
            countOfOpen++;
            if(countOfOpen === 5){
                _$.forEach(__$__ =>{
                    randomNumber = Math.round(Math.random() * 64);
                    __$__.innerHTML = randomNumber;
                    arr2.push(randomNumber);
                })
                _$$_.classList.add('pointsDisplay');
                for(let i = 0; i < arr1.length; i++){
                    for(let g = 0; g < arr2.length; g++){
                        if(arr1[i] === arr2[g]){
                            win = 'You win';
                        }
                        else{
                            continue;
                        }
                    }
                }
                if(win){
                    again.innerHTML =  `${win}, Do You Want To Play Again?`
                    setTimeout(()=>{
                        main.classList.add('mainscale')
                    },5000) 
                    btn.forEach((b) =>{
                        b.onclick = ()=>{
                            location.reload(); 
                        }
                    })
                }
                else{
                    again.innerHTML =  'You Lose, Do You Want To Play Again?'
                    setTimeout(()=>{
                        main.classList.add('mainscale')
                    },5000) 
                    btn.forEach((b) =>{
                        b.onclick = ()=>{
                            location.reload();
                        }
                    })
                }
            }
        }
    }
})

