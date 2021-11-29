

async function fetchLeagues() {
    let response = await fetch('https://api-football-standings.azharimm.site/leagues');
    let data = await response.json();

    console.log(data);
     return data.data
}

let showLeauges = document.getElementById('showLeauges');

async function fetchLeague(e) {
    let response = await fetch(`https://api-football-standings.azharimm.site/leagues/${e.target.value}/standings?season=2020&sort=asc
    .azharimm.site/leagues`);

    let data = await response.json();

    console.log(data);
    return data.data
}

async function initForm() {
    const leagues = await fetchLeagues() 

    console.log(leagues);
  
    let selectList = document.getElementById('leagueList')
   
    leagues.forEach((league) => {
        let option = document.createElement("option");
        option.value = league.id;
        option.text = league.name;
        selectList.appendChild(option);
   });

   selectList.addEventListener('change',fetchLeague);

}

initForm();

