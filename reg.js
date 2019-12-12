   //registaracia

var registaracia = document.getElementById('gilaki-reg');
var f = document.querySelector(".form");
var ff = document.querySelector(".form2");
registaracia.addEventListener('click',gadasvla);
function gadasvla (){
	console.log(1);
	f.style.display = 'none';
	ff.style.display = 'block';

}