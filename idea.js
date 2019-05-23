class Idea {
  constructor(id, title, body){
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = false;
    this.quality = ['Swill', 'Plausible', 'Genius'];
  };
  saveToStorage (storageArray){
    console.log(storageArray);
    var stringifiedSavedCard = JSON.stringify(storageArray);
    console.log(stringifiedSavedCard);
    localStorage.setItem('ideas', stringifiedSavedCard);
    console.log(localStorage.getItem('ideas'));
  };
  deleteFromStorage(storageArray){
    localStorage.removeItem(storageArray);
  };
  updateIdea(key){
    localStorage.getItem(key);
  };
};
