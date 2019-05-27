class Idea {
  constructor(id, title, body){
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = false;
    this.quality = ['Swill', 'Plausible', 'Genius'];
  };
  saveToStorage (storageArray){
    var stringifiedSavedCard = JSON.stringify(storageArray);
    localStorage.setItem('ideas', stringifiedSavedCard);
  };

  deleteFromStorage(cardId) {
    var newArray = storageArray.filter(function(card) {
    if (card.id != cardId) {
      return card;
    }
  });
  var stringifiedNewArray = JSON.stringify(newArray);
  localStorage.setItem('ideas', stringifiedNewArray);
  
  };


  updateIdea(title, body, storageArray){
    this.title = title;
    this.body = body;

    this.saveToStorage(storageArray);
  };
};
