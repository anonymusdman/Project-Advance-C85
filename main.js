canvas = document.getElementById("CarRacingGame");
ctx = canvas.getContext("2d");
car_1_height = 266;
car_1_width = 400;
car_1_img = "tunedsupra2.jpg";
car_1_x = 10;
car_1_y = 10;
car_2_height = 225;
car_2_width = 400;
car_2_img = "silviaS16.jpg";
car_2_x = 10;
car_2_y = 600;
background_1 = "somethingy.gif";
background_2 = "goszilla gtr >=).jpeg";
window.onload = add();
function add() {
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_2;

    car_1imgTag = new Image();
    car_1imgTag.onload = uploadCar1;
    car_1imgTag.src = car_1_img;

    car_2imgTag = new Image();      
    car_2imgTag.onload = uploadCar2;
    car_2imgTag.src = car_2_img;
}
function uploadBackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
}
function uploadCar1() {
    console.log('in uploadCar1');
    console.log(car_1_x + "this is car 1 x");
    console.log(car_1_y + "this is car 1 y");
    ctx.drawImage(car_1imgTag, car_1_y, car_1_x, car_1_width, car_1_height);
    //ctx.drawImage(car_1imgTag, 10, 500, car_1_width, car_1_height);
}
function uploadCar2() {
    console.log('in uploadCar2');
    console.log(car_2_x + "this is car 2 y");
    ctx.drawImage(car_2imgTag, car_2_y, car_2_x, car_2_width, car_2_height);
}
window.addEventListener("keydown", keydown_event);
function keydown_event(e){
    var pressedKeyCode = e.keyCode;
    console.log(pressedKeyCode);
    if(pressedKeyCode == 38){
        car1up();
        console.log("up arrow pressed");
    }
    if(pressedKeyCode == '40'){
        car_1down();
        console.log("down arrow pressed");
    }
    if(pressedKeyCode == 37){
        car_1left();
        console.log("left arrow pressed");
    }
    if(pressedKeyCode == 39){
        car_1right();
        console.log("right arrow pressed");
    }
    if(pressedKeyCode == 87){
        car_2up();
        console.log("w key pressed");
    }
    if(pressedKeyCode == 65){
        car_2left();
        console.log("a key pressed");
    }
    if(pressedKeyCode == 83){
        car_2down();
        console.log("s key pressed");
    }
    if(pressedKeyCode == 68){
        car_2right();
        console.log("d key pressed");
    }
}

function car1up(){
    if(car_1_x >= 0){
        console.log("up: " + car_1_x);
        car_1_x = car_1_x - 100;
        uploadCar1();
        uploadBackground();
        uploadCar2();
    }
}

function car_1down(){
    if(car_1_x <=1300){
        console.log("down" + car_1_x);
        car_1_x = car_1_x + 100;
        uploadCar1();
        uploadBackground();
        uploadCar2();
    }
}