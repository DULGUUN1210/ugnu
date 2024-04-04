//Array/massive ->olon ytag hagalah[9,8,7]
var a = 5
var toonuud = [10,6,36,820]
console.log(toonuud);
console.log(toonuud[0])
console.log(toonuud[3])
var zevseg = ["selem","buu","num sum","bambai","malgai"]
console.log(zevseg[0])
console.log(zevseg[zevseg.length-1]);
for(var i=0; i<zevseg.length-1; i++){
	console.log(zevseg[i]);
}
for(var i=0; i<toonuud.length-0; i++){
	console.log(toonuud[i]);
}
var too = [19,76,3,82,5,67,434,98,70,1]
console.log(too)
for(var i=0; i<too.length-0; i++){
	if(too[i]%2==0){
	console.log("tegsh too:" +too [i]);
	}else{
		console.log("sondgoi too:" +too [i])
	}		
}
var body = document.getElementsByTagName('body')[0];
var btn1 = document.getElementsByTagName('button')[0];
var btn2 = document.getElementsByTagName('button')[1];
var color = ["red","yellow","blue","green"]
var i=-1
function ungu (){
	i++;
	if(i>color.length-1){
		i=0;
	}
	body.style.backgroundColor=color[i];
	btn1.innerText=color[i];
}
function bughah (){
	i--;
	if(i<0){
		i = color.length-1;
	}
	body.style.backgroundColor=color[i];
	btn2.innerText=color[i];
}
var up
function auto (){
	i++;
	if(i>color.length-1){
		i=0;
	}
	body.style.backgroundColor=color[i];
	btn1.innerText=color[i];
	up = setTimeout(auto,1000)
}
function stop (){
	clearTimeout(up)
}