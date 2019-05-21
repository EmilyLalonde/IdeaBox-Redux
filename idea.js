class Idea {
  constructor(title, body){
    this.id = date.now();
    this.title = title;
    this.body = body;
    this.star = false;
    this.quality = ['Swill', 'Plausible', 'Genius'];
  };
  saveToStorage (key, value){
    localStorage.setItem(key, value);
  };
  deleteFromStorage(key){
    localStorage.removeItem(key);
  };
  updateIdea(key){
    localStorage.getItem(key);
  };
};

var save = JSON.stringify()

saveToStorage(this.id, save);