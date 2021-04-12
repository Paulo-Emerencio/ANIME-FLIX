const mainAnime = document.querySelector(".main-anime");
mainAnime.style.backgroundImage = `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)), url(img/big1.jpg)`;

const title = document.querySelector(".title");
title.innerText = titulos[0];

const description = document.querySelector(".description");
description.innerHTML = desc[0];

const trailer = document.querySelector("#trailer");
trailer.href="https://www.youtube.com/watch?v=d6kBeJjTGnY";

const list = document.querySelector("#list");
list.href="https://myanimelist.net/anime/11061/Hunter_x_Hunter_2011";

function changeAnime(animeNumber) {
    mainAnime.style.backgroundImage = 
    `linear-gradient(rgba(0,0,0,.7),rgba(0,0,0,.7)), url(img/big${animeNumber}.jpg)`;
    title.innerText = titulos[animeNumber - 1];
    description.innerText = desc[animeNumber - 1];
}