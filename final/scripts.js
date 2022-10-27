document.querySelector("#random").addEventListener("click", getRandomCard);
document.querySelector("#search").addEventListener("click", getCard)


const today = new Date();
let dayOfWeek;
let message1;
let message2;
dayOfWeek = today.getDay();

// let user know if it's game night or not
if (dayOfWeek >= 1 && dayOfWeek <= 4) {
    message1 = "It's not game night, but prepare you deck!";
    } else {
    message1 = "It's Time to Duel!";
}


switch (dayOfWeek) {
    case 0:
        message2 = 'Sunday';
        break;
    case 1:
        message2 = 'Monday';
        break;
    case 2:
        message2 = 'Tuesday';
        break;
    case 3:
        message2 = 'Wednesday';
        break;
    case 4:
        message2 = 'Thursday';
        break;
    case 5:
        message2 = 'Friday';
        break;
    case 6:
        message2 = 'Saturday';
        break;
    default:
        message2 = 'Unknown = ' + dayOfWeek;
        break;
}

document.querySelector("#message1").textContent = message1;
document.querySelector("#message2").textContent = message2;



function getCard() {
  const name = document.querySelector("#cardName").value;

  fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${name}`)
    .then(function(resp) { 
      return resp.json();
    })
    .then(function(cards) {
      console.log(cards);
      console.log(cards.data[0].card_images[0].image_url);
      document.querySelector(".cardBox").innerHTML = `
      <div>
        <a href="${cards.data[0].card_images[0].image_url}">
          <img src="${cards.data[0].card_images[0].image_url}" alt="${cards.data[0].name}"/>
        </a>
      </div>
      <div class="cardInfo">
        <h2>${cards.data[0].name}</h2>
        <hr>
        <ul>
          <li><b>Type</b> 
          <hr>
            <p>${cards.data[0].type}</p> 
          </li>
          <li>Race 
          <hr>
            <p>${cards.data[0].race}</p>
          </li>
          <li>Description 
          <hr>
            <p>${cards.data[0].desc}</p>
          </li>
        </ul>


      </div>`;
    })
    .catch((err) => {
      document.querySelector(".cardBox").innerHTML = `
      <h4>Card not found ❌</h4>
      `;
      console.log("Card not found", err);
    });
}

// used code from https://www.programiz.com/javascript/examples/generate-random-strings to get random letters
function generateRandomLetters(length) {
  let result = '';
  let characters = 'abcdefghijklmnopqrstuvwxyz';
  let charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

function getRandomCard() {
  const names = generateRandomLetters(2);

  fetch(`https://db.ygoprodeck.com/api/v7/cardinfo.php?fname=${names}`)
    .then(function(resp) { 
      return resp.json();
    })
    .then(function(cards) {
      console.log(cards);
      console.log(cards.data[0].card_images[0].image_url);
      document.querySelector(".cardBox").innerHTML = `
      <div>
        <a href="${cards.data[0].card_images[0].image_url}">
          <img src="${cards.data[0].card_images[0].image_url}" alt="${cards.data[0].name}"/>
        </a>
      </div>
      <div class="cardInfo">
        <h2>${cards.data[0].name}</h2>
        <hr>
        <ul>
          <li>Type 
          <hr>
            <p>${cards.data[0].type}</p> 
          </li>
          <li>Race 
          <hr>
            <p>${cards.data[0].race}</p>
          </li>
          <li>Description 
          <hr>
            <p>${cards.data[0].desc}</p>
          </li>
        </ul>
      </div>`;
    })
    .catch((err) => {
      document.querySelector(".cardBox").innerHTML = `
      <h4>Card not found ❌</h4>
      `;
      console.log("Card not found", err);
    });
}