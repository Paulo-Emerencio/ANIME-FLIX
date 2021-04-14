const mainAnime = document.querySelector(".main-anime");
mainAnime.style.backgroundImage = `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)), url(img/big1.jpg)`;

const title = document.querySelector(".title");
title.innerText = titulos[0];

const description = document.querySelector(".description");
description.innerText = desc[0];

const trailer = document.querySelector("#trailer");
trailer.href = trailers[0];

const list = document.querySelector("#list");
list.href = lista[0];

function fadeIn(elemento) {
    let op = 0;
    let timer = setInterval(function () {
        if (op >= 100) clearInterval(timer);
        elemento.style.filter = `opacity(${op}%)`;
        op += 2.5;
    }, 8);
}

let lastAnimeNumber = 1;
function changeAnime(animeNumber) {
    if (animeNumber != lastAnimeNumber) {
        mainAnime.style.filter = 'opacity(0%)';
        mainAnime.style.backgroundImage = `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)), url(img/big${animeNumber}.jpg)`;
        title.innerText = titulos[animeNumber - 1];
        description.innerText = desc[animeNumber - 1];
        trailer.href = trailers[animeNumber - 1];
        list.href = lista[animeNumber - 1];
        fadeIn(mainAnime);
        lastAnimeNumber = animeNumber;
    }
}

