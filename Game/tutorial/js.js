var x = 0;
var y = 0;
var health = 100;
var energy = 1000;
var ehealth = 1000;
var coins = 0;
let end = false;
let endo = false;
let endh = true;
let andf = false;
var yhd = false;
window.onkeydown = function move_left()
{ 
  if(!end){
    if(event.keyCode==37){
        go();
        x=x-10;
        document.getElementById('chel').style.left = x + 'px';
    }
        else if(event.keyCode==39){
            go();
            x=x+10;
            document.getElementById('chel').style.left= x + 'px';
        }

    if(event.keyCode==38){
        go();
        y=y-10;
        document.getElementById('chel').style.top = y + 'px';
    }
         else if(event.keyCode==40){
           go();
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
    if((x>=1460&&x<=1730)&&(y>=10&&y<=190)){
       health = 100;
       document.getElementById('G').innerText = `${health}`;
    }
    
    if((x>=340&&x<=390)&&(y>=335&&y<=340)){
        helpFight();
    }

    if((x>=480&&x<=510)&&(y>=335&&y<=340)){
        alert('Fight');
        fight();
        end = true;
    } 
    if((ehealth<=0)&&(x>=480&&x<=510)&&(y>=335&&y<=340)){
        fight2();
        end = true;
    }
    if((x>=1620&&x<=1720)&&(y>=250&&y<=550)){
        document.getElementById('help').innerHTML = `<b>Are you sure you want to enter the dungeon?</b><button onclick="document.location='D:/game/Game/dungeon/index.html'" id="yeah">Yes</button> <button onclick="no2()" id="nah">No</button>`;
        document.getElementById('help').style.display = 'flex';
    }
    }    
}

    function yhave(){
        document.getElementById('yhndte').style.display = 'none';
    }

    function fight(){
        var timer = setInterval("if(health > 0) {health = health - 3; document.getElementById('G').innerText = `${health}`; endh = false;} else{endh = true;  document.getElementById('text').style.display= 'flex'; health = 0; document.getElementById('G').innerText = 0;}", 500);
        window.onkeyup = function punch(){
    if(!endh){
    if(!endo){
        if(event.keyCode==32){
           ehealth = ehealth - 100;
           document.getElementById('enemyheal').innerText = `${ehealth}`;
               }
        }  
         if(ehealth <= 0)
         {
             endh = true;
             ehealth = 0;
             document.getElementById('enemyheal').innerText = `${ehealth}`;
             document.getElementById('text').innerHTML = `You win! <button id="dcont" onclick="conti()">Continue</button>`;
             document.getElementById('text').style.display= 'flex';
             clearInterval(timer);
        }
     }
    }
    }
    function fight2(){
        ehealth = 1000;
        document.getElementById('enemyheal').innerText = `${ehealth}`;
        document.getElementById('enemyheal').style.display= 'block';
        document.getElementById('enemy').style.display= 'block';
        document.getElementById('enemyheal').style.top = 285 + 'px';
        document.getElementById('enemy').style.top = 285 + 'px';
        var timer1 = setInterval("if(health > 0) {health = health - 3; document.getElementById('G').innerText = `${health}`; endh = false;} else{endh = true;  document.getElementById('text').style.display= 'flex'; document.getElementById('text').innerHTML = `You dead! <button id= 'dres' onclick= location.reload();>Reset</button>`; health = 0; document.getElementById('G').innerText = 0;}", 500);
        var timer2 = setInterval("if(energy<1000){ energy = energy + 50; document.getElementById('mana').innerText = `${energy}`;} if(energy>1000){energy = 1000}; document.getElementById('mana').innerText = `${energy}`;", 500);
        window.onkeyup = function punch(){
    if(!endh){
    if(!endo){
        if(event.keyCode==32){
           ehealth = ehealth - 100;
           document.getElementById('enemyheal').innerHTML = `${ehealth}`;
               }
        }  
        if(!andf){
            if(event.keyCode==81&&energy>=100){
                ehealth = ehealth - 200;
                energy = energy - 120;
                document.getElementById('mana').innerText = `${energy}`;
                document.getElementById('enemyheal').innerText = `${ehealth}`;
                document.getElementById('dagon').style.filter= 'brightness(10%)'; 
                andf = true; 
                setTimeout(function(){andf = false; document.getElementById('dagon').style.filter= 'brightness(100%)';}, 5000);
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
       coins = 2;
    document.getElementById('skills').innerHTML = `<div id = "dagon">Q<div id="dagondescription">A magic wand that can fry enemies. The name Rubick is written on it. It would be interesting to know who this is.<div id="stats"><b id="damage">Damage: 200</b><b id="manacost">Mana: 120</b><b id="cd">CD: 5</b></div></div></div> `;
       document.getElementById('money').innerHTML = `${coins}<img  src="coin.avif" alt="" id="coin">`;
    document.getElementById('stone').style.display= 'block';
    document.getElementById('X').style.display= 'none';
    document.getElementById('text').style.display= 'none';
    document.getElementById('enemyheal').style.display= 'none';
    document.getElementById('enemy').style.display= 'none';
    yhd = true;
    congr();
    delete window.fight;
    window.fight = function() {}
   }

  
