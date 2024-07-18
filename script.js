const container = document.querySelector("#container");
const btnClear = document.querySelector("#clear-sketch");
const btnResize = document.querySelector("#resize-sketch");
const btnToggleOutline = document.querySelector("#toggle-outline");
let toggle = false;

container.addEventListener("click", () => {
  toggle = !toggle;
  container.classList.toggle("active");
});

btnClear.addEventListener("click", removeTint);
btnResize.addEventListener("click", resizeSkecth);
btnToggleOutline.addEventListener("click", () => {
  const divs = document.querySelectorAll("#container div");

  for (let i = 0; i < divs.length; i++) {
    divs[i].classList.toggle("outline");
  }
});

generatePanel(16);

function changeBackgroundColor() {
  if (toggle) this.classList.add("black");
}

function generatePanel(size) {
  for (let i = 0; i < size; i++) {
    const row = document.createElement("div");

    for (let j = 0; j < size; j++) {
      const div = document.createElement("div");
      div.classList.add("panel");
      div.addEventListener("mousemove", changeBackgroundColor);
      div.style.padding = `calc(499px/${size}/2)`;

      container.appendChild(div);
    }
  }
}

function removeTint() {
  const div = document.querySelectorAll("#container>div");

  for (let i = 0; i < div.length; i++) {
    div[i].classList.remove("black");
  }
}

function removePanel() {
  const div = document.querySelectorAll("#container>div");

  for (let i = 0; i < div.length; i++) {
    container.removeChild(div[i]);
  }
}

function resizeSkecth() {
  const size = prompt("Enter the size you want (16-100):");

  if (size > 100 || size < 16)
    return alert("Please enter the size you want between 16 to 100");

  if (size) {
    removePanel();
    generatePanel(size);
  }
}
