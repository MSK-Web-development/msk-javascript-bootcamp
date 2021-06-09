
function lim(){
    vir_image=new Image;
    vir_image.src="img/v1.png";
    player_im=new Image;
    player_im.src="img/patient.png";
    dia_im= new Image;
    dia_im.src="img/vaccine.png";
}


function init(){
    
    canvas = document.getElementById("mycanvas");
    console.log(canvas);
    H=500
    W=1550
    
    canvas.width=W
    canvas.height=H
    
    
    pen=canvas.getContext('2d');
    console.log(pen);
    score=0;
    game_over = false;
    virus1={
        x:350,
        y:20,
        w:65,
        h:65,
        speed:44,
    
    };
    virus2={
        x:500,
        y:200,
        w:85,
        h:95,
        speed:26,
    
    };
    virus3={
        x:700,
        y:10,
        w:65,
        h:65,
        speed:75,
    
    };
    virus4={
        x:900,
        y:300,
        w:95,
        h:95,
        speed:31,
    
    };
    virus5={
        x:1150,
        y:420,
        w:65,
        h:65,
        speed:43,
    
    };
    virus=[virus1,virus2,virus3,virus4,virus5];
    player={
        x : 20,
        y : 210,
        w : 70,
        h : 70,
        speed : 40,
        move : "false", 


    }
    dimond={
        x : W-110,
        y : 210,
        w : 110,
        h : 110,
        speed : 20,
        move : "false", 


    }
    var sound=document.getElementById('sound');
    var won=document.getElementById('won');
    canvas.addEventListener('mousedown',function(){
        console.log("hiii")
        player.move=true;
    });
    canvas.addEventListener('mouseup',function(){
        console.log("wow")
        player.move=false;
    });

}
function attack(){
    pen.clearRect(0,0,W,H);
    pen.fillStyle='red';
    pen.font='30px Arial';
    pen.drawImage(player_im,player.x,player.y,player.w,player.h);
    pen.drawImage(dia_im,dimond.x,dimond.y,dimond.w,dimond.h);
    for(let i=0;i<virus.length;i++){

        pen.drawImage(vir_image,virus[i].x,virus[i].y,virus[i].w,virus[i].h);
    }
    pen.fillText("Score "+score,19,29,290);
}
function iscol(b1,b2){
	
	if((Math.abs(b1.x - b2.x)<=40 && Math.abs(b1.y-b2.y)<=40)||(Math.abs(b1.x - b2.y)<=40 && Math.abs(b1.y-b2.x)<=40)){
		return true;
	}
	return false;
}

function update(){
   
    if(player.move==true){
        player.x+=player.speed;
        score+=10;
    }
    for(let i=0;i<virus.length;i++){
        if(iscol(virus[i],player)){

            
                game_over=true;
                sound.play()
                alert("Game Over");
            
        }
    }
    if(iscol(dimond,player)){
        
        game_over=true;
        won.play();
     alert("U SCORED "+score);   
    }
    for(let i=0;i<virus.length;i++){
        virus[i].y+=virus[i].speed;
        
        if(virus[i].y>H-virus[i].h||virus[i].y<0){
            virus[i].speed*=-1;
        }
    }
}

function gameloop(){
    if(game_over==true){
        clearInterval(f);
    }
    console.log("gomeloop");
    attack();
    update();
}
lim();
init();

var f=setInterval(gameloop,100);
