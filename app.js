// const $searchForm = $("form");

// const settings = {
// 	async: true,
// 	crossDomain: true,
// 	url: 'https://league-of-legends-champions.p.rapidapi.com/champions/en-us/bard',
// 	method: 'GET',
// 	headers: {
// 		
// 	}
// };

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });
/////////////////////////////////////////////////////////////////////////////////////

// select the input
const $input = $("input")
// select the button
const $button = $("button")

$button.on("click", (event) => {
    const number = $input.val()
    $.ajax("https://league-of-legends-champions.p.rapidapi.com/champions/en-us/" + number)
    .then((data) => {
        //Select the main tag
        const $main = $("main")
        //empty the main tag
        $main.empty()
        // create a div
        const $div = $("<div>")
        //add the html to the div
        $div.html(`<h1>${data.title}</h1>`)
        //append div to main
        $main.append($div)
    })
    .catch((error) => {
        console.log(error)
    })
})

