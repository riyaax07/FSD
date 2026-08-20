function addparagraph() {
  const newParagraph = document.createElement("p");
  newParagraph.innerHTML = "<u>This is a new paragraph added to the document.</u>";
  newParagraph.style.color = "blue";
  const container = document.getElementById("paragraph-container");
  container.appendChild(newParagraph);
}

function removeparagraph() {
  const container = document.getElementById("paragraph-container");
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
}
function removeallparagraphs() {
  const container = document.getElementById("paragraph-container");
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}