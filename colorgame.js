var squares=document.querySelectorAll(".square");
var h1=document.querySelector("h1");
var colors=[];
var messageDisplay=document.querySelector("#message");
var modeButtons=document.querySelectorAll(".mode");
var resetButton=document.querySelector(".reset");
var colorDisplay=document.querySelector(".colorDisplay");
var numSquares=6;
var pickedColor;

init();
resetButton.addEventListener("click",function(){
	reset();
});

function init(){
	setUpModeButton();
	setUpSquares();
	reset();
}

function setUpModeButton(){
	for(var i=0;i<modeButtons.length;i++){
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function reset(){
	colors=getRandomColors(numSquares);
	pickedColor=pickRandomColor();
	colorDisplay.textContent=pickedColor;
	resetButton.textContent="NEW COLORS";
	h1.style.background="steelblue";
	for(var i=0;i<squares.length;i++){
		if (colors[i]) {
			squares[i].style.display="block";
			squares[i].style.background=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
}

/*generate a random RGB color, eg "rgb(0, 0, 255)"*/
function getRandomRGB(){
	var r=Math.floor(Math.random()*256);
	var g=Math.floor(Math.random()*256);
	var b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}

/*generate a random array of colors of size numSquares*/
function getRandomColors(numSquares){
	var arr=[];
	for(var i=0;i<numSquares;i++){
		arr.push(getRandomRGB());
	}
	return arr;
}

/*pick a random color in colors array as target*/
function pickRandomColor(){
	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}

function changeColors(pickedColor){
	for(var i=0;i<squares.length;i++){
		squares[i].style.background=pickedColor;
	}
}



function setUpSquares(){
	for(var i=0;i<squares.length;i++){
		squares[i].addEventListener("click",function(){
			if(this.style.background===pickedColor){
				resetButton.textContent="Play Again?";
				changeColors(pickedColor);
				h1.style.background=pickedColor;
				messageDisplay.textContent="You Win!";
			}
			else{
				this.style.background="#232323";
				messageDisplay.textContent="Try Again!";
			}
		});
	}
}
















