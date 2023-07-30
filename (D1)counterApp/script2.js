const sub = document.querySelector(".subtract");
const res = document.querySelector(".reset");
const add = document.querySelector(".add");
const count = document.querySelector(".count");

const colorfn = () =>{
    if (count.innerHTML > 0) {
count.style.color="red";
    } else {if (count.innerHTML < 0) {
        count.style.color="blue";
    } else{
        count.style.color = "#ffffff";
    }}
}
 
add.addEventListener("click",()=>{
    count.innerHTML++;
    colorfn();

})
res.addEventListener("click",()=>{
    count.innerHTML=0;
    colorfn();
})
sub.addEventListener("click",()=>{
    count.innerHTML--
    colorfn();
})