const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;
var hour = 0;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    // write code to display time in correct format here
    textSize(30);
    if(hour > 12){
        text("Time: " + hour % 12 + "PM", 200, 200);
    }else {
        text("Time: " + hour % 12 + "AM", 200, 200);
    }

}

async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/New_York");
    var responseJSON = await response.json();
    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);
    
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    }
    else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
    }
    else if(hour>=08 && hour<=10){
        bg = "sunrise3.png";
    }
    else if(hour>=10 && hour<=12){
        bg = "sunrise4.png";
    }
    else if(hour>=14 && hour<=16){
        bg = "sunrise5.png";
    }
    else if(hour>=18 && hour<=20){
        bg = "sunrise6.png";
    }
    else if(hour>=20 && hour<=22){
        bg = "sunset7.png";
    }
    else if(hour>=22 && hour<=24){
        bg = "sunset8.png";
    }
    else if(hour>=02 && hour<=04){
        bg = "sunset9.png";
    }
    else if(hour>=06 && hour<=08){
        bg = "sunset10.png";
    }
    else if(hour>=08 && hour<=10){
        bg = "sunset11.png";
    }
    else if(hour>=10 && hour<=12){
        bg = "sunset12.png";
    }
    backgroundImg = loadImage(bg);
    console.log(hour)
}