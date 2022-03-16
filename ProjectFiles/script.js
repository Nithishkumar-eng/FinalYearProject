var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

let tEce=tCse=tEee=tMech=tCivil=0;
let Arrayece = document.querySelectorAll(".ece");
let Arraycse = document.querySelectorAll(".cse");
let Arrayeee = document.querySelectorAll(".eee");
let Arraymech = document.querySelectorAll(".mech");
let Arraycivil= document.querySelectorAll(".civil");
for(let i=0;i<Arrayece.length;i++){
    tEce+=Number(Arrayece[i].innerHTML);
}
document.querySelector(".totalece").innerHTML=tEce;

for(let i=0;i<Arraycse.length;i++){
    tCse+=Number(Arraycse[i].innerHTML);
}
document.querySelector(".totalcse").innerHTML=tCse;

for(let i=0;i<Arrayeee.length;i++){
    tEee+=Number(Arrayeee[i].innerHTML);
}
document.querySelector(".totaleee").innerHTML=tEee;

for(let i=0;i<Arraymech.length;i++){
    tMech+=Number(Arraymech[i].innerHTML);
}
document.querySelector(".totalmech").innerHTML=tMech;

for(let i=0;i<Arraycivil.length;i++){
    tCivil+=Number(Arraycivil[i].innerHTML);
}
document.querySelector(".totalcivil").innerHTML=tCivil;


