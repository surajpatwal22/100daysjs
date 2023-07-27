const Modal = document.querySelector(".modal");
const Btn = document.querySelector("#btn");
const Close = document.querySelector(".close");
const ModalContent = document.querySelector(".modal-content");



const openModal = (e)=>{
    e.preventDefault();
    Modal.style.display = "block";
}

const closeModal = ()=>{
    ModalContent.classList.add("slide-up");
    setTimeout(() => {
        Modal.style.display ="none";  
        // ModalContent.classList.remove("slide-up");
  
    }, 800);
    
}
Btn.addEventListener('click',openModal);
Close.addEventListener('click',closeModal);
Modal.addEventListener('click',closeModal);

