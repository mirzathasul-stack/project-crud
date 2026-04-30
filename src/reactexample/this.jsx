class Header {
  constructor() {
    this.color = "Red";
  }

//Regular function:
  changeColor = () => {
    document.getElementById("demo").innerHTML += this.color;
  }
}

const myheader = new Header();

//The window object calls the function:
window.addEventListener("load", myheader.changeColor);

//A button object calls the function:
document.getElementById("btn").addEventListener("click", myheader.changeColor);
