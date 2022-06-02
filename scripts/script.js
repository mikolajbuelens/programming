"use strict";
let amount = 0;
const click = "click(s)";
let btn = document.getElementById("btn");
let clickText = document.getElementById("clickText").innerHTML;

btn.addEventListener("click", text);

function text(text) {
    for (let i = 1; i < 2; i++) {
        amount++;
    }

    if (amount === 10) {
        document.getElementById("text").innerHTML = "nice, 10 clicks";
        console.log("ok");
        // alert(text.target.nodeName);
    } else if (amount < 21) {
        document.getElementById("text").innerHTML = `${amount} ${(click)}`;
        clickText = "Click me!";
    } else {
        alert("ending");
        amount = 0;
        clickText = "try again";
    }
}

/*let numbers = [0, 1, 1, 2, 3, 5];
let x = 0;
for (let i = 0; i < 6; i++) {
    x += numbers[i];}
   console.log(x);*/

//checkbox
const image = document.getElementById("checkbox");

image.addEventListener("change", () => {
    const Kurt = document.getElementById("kurt");
    let Label = document.getElementById("label");
    if (image.checked) {
        Kurt.style.visibility = 'visible';
        console.log("checked");
        Label.innerHTML = ("Hide Kurt");

    } else {
        Kurt.style.visibility = 'hidden';
        console.log("unchecked");
        Label.innerHTML = ("Show Kurt");
    }
});



for (let i = 0; i < 5000; i++) {
    let img = new Image();
    img.src = "images/rickroll-roll.gif";
    img.width = "15";
    document.body.appendChild(img);
    console.log(i);
}




/*function check() {
    image.checked = true;
}
function uncheck() {
    image.checked = false;
}*/