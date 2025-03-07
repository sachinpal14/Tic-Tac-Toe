let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let newbtn = document.querySelector("#new");
let msgcon = document.querySelector(".msg");
let msg = document.querySelector("#msg");

let turnO = true;

const wnpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";

      turnO = false;
    } else {
      box.innerText = "X";

      turnO = true;
    }
    box.disabled = true;
    checkwinner();
    
  });
});
const disabledbtn = () => {
  for (const box of boxes) {
    box.disabled = true;
  }
};
const enabledbtn = () => {
  for (const box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkDraw =()=>{
  let isDraw=true
  for(let box of boxes ){
   if(box.innerText==="") {
    isDraw=false
    break
   } 
  }

  if(isDraw) {
    msg.innerText="Game Draw "
    msgcon.classList.remove("hide")
  
  }
}


const resetgame = () => {
  turnO = true;
  enabledbtn();
  msgcon.classList.add("hide");
};
const showwinner = (winner) => {
  msg.innerText = `Congratulations Winner is ${winner}`;
  msgcon.classList.remove("hide");
  disabledbtn();
};

const checkwinner = () => {
  for (let pattern of wnpattern) {
    // console.log( pattern[0], pattern[1],  pattern[2]);
    // console.log(
    //   boxes[pattern[0]].innerText,
    //   boxes[pattern[1]].innerText,
    //   boxes[pattern[2]].innerText
    // );

    let pos1val = boxes[pattern[0]].innerText;
    let pos2val = boxes[pattern[1]].innerText;
    let pos3val = boxes[pattern[2]].innerText;

    if (pos1val != "" && pos2val != "" && pos3val != "") {
      if (pos1val === pos2val && pos2val === pos3val) {
        showwinner(pos1val);
      }
         
    }
     
  }
  checkDraw()
};
 



newbtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);
