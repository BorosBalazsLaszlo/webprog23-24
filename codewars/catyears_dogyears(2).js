function ownedCatAndDog(catYears, dogYears) {
    function getHumanYears(petYears, firstYear, secondYear, subsequentYears) {
        if (petYears < firstYear) {
            return 0;
        } else if (petYears < firstYear + secondYear) {
            return 1;
        } else {
            return 2 + Math.floor((petYears - firstYear - secondYear) / subsequentYears);
        }
    }

    const ownedCat = getHumanYears(catYears, 15, 9, 4);
    const ownedDog = getHumanYears(dogYears, 15, 9, 5);

    return [ownedCat, ownedDog];
}
