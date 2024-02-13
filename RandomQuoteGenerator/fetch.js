const btn = document.querySelector(".get-quotes");
btn.addEventListener("click", getQuotes);
const number = document.getElementById("number");
const URL = "https://type.fit/api/quotes";

function getQuotes(e) {
    e.preventDefault();
    // console.log(number.value);
    if (number.value.length == 0) {
        return alert("Plese enter a number");
    } else {
        fetch(URL)
        .then(response => response.json())
        // .then(function(response) {
        //     return response.json();
        // })
        .then(function(data) {
            // console.log(JSON.stringify(data));
            console.log(data);
            
            let output = "";

            
            for (let i = 0; i < data.length; i++) {
                if (i == number.value) {break;}
                output += `
                    <li>Quote: ${data[i].text}</li>
                    <li>Author: ${data[i].author}</li>
                   <hr>
               `;
            }
            document.querySelector(".quotes").innerHTML = output;
        })
    }
}
