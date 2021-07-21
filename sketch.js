const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

var hour;

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
    if(backgroundImg)
   background(backgroundImg);

    // add condition to check if any background image is there to add


    Engine.update(engine);

    // write code to display time in correct format here

    textSize(20);
    text("Time: ",100,100);
    if(hour>=12){
        text("Time : "+hour%12+" PM",100,100)
    }else if(hour===0){
        text("Time : 12 AM",100,100)
    }else {
        text("Time : "+hour%12+" AM",100,100)
    }

    
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJSON = await response.json();
   
    var datetime = responseJSON.datetime;
    hour = datetime.slice(11,13);
    //hour = 7;

    if(hour>=04 && hour <= 06){
        bg = "sunrise1.png"
    }
    if(hour>=06 && hour <= 08){
        bg = "sunrise2.png"
    }
    if(hour>=08 && hour <= 10){
        bg = "sunrise3.png"
    }
    if(hour>=10 && hour <= 12){
        bg = "sunrise4.png"
    }
    if(hour>=12 && hour <= 14){
        bg = "sunrise5.png"
    }
    if(hour>=14 && hour <= 16){
        bg = "sunrise6.png"
    }
    if(hour>=16 && hour <= 18){
        bg = "sunset7.png"
    }
    if(hour>=18 && hour <= 20){
        bg = "sunset8.png"
    }
    if(hour>=20 && hour <= 22){
        bg = "sunset9.png"
    }
    if(hour>=22 && hour <= 0){
        bg = "sunset10.png"
    }
    if(hour>=0 && hour <= 02){
        bg = "sunset11.png"
    }
    if(hour>=02 && hour <= 04){
        bg = "sunset12.png"
    }
    backgroundImg = loadImage(bg)
}
