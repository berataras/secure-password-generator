class SecurePassword {
    constructor() {
        this.length = 16;
    }

    getRandomLower(){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
    }

    getRandomUpper(){
        return String.fromCharCode(Math.floor(Math.random() * 26) + 65 )
    }

    getRandomNumber(){
        return String.fromCharCode(Math.floor(Math.random() * 10) + 48 )
    }

    getRandomSymbol(){
        const symbols = '>#${[]}*=)/&%+';
        return symbols[Math.floor(Math.random() * symbols.length)]
    }

    generatePassword(){
        let generatedPassword = '';

        const randomLower = this.getRandomLower();
        const randomUpper = this.getRandomUpper();
        const randomNumber = this.getRandomNumber();
        const randomSymbol = this.getRandomSymbol();

        const randomFunctions = {randomLower, randomUpper, randomNumber, randomSymbol};

        for (let i = 0; i < this.length; i++){
            generatedPassword += Object.values(randomFunctions)[Math.floor(Math.random() * 4)];
        }

        return generatedPassword;
    }
}

const securePass = new SecurePassword;

const generateButton = document.getElementById('generate');
const clipboardButton = document.getElementById('clipboard');
const alert = document.getElementsByClassName('alert')[0];
const result = document.getElementById('result');

generateButton.addEventListener('click', () => {
    result.style.opacity = 1;
    result.innerHTML = securePass.generatePassword();
});

const callAlert = (message, color) => {
    alert.classList.add('alertAnimation')
    alert.innerHTML = message;
    alert.style.backgroundColor = color;
    setTimeout(() => {
        alert.classList.remove('alertAnimation')
    }, 1500)
}

clipboardButton.addEventListener('click', () => {
    if (result.innerText !== 'create password'){
        navigator.clipboard.writeText(result.innerText);
        callAlert('copied 😎', 'rebeccapurple');
    }else{
        callAlert('There is no code 🤓', 'black');
    }
})

