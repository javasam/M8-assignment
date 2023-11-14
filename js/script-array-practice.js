//STEP 1
let movies = ["Terminator 2", "Avatar", "Titanic", "Die Hard", "Star Trek"]
console.log(movies[1]);

//STEP 2
let movies2 = new Array(5);
for (let i = 0; i < movies2.length; i++) {
    movies2[i] = movies[0];
}
console.log(movies2[0]);

//STEP 3
movies2[5] = "Star wars"
console.log(movies2.length)

//STEP 4
let movies3 = []
for (let i = 0; i < 5; i++) {
    movies3[i] = movies[4];
}
delete movies3[0]
movies3.forEach(el => console.log(el));

//STEP 5
let movies4 = []
for (let i = 0; i < 7; i++) {
    movies4[i] = movies[2];
}
for (let mov in movies4) {
    console.log(movies4[mov]);
}

//STEP 6
let movies5 = []
for (let i = 0; i < 7; i++) {
    movies5[i] = movies[3];
}
for (let mov5 of movies5) {
 console.log(mov5);
}

//STEP 7
console.log(movies.sort())

//STEP 8
let movies6 = []
for (let i = 0; i < 5; i++) {
    movies6[i] = movies[i];
}
let leastFavMovies = [];
leastFavMovies.push("The Revenant")
leastFavMovies.push("The Matrix Resurrections")
leastFavMovies.push("Apocalypto")

console.log("Movies I like:")
console.log("")
for (let mov6 of movies6) {
    console.log(mov6);
}
console.log("")
console.log("Movies I regret watching:")
console.log("")
for (let leastFavMovie of leastFavMovies) {
    console.log(leastFavMovie);
}

//STEP 9
console.log("")
console.log("STEP 9")
let mergedArray = movies6.concat(leastFavMovies);
mergedArray.sort().reverse().forEach((el) => console.log(el));

//STEP 10
console.log(mergedArray.pop())

//STEP 11
console.log(mergedArray.shift())

//STEP 12

let movies7 = []
for (let i = 0; i < 5; i++) {
    movies7[i] = movies[i];
}

let leastFavMovies2 = [];
leastFavMovies2.push("The Revenant")
leastFavMovies2.push("The Matrix Resurrections")
leastFavMovies2.push("Apocalypto")
let mergedArray2 = movies7.concat(leastFavMovies2);

let moviesIDontLike = [];
moviesIDontLike.push(mergedArray2.indexOf("The Revenant"))
moviesIDontLike.push(mergedArray2.indexOf("The Matrix Resurrections"))
moviesIDontLike.push(mergedArray2.indexOf("Apocalypto"))
for (let moviesIndex of moviesIDontLike) {
    delete mergedArray2[moviesIndex]
    console.log(moviesIndex);
}

//STEP 13
const rankingMovies = [];
for (let i = 0; i < movies.length; i++) {
    rankingMovies.push([movies[i], i + 1]);
}
for (let rankingMovie of rankingMovies) {
    let name = rankingMovie.filter(item => {
        return typeof item === 'string'
    })
    console.log(name)
}

//STEP 14
let employees1 = ["Elmira", "Amy", "Howard", "Tiffanie"]
let showEmployee = function (employees) {
    console.log("Employees:")
    console.log("")
    for (let employee of employees) {
        console.log(employee.toUpperCase())
    }
}
showEmployee(employees1);

//STEP 15
let filterResult = function (array) {
    let result = [];
    for (let element of array) {
        if (!(element === "" || element === 0 || element === null || element === false)) {
            result.push(element)
        }
    }
    console.log(result)
}
filterResult([58, '', 'abcd', true, null, false, 0])

//STEP 16
let randomItem = function (array) {
    let number = Math.floor(Math.random() * array.length);
    return array[number]
}
console.log(randomItem([1, 2, 3, 4, 5, 6, 7]))

//STEP 17
let largestNumber = function (array) {
    return Math.max.apply(null, array)
}
console.log(largestNumber([1, 2, 2, 4, 6, 5, 7, 8, 1]))