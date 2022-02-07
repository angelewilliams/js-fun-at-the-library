var assert = require("chai").assert;

var {
  createLibrary,
  addBook,
  checkoutBook
} = require("../src/library.js")

describe("library.js", function() {
  describe("createLibrary", function() {
    it("should be a function", function() {
      assert.isFunction(createLibrary);
    });

    it("should have a name", function() {
      // createLibrary takes in a parameter that is a string
      var denverLibrary = createLibrary("Denver Public Library");
//when createLibrary takes in string, the object denverLibrary should
//have a key of 'name' that the parameter goes into
    assert.equal(denverLibrary.name, "Denver Public Library");
    });

    it("should be able to have a different name", function() {
      var goldenLibrary = createLibrary("Golden Public Library");

      assert.equal(goldenLibrary.name, "Golden Public Library");
    });

    it("should have shelves", function() {
      var denverLibrary = createLibrary("Denver Public Library");

      assert.isObject(denverLibrary.shelves);
    });

    it("should have several different types of shelves", function() {
      var denverLibrary = createLibrary("Denver Public Library");

      assert.deepEqual(denverLibrary.shelves.fantasy, []);
      assert.deepEqual(denverLibrary.shelves.fiction, []);
      assert.deepEqual(denverLibrary.shelves.nonFiction, []);
    });
  });

  describe("addBook", function() {
    it("should add book to the fantasy shelf", function() {
      var denverLibrary = createLibrary("Denver Public Library");
//dracula is an object with 4 key value pairs
      var dracula = {
        title: "Dracula",
        mainCharacter: { name: "Count Dracula", age: undefined, pronouns: "he/him" },
        pageCount: 418,
        genre: "fantasy"
      }
//addBook should take in two parameters (both are objects)
      addBook(denverLibrary, dracula);
//looks like we need the first parameter to identify the library and then add
//the second paremeter to push the second parameter (the book) onto a specific shelf
      assert.equal(denverLibrary.shelves.fantasy[0], dracula);
    });

    it("should add books to the correct shelves automatically", function() {
// denverLibrary object is assigned to the function createLibrary with the string name passed as an argument.
//var dracula is an object with a key of genre and a string value identifying the correct shelf
      var denverLibrary = createLibrary("Denver Public Library");
      var dracula = {
        title: "Dracula",
        mainCharacter: { name: "Count Draula", age: undefined, pronouns: "he/him" },
        pageCount: 418,
        genre: "fantasy"
      }
      var paleBlueDot = {
        title: "The Pale Blue Dot",
        mainCharacter: undefined,
        pageCount: 187,
        genre: 'nonFiction'
      }

      addBook(denverLibrary, dracula);
      addBook(denverLibrary, paleBlueDot);
//should return the object
      assert.equal(denverLibrary.shelves.fantasy[0], dracula);
      assert.equal(denverLibrary.shelves.nonFiction[0], paleBlueDot);
    });
  });

  describe("checkoutBook", function() {
    it("should unshelf a book to check out a book to a patron", function() {
      var dracula = {
        title: "Dracula",
        mainCharacter: { name: "Count Dracula", age: undefined, pronouns: "he/him" },
        pageCount: 418,
        genre: "fantasy"
      }
      var bornACrime = {
        title: "Born a Crime",
        mainCharacter: { name: "Trevor Noah", age: 36, pronouns: "he/him" },
        pageCount: 304,
        genre: "nonFiction"
      }
      var prideAndPrejudice = {
        title: "Pride and Prejudice",
        mainCharacter: { name: "Eliabeth Bennet", age: 20, pronouns: "she/her" },
        pageCount: 432,
        genre: "fiction"
      }
      var denverLibrary = createLibrary("Denver Public Library");

      addBook(denverLibrary, dracula);
      addBook(denverLibrary, bornACrime);
      addBook(denverLibrary, prideAndPrejudice);
//checkoutBook needs to take library object, title and the genre
      var result1 = checkoutBook(denverLibrary, "Pride and Prejudice", "fiction");

      assert.deepEqual(denverLibrary.shelves, {fantasy: [dracula], fiction: [], nonFiction: [bornACrime]});;
      assert.equal(result1, "You have now checked out Pride and Prejudice from the Denver Public Library");

      var result2 = checkoutBook(denverLibrary, "Born a Crime", "nonFiction");

      assert.deepEqual(denverLibrary.shelves, {fantasy: [dracula], fiction: [], nonFiction: []});;
      assert.equal(result2, "You have now checked out Born a Crime from the Denver Public Library")
    });

    it("should only checkout a book if the book is on the shelves", function() {
      var denverLibrary = createLibrary("Denver Public Library");

      var error1 = checkoutBook(denverLibrary, "The Fifth Season", "fantasy");

      assert.equal(error1, "Sorry, there are currently no copies of The Fifth Season available at the Denver Public Library");

      var error2 = checkoutBook(denverLibrary, "Yes Please", "nonFiction");

      assert.equal(error2, "Sorry, there are currently no copies of Yes Please available at the Denver Public Library");
    });
  });
});
