//should add books to a specific shelf and return the object book
//needs to take in two parameters
function shelfBook(bookToAdd, intendedShelf) {
  if(intendedShelf.length < 3)
    return intendedShelf.unshift(bookToAdd);
};

//"should remove a book by name"
function unshelfBook(bookToRemove, currentShelf) {
  // for index starting at 0, until parameter.length of array - 1
  for (var i = 0; i < currentShelf.length; i++) {
// if the argument(bookToRemove) is equal to a title thats in the array of the
//second argument (currentShelf)
    if (bookToRemove === currentShelf[i].title) {
       currentShelf.splice(i, 1);
    }
    //then I want to remove the element in that array(currentShelf)

   }

 };

/*
//  var currentShelf = [];
  for (var i = 0; i < currentShelf.length; i++);
    if(bookToRemove === currentShelf[i].variable.title);
  console.log(currentShelf[2].title);*/
  //  return currentShelf;
  //  var pos = currentShelf.title.indexOf(bookToRemove)
  //  var removedItem =  currentShelf.splice(pos, 1)

//when the booktoRemove is === the current shelf[i].name, remove the book
//we have the book title which is a string
// that is stored in a key value pair in book object
// the book object is stored in the shelf array
//if we find the index position of the book object,
// we can remove it from the array




function listTitles(shelfArray){
  var titles = [];
    for (var i = 0; i < shelfArray.length; i++) {
      titles.push(shelfArray[i].title);
  }
  return titles.join(', ');
}
//titles needs to be an array so that it can be joined into a string
//and we chose array because taking three shelfArray[i].title strings

//function should take in parameters
function searchShelf(shelf, bookTitle) {
  var searchResult
    for (var i = 0; i < shelf.length; i++) {
      if (shelf[i].title === bookTitle){
        searchResult = true;
      }
      else { searchResult = false;
      }
   }
   //should return a boolean value based on whether title was found on shelf
   return searchResult;
}


module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
