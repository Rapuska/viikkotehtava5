document.addEventListener("DOMContentLoaded", function() {
  var diceDiv = document.getElementById("dice");

  // Lisää klikkauskuuntelija nopan div-elementille
  diceDiv.addEventListener("click", function() {
    // Arvotaan satunnaisluku väliltä 1-6
    var randomNumber = Math.floor(Math.random() * 6) + 1;

    // Asetetaan uusi kuva img-elementille
    var imgElement = diceDiv.querySelector("img");
    imgElement.src = "./img/" + randomNumber + ".png";
  });
});
