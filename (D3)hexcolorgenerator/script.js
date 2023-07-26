const Number = document.querySelector(".count");
const btn = document.querySelector(".Generator");

// const genraterNumber = () =>{
//     let val = "0123456789ABCDEF";
//     let con = "#"
//     for (let i = 0; i < 6; i++) {
//         con = con + val[Math.floor(Math.random()* val.length)]}
//         return con ;
// };
// console.log(genraterNumber());

// const colorchange = () => {
//     document.body.style.backgroundColor = genraterNumber();
//     Number.textContent = genraterNumber();
// }

// btn.addEventListener('click',colorchange);


const genraterNumber = ()=>{
    const randomNumber = Math.random().toString(16).substring(2,8);
    document.body.style.backgroundColor = "#"+ randomNumber;
    Number.textContent = "#" + randomNumber ; 
};

btn.addEventListener("click",genraterNumber);