let boxes= document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let Msg=document.querySelector(".msg");
let Massage=document.querySelector(".massage");
let start =document.querySelector("#start")
let player1=true;
const partterns=[
[0,1,2],
[0,3,6],
[0,4,8],
[1,4,7],
[2,5,8],
[2,4,6],
[3,4,5],
[6,7,8],
];
 const Reset=()=>{
    player1=true;
    Start();
    Msg.classList.add("h");
 }
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(player1){
            box.innerText="O"
            player1=false;
        }else{
            box.innerText="X";
            player1=true;
        }box.disabled=true;

        checkWinner();
    });
});

const stop =()=>{
    for(let btn of boxes){
        btn.disabled=true;
    }
};
const Start =()=>{
    for(let btn of boxes){
        btn.disabled=false;
        btn.innerText="";
    }
};
const showwinner = (winner)=>{
    Massage.innerText=`The winner is ${winner} `;
    Msg.classList.remove("h");
    stop();
};
const checkWinner=()=>{
    for(let parttern of partterns){
        let p1 = boxes[parttern[0]].innerText;
        let p2 = boxes[parttern[1]].innerText;
        let p3 = boxes[parttern[2]].innerText;
        if(p1 !="" && p2!="" && p3!=""){
            if(p1 === p2 && p2===p3){
             showwinner(p1);
            }
        }
    };
};
reset.addEventListener("click",Reset);
start.addEventListener("click",Reset);