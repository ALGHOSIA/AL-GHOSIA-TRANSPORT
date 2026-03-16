function calculate(){

let distance = document.getElementById("distance").value
let car = document.getElementById("car").value

let price

if(car === "seal") price = 2
if(car === "amg") price = 4

let total = distance * price

document.getElementById("price").innerHTML =
"Prix estimé : " + total + " €"

}

document
.getElementById("bookingForm")
.addEventListener("submit", function(e){

e.preventDefault()

alert("Réservation envoyée ! Nous vous contacterons.")

})
