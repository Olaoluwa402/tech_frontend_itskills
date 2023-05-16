if(document.readyState === "loading"){
  document.addEventListener("DOMContentLoaded",ready)

}else{
  ready()
}

function ready(){
  const cartOpenBtn =document.getElementsByClassName("btn-active")[0];
cartOpenBtn.addEventListener("click",openmodel)

const cartCloseBtn =document.getElementsByClassName("fa-btn")[0];
cartCloseBtn.addEventListener("click",closemodel);


const addItemBtn = document.getElementById("submitItem");
  addItemBtn.addEventListener("click", addItemHandler);
}

function openbutton(){
  const checkOpenbtn = document.querySelector(".buttonItem" ,);
  checkOpenbtn.classList.add("open")
}

function closebutton(){
  const closeOpenbtn = document.querySelector(".buttonItem");
  checkOpenbtn.classList.remove("open")
}


function getvalue(e){
e.p
}