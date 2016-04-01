$bouton = document.getElementById("bouton");
$multiplicateur = document.getElementById("multiplicateur");
$affichage = document.getElementById("affichage");

var score = 0;
var compteur = 1;
var clickAuto = setInterval(function() {
  if (score >= 200) {
    click()
  }
},1000);

function afficheScore() {
  $affichage.innerHTML = score;
};

function afficheMultiplicateur() {
  $multiplicateur.innerHTML = "Multiplicateur x" + compteur + "<br />" + prix();
};

function prix() {
  return 20 * compteur * compteur;
};

function click() {
  score = score + compteur;
  $affichage.innerHTML = score;
};

function incrementer() {
  if(score >= prix()) {
    score = score - prix();
    compteur += 1;
    $multiplicateur.innerHTML = "Multiplicateur x" + compteur + "<br />" + prix();
    $affichage.innerHTML = score;
  } else {
    alert ("Votre score est insuffisant !");
  }
};


$bouton.onclick = click;
$multiplicateur.onclick = incrementer;
afficheScore();
afficheMultiplicateur();
