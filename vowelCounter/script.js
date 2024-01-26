const button = document.querySelector(".checkBtn");
const clearButton = document.querySelector(".clearBtn")
const result = document.querySelector(".result");
// console.log(result);

button.addEventListener('click',()=> {
    const word = document.querySelector(".form-control") ;
    // console.log(word);
    let wordval =word.value.replace(/\s/g,'').toLowerCase();
    console.log(wordval);
    let reverseWord =wordval.split('').reverse().join('');
    console.log(reverseWord);
    if (wordval==="") {
        alert("Please enter a word!");
    } else if (wordval === reverseWord ) {
        // console.log("palindrome");
        result.textContent=`${wordval} is a palindrome`;

    } else {
        // console.log("not pallindrome");
        result.textContent= `${wordval} is a not palindrome`;
    }
})

clearButton.addEventListener('click',()=>{
    const input = document.querySelector(".form-control").value;
    // console.log(input);
    document.querySelector(".form-control").value = "";
    result.innerHTML = "";
})