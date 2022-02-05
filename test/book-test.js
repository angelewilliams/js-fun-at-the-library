var assert = require("chai").assert;

var {
  createTitle,
  buildMainCharacter,
  calculatePageCount,
  saveReview,
  writeBook,
  editBook
} = require("../src/book.js");


describe("book.js", function () {
  describe("createTitle", function() {
    it("should be a function", function () {
      assert.isFunction(createTitle);
    });

    it("should take in a title and return a modified title", function () {
      var bookIdea = createTitle("Storm's Awakening");

      assert.equal(bookIdea, "The Storm's Awakening");
    });

    it("should be able to create many modified titles", function () {
      var sushiTitle = createTitle("Dancing Sushi");
      var dragonTitle = createTitle("Dragon in the Summer");
      var ghostTitle = createTitle("Teenage Ghoul");

      assert.equal(sushiTitle, "The Dancing Sushi");
      assert.equal(dragonTitle, "The Dragon in the Summer");
      assert.equal(ghostTitle, "The Teenage Ghoul");
    });
  });

  describe("buildMainCharacter", function() {
    it("should be a function (comment the function back into the module.exports object in book.js)", function () {
      assert.isFunction(buildMainCharacter);
    });

    it("should create a character object", function () {
      var ghoulCharacter = buildMainCharacter("Vassya", 16, "she/her");
      var bakerCharacter = buildMainCharacter("Hannah", 30, "she/her");

      assert.equal(ghoulCharacter.name, "Vassya");
      assert.equal(ghoulCharacter.age, 16);
      assert.equal(ghoulCharacter.pronouns, "she/her");

      assert.equal(bakerCharacter.name, "Hannah");
      assert.equal(bakerCharacter.age, 30);
      assert.equal(bakerCharacter.pronouns, "she/her");
    });
  });

  describe("saveReview", function() {
    it("should be a function (comment the function back into the module.exports object in book.js)", function () {
      assert.isFunction(saveReview);
    });

    it("should be able to add reviews to an array", function() {
      var reviews = [];
      //already given in the test, so you don't have to add it in the implementation side

      saveReview("An astounding success", reviews);
        // first parameter is an actual review, the second parament
        //is the reviews array (which has already been defined)

      assert.equal(reviews.length, 1);
      //test is checking if there is a review in the array
      assert.deepEqual(reviews, ["An astounding success"]);
      //test is checking
    });

    it("should be able to add reviews to an array that already contains reviews", function() {
      var reviews = ["You won't be able to put it down"];

      saveReview("A page turner!", reviews);
      saveReview("An instant classic!", reviews);

      assert.equal(reviews.length, 3);
      assert.deepEqual(reviews, ["You won't be able to put it down", "A page turner!", "An instant classic!"]);
    });

    it("should only add unique reviews", function() {
      var reviews = [];

      saveReview("I want everyone to read this book!", reviews);
      saveReview("I couldn't stop reading!", reviews);
      saveReview("I want everyone to read this book!", reviews);

      assert.equal(reviews.length, 2);
      assert.deepEqual(reviews, ["I want everyone to read this book!", "I couldn't stop reading!"]);
    });
  });

  describe("calculatePageCount", function() {
    it("should be a function (comment the function back into the module.exports object in book.js)", function () {
      assert.isFunction(calculatePageCount);
    });

    it("should add 20 pages per letter in the title", function () {
      var bookTitle = createTitle("Teenage Ghoul");
      //telling us that createTitle function takes in the bookTitle parameter
      var bookPageCount = calculatePageCount(bookTitle);
      // bookPage count is assigned a value of calculatePageCount(bookTitle)
        //🤯
        // remember that bookTitle is associated with the createTitle function
      assert.equal(bookPageCount, 340);
      //telling me that bookPageCount should be === 340 (for this example)
    });

    it("should add 20 pages per letter (character count) for a different title", function () {
      var bookTitle = createTitle("Dragon in the Summer");
      var bookPageCount = calculatePageCount(bookTitle);

      assert.equal(bookPageCount, 480);
    });
  });

  describe("writeBook", function() {
    it("should be a function", function () {
      assert.isFunction(writeBook);
    });

    it("should return a book object", function () {
      var bookTitle = createTitle("Teenage Ghoul");
      var bookCharacter = buildMainCharacter("Vassya", 16, "she/her");
      var book = writeBook(bookTitle, bookCharacter, "fantasy");
      //writeBook is a function that takes in three parameters

      assert.equal(book.title, bookTitle);
      assert.equal(book.mainCharacter, bookCharacter);
      assert.equal(book.pageCount, 340);
      //do not pass in pageCount, so it is not a parameter
      assert.equal(book.genre, "fantasy");
    });

    it("should return a different book object", function () {
      var dragonTitle = createTitle("Dragon in the Summer");
      var dragonCharacter = buildMainCharacter("Dana", 25, "they/them");
      var dragonBook = writeBook(dragonTitle, dragonCharacter, "fantasy");

      assert.equal(dragonBook.title, dragonTitle);
      assert.equal(dragonBook.mainCharacter, dragonCharacter);
      assert.equal(dragonBook.pageCount, 480);
      assert.equal(dragonBook.genre, "fantasy");
    });
  });

  describe("editBook", function() {
    it("should be a function", function () {
      assert.isFunction(editBook);
    });

    it("should decrease the book's page count to be three quarters of what it originally was", function () {
      var ghoulTitle = createTitle("Teenage Ghoul");
      var ghoulCharacter = buildMainCharacter("Vassya", 16, "she/her");
      var ghoulBook = writeBook(ghoulTitle, ghoulCharacter, "mystery");

      assert.equal(ghoulBook.pageCount, 340);

      editBook(ghoulBook);
// when editBook is invoked with ghoulBook variable, which is write book function with Ghoul stuff
// the parameter that editBook takes in is assigned to a book object
//we need to access the page count and then *.75 to reduce page count

      assert.equal(ghoulBook.pageCount, 255);
    });


    it("should decrease a different book's page count to be three quarters of what it originally was", function () {
      var dragonTitle = createTitle("Dragon in the Summer");
      var dragonCharacter = buildMainCharacter("Dana", 25, "they/them");
      var dragonBook = writeBook(dragonTitle, dragonCharacter, "fantasy");

      assert.equal(dragonBook.pageCount, 480);

      editBook(dragonBook);

      assert.equal(dragonBook.pageCount, 360);
    });
  });
});
