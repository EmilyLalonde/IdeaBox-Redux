class Idea {
  constructor(id, title, body, star){ 
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = star || false;
    this.quality = ['Swill', 'Plausible', 'Genius'];
  };
  saveToStorage (storageArray){
    var stringifiedSavedCard = JSON.stringify(storageArray);
    localStorage.setItem('ideas', stringifiedSavedCard);
  };

  deleteFromStorage(cardId) {
   console.log('the parameter', cardId);

   var updatedStorageArray = storageArray.filter(function(card) {
    console.log('this is the card ',card.id);
    return card.id !== cardId;
   });
   //  console.log('cardId in IdeaClass',cardId);
   console.log( 'hey waddup', updatedStorageArray);

   this.saveToStorage(updatedStorageArray);
  };

  updateStar(storageArray) {
    this.star = !this.star;
    this.saveToStorage(storageArray);
  }

  updateIdea(title, body, storageArray){
    this.title = title;
    this.body = body;

    this.saveToStorage(storageArray);
  };
};
