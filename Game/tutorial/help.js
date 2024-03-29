function no(){
    document.getElementById('help').style.display = 'none';
    delete window.go;
    window.go = function() {}
    delete window.helpFight;
    window.helpFight = function() {}
    delete window.congr;
    window.congr = function() {}

}
function yes(){
    document.getElementById('help').style.display = 'none';
    document.getElementById('help2').style.display = 'block';
}
function go(){
    document.getElementById('help2').innerHTML = `Great! As you can see, you also have indicators on top. <b class = "textgray">Click the button to continue</b><button id="nexte" onclick="helpHeal()"><img src="pravo.png" alt=""></button>`;
}
function helpHeal(){
    delete window.go;
    window.go = function() {}
    document.getElementById('help2').style.display = 'none';
    document.getElementById('help3').style.display = 'flex';
}
function helpMana(){
    document.getElementById('help3').style.transform = 'translate(310px, 100px)';
    document.getElementById('help3').style.height = '120px'; 
    document.getElementById('help3').innerHTML = `This is your mana. With it, you can use special items that you will receive during the game. I'll tell you about them later. <button id="nexte3" onclick="helpCoins()"></button>`;
}
function helpCoins(){
    document.getElementById('help3').style.transform = 'translate(1385px, 100px)';
    document.getElementById('help3').style.height = '120px';
    document.getElementById('help3').style.width = '300px';
    document.getElementById('help3').innerHTML = `These are your coins. For them you can buy something or pay. To get them you need to either defeat an enemy or win a bet. <button id="nexte4" onclick="helpInventory()"></button>`;
}
function helpInventory(){
    document.getElementById('help3').style.transform = 'translate(1600px, 100px)';
    document.getElementById('help3').innerHTML = `This is your inventory. You will wear various items in it. You can only hold 3 items in total. <button id="nexte4" onclick="helpp()"></button>`;
}
function helpp(){
    document.getElementById('help2').style.display = 'block';
    document.getElementById('help2').innerHTML = `Fine. Now go to the red cross on the left, but don't stand on it. <button id="nexte5" onclick="closehel()"><img src="pravo.png" alt=""></button>`
    document.getElementById('help3').style.display = 'none';
}
function closehel(){
    document.getElementById('help2').style.display = 'none';
}
function helpFight(){
    document.getElementById('help2').style.display = 'block';
    document.getElementById('help2').innerHTML = `This is your enemy. Every second he will take away your health. You must defeat him. <button id="nexte" onclick="helpFight2()"><img src="pravo.png" alt=""></button>`;
}
function helpFight2(){
    delete window.helpFight;
    window.helpFight = function() {}
    document.getElementById('help2').innerHTML = 'To hit an enemy, press Spacebar. The more often you press the key, the faster you will defeat him. <button id="nexte" onclick="helpFight3()"><img src="pravo.png" alt=""></button>'
}
function helpFight3(){
    delete window.helpFight2;
    window.helpFight2 = function() {}
    document.getElementById('help2').innerHTML = `When you step on the red cross, an alert will appear indicating that you are fighting. <button id="nexte" onclick="helpFight4()"><img src="pravo.png" alt=""></button>`;
}
function helpFight4(){
    document.getElementById('help2').innerHTML = `When you are ready, stand on the cross. <button id="nextE" onclick="helpFight5()"><img src="pravo.png" alt=""></button>`;
}
function helpFight5(){
    document.getElementById('help2').style.display = 'none';
}


function congr(){
    document.getElementById('help2').style.display = 'block';
    document.getElementById('help2').innerHTML = `Congratulations on your first victory! <button id="nexte5" onclick="helpDagon()"><img src="pravo.png" alt=""></button>`;
}
function helpDagon(){
    document.getElementById('help2').innerHTML = `Look. After defeating the enemy, you received coins, as well as your first item - Dagon. <button id="nexte" onclick="helpDagon2()"><img src="pravo.png" alt=""></button>`;
}
function helpDagon2(){
    document.getElementById('help2').innerHTML = `This item has its own cooldown and also costs mana. If there is no mana or the item is still on cooldown, it will not work. <button id="nexte" onclick="helpDagon3()"><img src="pravo.png" alt=""></button>`
}
function helpDagon3(){
    document.getElementById('help2').innerHTML = `To find out details about an item, you need to hover over that item.  <button id="nexte" onclick="helpCamp()"><img src="pravo.png" alt=""></button>`;
}
function helpCamp(){
    document.getElementById('help2').innerHTML = `And lastly, do you see the bonfire at the end of the level? <button id="nexte5" onclick="helpCamp2()"><img src="pravo.png" alt=""></button>`;
}
function helpCamp2(){
    document.getElementById('help2').innerHTML = `Don't forget about him. His healing fire heals any wounds (even mental ones). <button id="nexte" onclick="helpCamp3()"><img src="pravo.png" alt=""></button>`;
}
function helpCamp3(){
    document.getElementById('help2').innerHTML = `Also after the battle, you can once again fight the enemy you defeated earlier. <button id="nexte" onclick="helpCamp4()"><img src="pravo.png" alt=""></button>`;
}
function helpCamp4(){
    document.getElementById('help2').innerHTML = `To do this you need to stand on a gray stone. However, please note that you will not receive anything for winning again. <button id="nexte" onclick="helpEnd()"><img src="pravo.png" alt=""></button>`;
}
function helpEnd(){
    document.getElementById('help2').innerHTML = `That's all. You have a difficult journey into a deep dungeon ahead of you. <button id="nexte" onclick="helpEnd2()"><img src="pravo.png" alt=""></button>`;
}
function helpEnd2(){
    document.getElementById('help2').innerHTML = `The evil wizard Armageddon has started something terrible and only you have to defeat him. <button id="nexte" onclick="closehel()"><img src="pravo.png" alt=""></button>`;
    delete window.congr;
    window.congr = function() {}
}

function no2(){
    document.getElementById('help').style.display = 'none'; 
}