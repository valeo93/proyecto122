noseX=0;
noseY=0;

function preload() //cargar elementos como imagenes o videos etc 
{
    clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO); // Acceder a la camara y crear una captura 
    video.size(300,300); // tamaño de la camara debe ser igual al canvas
    video.hide(); // de manera predeterminada 
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);


}

function modelLoaded()
{
    console.log('PoseNet esta inicializado'); //Para verificar si posenet esta iniciado
}

function gotPoses(results)
{
    if(results.length>0)
    {
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y-15;
    }

}

function draw()
{
    image(video,0,0,300,300);
    image(clown_nose,noseX,noseY,30,30);

}

function take_snapshot()
{
    save('myPrimerFiltro.png');
}