function launch(){
    let number = Math.floor(Math.random()*7);
    setResult(number);
}

function checkVictoryCondition(e){
    let result = e.detail;
    if(result == 6){
        setMessage("Victory");
    }else{
        setMessage("");
    }
}
/*j'ecoute l'evenement sys.resultatSet qui execute la fonction checkVictoryCondition*/
document.addEventListener("sys.resultatSet", checkVictoryCondition);

document.addEventListener("dice.launched", launch);