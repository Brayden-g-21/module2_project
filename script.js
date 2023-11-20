setInterval(function dateTimeString() {
  let currentDate = new Date();
    document.getElementById('date').innerText = currentDate.toLocaleDateString();
    document.getElementById('year').innerText = currentDate.getFullYear();
    document.getElementById('time').innerText = currentDate.toLocaleTimeString();
}, 1000);

/*let cardList = [{
    title: 'Mario Club',
    link: 'past_projects/mario_club/index.html',
    },{
    title: 'Cafe Menu',
    link: 'past_projects/cafe_menu/index.html',
    },{
    title: 'Weather Site',
    link: 'past_projects/weather_site/index.html',
    },{
    title: 'Memory Game',
    link: 'past_projects/memory-game/index.html',
    }];*/

    let projectList = [
        'Mario Club',
        'Cafe Menu',
        'Weather Site',
        'Memory Game'
    ];

    let linkList = [
        'past_projects/mario_club/index.html',
        'past_projects/cafe_menu/index.html',
        'past_projects/weather_site/index.html',
        'past_projects/memory-game/index.html'
    ];
    console.log(linkList.length);
    let pastCards = document.querySelector("#past-cards")

    for (let i = 0; i < projectList.length; i++) {
        const newCard = document.createElement('div');
        newCard.classList = 'new-card';
        document.getElementById('past-cards').appendChild(newCard)

        let projectName = document.createElement('a')
        projectName.classList = 'project-name';
        projectName.innerText = projectList[i]
        projectName.href = linkList[i]
        newCard.appendChild(projectName);
    };

    function newProject(title, link) {
        projectList.push(title);
        linkList.push(link);

        const newCard = document.createElement('div');
        newCard.classList = 'new-card';
        document.getElementById('past-cards').appendChild(newCard)

        let projectName = document.createElement('a')
        projectName.classList = 'project-name';
        let last = projectList.length -1;
        projectName.innerText = projectList[last]
        projectName.href = linkList[last]
        newCard.appendChild(projectName);
    };