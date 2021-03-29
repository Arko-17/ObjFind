status="";
video="";
function preload(){
video=createCapture(VIDEO);
video.hide();
video.size(480,380)
}
function draw(){
image(video,0,0,480,380);
}
function setup(){
canvas=createCanvas(480,380);
canvas.center();
}
function begin(){
objectDetector=ml5.objectDetector('cocossd',modelLoaded);
document.getElementById("status").innerHTML="Status: Detecting Objects";
document.getElementById("objname").value;
}
function modelLoaded(){
console.log("The model has been loaded thank you for your patience (:");
status=true;
video.loop();
video.speed(1);
video.volume(0);
}