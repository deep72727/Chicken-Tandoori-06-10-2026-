let chicken = document.querySelector("button");

chicken.addEventListener("click",function(){
    chicken.style.backgroundColor = "Yellow";
    chicken.style.color = "black";
    let dish = prompt("Enter Your Favourite Dish!")
    alert("Done Today Eat "+ dish)
})