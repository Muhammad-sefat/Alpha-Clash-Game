function startPlay(){
    addElementById('first-div');
    addElementById('third-div')
    hiddenElementById('second-div');


    setNumberElementById('current-score', 0)
    setNumberElementById('current-life', 5)
    continuePlay();
}
function continuePlay(){
    const alphabet = getRandomAlphabets();
    const showAlphabet = document.getElementById('show-alphabet');
    showAlphabet.innerText = alphabet;

    setRandomColor(alphabet);
}

document.addEventListener('keyup', function(event){
    const playerPressed = event.key;

    const currentAlphabets = document.getElementById('show-alphabet');
    const currentAlphabet = currentAlphabets.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();

    if(playerPressed === expectedAlphabet){
        const currentScore = getNumberElementById('current-score');
        const newValue = currentScore + 1;
        setNumberElementById('current-score',newValue);

        removeRandomColor(expectedAlphabet);
        continuePlay();
    }else{
        const currentLife =getNumberElementById('current-life');
        const newvalue = currentLife - 1;
        setNumberElementById('current-life',newvalue);

        if(newvalue === 0){
            gameOver();
        }
    }
})

function getNumberElementById(element){
    const scoreElementText = document.getElementById(element);
    const scoreElementValue = scoreElementText.innerText;
    const scoreElement = parseInt(scoreElementValue);
    return scoreElement;
}

function setNumberElementById(element,value){
    const numberElement = document.getElementById(element);
    numberElement.innerText = value;
}

function gameOver(){
    hiddenElementById('third-div');
    addElementById('second-div')
    const currentScore = getNumberElementById('current-score');
    setNumberElementById('final-score', currentScore);
}


function setRandomColor(elementId){
    let element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');
}
function removeRandomColor(elementId){
    let element = document.getElementById(elementId)
    element.classList.remove('bg-orange-400');
}

function addElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}

function hiddenElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden')
}

function getRandomAlphabets(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    let alphabets = alphabetString.split('');
    let number = Math.round(Math.random() * 25);
    let alphabet = alphabets[number];
    return alphabet;
}