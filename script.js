const blob = document.getElementById("blob");

window.onpointermove = event => { 
  const { clientX, clientY } = event;
  
  blob.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
  }, { duration: 3000, fill: "forwards" });
}


//text
const letters = "!?#$%&ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

function animateText() {
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      document.querySelector("h1").innerText = document.querySelector("h1").dataset.value
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return document.querySelector("h1").dataset.value[index];
          }
          return String.fromCharCode(65 + Math.floor(Math.random() * 26));
        })
        .join("");
      
      if(iteration >= document.querySelector("h1").dataset.value.length){ 
        clearInterval(interval);
        setTimeout(() => {
          animateText();
        }, 2000);
      }
      iteration += 1 / 3;
    }, 50);
  }
  
  animateText();