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

saveBtn.addEventListener('click', createCard);
saveBtn.addEventListener('click', toggleMessage);

function createIdea() {
  
}

function toggleMessage() {
  if(cardField.value === 'none') {
    hiddenMsg.style.display = 'block';
  } else {
    hiddenMsg.style.display = 'none';
  }
}


function createCard(e) {
e.preventDefault();
var newCard =
`<article class="card">
<header>
  <input type="image" src="images/star.svg" class="card-icon" id="star-btn"/>
  <input type="image" src="images/delete.svg" class="card-icon" id="delete-btn"/>
</header>
  <section>
  <h2>${titleInput.value}</h2>
  <p>${bodyInput.value}</p>
</section>
  <footer>
    <input type="image" src="images/upvote.svg" class="card-icon" id="upvote-btn"/>
    <h4>Quality: Swill</h4>
    <input type="image" src="images/downvote.svg" class="card-icon" id="downvote-btn"/>
  </footer>
</article>`
cardField.insertAdjacentHTML('afterbegin', newCard);
}