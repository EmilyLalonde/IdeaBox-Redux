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
var storageArray = JSON.parse(localStorage.getItem('ideas')) ||[];

window.addEventListener('load', recreateIdeas );
saveBtn.addEventListener('click', saveCardInfo);
window.addEventListener('load', toggleMessage);
titleInput.addEventListener('keyup', saveBtnToggle);
cardField.addEventListener('click', deleteCard);

function toggleMessage(e) {
  e.preventDefault();
  if(cardField.value === 'none') {
    hiddenMsg.style.display = 'block';
  } else {
    hiddenMsg.style.display = 'none';
  }
};

function saveBtnToggle() {
  if(titleInput.value === '' && bodyInput.value === '') {
    saveBtn.disabled = true;
    saveBtn.classList.add('disabled');
  } else {
    saveBtn.disabled = false;
    saveBtn.classList.remove('disabled');
  }
};

function deleteCard(e) {
  if(e.target.className === 'card-icon delete-btn') {
    e.target.parentElement.parentElement.remove();
  }
};

// function saveBtnToggle() {
//   var isDisbabled = titleInput.value === '' && bodyInput.value === ''; 
//    document.getElementsByClassName('save-btn').disabled = isDisbabled;
// };

function clearInputs() {
  titleInput.value = '';
  bodyInput.value = '';
};

function createCard(idea) {
  console.log('new card 2', idea.id);
  var newCard =
  `<article class="card" data-id="${idea.id}">
  <header>
    <input type="image" src="images/star.svg" class="card-icon" id="star-btn"/>
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
  console.log('new card')
  var savedInfo = new Idea(Date.now(), titleInput.value, bodyInput.value);
  storageArray.push(savedInfo);
  console.log('yeehaw',storageArray)
  savedInfo.saveToStorage(storageArray);
  createCard(savedInfo);
};

function recreateIdeas() {
  storageArray = storageArray.map(function(oldIdea) {
    var restoredIdeas = new Idea(oldIdea.id, oldIdea.title, oldIdea.body);
    createCard(restoredIdeas);
  });
};


  createCard(e, savedInfo);
  clearInputs();
};

// function recreateIdeas() {
//   storageArray = storageArray.map(function(oldIdea) {
//     var restoredIdeas = new Idea(oldIdea.id, oldIdea.title, oldIdea.body);
//     createCard(restoredIdeas);
//   });
// };
 







