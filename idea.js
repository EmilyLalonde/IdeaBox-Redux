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
   storageArray.splice(cardId, 1);
   this.saveToStorage(storageArray);
  };

  updateIdea(title, body, storageArray){
    this.title = title;
    this.body = body;

    this.saveToStorage(storageArray);
  };
};
