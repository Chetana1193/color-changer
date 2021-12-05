//change a random color
const Button = document.getElementById("btn");
const colors = ["blue", "purple", 'pink', 'green', "yellow","skyblue","red","black"];
const body = document.body;

body.style.backgroundColor = "White";
Button.addEventListener('click', colorchange);
//console.log(Button);
function colorchange() {
    // console.log(' button clicked');
    const changecolor = parseInt(Math.random() * colors.length)
    body.style.backgroundColor = colors[changecolor]

}


