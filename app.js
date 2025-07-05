let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");

let newGame = document.querySelector(".newGame");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turnO = true;

const reset = () => {

    turnO = true;
    enabled();
    msgContainer.classList.add("hide");
}

const winPatterns = [ 

    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],

]

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        console.log("box was clicked")

      

        if(turnO){
            box.innerText = "O";
            turnO = false;
            box.classList.add("red");
        }else{

            box.innerText = "X";
            turnO = true;
            box.classList.add("black");
        }
        box.disabled = true;
        checkWinner();
    })
})

const enabled = ()=> {

    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const disabled = ()=> {

    for(let box of boxes){
        box.disabled = true;
    }
}

const showWinner = (winner) => {
      msg.innerText = `Congractulation, winner is ${winner}`;
      msgContainer.classList.remove("hide");
}


const checkWinner = ()=>{

    for(let patterns of winPatterns){


   let pos1= boxes[patterns[0]].innerText;
   let pos2 =  boxes[patterns[1]].innerText;
    let pos3 =  boxes[patterns[2]].innerText;

    if(pos1 != "" && pos2 != "" && pos3 != ""){

        if(pos1 === pos2  && pos2 === pos3){
            console.log("winner",pos1);

            showWinner(pos1);
        }
    }
    }
};

newGame.addEventListener("dblclick",reset);
resetBtn.addEventListener("dblclick",reset);