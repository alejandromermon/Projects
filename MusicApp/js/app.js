/**
 * WEB222 – Assignment 05
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       Alejandro Mercado
 *      Student ID: 123350233
 *      Date:       19/07/2024
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { artists, songs } = window;

var menu = document.querySelector("#menu");
var cardCont = document.querySelector("#songs");

function createSongCards(artist) {
  cardCont.innerHTML = "";
  var artName = document.querySelector("#selected-artist");
  artName.innerHTML = `<div>${artist.name} (${artist.urls
    .map((artist) => `<a href="${artist.url}">${artist.name}</a>`)
    .join(", ")})</div>`;

  songs.forEach((song) => {
    if (song.artistId === artist.artistId && !song.explicit) {
      // Create the clickable card that opens the song link
      var card = document.createElement("div");
      card.classList.add("card");
      var link = document.createElement("a");
      link.classList.add("card-link");
      link.href = song.url;
      link.target = "_blank";
      link.appendChild(card);

      card.addEventListener("click", () => console.log(song));

      var image = document.createElement("img");
      image.src = song.imageUrl;
      image.classList.add("card-image");

      var songName = document.createElement("h2");
      songName.classList.add("song-name");
      songName.innerHTML = song.title;

      var songYear = document.createElement("h3");
      songYear.classList.add("song-year");
      songYear.innerHTML = `Released in ${song.year}`;

      var seconds = song.duration % 60;
      var songLen = document.createElement("span");
      songLen.classList.add("song-length");
      songLen.innerHTML = `Duration: ${Math.floor(song.duration / 60)}:${
        seconds > 9 ? seconds : "0" + seconds
      }`;

      card.appendChild(image);
      card.appendChild(songName);
      card.appendChild(songYear);
      card.appendChild(songLen);
      cardCont.appendChild(link);
    }
  });
}

window.onload = () => {
  artists.forEach((artist) => {
    var button = document.createElement("span");
    button.innerHTML = `<button id=${artist.artistId}>${artist.name}</button>`;
    menu.appendChild(button);
  });

  createSongCards(artists[0]);
};

menu.addEventListener("click", function (e) {
  if (e.target.nodeName === "BUTTON") {
    var [artist] = artists.filter((artist) => artist.name === e.target.textContent);

    createSongCards(artist);
  }
});
