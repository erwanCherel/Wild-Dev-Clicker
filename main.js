const items = [
  {
    src: "./assets/html.png",
    name: "HTML",
    price: 15,
    count: 0,
    description: "Gère le contenu de ta page WEB",
  },
  {
    src: "./assets/css.png",
    name: "CSS",
    price: 100,
    count: 0,
    description: "Ajoute du style",
  },
  {
    src: "./assets/js.png",
    name: "JS",
    price: 500,
    count: 0,
    description: "Ajoute de l'interaction entre tes éléments",
  },
  {
    src: "./assets/react.png",
    name: "REACT",
    price: 2000,
    count: 0,
    description: "Utilise les meilleures librairies",
  },
  {
    src: "./assets/sql.png",
    name: "SQL",
    price: 7000,
    count: 0,
    description: "Apprends à gérer des bases de données",
  },
  {
    src: "./assets/dev.png",
    name: "DEV",
    price: 1000000,
    count: 0,
    description: "Tu es maintenant un vrai DEV !",
  },
];

function createItem(itemInformations) {
  const listItems = document.querySelector("#right-panel ul");
  const item = document.createElement("li");
  item.classList.add("item");

  const itemImg = document.createElement("img");
  itemImg.classList.add("item-img");
  itemImg.src = itemInformations.src;
  itemImg.alt = itemInformations.name;
  item.appendChild(itemImg);

  const itemContainer = document.createElement("div");
  itemContainer.classList.add("item-container");
  item.appendChild(itemContainer);

  const itemHeader = document.createElement("div");
  itemHeader.classList.add("item-header");
  itemContainer.appendChild(itemHeader);

  const itemInfos = document.createElement("div");
  itemInfos.classList.add("item-infos");
  itemHeader.appendChild(itemInfos);

  const itemTitle = document.createElement("h3");
  itemTitle.classList.add("item-title");
  itemTitle.innerHTML = itemInformations.name;
  itemInfos.appendChild(itemTitle);

  const itemPrice = document.createElement("p");
  itemPrice.classList.add("item-price");
  itemPrice.innerHTML = itemInformations.price + " XP";
  itemInfos.appendChild(itemPrice);

  const itemCount = document.createElement("p");
  itemCount.classList.add("item-count");
  itemCount.innerHTML = itemInformations.count;
  itemHeader.appendChild(itemCount);

  const itemDescription = document.createElement("p");
  itemDescription.classList.add("item-description");
  itemDescription.innerHTML = itemInformations.description;
  itemContainer.appendChild(itemDescription);

  listItems.appendChild(item);
}

for (let i = 0; i < items.length; i++) {
  createItem(items[i]);
}

// définit le début du count du score et des items
let scoreTotal = 0;
let xpS = 0;

// incrémente le score à chaque fois qu'on clique sur l'image du chat
function clickCat() {
  console.log(1);
  scoreTotal = scoreTotal + 1;
  document.querySelector('#scoreTotal').innerHTML = scoreTotal;
}

// toutes les 1000ms la fonction myCallBack est appelée, qui ajoute automatique X points d'xp en fonction des items qu'on a
const intervalID = setInterval(myCallback, 10000, scoreTotal);

const clickItems = document.querySelectorAll('li.item');
const count = document.querySelectorAll('.item-count');

// ajoute + 1 au count du html lorsqu'on clique sur l'item
for (let i = 0; i<clickItems.length ; i++){
  clickItems[i].addEventListener("click", () => {
    if(scoreTotal >= items[i].price) {
      scoreTotal = scoreTotal - items[i].price;
    items[i].count = items[i].count + 1;
    count[i].innerHTML = parseInt(count[i].innerHTML) + 1;
    myCallback();
    }
    
  }); 
}

// configuration du nombre de points d'xp générés par seconde
for (let i = 0; i<clickItems.length ; i++){
  clickItems[i].addEventListener("click", () => {
    //trouver un moyen de l'automatiser sinon ça bloque lorsqu'on n'a pas tous les articles de débloqués
    xpS =+ items[0].count*1+items[1].count*5+items[2].count*10+items[3].count*50+items[4].count*100;
    document.getElementById('xpS').innerHTML = xpS;
  });
}

// incrémente le score en fonction des items qu'on possède
function myCallback() {
  scoreTotal = scoreTotal + xpS;
  document.querySelector('#scoreTotal').innerHTML = scoreTotal;
  document.querySelector('.score-html').innerHTML = items[0].count;
  document.querySelector('.score-css').innerHTML = items[1].count;
  document.querySelector('.score-javascript').innerHTML = items[2].count;
  document.querySelector('.score-react').innerHTML = items[3].count;
  document.querySelector('.score-sql').innerHTML = items[4].count;
}