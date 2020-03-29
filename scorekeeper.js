var p1button=document.querySelector("#p1");
var p2button=document.getElementById("p2");
var p1display=document.querySelector("#p1display");
var p2display=document.querySelector("#p2display");
var resetbutton=document.getElementById("reset");
var numinput=document.querySelector("input");
var winningscoredisplay=document.querySelector("p span");
var p=document.querySelector("p");
var body=document.querySelector("body");
var p1score=0;
var p2score=0;
var gameover=false;
var winscore=5;

p1button.addEventListener("click",function(){
	if(!gameover)
	{
	 	p1score++;
	 	
	 	if(p1score==winscore)	
	 	{p1display.classList.add("winner");
	 		gameover=true;
	 	}
		p1display.textContent=p1score;	
	}	
	
});

p2button.addEventListener("click",function(){
	if(!gameover)
	{
		p2score++;
		
		if(p2score==winscore)
		{p2display.classList.add("winner");
			gameover=true;
		}
		p2display.textContent=p2score;
	}
	
});
resetbutton.addEventListener("click",function(){
	p1score=0;
	p2score=0;
	p1display.textContent=0;
	p2display.textContent=0;
	p1display.classList.remove("winner");
	p2display.classList.remove("winner");
	gameover=false;

});

numinput.addEventListener("change",function(){
winningscoredisplay.textContent=numinput.value;
winscore=numinput.value;
});

body.style.backgr