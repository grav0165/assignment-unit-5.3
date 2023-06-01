console.log('***** Music Collection *****')

let collection = [];

function addToCollection(num0, num1, num3) {
    let addAlbum = {
        title: num0,
        artist: num1,
        yearPublished: num3,
    }; 
  collection.push(addAlbum);
  return addAlbum;
} // end addToCollection

console.log(addToCollection("Transgender Street Legend Vol. 2", "Left at London", 2020));

console.log(addToCollection("Dummy", "Portishead", 1994));

console.log(addToCollection("Fat of the Land", "Prodigy", 1997));

console.log(addToCollection("Emotion", "Carly Rae Jepsen", 2015));

console.log(addToCollection("No Control", "Bad Religion", 1989));

console.log(addToCollection("Rumours", "Fleetwood Mac", 1977));

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