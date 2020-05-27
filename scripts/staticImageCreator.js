const canvas = document.querySelector("#canvasContainer")
const ctx = canvas.getContext("2d")

if(!ctx){
    throw new Error("Canvas is not supported by your browser")
}

function slotItem(key, posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.key = key;
    this.itemWidth = 232;
    this.itemHeight = 200;

    this.imagePlacement = (iteration) => iteration*200;

    this.drawIcon = (dx, dy) =>{
        //sx, sy, sWidth, sHeight - położenie na obrazku
        //dx, dy, dWidth, dHeight - położenie na canvie
        ctx.drawImage(
            document.querySelector("#icons"),
            this.imagePlacement(this.posX),
            this.imagePlacement(this.posY),
            this.itemWidth,
            this.itemHeight,
            dx,
            dy,
            this.itemWidth,
            this.itemHeight
        );
    }
}

const slotItemsArray = [
    new slotItem("cherry", 0, 0),
    new slotItem("plum", 1, 0),
    new slotItem("bell", 2, 0),
    new slotItem("clover", 3, 0),

    new slotItem("lemon", 0, 1),
    new slotItem("coin", 1, 1),
    new slotItem("bar", 2, 1),
    new slotItem("apple", 3, 1),

    new slotItem("heart", 0, 2),
    new slotItem("pineapple", 1, 2),
    new slotItem("diamond", 2, 2),
    new slotItem("orange", 3, 2),

    new slotItem("lucky", 0, 3),
    new slotItem("seven", 1, 3),
    new slotItem("unknown", 2, 3),
    new slotItem("watermelon", 3, 3),
];

slotItemsArray[0].drawIcon(0,0)





