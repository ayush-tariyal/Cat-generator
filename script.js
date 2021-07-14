function generateCat() {
  let image = document.createElement("img");
  image.setAttribute("id", "random");
  let div = document.getElementById("img-div");
  image.src = "http://thecatapi.com/api/images/get?format=src&type=gif";
  div.appendChild(image);
}

function remove() {
  document.getElementById("random").remove();
}

function change() {
  let image = document.createElement("img");
  image.setAttribute("id", "random");
  let div = document.getElementById("img-div");
  let api = [
    "https://cdn2.thecatapi.com/images/GgmuARKFG.jpg",
    "https://cdn2.thecatapi.com/images/4ie.gif",
    "https://cdn2.thecatapi.com/images/b5r.jpg",
    "https://cdn2.thecatapi.com/images/c58.jpg",
    "https://cdn2.thecatapi.com/images/dug.jpg",
    "https://cdn2.thecatapi.com/images/fOx9QmrFA.jpg",
    "https://cdn2.thecatapi.com/images/24p.jpg",
    "https://cdn2.thecatapi.com/images/aii.jpg",
  ];
  for (let i = 0; i < api.length; i++) {
    image.src = api[Math.floor(Math.random() * i)];
  }
  div.appendChild(image);
}
