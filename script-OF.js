let images = Array.from(document.getElementsByClassName("imgCarousel"));

let mainPhoto = document.getElementById("mainPhoto");
let mainName = mainPhoto.getAttribute("name");
let mainCaption = mainPhoto.getAttribute("data-caption");

updateCaption(mainName);
updateSubCaption(mainCaption);

function updateImage(event) {
  let image = event.target;
  let name = image.getAttribute("name");
  let caption = image.getAttribute("data-caption");

  mainPhoto.src = image.src;
  updateCaption(name);
  updateSubCaption(caption);
}

function updateCaption(event) {
  let caption = (document.getElementById("caption").innerHTML = event);
}

function updateSubCaption(event){
  let subcaption = (document.getElementById("sub-caption").innerHTML = event);
}

images.forEach(function (image) {
  image.addEventListener("click", updateImage);
});