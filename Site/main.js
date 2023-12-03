const $button= document.querySelectorAll(".text")

$button.forEach(text => {
   text.addEventListener("click", () =>{
      text.classList.toggle("active");
   })
})