var feri = document.querySelector(".qv");
feri.addEventListener('mousemove', feris);

function feris (e){
	//feri.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)"
	document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",30)"
}

window.addEventListener('load', ()=>{
    const animacia = document.querySelector('animacia');
    animacia.classList.add('animacia-end');
})