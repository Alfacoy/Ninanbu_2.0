

// Seccion Tecnologias!

var $htmlImg = document.querySelector('#html-img');
var $htmlText = document.querySelector('#html-text');
var $botsImg = document.querySelector('#bots-img');
var $botsText = document.querySelector('#bots-text');
var $nomoImg = document.querySelector('#nomo-img');
var $nomoText = document.querySelector('#nomo-text');

$htmlImg.addEventListener('mouseover',showH);
$htmlImg.addEventListener('mouseout',noShowH);
$botsImg.addEventListener('mouseover',showB);
$botsImg.addEventListener('mouseout',noShowB);
$nomoImg.addEventListener('mouseover',showN);
$nomoImg.addEventListener('mouseout',noShowN);

function showH() {
  $htmlText.style.display = "block";

}

function noShowH() {
    $htmlText.style.display = "none";
}

function showB() {
    $botsText.style.display = "block";
}

function noShowB() {
    $botsText.style.display = "none";
}

function showN() {
    $nomoText.style.display = "block";
}

function noShowN() {
    $nomoText.style.display = "none";
}
