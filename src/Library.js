//createLibrary should take in a parameter
function createLibrary(libraryName) {
   // should outputt an object with a key '.name'
  var createdLibrary = {
    name: libraryName,
    //shelves is an object, with properties that hold arrays (eventually to hold books)
    shelves: {
      //each shelf is labeled with a genre, and is currently an empty array
      fantasy:[],
      fiction:[],
      nonFiction:[]
    },
  };
  return createdLibrary
}
//after trying to refactor this I was trying to make the bookToAdd.name
//into a comparable data type to the object, but it was a mess and
//ultimately my solution below was 'cleaner' even if its a lot of lines
function addBook(createdLibrary, bookToAdd) {
  //we need to have the createdLibrary object (1st param) to
  //be able to add the book to a shelf (empty array)
  //need to be able to identify the genre, stored in the bookToAdd parameter (since will be passing through a book object)
  if (bookToAdd.genre === "fantasy") {
    createdLibrary.shelves.fantasy.push(bookToAdd);
  }
  else if (bookToAdd.genre === "fiction") {
    createdLibrary.shelves.fiction.push(bookToAdd);
  }
  else if (bookToAdd.genre === "nonFiction") {
    createdLibrary.shelves.nonFiction.push(bookToAdd);
  }
  else (console.log("Unable to locate correct shelf."))
  // createdLibrary.shelves.nonFiction.push(bookToAdd);
  return
}

function checkoutBook(createdLibrary, bookTitle, bookGenre) {
//if the bookTitle param is equal to the title, stored in the createdLibrary object
//we want to see if it is there and to remove it from the shelf to check it out

//created confirm and error to simplify the return
  var confirm = `You have now checked out ${bookTitle} from the ${createdLibrary.name}`;
  var error = `Sorry, there are currently no copies of ${bookTitle} available at the ${createdLibrary.name}`;
//iterate through library, shelves, bookGenre to check is bookTitle === title

// what do I need to do an if statement that includes if genre array is empty
  //started if statement to see if genre array was empty, if so book cannot be checked out, return error
   if (createdLibrary.shelves[bookGenre].length === 0) {
    return error;
    }
    //if the bookTitle is === to the title, meaning it is in the library and can check it out
    else if (bookTitle === createdLibrary.shelves[bookGenre][0].title) {
  //access createdLibrary obj, shelves and then the genre from the parameter bookGenre
  //then I want to remove that book object from the createdLibrary object
      createdLibrary.shelves[bookGenre].splice(0, 1);
        return confirm
    }
  }
//UNUSED CODE
//Originally tried to use: for (var i = 0; i < createdLibrary.shelves[bookGenre].length; i++) {
//else if (bookTitle != createdLibrary.shelves[bookGenre][i]) {

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
