function createTitle(title) {
// AssertionError: expected undefined to equal 'The Storm\'s Awakening'
//assert.equal is basically saying what the output shuold be
//this function expression needs to evaluate to the string 'The Storm\'s Awakening'
  return `The ${title}`;
  //var title = 'The Storm\'s Awakening';
}

function buildMainCharacter(characterName, characterAge, characterPronouns) {
  var characterFacts = {
    name:characterName,
    age:characterAge,
    pronouns:characterPronouns
  };

  return characterFacts;

}

function saveReview(newReview, reviews) {
  for (var i = 0; i < reviews.length; i++){
    if(newReview === reviews[i]){
      return
        }
  }
  reviews.push(newReview);
  //return reviews; <-- is unnecessary
};
//Trying to add unique reviews, to the reviews array
//Before adding a review to reviews array, check if newReview is
//unique meaning not already in the reviews array
//fruitbowl
//could also use includes


//when creating parameter, does this make sense for any content that could be added
function calculatePageCount(bookTitle){
  return bookTitle.length * 20;
// we'd need to count the number letters in the title provided
//for each letter, add 20 pages
//then access total
};

function writeBook(bookTitle, bookCharacter, genre) {
  return /*book = */ {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: calculatePageCount(bookTitle),
    genre: genre
  }
//worked with return {}
};

function editBook(bookObj){
  bookObj.pageCount = bookObj.pageCount * .75;
};

module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
} 
