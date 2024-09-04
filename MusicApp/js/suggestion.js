var socials = document.querySelector("#socials");
var socialBtn = document.querySelector("#add-social");
var songs = document.querySelector("#songs");
var songBtn = document.querySelector("#add-song");
var songNum = 2;

function addSocial() {
  var socialCont = document.createElement("div");
  var socialName = document.createElement("div");
  var socialUrl = document.createElement("div");

  socialCont.classList.add("urls");

  socialName.classList.add("url-cont");
  socialName.innerHTML = `<input type="text" class="url-name" name="social-name" placeholder="Platform" list="socials-list" size="9"></input>`;

  socialUrl.classList.add("url-cont");
  socialUrl.innerHTML = `<input type="url" name="social-url" placeholder="URL" size="18">`;

  socialCont.appendChild(socialName);
  socialCont.appendChild(socialUrl);
  socials.appendChild(socialCont);
}

function addSong() {
  var songCont = document.createElement("div");
  var songName = document.createElement("div");
  var songUrl = document.createElement("div");
  var songExp = document.createElement("div");

  songCont.classList.add("urls");

  songName.classList.add("url-cont");
  songName.innerHTML = `<input type="text" id="song-name" name="song-name" placeholder="Song Name" size="18">`;

  songUrl.classList.add("url-cont");
  songUrl.innerHTML = `<input type="url" id="song-url" name="song-url" placeholder="URL" size="9">`;

  songExp.classList.add("url-cont");
  songExp.innerHTML = `<input type="checkbox" id="explicit" name="song-${songNum}-explicit"><label for="explicit">Explicit?</label>`;
  songNum++;

  songCont.appendChild(songName);
  songCont.appendChild(songUrl);
  songCont.appendChild(songExp);
  songs.appendChild(songCont);
}

socialBtn.addEventListener("click", () => addSocial());
songBtn.addEventListener("click", () => addSong());
