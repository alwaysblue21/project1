const $searchForm = $("form");

let url1 = ""

$searchForm.on("submit", event => {
    event.preventDefault();

    const formData = new FormData(event. target);

    const champion = formData.get("champion");

    // const caps = (champion) => {
    //     return `${champion}`.charAt(0).toUpperCase() + `${champion}`.slice(1).toLowerCase();
    // }

    url1 = `https://league-of-legends-champions.p.rapidapi.com/champions/en-us/${champion}`
    
    const $screen = $(".screen");
    const $result = $(".result");
    const $buttonQ = $(".q");
    const $buttonW = $(".w");
    const $buttonE = $(".e");
    const $buttonR = $(".r");

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

    $screen.empty();
    $result.html(`<div>Loading...</div>`)

    $.ajax(settings).then((response) => {
        console.log(response);
        console.log(response.champion[0].data_dragon_json);
        // save the json string in a variable
        const jsons = response.champion[0].data_dragon_json;
        // convert json string to js object
        const data = JSON.parse(jsons);
        // log to confirm conversion went fine
        console.log(data);

        const image = response.champion[0].champion_splash;

        const skillQIcon = response.champion[0].champion_q.champion_q_icon;
        const skillWIcon = response.champion[0].champion_w.champion_w_icon;
        const skillEIcon = response.champion[0].champion_e.champion_e_icon;
        const skillRIcon = response.champion[0].champion_r.champion_r_icon;

        const skillQInfo = response.champion[0].champion_q.champion_q_description;
        const skillWInfo = response.champion[0].champion_w.champion_w_description;
        const skillEInfo = response.champion[0].champion_e.champion_e_description;
        const skillRInfo = response.champion[0].champion_r.champion_r_description;

        const skillQName = response.champion[0].champion_q.champion_q_name;
        const skillWName = response.champion[0].champion_w.champion_w_name;
        const skillEName = response.champion[0].champion_e.champion_e_name;
        const skillRName = response.champion[0].champion_r.champion_r_name;

        const skillQImg = response.champion[0].champion_q.champion_q_video_poster;
        const skillWImg = response.champion[0].champion_w.champion_w_video_poster;
        const skillEImg = response.champion[0].champion_e.champion_e_video_poster;
        const skillRImg = response.champion[0].champion_r.champion_r_video_poster;

        // const skillQVid = response.champion[0].champion_q.champion_q_video_poster;
        // const skillWVid = response.champion[0].champion_w.champion_w_video_poster;
        // const skillEVid = response.champion[0].champion_e.champion_e_video_poster;
        // const skillRVid = response.champion[0].champion_r.champion_r_video_poster;


        console.log(image)
        console.log(skillQIcon)

        $screen.html(`
        <img src=${image} alt="picture of a champion">
        `);
      
        $result.html(`
        <div class="infos">

        <div>
        <b>Name:&nbsp;</b> ${data.name}
        </div>

        <div>
        <b>Title:&nbsp;</b> ${data.title}
        </div>

        <div>
        <b>Role:&nbsp;</b> ${data.tags}
        </div>

        </div>

        <div class+"story">

        <div>
        <b>Lore:&nbsp;</b> ${data.lore}
        </div>

        </div>

        <div class="skillBox">

        <div>
        <button class="q">
        <img class="img1" src=${skillQIcon} alt="skill q icon img">
        </button>
        <b>Skill Q:&nbsp"${skillQName}":&nbsp;</b> ${skillQInfo}
        </div>

        <div>
        <button class="w">
        <img class="img1" src=${skillWIcon} alt="skill w icon img">
        </button>
        <b>Skill W:&nbsp"${skillWName}":&nbsp;</b> ${skillWInfo}
        </div>

        <div>
        <button class="e">
        <img class="img1" src=${skillEIcon} alt="skill e icon img">
        </button>
        <b>Skill E:&nbsp"${skillEName}":&nbsp;</b> ${skillEInfo}
        </div>

        <div>
        <button class="r">
        <img class="img1" src=${skillRIcon} "skill r icon img">
        </button>
        <b>Skill R:&nbsp"${skillRName}":&nbsp;</b> ${skillRInfo}
        </div>

        </div>
        `)

        ////on click listner////
        ////////////////////////
       $(".q").on("click", function() {
        $screen.html(`<img src=${skillQImg} alt="picture of a champion using skill">`)
       })

       $(".w").on("click", function() {
        $screen.html(`<img src=${skillWImg} alt="picture of a champion using skill">`)
       })

       $(".e").on("click", function() {
        $screen.html(`<img src=${skillEImg} alt="picture of a champion using skill">`)
       })

       $(".r").on("click", function() {
        $screen.html(`<img src=${skillRImg} alt="picture of a champion using skill">`)
       })

    })

    .catch(() => {
        $result.html(`<div> there was an error...</div>`)
    });
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
//////////////////////////////////////////////////////////////////////////
// let capitalize = 'sPiKe';

// We need a function that takes in a string. 
// This function needs to RETURN that string with the first letter is in caps.
// The function must also ensures everything else is in lowercase.
// This string will never hold an empty space

// const caps = str => {
//     return `${str}`.charAt(0).toUpperCase() + `${str}`.slice(1).toLowerCase();
// }


// console.log(
//     caps(capitalize)
// )

// $button.onClick("q", event => {
//     event.preventDefault();
//     $screen.skillQVid;
// })