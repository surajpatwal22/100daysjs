const Number = document.querySelector(".count");
const btn = document.querySelector(".Generator");

const generateNumber = () => {
    const randomNumber = Math.floor(Math.random()* 10 + 1)  ;
    Number.innerHTML = randomNumber;
};

btn.addEventListener('click', generateNumber); 

generateNumber();



