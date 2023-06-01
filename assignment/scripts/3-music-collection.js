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