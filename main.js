status="";
img="";
function setup(){
    canvas=createCanvas(640,420);
    canvas.center();
    objectdetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="status: Detecting Objects";
}
function modelLoaded(){
    console.log("modelloaded");
    status=true;
    objectdetector.detect(img,gotresult);
}
function gotresult(error,results){
if (error){
    console.log(error);
}
console.log(results);
}
function preload(){
    img=loadImage("OIP.jpg");
}
function draw(){
    image(img,0,0,640,420);
  
}