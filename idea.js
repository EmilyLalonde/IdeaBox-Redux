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
  //const a = // storageArray.filter((card) => {
    //return card !== cardId
 // })

   var deleteCard = storageArray.filter(function(card) {
    return card !== cardId;
   });
   //  console.log('cardId in IdeaClass',cardId);

   // storageArray.splice(cardId, 1);

   // this.saveToStorage(storageArray);

   this.saveToStorage(deleteCard);
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
