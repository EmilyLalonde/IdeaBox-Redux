class Idea {
  constructor(id, title, body, star, quality){ 
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = star || false;
    this.quality = quality || 0;
    this.qualityArray = ['Swill', 'Plausible', 'Genius'];
  };
  saveToStorage (storageArray){
    var stringifiedSavedCard = JSON.stringify(storageArray);
    localStorage.setItem('ideas', stringifiedSavedCard);
  };

  deleteFromStorage(cardId) {
   var updatedStorageArray = storageArray.filter(function(card) {
    return card.id !== cardId;
   });
   this.saveToStorage(updatedStorageArray);
  };

  updateStar(storageArray) {
    this.star = !this.star;
    this.saveToStorage(storageArray);
  };

  updateIdea(title, body, storageArray){
    this.title = title;
    this.body = body;
    this.saveToStorage(storageArray);
  };

  updateQuality(quality) {
    this.quality = quality;
    this.saveToStorage(storageArray);
  }
};
