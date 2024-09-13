document.getElementById('fetchData').addEventListener('click', () => {
    const user = document.getElementById('user').value;
    const url = `https://www.codewars.com/api/v1/users/${user}`;
    
    fetch(url)
    .then(response => {
        if (!response.ok) {
            if (response.status === 404) {
                throw new Error('Adat hiba. A felhasználó nem található.');
            } else if (response.status === 500) {
                throw new Error('Szerver hiba.');
            } else {
                throw new Error('Hálózati hiba.');
            }
        }
        return response.json();
    })
    .then(data => {
        
        document.getElementById('userName').textContent = data.username || 'Név nem elérhető';
        
        
        const userSkillsList = document.getElementById('userSkills');
        userSkillsList.innerHTML = ''; 

        
        const languages = data.ranks.languages;
        for (const [language, details] of Object.entries(languages)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${language}: ${details.score} pont`;
            userSkillsList.appendChild(listItem);
        }

        document.getElementById('userScore').textContent = data.honor || 'Összpontszám nem elérhető';
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('userName').textContent = error.message;
        document.getElementById('userSkills').innerHTML = '';
        document.getElementById('userScore').textContent = '';
    });
});

document.getElementById('showLanguages').addEventListener('click', () => {
    document.querySelector('.skills').style.display = 'block';
    document.querySelector('.osszpont').style.display = 'none';
});

document.getElementById('showTotalScore').addEventListener('click', () => {
    document.querySelector('.skills').style.display = 'none';
    document.querySelector('.osszpont').style.display = 'block';
});