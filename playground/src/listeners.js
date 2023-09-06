console.log("here");

const title = document.querySelector("#title");
const subTitle = document.querySelector("#subtitle");

function randomString(text) {
  const letters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let returnStr = "";
  for (let i = 0; i < text.length; i++) {
    if (text[i] == " ") {
      returnStr += " ";
    } else {
      const index = Math.floor(Math.random() * letters.length);
      returnStr += letters[index];
    }
    debugger;
  }
  debugger;
  return returnStr;
}

title.addEventListener("mousemove", () => {
  title.innerHTML = randomString(title.innerHTML);
});
title.addEventListener("mouseout", () => {
  title.innerHTML = "Logan Rose";
});

subTitle.addEventListener("mousemove", () => {
  subtitle.innerHTML = randomString(subTitle.innerHTML);
});
subtitle.addEventListener("mouseout", () => {
  subTitle.innerHTML = "Generalist Software Developer";
});
