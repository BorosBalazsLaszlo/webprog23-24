function ownedCatAndDog(catYears, dogYears) {
    function getHumanYears(petYears, firstYear, secondYear, subsequentYears) {
        if (petYears < firstYear) {
            return 0; // less than one human year
        } else if (petYears < firstYear + secondYear) {
            return 1; // between one and two human years
        } else {
            return 2 + Math.floor((petYears - firstYear - secondYear) / subsequentYears);
        }
    }

    const ownedCat = getHumanYears(catYears, 15, 9, 4);
    const ownedDog = getHumanYears(dogYears, 15, 9, 5);

    return [ownedCat, ownedDog];
}
