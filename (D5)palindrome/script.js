const button = document.querySelector(".checkBtn");
const clearButton = document.querySelector(".clearBtn")
const result = document.querySelector(".result");
console.log(result);

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

    const resultText =`${wordval} has ${vowelcount} vowels`;
    result.innerHTML = resultText;

    localStorage.setItem('result', resultText);
})

clearButton.addEventListener('click',()=>{
    const input = document.querySelector(".form-control").value;
    console.log(input);
    document.querySelector(".form-control").value = "";
    result.innerHTML = "";
   localStorage.removeItem("result");
})