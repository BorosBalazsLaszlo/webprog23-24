
const eredetiTomb = ["hétfő", "kedd", "szerda", "csütörtök", "péntek", "szombat", "vasárnap"];

const ujTomb = [];

function randomSzam(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const index1 = randomSzam(0, eredetiTomb.length - 1);
ujTomb.push(eredetiTomb[index1]);
eredetiTomb.splice(index1, 1);


const index2 = randomSzam(0, eredetiTomb.length - 1);
ujTomb.push(eredetiTomb[index2]);
eredetiTomb.splice(index2, 1);


const index3 = randomSzam(0, eredetiTomb.length - 1);
ujTomb.push(eredetiTomb[index3]);
eredetiTomb.splice(index3, 1);


const index4 = randomSzam(0, eredetiTomb.length - 1);
ujTomb.push(eredetiTomb[index4]);
eredetiTomb.splice(index4, 1);


const index5 = randomSzam(0, eredetiTomb.length - 1);
ujTomb.push(eredetiTomb[index5]);
eredetiTomb.splice(index5, 1);


const index6 = randomSzam(0, eredetiTomb.length - 1);
ujTomb.push(eredetiTomb[index6]);
eredetiTomb.splice(index6, 1);


ujTomb.push(eredetiTomb[0]);

console.log(ujTomb); 
