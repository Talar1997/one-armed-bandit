function Sounds(){
    this.sound = null;
    this.sound = document.createElement("audio");
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);

    this.play = (src) => {
        this.sound.src = src;
        this.sound.play()
    }

    this.stop = () => {
        this.sound.pause();
    }
}