/*
**Descrizione:**
Al carousel fatto precedentemente aggiungere funzionalità di autoplay: dopo un certo periodo 
di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
Ricordate di copiare solo il file index.html e le cartelle js e css nella nuova repository 
per evitare dei problemi con git.
Bonus 1:
Gestire il tempo di autoplay dopo il click dell'utente, rimettendo il timer di 3 secondi dopo 
il click per avere autoplay sempre regolare.
Bonus2:
Stoppare autoplay all'hover sullo slider e farlo ripartire al togliere del hover. Qui 
potrebbe servire un po di ricerca per trovare l'evento giusto
*/

// Creo l'array delle immagini
const imagesArray = ["img/01.jpg", "img/02.jpg", "img/03.jpg", "img/04.jpg", "img/05.jpg"];

const itemsContainer = document.querySelector(".slider-items");


for (let i = 0; i < imagesArray.length; i++) {
    const currentImage = imagesArray[i];

    const sliderItem = `
        <div class="item">
        <img src="${currentImage}" alt="">
        <div class="thumb-container">
                        <div class="thumb">
                            <img src="img/01.jpg" alt="">
                        </div>
                        <div class="thumb">
                            <img src="img/02.jpg" alt="">
                        </div>
                        <div class="thumb">
                            <img src="img/03.jpg" alt="">
                        </div>
                        <div class="thumb">
                            <img src="img/04.jpg" alt="">
                        </div>
                        <div class="thumb">
                            <img src="img/05.jpg" alt="">
                        </div>
                    </div>

        </div>`;
    itemsContainer.innerHTML += sliderItem;

}

// Ora ho tutti gli items inseriti nella pagina tramite JS ma in display none
// Metto tutti gli items all'interno di un array e al primo assegno la classe active

const itemsArray = document.getElementsByClassName("item");
const thumbsArray = document.getElementsByClassName("thumb");

let activeItemIndex = 0;
itemsArray[activeItemIndex].classList.add("active");
let activeThumbIndex = 0;
thumbsArray[activeThumbIndex].classList.add("active");
const delay = 3000;

//**** Da capire perchè non funziona */
// const activeImg = document.getElementsByClassName('slider')
// console.log(activeImg);
// activeImg.addEventListener("mouseover", mouseOver);
// activeImg.addEventListener("mouseover", mouseOut);

activeDelay(delay);






// itemsArray.addEventListener('mouseover', function() {
//     clearInterval(autoplay);
// })

// A questo punto è visibile solo il primo itemsArray, devo andare a gestire la classe active
// spostando l'indice

// Prelevo i due bottoni
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

// Cosa succede quando clicco sul bottone next?
nextBtn.addEventListener("click", function () {
    clearInterval(autoplay);
    activeDelay(delay);
    // togli la classe hidden al bottone prev
    // prevBtn.classList.remove("hidden"); (***PARTE DEL MILESTONE 3***)

    if (activeItemIndex === itemsArray.length - 1) {
        itemsArray[activeItemIndex].classList.remove("active");
        thumbsArray[activeThumbIndex].classList.remove("active");
        activeItemIndex = 0;
        activeThumbIndex = 0;
        itemsArray[activeItemIndex].classList.add("active");
        thumbsArray[activeThumbIndex].classList.add("active");
    } else if (activeItemIndex < (itemsArray.length - 1)) {
        // Se l'indice dell'item attuale è minore della lunghezza dell'array 
        // rimuovi la classe active
        itemsArray[activeItemIndex].classList.remove("active");
        thumbsArray[activeThumbIndex].classList.remove("active");
        // incrementa di 1 l'indice attuale
        activeItemIndex++;
        activeThumbIndex = activeThumbIndex + 6;
        // aggiungi la classe active al nuovo item
        itemsArray[activeItemIndex].classList.add("active");
        thumbsArray[activeThumbIndex].classList.add("active");
        console.log(activeThumbIndex)

        // Se sei arrivato all'ultimo item (***PARTE DEL MILESTONE 3***)
        // if (activeItemIndex === itemsArray.length - 1) {
        //     // aggiungi la classe hidden al bottone next
        //     nextBtn.classList.add("hidden");
        // }
    }
});

// Cosa succede quando clicco sul bottone prev?
prevBtn.addEventListener("click", function () {

    // Se ti trovi alla prima immagine
    if (activeItemIndex === 0) {
        // togli la classe active dall'item corrente
        itemsArray[activeItemIndex].classList.remove("active");
        thumbsArray[activeThumbIndex].classList.remove("active");
        // assegna l'indico dell'ultimo elemento dell'array
        activeItemIndex = itemsArray.length - 1;
        activeThumbIndex = thumbsArray.length - 1;
        // aggiungi la classe active
        itemsArray[activeItemIndex].classList.add("active");
        thumbsArray[activeThumbIndex].classList.add("active");
    } else {
        // togli la classe hidden dal bottone next
        // nextBtn.classList.remove("hidden"); (***PARTE DEL MILESTONE 3***)
        // togli la classe active dall'item corrente
        itemsArray[activeItemIndex].classList.remove("active");
        thumbsArray[activeThumbIndex].classList.remove("active");
        // decrementa l'indice di 1
        activeItemIndex--;
        activeThumbIndex = activeThumbIndex -6;
        // aggiungi la classe active all'item corrente
        itemsArray[activeItemIndex].classList.add("active");
        thumbsArray[activeThumbIndex].classList.add("active");

        // Se sei arrivato al primo item (***PARTE DEL MILESTONE 3***)
        // if (activeItemIndex === 0) {
        //     prevBtn.classList.add("hidden");
        // }
    }
})


// FUNCTIONS
/**
 * Descrizione: questa funzione scandisce l'intervallo di tempo dell'item attivo
 * @param {number} delay numero in millisecondi
 */
function activeDelay(delay) {
    autoplay = setInterval(function() {
        if (activeItemIndex === itemsArray.length - 1) {
            itemsArray[activeItemIndex].classList.remove("active");
            thumbsArray[activeThumbIndex].classList.remove("active");
            activeItemIndex = 0;
            activeThumbIndex = 0;
            itemsArray[activeItemIndex].classList.add("active");
            thumbsArray[activeThumbIndex].classList.add("active");
        } else {
            itemsArray[activeItemIndex].classList.remove("active");
            thumbsArray[activeThumbIndex].classList.remove("active");
            activeItemIndex++;
            activeThumbIndex = activeThumbIndex + 6;
            itemsArray[activeItemIndex].classList.add("active");
            thumbsArray[activeThumbIndex].classList.add("active");
        }
    }, delay);
}

function mouseOver(){
    clearInterval(autoplay);
}

function mouseOut() {
    activeDelay(delay);
}