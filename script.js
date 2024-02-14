function startPlay(){
    const firstDiv = document.getElementById('first-div');
    const secondDiv = document.getElementById('second-div');
    firstDiv.classList.add('hidden');
    secondDiv.classList.remove('hidden');


    const alphabet = getRandomAlphabets();
    const showAlphabet = document.getElementById('show-alphabet');
    showAlphabet.innerText = alphabet;

    const randomColor = setRandomColor(alphabet);
    randomColor();
}

function setRandomColor(elementId){
    let element = document.getElementById(elementId)
    element.classList.add('bg-orange-400');
}

function getRandomAlphabets(){
    const alphabetString = "abcdefghijklmnopqrstuvwxyz";
    let alphabets = alphabetString.split('');
    let number = Math.round(Math.random() * 25);
    let alphabet = alphabets[number];
    console.log(alphabet);
    return alphabet;
}