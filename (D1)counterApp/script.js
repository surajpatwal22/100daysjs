const Sub = document.querySelector(".subtract");
const Res = document.querySelector(".reset");
const Add = document.querySelector(".add");
const Count = document.querySelector(".count");
const Buttons = document.querySelector(".buttons");

// 1st Approch
// Add.addEventListener('click',()=>{
//     Count.textContent++
// })

// Sub.addEventListener('click',()=>{
//     Count.textContent--
// })

// Res.addEventListener('click',()=>{
//     Count.textContent = 0 ;
// })


// we can use event delgation

Buttons.addEventListener('click', (e) => {
    if (e.target.classList.contains("add")) {
        Count.innerHTML++
        setColor();
    }

    if (e.target.classList.contains("subtract")) {
        Count.innerHTML-- ;
        setColor();
    }

    if (e.target.classList.contains("reset")) {
        Count.innerHTML = 0;
        setColor();
    }

})

const setColor = () => {
    if (Count.innerHTML > 0) {
        Count.style.color = "yellow";
    }
    else{ 
        if (Count.innerHTML < 0) {
        Count.style.color = "orangered";
    }else{
        Count.style.color = "white";
}
        
    }
}






//  3rd approch
// let value =0;
// Add.addEventListener('click',()=>{
//     value++;
//     Count.textContent=value;
// })



