const button = document.querySelector(".btn");
const result = document.querySelector(".result");

button.addEventListener('click',()=> {
    let vowelcount = 0;
    const word = document.querySelector(".form-control") ;
    let wordval =word.value.toLowerCase();

    for (let i = 0; i < wordval.length ; i++) {
        let letter = wordval[i];
        // console.log(letter);
        if (letter.match(/([a,e,i,o,u])/)) {
            vowelcount++ ;
        }        
    }

    result.innerHTML =`${wordval} has ${vowelcount} vowels`
})