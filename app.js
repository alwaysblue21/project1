const $searchForm = $("form");

let url1 = ""

$searchForm.on("submit", event => {
    event.preventDefault();

    const formData = new FormData(event. target);

    const champion = formData.get("champion");

    url1 = `https://league-of-legends-champions.p.rapidapi.com/champions/en-us/${champion}`


    const settings = {
        async: true,
        crossDomain: true,
        url: url1,
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '75ce2a876fmsha0b9d5ee7862f90p1cb4adjsnf5f897fecf4e',
            'X-RapidAPI-Host': 'league-of-legends-champions.p.rapidapi.com'
        }
    };

    $.ajax(settings).then((response) => {
        console.log(response)
        console.log(response.champion[0].data_dragon_json)
        const games = response.champion[0].data_dragon_json
        const div = $("#screen")
        for (game of games) {
            const newDiv = $("<div>").addClass("game")
            newDiv.html(`
            <img src=${game.full}>
            `)
            div.append(newDiv);
        }
       
    })
})

///////////////////////////////////////////////////////////////////////////////////////////////////
// code snippets from rapidapi
// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://league-of-legends-champions.p.rapidapi.com/champions/en-us/bard',
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '75ce2a876fmsha0b9d5ee7862f90p1cb4adjsnf5f897fecf4e',
// 		'X-RapidAPI-Host': 'league-of-legends-champions.p.rapidapi.com'
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });
