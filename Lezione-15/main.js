function changeH1(name){
    document.getElementsByTagName("h1")[0].innerHTML=name;
}
function changeColor(color){
document.body.style.backgroundColor = color;
}
function addClassToAmazonLink() {
    let amazonLinks = document.querySelectorAll(".amazon-buy a");
    for(const amazonLink of amazonLinks){
    amazonLink.classList.add("dummies");
    }
  }
  function toggleImgs() {
    let Imgs = document.getElementsByTagName("img");
    for(const ele of Imgs){
     ele.classList.toggle("hidden");
    }
  }

  function changePriceColor(color){

    let prices = document.getElementsByClassName("price");
    for(price of prices){
        price.style.color = "green";
       }
  }