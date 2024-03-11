function mineLocation(field) {
    let koord1;
    let koord2;
    
    for (var i = 0; i < field.length; i++) {
      field[i].forEach(function(szam, index) {
        if (szam === 1) {
          koord1 = i;
          koord2 = index;
        }
      });
    }
    
    return [koord1, koord2];
  }

  console.log("----- 2. feladat -----");
  console.log(mineLocation([ [1, 0], [0, 0] ]), [0, 0]);
  console.log(mineLocation([ [1, 0, 0], [0, 0, 0], [0, 0, 0] ]), [0, 0]);
  console.log(mineLocation([ [0, 0, 0, 0], [0, 0, 0, 0], [0, 0, 1, 0], [0, 0, 0, 0] ]), [2, 2]);
