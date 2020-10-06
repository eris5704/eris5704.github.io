let allMovies = [];

//Movie object contructor
function Movie(title, rating, havewatched) {
    this.title = title;
    this.rating = rating;
    this.havewatched = havewatched;
}

//add a movie OBJECT to the allMovies array
function addMovie (Movie) {
    console.log("A new movie is added")
    allMovies.push(Movie);
}


//iterate through all elements of allMovies array -- try using a for loop
//print out to console in a correct format -- refer to the expected txt file to find the format
//print out the total number of movies in a3llMovies array

function printMovies () {
    console.log("Printing all movies...")
    for (each of allMovies) {
        console.log(each.title,",", "rating of", each.rating,",", "havewatched: ", each.havewatched )
    }
    var length = allMovies.length
    console.log("\n")
    console.log("You have",length, "movies in total")
}

//print out to console, only the movies that has a rating higher than rating(argument)
//print out the total number of matches
//use if else to decide if rating is higher than 3.5, and have to iterate through everything
function highRatings (rating) {
    var matches = []
    console.log("printing movie that has a rating higher than 3.5")
    for(each of allMovies) {
        if (each.rating > rating) {
            console.log(each.title,"has a rating of", each.rating)
            matches.push(each.title)
       }
    }
    console.log("\n")
    console.log("In total, there are",matches.length, "matches")
}

//Toggle the 'haveWatched' property of the specified movie 
//the movie being changes is spiderman, change the value from false to true
function changeWatched (title) {
    console.log("changing the status of the movie...")
    for (each of allMovies) {
        if (each.title == title){
            each.havewatched = !each.havewatched
        } else{
        
        }
    }
}



////////////////////////////////////////////////////////////
//Test code - DO NOT DELETE OR EDIT
let x = new Movie("Spiderman", 3, "true");
let y = new Movie("Citizen Kane", 4, "false");
let z = new Movie("Zootopia", 4.5, "true");

allMovies.push(x,y,z);

console.log("----------------");
console.log("running program......");
console.log("----------------");
printMovies();


let movie1 = new Movie("Parasite", 2, "false");


console.log("----------------");
addMovie(movie1);
console.log("----------------");



changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

changeWatched("Spiderman");
console.log("----------------");

printMovies();
console.log("----------------");

highRatings(3.5);