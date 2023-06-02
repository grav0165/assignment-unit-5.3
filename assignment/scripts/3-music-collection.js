console.log('***** Music Collection *****')

let collection = [];

function addToCollection(num0, num1, num3, num4) {
    let addAlbum = {
        title: num0,
        artist: num1,
        yearPublished: num3,
        tracks: num4,
    }; 
  collection.push(addAlbum);
  return addAlbum;
} // end addToCollection

console.log(addToCollection("Transgender Street Legend Vol. 2", "Left at London", 2020, 
[{name: "My Friends are Kinda Strange", duration: "3:43"}, {name: "Do You See Us?", duration: "2:40"}, 
{name: "Safety First", duration: "4:07"}, {name: "6 Feet", duration: "2:37"}, 
{name: "T-Shirt", duration: "3:09"}, {name: "Choke", duration: "3:08"}]));

console.log(addToCollection("Dummy", "Portishead", 1994, 
[{name: "Numb", duration: "3:58"}, {name: "Pedestal", duration: "3:41"},
{name: "Glory Box", duration: "5:05"}, {name: "Strangers", duration: "3:58"},
{name: "Roads", duration: "5:05"}, {name: "It Could Be Sweet", duration: "4:20"},
{name: "Wandering Star", duration: "4:54"}, {name: "Sour Times", duration: "4:14"},
{name: "Mysterons", duration: "5:06"}, {name: "Biscuit", duration: "5:04"},
{name: "It's a Fire", duration: "3:48"}]));

console.log(addToCollection("Fat of the Land", "Prodigy", 1997,
[{name: "Mindfields", duration: "5:40"}, {name: "Serial Thrilla", duration: "5:11"},
{name: "Fuel My Fire", duration: "4:19"}, {name: "Firestarter", duration: "4:40"},
{name: "Climbatize", duration: "6:38"}, {name: "Breathe", duration: "5:35"},
{name: "Funky Shit", duration: "5:16"}, {name: "Diesel Power", duration: "4:18"},
{name: "Smack My Bitch Up", duration: "5:43"}, {name: "Narayan", duration: "9:06"}]));

console.log(addToCollection("Emotion", "Carly Rae Jepsen", 2015,
[{name: "Gimmie Love", duration: "3:22"}, {name: "Emotion", duration: "3:17"},
{name: "When I Needed You", duration: "3:41"}, {name: "Love Again", duration: "3:37"},
{name: "Run Away With Me", duration: "4:11"}, {name: "Your Type", duration: "3:20"},
{name: "I Didn't Just Come Here To Dance", duration: "3:40"}, {name: "Favorite Color", duration: "3:30"},
{name: "I really Like You", duration: "3:25"}]));

console.log(addToCollection("No Control", "Bad Religion", 1989, 
[{name: "I want to Conquer the World", duration: "2:18"}, {name: "Anxiety", duration: "2:08"},
{name: "Big Bang", duration: "1:42"}, {name: "Progress", duration: "2:15"},
{name: "Soemtimes I feel Like", duration: "1:34"}, {name: "Automatic Man", duration: "1:41"},
{name: "A Change of Ideas", duration: "0:55"}, {name: "It Must Look Pretty Appealing", duration: "1:22"},
{name: "Henchman", duration: "1:08"}, {name: "You", duration: "2:05"},
{name: "I Want Something More", duration: "0:48"}, {name: "the World Won't Stop You", duration: "2:07"},
{name: "Billy", duration: "1:55"}, {name: "No Control", duration: "1:47"}
]));

console.log(addToCollection("Rumours", "Fleetwood Mac", 1977, 
[{name: "You Make Loving Fun", duration: "3:33"}, {name: "Don't Stop", duration: "3:13"},
{name: "I Don't Want to Know", duration: "3:15"}, {name: "Never Going Bank Again", duration: "2:02"},
{name: "The Chain", duration: "4:30"}, {name: "Gold Dust Woman", duration: "4:51"},
{name: "Dreams", duration: "4:17"}, {name: "Oh Daddy", duration: "3:56"}, 
{name: "Songbird", duration: "3:21"}, {name: "Go Your Own Way", duration: "3:40"},
{name: "Second Hand News", duration: "2:43"}]));

console.log(collection); 

/// showCollection function

function showCollection(array) {
    console.log(`There are ${array.length} items in my collection.`)
    for(i=0; i<array.length; i++) {
        console.log(`${array[i].title} by ${array[i].artist} published in ${array[i].yearPublished}.`)
    }
} // end showCollection function

showCollection(collection);

/// find artist function

function findByArtist(artistVar) {
    let resultsFound =[];

    for(i=0; i<collection.length; i++) {
        if(collection[i].artist === artistVar) {
            resultsFound.push(collection[i]);
        }
    }
    return resultsFound;
} // end findByArtist function


function search(searchCriteria) {
    if(!searchCriteria || Object.keys(searchCriteria).length === 0) {
        return collection;
    }

    let searchResult = [];

    for(i=0; i<collection.length; i++) {
        if (!searchCriteria.artist || searchCriteria.artist === collection[i].artist ){
            if (!searchCriteria.year || searchCriteria.year === collection[i].yearPublished ){
                if (!searchCriteria.title || searchCriteria.title === collection[i].title ){
                    searchResult.push(collection[i]);
                }
            }
        }
    }
    return searchResult;
} // end search function

console.log(search({artist: "Prodigy", year: 1997}));
console.log(search({artist: "Queens of the Stone Age", year: 2002}));
console.log(search({title: "Emotion", year: 2015}));
console.log(search({}));


/// tracks

