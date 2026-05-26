const canteiros=document.querySelectorAll(".canteiro");

canteiros.forEach(canteiro=>{

canteiro.addEventListener("click",()=>{

canteiro.innerHTML="🥕";

});

});