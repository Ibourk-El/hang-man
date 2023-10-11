let letters = "qwertzuioplkjhgfdsayxcvbnm ";
let words = ["hello", "mom", "dady go to home"];

let letters_box = document.querySelector(".letter");
let gaseText = document.querySelector(".type-text");
let child = document.querySelectorAll(".child");
let word = words[0].split("");

let start_btn = document.getElementById("start");
let main = document.querySelector(".main");
let after = document.getElementById("after");
let child_index = 0;
let words_index = 0;

function createEmptyP(word) {
  for (let i = 0; i < word.length; i++) {
    gaseText.innerText += "-";
  }
}

function saveMan() {
  child.forEach((e) => (e.style.display = "none"));
}
// start game
start_btn.addEventListener("click", () => {
  main.style.left = "0px";
  start_btn.style.left = "-1000px";
  after.style.width = "0%";
  child_index = 0;
  saveMan();
  word = words[words_index].split("");
  gaseText.innerText = "";
  letters_box.innerHTML = "";
  createEmptyP(word);
  putPinLetterBox();
});

function createP(str, c) {
  let p = document.createElement("p");
  p.className = c;
  p.innerText = str;

  p.addEventListener("click", () => {
    // for handl str value (space)
    if (str === "space") {
      str = " ";
    }
    if (word.indexOf(str) !== -1) {
      let isFind = true; // var control
      word.forEach((e, index) => {
        if (e === str && isFind) {
          //to change value of gasetext
          word[index] = "";
          let x = gaseText.innerText.split("");
          x[index] = str;
          gaseText.innerText = x.join("");
          isFind = false;
        }
      });
    } else {
      // to show the man
      child[child_index].style.display = "block";
      child_index++;
      if (child_index >= child.length) {
        console.log("you are lose");
      }
    }
    if (
      words[words_index] === gaseText.innerText &&
      child_index < child.length
    ) {
      words_index++;
      if (words_index < words.length) {
        start_btn.style.left = "50%";
        after.style.width = "100%";
        start_btn.innerText = "Next";

        console.log("hello");
      } else {
        start_btn.style.left = "50%";
        after.style.width = "100%";
        start_btn.innerText = "Restert";
        words_index = 0;
      }
    }
  });

  return p;
}

function putPinLetterBox() {
  //for create letters
  for (let i = 0; i < letters.length; i++) {
    if (letters[i] === " ") {
      letters_box.appendChild(createP("space", "space"));
      continue;
    }
    letters_box.appendChild(createP(letters[i], "p"));
  }
}
