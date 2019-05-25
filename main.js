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
cardField.addEventListener('focusout', storeEditedBody);
searchInput.addEventListener('keyup', filterSearchTerms);
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
  `<article class="card" data-id="${idea.id}">
    <header>
      <input type="image" src="images/star.svg" class="card-icon star-active" id="star-btn"/>
      <input type="image" src="images/delete.svg" class="card-icon delete-btn"/>
    </header>
    <section class="body-title">
    <h2 data-title="${idea.title}" contenteditable = 'true'>${idea.title}</h2>
    <p data-body="${idea.body}" contenteditable = 'true'>${idea.body}</p>
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
  if(e.target.classList.contains('card-icon')) {
    var star = e.target.parentElement.parentElement;
    var starId = star.dataset.id;
    console.log(starId);
    var storeIdStar = storageArray.find(function(idea) {
        return idea.id === parseInt(starId);
    });
    storeIdStar.star = !storeIdStar.star
    var notherStar = e.target;
    if(storeIdStar.star === true) {
       notherStar.src = 'images/star-active.svg';
    } else {
    notherStar.src = 'images/star.svg';
   }
  }
};

// target body and title to store it in local storage 
// when page refreshes edited title and body will still be there

function storeEditedBody(e) {
    var cardShown = e.target.parentElement.parentElement;
    console.log(cardShown);

    var bodyArray = [];
    var titleArray = [];

    var bodyValue = bodyArray.value;
    var titleValue = titleInput.value; 

    bodyValue.push(bodyArray);
    titleValue.push(titleArray);

    console.log(bodyArray);

    var stringiFiedBodyArray = JSON.stringify(bodyArray);
    localStorage.setItem('body', stringiFiedBodyArray);
    var stringiFiedTitleArray = JSON.stringify(titleArray);
    localStorage.setItem('title', stringiFiedTitleArray);
};

function filterSearchTerms (e) {
    var searchText = e.target.value.toLowerCase();
    var results = storageArray.filter(function(idea){
      return idea.title.toLowerCase().includes(searchText);
    })
    document.querySelector(".card-field").innerHTML = '';
    results.forEach(function(idea){
      createCard(idea)
    })



}







// function recreateIdeas() {
//   storageArray = storageArray.map(function(oldIdea) {
//     var restoredIdeas = new Idea(oldIdea.id, oldIdea.title, oldIdea.body);
//     createCard(restoredIdeas);
//   });
// };
 



