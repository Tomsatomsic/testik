const input = document.getElementById("input");

input.onchange = () => {
  const background = input.value;
  document.body.style.backgroundImage = `url(${background})`;
};

const img = document.getElementById("img");

img.onclick = () => {
  img.style.width = 800 + "px";
  img.style.height = 800 + "px";
};

const send = document.getElementById("send");
const color = document.getElementById("color");
const content = document.getElementById("content");

const changeColor = () => {
  const inputValue = color.value;
  content.style.color = inputValue;
};

send.onclick = () => {
  changeColor();
};

content.onmouseover = () => {
  changeColor();
};
