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

// window.addEventListener('load', createCard);
saveBtn.addEventListener('click', saveCardInfo);
saveBtn.addEventListener('click', createCard);
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

function createCard(e, idea) {
  e.preventDefault();
  var newCard = document.createElement('div');
  cardField.prepend(newCard);
  newCard.innerHTML += 
  console.log('yo',idea);
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
  };

function saveCardInfo(e) {
  e.preventDefault();
  var savedInfo = new Idea(Date.now(), titleInput.value, bodyInput.value);
  storageArray.push(savedInfo);
  savedInfo.saveToStorage(storageArray);
  createCard(e,savedInfo);
};

function createIdea() {
  
}

// function createCard(e) {
//   e.preventDefault();
//   var newCard = document.createElement('div');
//   cardField.prepend(newCard);
//   newCard.innerHTML += 
//   `<article class="card" data-id="${localStorage.getItem('ideaId')}">
//   <header>
//     <input type="image" src="images/star.svg" class="card-icon" id="star-btn"/>
//     <input type="image" src="images/delete.svg" class="card-icon delete-btn"/>
//   </header>
//     <section>
//     <h2 contenteditable = 'true'>${localStorage.getItem('ideaTitle')}</h2>
//     <p contenteditable = 'true'>${localStorage.getItem('ideaBody')}</p>
//   </section>
//     <footer>
//       <input type="image" src="images/upvote.svg" class="card-icon" id="upvote-btn"/>
//       <h4>Quality: Swill</h4>
//       <input type="image" src="images/downvote.svg" class="card-icon" id="downvote-btn"/>
//     </footer>
//   </article>`
//   };



// function saveCardInfo() {
//     var savedInfo = new Idea(Date.now(), titleInput.value, bodyInput.value);
//     storageArray.push(savedInfo);
//     savedInfo.saveToStorage(storageArray);
//     return savedInfo;
// };

// function createIdea() {
//   var idea = saveCardInfo();
//   createCard(idea);
//   clearInputs();
// }


// var saveId = Date.now();
  // var saveTitle = titleInput.value;
  // var saveBody = bodyInput.value;
  // var stringifiedSavedTitle = JSON.stringify(saveTitle);
  // localStorage.setItem('ideaTitle', stringifiedSavedTitle);
  // var stringifiedDavedBody = JSON.stringify(saveBody);
  // localStorage.setItem('ideaBody', stringifiedDavedBody);
  // var stringifiedSavedId = JSON.stringify(saveId);
  // localStorage.setItem('ideaId', stringifiedSavedId);