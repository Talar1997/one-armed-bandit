const canvas = document.querySelector("#canvasContainer");
const ctx = canvas.getContext("2d");
const icon = {
    SIZE: 200
};

const creditBoard = document.querySelector("#creditBoard");
const creatitBoardCtx = creditBoard.getContext("2d");

creatitBoardCtx.font = "30px DigitalFont";
creatitBoardCtx.fillStyle = "white";
creatitBoardCtx.fillText("0123456789", 10, 50);