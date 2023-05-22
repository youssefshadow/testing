console.log("Bonjour, monde !");
//Fonction calcul les deux nombres
function calculateSum() {
  let number1 = parseFloat(document.getElementById("number1").value);
  let number2 = parseFloat(document.getElementById("number2").value);

  if (isNaN(number1) || isNaN(number2)) {
    document.querySelector("#result").innerText =
      "Veuillez saisir des nombres valides.😜";
  } else {
    let sum = number1 + number2;
    document.querySelector("#result").innerText =
      "Le résultat de l'addition est : " + sum;
    document.querySelector("#number1").value = "";
    document.querySelector("#number2").value = "";
  }
}
