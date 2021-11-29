async function fetchLeagues() {
  let response = await fetch(
    "https://api-football-standings.azharimm.site/leagues"
  );
  let result = await response.json();

  console.log(result);
  return result.data;
}

async function fetchLeague(e) {
  let response =
    await fetch(`https://api-football-standings.azharimm.site/leagues/${e.target.value}/standings?season=2020&sort=asc
    .azharimm.site/leagues`);

  let result = await response.json();

  console.log(result);
  displayLeague(result.data);
  return result.data;
}

function displayLeague(league) {
  let showLeauges = document.getElementById("showLeauges");
  showLeauges.innerHTML = "";

  let header = document.createElement("h2");
  header.innerHTML = league.name;

  let table = document.createElement("table");

  league.standings.forEach((team) => {
    let tr = document.createElement("tr");

    let tdName = document.createElement("td");
    tdName.innerHTML = team.team.name;
    tr.appendChild(tdName);

    let tdPoints = document.createElement("td");
    tdPoints.innerHTML = team.stats[6].displayValue;
    tr.appendChild(tdPoints);

    table.appendChild(tr);
  });

  showLeauges.appendChild(header);
  showLeauges.appendChild(table);
}
async function initForm() {
  const leagues = await fetchLeagues();

  console.log(leagues);

  let selectList = document.getElementById("leagueList");

  leagues.forEach((league) => {
    let option = document.createElement("option");
    option.value = league.id;
    option.text = league.name;
    selectList.appendChild(option);
  });

  selectList.addEventListener("change", fetchLeague);
}

initForm();

