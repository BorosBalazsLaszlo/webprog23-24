const heroes = [
    {firstName: "Ahsoka", lastName: "Tano", job: "padawan"},
    {firstName: "Boba", lastName: "Fett", job: "fejvadász"},
    {firstName: "Han", lastName: "Solo", job: "csempész"},
    {firstName: "Leia", lastName: "Organa", job: "szenátor"}
];

function renderHeroesAsCards(heroesArray) {
    const heroListElement = document.getElementById('heroList');
    let html = '';

    heroesArray.forEach(hero => {
        html += `
            <div class="kartya">
                <p>${hero.firstName} ${hero.lastName}</p>
                <p>Job: ${hero.job}</p>
            </div>
        `;
    });

    heroListElement.innerHTML = html;
}

function renderHeroesTablazat(heroesArray) {
    const heroListElement = document.getElementById('heroList');
    let html = `
        <table>
            <thead>
                <tr>
                    <th>Vezetéknév</th>
                    <th>Keresztnév</th>
                    <th>Foglalkozás</th>
                </tr>
            </thead>
            <tbody>
    `;

    heroesArray.forEach(hero => {
        html += `
            <tr>
                <td>${hero.firstName}</td>
                <td>${hero.lastName}</td>
                <td>${hero.job}</td>
            </tr>
        `;
    });

    html += `
            </tbody>
        </table>
    `;

    heroListElement.innerHTML = html;
}

renderHeroesTablazat(heroes);