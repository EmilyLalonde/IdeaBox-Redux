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
searchInput.addEventListener('keyup', filterSearchTerms);
cardField.addEventListener('focusout', getBodyId);


function toggleMessage () {
  if(storageArray.length === 0) {
  hiddenMsg.innerText = 'Please enter your idea above';
} else {
  hiddenMsg.innerText = '';
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
    card.remove();
  }
  
   var cardId = e.target.closest('.card').dataset.id;
   cardId = parseInt(cardId);
   

   var newArray = storageArray.filter(function(card) {
      if(card.id === cardId) {
        return card;
      }
   });
    var bob = storageArray.findIndex(function(chicken){
      if(chicken.id === newArray[0].id) {
        return chicken;
      }
    });
    newArray[0].deleteFromStorage(bob);
};

function clearInputs() {
  titleInput.value = '';
  bodyInput.value = '';
};

function createCard(idea) {
  var newCard =
  `<article class="card" data-id="${idea.id}">
    <header>
      <input type="image" src="images/star.svg" class="card-icon star-active" id="star-btn"/>
      <input type="image" src="images/delete.svg" class="card-icon delete-btn"/>
    </header>
    <section class="body-title">
    <h2 class ="titleIn" data-id="${idea.title}" contenteditable = 'true'>${idea.title}</h2>
    <p class ="bodyIn" data-id="${idea.body}" contenteditable = 'true'>${idea.body}</p>
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
  var savedInfo = new Idea(Date.now(), titleInput.value, bodyInput.value);
  storageArray.push(savedInfo);
  savedInfo.saveToStorage(storageArray);
  createCard(savedInfo);
  clearInputs();
  toggleMessage();
};

function recreateIdeas() {
  storageArray = storageArray.map(function(oldIdea) {
    var restoredIdeas = new Idea(oldIdea.id, oldIdea.title, oldIdea.body);
    createCard(restoredIdeas);
    return restoredIdeas;
  });
};

function toggleStar(e) {
  if(e.target.classList.contains('star-active')) {
    var star = e.target.parentElement.parentElement;
    var starId = star.dataset.id;
    var storeIdStar = storageArray.find(function(idea) {
        return idea.id === parseInt(starId);
    });
    storeIdStar.star = !storeIdStar.star;
    var notherStar = e.target;
    if(storeIdStar.star === true) {
       notherStar.src = 'images/star-active.svg';
    } else {
    notherStar.src = 'images/star.svg';
   }
  }
};

function getBodyId(e) {
    var ideaId = e.target.closest('.card').dataset.id;
    ideaId = parseInt(ideaId);
    var title = document.querySelector(`.card[data-id="${ideaId}"] .titleIn`).innerText;
    var body = document.querySelector(`.card[data-id="${ideaId}"] .bodyIn`).innerText;
    var idea = storageArray.find(function(idea) {
        return idea.id === ideaId;
    });
    idea.updateIdea(title,body,storageArray);
};

function filterSearchTerms (e) {
    var searchText = e.target.value.toLowerCase();
    var results = storageArray.filter(function(idea){
        return idea.title.toLowerCase().includes(searchText) || idea.body.toLowerCase().includes(searchText);
    })
    document.querySelector(".card-field").innerHTML = '';
    results.forEach(function(idea){
      createCard(idea);
    })
};



 



