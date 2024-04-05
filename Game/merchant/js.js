var x = 80;
var y = 400;
var health = 100;
var energy = 1000;
var ehealth = 1000;
var amounttot = 0; 
var c = 30;
localStorage.setItem('coins', c);

window.onload = function(){
    document.getElementById('money').innerHTML = `${localStorage.getItem('coins')}<img  src="D:/game/Game/tutorial/coin.avif" alt="" id="coin">`;
}
let end = false;

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
    if(health <= 0)
    {
       health = 0;
       document.getElementById('G').innerText = 0;
       end = true;  
       document.getElementById('text').innerHTML = `You dead! <button id="dres" onclick="location.reload();">Reset</button>`;
       document.getElementById('text').style.display= 'flex';
    } 
    if((x>=0&&x<=70)&&(y>=280&&y<=490)){
        document.getElementById('help').innerHTML = `<b>Are you sure you want to come back?</b><button onclick="document.location='D:/game/Game/merchant/index.html'" id="yeah">Yes</button> <button onclick="no2()" id="nah">No</button>`;
        document.getElementById('help').style.display = 'flex';
     } 
    if((x==560)&&(y>=-50&&y<=260)){
         x=x-20;
         document.getElementById('help').innerHTML = `<b>You cant come here.</b><button id='oh' onclick="no2()">Ok</button>`;
         document.getElementById('help').style.display = 'flex';
    }
    if((x>=560&&x<1260)&&(y==260)){
        y=y+20;
        document.getElementById('help').innerHTML = `<b>Buy or leave!</b><button id='oh' onclick="no2()">Ok</button>`;
        document.getElementById('help').style.display = 'flex';
   }
   if((x==1260)&&(y>=-50&&y<=260)){
    x=x+20;
    document.getElementById('help').innerHTML = `<b>You cant come here.</b><button id='oh' onclick="no2()">Ok</button>`;
    document.getElementById('help').style.display = 'flex';
    }
    if((x>=650&&x<=670)&&(y==270)){
        document.getElementById('help').innerHTML = `<b>Are you sure you want to purchase this item?</b><button onclick="buytotem()" id="yeah">Yes</button> <button onclick="no2()" id="nah">No</button>`;
    document.getElementById('help').style.display = 'flex'; 
    }
      }    
   }

   function buytotem(){
    if(c>=15&&amounttot==0){
        c=c-15;
        localStorage.clear;
        localStorage.setItem('coins', c);
        document.getElementById('money').innerHTML = `${localStorage.getItem('coins')}<img  src="D:/game/Game/tutorial/coin.avif" alt="" id="coin">`;
        document.getElementById('help').style.display = 'none'; 
        let div = document.createElement('div');
        div.id = "totem";
        div.innerHTML = `<img src="totem.webp" alt="" id="tot"><div id="totemdescription">The totem of immortality is an unusual item that can save its owner from death, even from the ***** Dragon (I didn’t hear it because the merchant spoke quickly). You don't need to press it. Used once. Hmm, looks familiar.</div>`;
        amounttot = 1;
        document.body.append(div);  
        
    }
    else{
        document.getElementById('help').innerHTML = `<b>You can't buy it. Get out of here. Do not waste my time.</b><button id='oh1' onclick="no2()">Ok</button>`;
    }
   
   }
   function no2(){
    document.getElementById('help').style.display = 'none'; 
}
    
