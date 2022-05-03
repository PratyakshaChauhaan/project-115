noseX=0;
noseY=0;

function preload()
{
    lips=loadImage('https://i.postimg.cc/Gt7MHM78/2-26681-lips-png-transparent-image-lips-png.png');
}

function setup(){
    canvas = createCanvas(300,300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPose);
}

function draw(){
    image(video,0,0,300,300);
    image(lips,noseX,noseY,30,30);
}

function take_snapshot(){
    save("my_picture.png");
}

function modelLoaded(){
    console.log("poseNet Is Initialized");
}

function gotPose(results){
    if(results.length > 0){
        console.log(results);
        noseX=results[0].pose.nose.x -15;   
        noseY=results[0].pose.nose.y +10;
        console.log("nose x:"+noseX);
        console.log("nose y:"+noseY);
    };
}

