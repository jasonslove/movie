window.onload=function(){
	setInterval(change,7000);
	document.body.style.background="url('images/back1.jpg') fixed";
	document.documentElement.style.background="url('images/back1.jpg')";
}	
var arr1=new Array("images/back1.jpg","images/back2.jpg","images/back3.jpg","images/back4.jpg","images/back5.jpg","images/back6.jpg",
	"images/back7.jpg","images/back8.jpg","images/back9.jpg","images/back10.jpg");
var index=0;
function change(){
	//var backimg=document.getElementById("body");
	if(index==arr1.length-1)
	{
		index=0;
	}
	else{
		index++;
	}
    document.body.style.background="url("+arr1[index]+") repeat fixed";
	document.documentElement.style.background="url("+arr1[index]+") repeat fixed";

}