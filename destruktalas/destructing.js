//1. Feladat 

let car = ['Ford', 'Mustang', 2022, 'blue'];

let [brand,model,year,color] = car

console.log(brand)
console.log(model)
console.log(year)
console.log(color)

//Kis betűs változóneveket.
//Fontos a változók sorrendje.


//2. Feladat

let book = {
    title: 'JavaScript: The Good Parts',
    author: 'Douglas Crockford',
    publicationYear: 2008,
    language: 'English'
};

let {bookTitle,bookAuthor} = book

console.log(bookTitle)
console.log(bookAuthor)
console.log(publicationYear)
console.log(language)

//Lower CamelCaseben írt neveket.
//Igen fontos.


//3. Feladat

let student = {
    name: 'John Doe',
    age: 20,
    grade: 'B',
    subjects: ['Math', 'English', 'History']
};



function printStudentInfo(student)
{
    let {name,age,grade,subjects} = student

    console.log(name)
    console.log(age)
    console.log(grade)
    console.log(subjects)
}

printStudentInfo(student);