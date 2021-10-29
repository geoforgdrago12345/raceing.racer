canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

greencar_width = 100;
greencar_height = 150;

redcar_width = 100;
redcar_height = 150;

background_image = "parkingLot.jpg";
greencar_image = "car2.png";
redcar_image = "car1.png"

greencar_x = 10;
greencar_y = 10;

redcar_x = 100;
redcar_y = 10;

function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    greencar_imgTag = new Image();
    greencar_imgTag.onload = uploadgreencar;
    greencar_imgTag.src = greencar_image;

    redcar_imgTag = new Image();
    redcar_imgTag.onload = uploadredcar;
    redcar_imgTag.src = redcar_image;
}


function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0,
        canvas.width, canvas.height);
}

function uploadgreencar() {
    ctx.drawImage(greencar_imgTag, greencar_x, greencar_y,
        greencar_width, greencar_height);


}

function uploadredcar() {
    ctx.drawImage(redcar_imgTag, redcar_x, redcar_y,
        redcar_width, redcar_height);


}


window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (keyPressed == '38') {
        up();
        console.log("up");
    }

    if (keyPressed == '40') {
        down();
        console.log("down");
    }

    if (keyPressed == '37') {
        left();
        console.log("left");
    }

    if (keyPressed == '39') {
        right();
        console.log("right");
    }

    if (keyPressed == '87') {
        w();
        console.log("w");
    }

    if (keyPressed == '83') {
        s();
        console.log("s");
    }

    if (keyPressed == '65') {
        a();
        console.log("a");
    }

    if (keyPressed == '68') {
        d();
        console.log("d");
    }

    if (keyPressed == '84') {
        t();
        console.log("t")
    }
    if (keyPressed == '71') {
        g();
        console.log("g")
    }
    if (keyPressed == '70') {
        f();
        console.log("f");
        
    }
    if (keyPressed == '72') {
        h();
        console.log("h");
        

    }

}

function up() {
    if (greencar_y >= 0) {
        greencar_y = greencar_y - 10;
        console.log("When up arrow is pressed,  x = " + greencar_x + " | y = " + greencar_y);
        uploadBackground();
        uploadgreencar();
        uploadredcar();
    }
}
function down() {
    if (greencar_y <= 500) {
        greencar_y = greencar_y + 10;
        console.log("When down arrow is pressed,  x = " + greencar_x + " | y = " + greencar_y);
        uploadBackground();
        uploadgreencar();
        uploadredcar();
    }
}
function left() {
    if (greencar_x >= 0) {
        greencar_x = greencar_x - 10;
        console.log("When left arrow is pressed,  x = " + greencar_x + " | y = " + greencar_y);
        uploadBackground();
        uploadgreencar();
        uploadredcar();
    }
}
function right() {
    if (greencar_x <= 700) {
        greencar_x = greencar_x + 10;
        console.log("When right arrow is pressed,  x = " + greencar_x + " | y = " + greencar_y);
        uploadBackground();
        uploadgreencar();
        uploadredcar();
    }
}
red
function w() {
    if (redcar_y >= 0) {
        redcar_y = redcar_y - 10;
        console.log("When w arrow is pressed,  x = " + redcar_x + " | y = " + redcar_y);
        uploadBackground();
        uploadredcar();
        uploadgreencar();
    }
}
function s() {
    if (redcar_y <= 500) {
        redcar_y = redcar_y + 10;
        console.log("When s arrow is pressed,  x = " + redcar_x + " | y = " + redcar_y);
        uploadBackground();
        uploadredcar();
        uploadgreencar();
    }
}
function d() {
    if (redcar_x >= 0) {
        redcar_x = redcar_x + 10;
        console.log("When a arrow is pressed,  x = " + redcar_x + " | y = " + redcar_y);
        uploadBackground();
        uploadredcar();
        uploadgreencar();
    }
}
function a() {
    if (redcar_x <= 700) {
        redcar_x = redcar_x - 10;
        console.log("When d arrow is pressed,  x = " + redcar_x + " | y = " + redcar_y);
        uploadBackground();
        uploadredcar();
        uploadgreencar();
    }
}
function h() {
    d();
    right();
}
function f() {
    a();
    left();
}
function g() {
    s();
    down();
}
function t(){
    w();
    up();
}
