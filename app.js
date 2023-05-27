const $searchForm = $("form");

let url1 = ''

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

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
})

///////////////////////////////////////////////////////////////////////////////////////////////////

// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: ABC,
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '75ce2a876fmsha0b9d5ee7862f90p1cb4adjsnf5f897fecf4e',
// 		'X-RapidAPI-Host': 'league-of-legends-champions.p.rapidapi.com'
// 	}
// };

