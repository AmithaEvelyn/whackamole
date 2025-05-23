let currMoleTile;
let currPlantTile;
let score=0;
let gameOver=false;


window.onload=function(){
    SetGame();
}

function SetGame(){
    for(let i=0;i<9;i++)
    {
        let tile = document.createElement("div");
        tile.id=i.toString();
        tile.addEventListener("click", selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole,900);
    setInterval(setPlant, 900);
}

function getRandomTile(){
    let num=Math.floor(Math.random()*9);
    return num.toString();
}

function setMole(){
    if(gameOver)
        return;
    if (currMoleTile)
    {
        currMoleTile.innerHTML="";
    }
    let mole=document.createElement("img");
    mole.src="./monty-mole.png";
    let num=getRandomTile();
    if(currPlantTile && currPlantTile.id==num)
        return;
    currMoleTile=document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant(){
    if(gameOver)
        return;
    if(currPlantTile)
    {
        currPlantTile.innerHTML="";
    }
    let plant=document.createElement("img");
    plant.src="./piranha-plant.png";
    let num=getRandomTile();
    if(currMoleTile && currMoleTile==num)
        return;
    currPlantTile=document.getElementById(num);
    currPlantTile.appendChild(plant);

}

function selectTile(){
    if(gameOver)
        return;
    if(this==currMoleTile)
    {
        score+=10;
        document.getElementById("score").innerText=score.toString();
        currMoleTile.innerHTML = "";
        currMoleTile = null;
    }
    else if(this==currPlantTile)
    {
        document.getElementById("gameOverScreen").style.display = "block";
        document.getElementById("finalScore").innerText = "GAME OVER!\n\nScore: " + score;
        document.getElementById("board").style.display = "none";
        document.getElementById("score").style.display = "none";
        gameOver=true;
        document.getElementById("restartBtn").style.display="block";
        document.getElementById("board").style.display="none";
    }

}

function hideReload() {
    document.getElementById("restartBtn").style.display = "none";
    window.location.reload();
}
