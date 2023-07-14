const jokeElem = document.getElementById("joke");
const categoryElem = document.getElementById("ctgr");
const btn = document.getElementById("btn");
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getJoke = () => {
    jokeElem.classList.remove("fade");
    categoryElem.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item => {
        jokeElem.textContent = `${item.joke}`;
        categoryElem.textContent = `Category: ${item.category}`;
        jokeElem.classList.add("fade");
        categoryElem.classList.add("fade");
     });
    
}

btn.addEventListener("click",getJoke);
getJoke();