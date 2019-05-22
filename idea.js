class Idea {
  constructor(id, title, body){
    this.id = id;
    this.title = title;
    this.body = body;
    this.star = false;
    this.quality = ['Swill', 'Plausible', 'Genius'];
  };
  saveToStorage (){
    var stringifiedSavedCard = JSON.stringify(this);
    localStorage.setItem(this.id, stringifiedSavedCard);
  };
  deleteFromStorage(key){
    localStorage.removeItem(key);
  };
  updateIdea(key){
    localStorage.getItem(key);
  };
};
