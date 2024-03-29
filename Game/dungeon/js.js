var x = 80;
var y = 400;
var health = 100;
var energy = 1000;
var ehealth = 1000;
var coins = 2;
let end = false;
let endo = false;
let endh = true;
let andf = false;
var yhd = false;
window.onkeydown = function move_left()
{ 
  if(!end){
    if(event.keyCode==37){
        x=x-10;
        document.getElementById('chel').style.left = x + 'px';
    }
        else if(event.keyCode==39){
            x=x+10;
            document.getElementById('chel').style.left= x + 'px';
        }

    if(event.keyCode==38){
        y=y-10;
        document.getElementById('chel').style.top = y + 'px';
    }
         else if(event.keyCode==40){
             y=y+10;
             document.getElementById('chel').style.top= y + 'px';
       }   
    
    if(x>(window.innerWidth-window.innerWidth*0.05))
    {
        x=window.innerWidth-window.innerWidth*0.1;
        health=health-5;
        document.getElementById('chel').style.left= x + 'px';
        document.getElementById('G').innerText = `${health}`;   
    }
    else if(x<-50)
    {
        x=-30;
        health=health-5;
        document.getElementById('chel').style.left= x + 'px';
        document.getElementById('G').innerText = `${health}`;   
    }
    if(y<-50)
    {
        y=-30;
        health=health-5;
        document.getElementById('chel').style.top= y + 'px';
        document.getElementById('G').innerText = `${health}`;   
    }
    else if(y>(window.innerHeight-window.innerHeight*0.05))
    {
        y=window.innerHeight-window.innerHeight*0.15;
        health=health-5;
        document.getElementById('chel').style.top= y + 'px';
        document.getElementById('G').innerText = `${health}`;   
    }

        if(x==810&&!yhd){
            x=x-50;
            document.getElementById('chel').style.left= x + 'px';
            document.getElementById('yhndte').innerHTML = `<b>You have not defeated the enemy!</b><button id='oh' onclick="yhave()">Ok</button>`;
            document.getElementById('yhndte').style.display = 'block';
        }
  
    if(health <= 0)
 {
    health = 0;
    document.getElementById('G').innerText = 0;
    end = true;  
    document.getElementById('text').innerHTML = `You dead! <button id="dres" onclick="location.reload();">Reset</button>`;
    document.getElementById('text').style.display= 'flex';
 } 
    if((x>=1510&&x<=1780)&&(y>60&&y<=320)){
       health = 100;
       document.getElementById('G').innerText = `${health}`;
    }
    if((x>=510&&x<=530)&&(y>=380&&y<=400)){
        alert('Fight');
        fight();
        end = true;
    }
    if((x>=0&&x<=70)&&(y>=280&&y<=490)){
       document.getElementById('yhndte').innerHTML = `<b>Oh no! The passage is closed!</b><button id='oh' onclick="yhave()">Ok</button>`;
       document.getElementById('yhndte').style.display = 'block';
    } 
    if((x>=1620&&x<=1720)&&(y>=250&&y<=550)){
        document.getElementById('help').innerHTML = `<b>Are you sure you want to visit the merchant?</b><button onclick="document.location='D:/game/Game/merchant/index.html'" id="yeah">Yes</button> <button onclick="no2()" id="nah">No</button>`;
        document.getElementById('help').style.display = 'flex';
    }
    }    
}

    function yhave(){
       document.getElementById('yhndte').style.display = 'none';
    }

    function fight(){
        ehealth = 1000;
        document.getElementById('enemyheal').innerText = `${ehealth}`;
        document.getElementById('enemyheal').style.display= 'block';
        document.getElementById('enemy').style.display= 'block';
        document.getElementById('enemyheal').style.top = 285 + 'px';
        document.getElementById('enemy').style.top = 285 + 'px';
        var timer1 = setInterval("if(health > 0) {health = health - 3; document.getElementById('G').innerText = `${health}`; endh = false;} else{endh = true;  document.getElementById('text').style.display= 'flex'; document.getElementById('text').innerHTML = `You dead! <button id= 'dres' onclick= location.reload();>Reset</button>`; health = 0; document.getElementById('G').innerText = 0;}", 500);
        var timer2 = setInterval("if(energy<1000){ energy = energy + 10; document.getElementById('mana').innerText = `${energy}`;} if(energy>1000){energy = 1000}; document.getElementById('mana').innerText = `${energy}`;", 500);
        window.onkeyup = function punch(){
    if(!endh){
    if(!endo){
        if(event.keyCode==32){
           ehealth = ehealth - 25;
           document.getElementById('enemyheal').innerHTML = `${ehealth}`;
               }
        }  
        if(!andf){
            if(event.keyCode==81&&energy>=100){
                ehealth = ehealth - 200;
                energy = energy - 200;
                document.getElementById('mana').innerText = `${energy}`;
                document.getElementById('enemyheal').innerText = `${ehealth}`;
                document.getElementById('dagon').style.filter= 'brightness(10%)'; 
                andf = true; 
                setTimeout(function(){andf = false; document.getElementById('dagon').style.filter= 'brightness(100%)';}, 7500);
            }
         }
         if(ehealth <= 0)
         {
             endh = true;
             ehealth = 0;
             document.getElementById('enemyheal').innerText = `${ehealth}`;
             document.getElementById('text').innerHTML = `You win! <button id="dcont" onclick="conti()">Continue</button>`;
             document.getElementById('text').style.display= 'flex';
             clearInterval(timer1);
        }
     }
    }
    }

    function conti(){
        end = false;
        coins = 5;
        document.getElementById('money').innerHTML = `${coins}<img  src="D:/game/Game/tutorial/coin.avif" alt="" id="coin">`;
     document.getElementById('stone').style.display= 'block';
     document.getElementById('X').style.display= 'none';
     document.getElementById('text').style.display= 'none';
     document.getElementById('enemyheal').style.display= 'none';
     document.getElementById('enemy').style.display= 'none';
     yhd = true;
    }
    function no2(){
        document.getElementById('help').style.display = 'none'; 
    }