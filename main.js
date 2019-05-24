var starredIdeasBtn = document.querySelector('#show-star-btn');
var newQualityInput = document.querySelector('#new-quality');
var newQualityBtn = document.querySelector('#add-quality-btn');
var titleInput = document.querySelector('.title-input');
var bodyInput = document.querySelector('.body-input');
var saveBtn = document.querySelector('.save-btn');
var searchBtn = document.querySelector('.search-btn');
var searchInput = document.querySelector('.search-input');
var cardField = document.querySelector('.card-field');
var hiddenMsg = document.querySelector('.hidden');
var storageArray = JSON.parse(localStorage.getItem('ideas')) || [];

window.addEventListener('load', recreateIdeas );
saveBtn.addEventListener('click', saveCardInfo);
window.addEventListener('load', toggleMessage);
titleInput.addEventListener('keyup', saveBtnToggle);
cardField.addEventListener('click', deleteCard);
cardField.addEventListener('click', toggleStar);

function toggleMessage(e) {
  e.preventDefault();
  if (cardField.value === 'none') {
    hiddenMsg.style.display = 'block';
  } else {
    hiddenMsg.style.display = 'none';
  }
};

function saveBtnToggle() {
  if (titleInput.value === '' && bodyInput.value === '') {
    saveBtn.disabled = true;
    saveBtn.classList.add('disabled');
  } else {
    saveBtn.disabled = false;
    saveBtn.classList.remove('disabled');
  }
};

function deleteCard(e) {
  if (e.target.className === 'card-icon delete-btn') {
    var card = e.target.parentElement.parentElement;
    deleteStoredCard(card.id);
    card.remove();
  }
};

function deleteStoredCard(cardId) {
  var newArray = storageArray.filter(function(card) {
      if (card.id != cardId) {
        return card;
      }
  });
  var stringifiedNewArray = JSON.stringify(newArray);
  localStorage.setItem('ideas', stringifiedNewArray); 
};


function clearInputs() {
  titleInput.value = '';
  bodyInput.value = '';
};

function createCard(idea) {
  // console.log('new card 2', idea.id);
  var newCard =
  `<article class="card" id="${idea.id}">
    <header>
      <input type="image" src="images/star.svg" class="card-icon star-active" id="star-btn"/>
      <input type="image" src="images/delete.svg" class="card-icon delete-btn"/>
    </header>
    <section>
    <h2 contenteditable = 'true'>${idea.title}</h2>
    <p contenteditable = 'true'>${idea.body}</p>
  </section>
    <footer>
      <input type="image" src="images/upvote.svg" class="card-icon" id="upvote-btn"/>
      <h4>Quality: Swill</h4>
      <input type="image" src="images/downvote.svg" class="card-icon" id="downvote-btn"/>
    </footer>
  </article>`
  cardField.insertAdjacentHTML('afterbegin', newCard);
  };
 

function saveCardInfo(e) {
  e.preventDefault();
  console.log('new card');
  console.log(storageArray);
  var savedInfo = new Idea(Date.now(), titleInput.value, bodyInput.value);
  console.log(storageArray);
  storageArray.push(savedInfo);
  console.log('yeehaw',storageArray)
  savedInfo.saveToStorage(storageArray);
  createCard(savedInfo);
  clearInputs();
};

function recreateIdeas() {
  storageArray = storageArray.map(function(oldIdea) {
    var restoredIdeas = new Idea(oldIdea.id, oldIdea.title, oldIdea.body);
    createCard(restoredIdeas);
    return restoredIdeas;
  });
};

function toggleStar(e) {
  if(e.target.className === 'card-icon star-active') {
    var activeStar = e.target;
    console.log(activeStar);
    activeStar.src = 'images/star-active.svg';
    //storeActiveStar();
  } else if(e.target.id === 'star-btn'){
    // remove that classname
    activeStar.src = 'images/star.svg';
    //removeStoredStar();
  }
};







// function recreateIdeas() {
//   storageArray = storageArray.map(function(oldIdea) {
//     var restoredIdeas = new Idea(oldIdea.id, oldIdea.title, oldIdea.body);
//     createCard(restoredIdeas);
//   });
// };
 







