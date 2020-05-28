function SlotItem(key, posX, posY, value) {
    this.posX = posX;
    this.posY = posY;
    this.key = key;
    this.itemWidth = icon.SIZE;
    this.itemHeight = icon.SIZE;
    this.value = value;
    let iconSet = document.querySelector("#icons");

    this.imagePlacement = (iteration) => iteration*icon.SIZE;

    this.drawIcon = (dx, dy) =>{
        //sx, sy, sWidth, sHeight - położenie na obrazku
        //dx, dy, dWidth, dHeight - położenie na canvie
        ctx.drawImage(
            iconSet,
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