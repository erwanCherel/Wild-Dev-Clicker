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
  itemPrice.innerHTML = itemInformations.price;
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
