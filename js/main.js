
let url = "https://www.omdbapi.com/?apikey=4c338183&s=batman";

let searchList = document.getElementById("search-list").innerHTML = "data";

async function fetchJSON() {
  let response = await fetch(
    "https://www.omdbapi.com/?apikey=4c338183&s=superman"
  );
  let data = await response.json();
  console.log(data);

}

fetchJSON();
