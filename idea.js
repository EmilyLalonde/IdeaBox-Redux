
  saveToStorage (){
    var stringifiedSavedCard = JSON.stringify(storageArray);
    localStorage.setItem('ideas', stringifiedSavedCard);
  };
  deleteFromStorage(key){
    localStorage.removeItem(key);
  };
  updateIdea(key){
    localStorage.getItem(key);
  };
};
