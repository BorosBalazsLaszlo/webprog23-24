function Lekeres() {
    const telepulesNev = document.getElementById("telepid").value.toLowerCase();

    fetch('https://hur.webmania.cc/zips/Békés.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Hibába ütköztünk');
            }
            return response.json();
        })
        .then(data => {
            const zips = data.zips;
            const talalatok = zips.filter(z => z.name.toLowerCase().startsWith(telepulesNev));
            if (talalatok.length > 0) {
                console.log(talalatok);
            } else {
                console.log('Nincs ilyen település az adatok között.');
            }
        })
        .catch(error => {
            console.error('Hibába ütköztünk', error);
        });
}