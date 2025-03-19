const ramens = [
   { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "../images.file/shoyu.jpg", rating: 5, comment: "Delicious!" },
   { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "../images.file/nirvana.jpg", rating: 4, comment: "Very flavorful!" },
   { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "../images.file/naruto.jpg", rating: 3, comment: "Yummy" },
   { id: 4, name: "Korijo Ramen", restaurant: "Chiamanuka", image: "../images.file/kojiro.jpg", rating: 2, comment: "Ehhhheh" },
   { id: 5, name: "Gyukotsu", restaurant: "Cristina", image: "../images.file/gyukotsu.jpg", rating: 4, comment: "Tamu sana" }
];

let body = document.body;
const title = document.querySelector("div");
title.innerText = "Ramen Rater";
title.style.color = "white";
title.style.backgroundColor = "black";
title.style.textAlign = "center";
title.style.height = "5vh";
title.style.fontSize = "30px";

function displayRamens() {
   ramens.forEach(ramen => {
       let menu = document.getElementById("ramen-menu");
       let img = document.createElement("img");
       img.src = ramen.image;
       img.alt = ramen.name;

       img.addEventListener("click", () => handleClick(ramen));
       menu.appendChild(img);
   });
}

function handleClick(ramen) {
   document.getElementById("foodImage").src = ramen.image;
   document.getElementById("select").textContent = ramen.name;
   document.getElementById("Restaurant").textContent = ramen.restaurant;
   document.getElementById("rating").textContent = ramen.rating;
   document.getElementById("comment").textContent = ramen.comment;
}

function addEventListener() {
   const form = document.getElementById("addramen");
   form.addEventListener("submit", (event) => {
       event.preventDefault();

       let newRamen = {
           name: document.getElementById("new-name").value,
           restaurant: document.getElementById("new-eat").value,
           image: document.getElementById("new-photo").value,
           rating: document.getElementById("new-like").value,
           comment: document.getElementById("new-talk").value,
       };

       ramens.push(newRamen);
       displayRamens();
   });
}

window.onload = () => {
   displayRamens();
   addEventListener();
};


