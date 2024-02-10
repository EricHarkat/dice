const result = document.querySelector("#result");
const message = document.querySelector("#message");
const launchBtn = document.querySelector("#launch");

function setResult(value){
    result.textContent = value;
    /*creation d'un evenement pour le hud informe quand le resultat a été setup*/
    let event = new CustomEvent('sys.resultatSet',{detail:value})
    document.dispatchEvent(event)
}

function setMessage(value){
    message.textContent = value;
}

function getResult(){
    return parseInt(result.textContent);
}

function getMessage(){
    return message.textContent;
}

/* le hud sais qu'il y a eu un evenemnt clique mais il ne sais pas ce qu'il doit faire*/
launchBtn.addEventListener('click', () =>{ 
    /*creation d'un custom evenement que l'on dispatch*/
    let event = new CustomEvent('dice.launched');
    document.dispatchEvent(event);
})