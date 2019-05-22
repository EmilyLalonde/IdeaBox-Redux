class Idea {
  constructor(obj){
    this.id = obj.id;
    this.title = obj.title;
    this.body = obj.body;
    this.star = false;
    this.quality = 0;
  };
  saveToStorage (){
    localStorage.setItem('ideas', JSON.stringify(storageArray));
  };
  deleteFromStorage(key){
    localStorage.removeItem(key);
  };
  updateIdea(key){
    localStorage.getItem(key);
  };
};
