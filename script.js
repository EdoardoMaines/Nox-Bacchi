// Script per la pagina di ingresso
document.addEventListener("DOMContentLoaded", function () {
    const clickableImage = document.getElementById("clickable-image");

    clickableImage.addEventListener("click", function () {
        // Reindirizza alla seconda pagina
        window.location.href = "second-page.html";
    });
});

// Script per la pagina successiva
document.addEventListener("DOMContentLoaded", function () {
    const parchment = document.getElementById("parchment");

    // Avvia l'animazione di srotolamento della pergamena
    setTimeout(function () {
        parchment.style.transform = `translateY(-50%)`;
    }, 1000); // Delay di 1 secondo prima dell'animazione
});

const container = document.getElementById("landing-page");
const movingObject = document.getElementById("clickable-image");
const radius = 10; // Imposta il raggio del moto circolare
let angle = 0;

function moveCircular() {
    const centerX = (container.offsetWidth / 2)-200;
    const centerY = (container.offsetHeight / 2)-200;

    // Calcola le nuove coordinate x e y in base all'angolo e al raggio
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);

    // Aggiorna la posizione dell'oggetto
    movingObject.style.left = x + "px";
    movingObject.style.top = y + "px";

    // Incrementa l'angolo per far muovere l'oggetto in un moto circolare
    angle += 0.02; // Modifica questo valore per regolare la velocità
    requestAnimationFrame(moveCircular);
}

moveCircular();

// Funzione per mostrare un popup
function mostraPopup(id) {
    var popup = document.getElementById(id);
    popup.style.display = 'block';
}

// Funzione per chiudere il primo popup e aprire il secondo
function chiudiPopupPassword() {
    var popup_password = document.getElementById('popup_password');
    popup_password.style.display = 'none';
    // Mostra il contenuto nascosto
    var contenutoNascosto = document.getElementById('contenutoNascosto');
    contenutoNascosto.style.display = 'block';
}

// Funzione per chiudere il secondo popup
function chiudiPopupNome() {
    var popup_nome = document.getElementById('popup_nome');
    var popup_password = document.getElementById('popup_password');

    popup_nome.style.display = 'none';
    popup_password.style.display = 'flex'
}

// Mostra solo il primo popup quando la pagina è completamente caricata
window.onload = function() {
    popup_nome.style.display = 'none';
    mostraPopup('popup_password');
};

// // Funzione per inviare il nome
// function inviaNome() {
//     var nomeInput = document.getElementById('nomeInput');
//     var nome = nomeInput.value;
    
//     if (nome.trim() !== '') {
//         alert("Grazie, " + nome + "! Benvenuto!");
//         chiudiPopup();
//     }
// }
function mostraLink() {
    var button_giuramento = document.getElementById('button_giuramento');
    var link = document.getElementById('link_whatsapp');

    button_giuramento.style.display = "none";
    link.style.display = "block";
}