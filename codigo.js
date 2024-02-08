"use strict";
// creacion de reloj 

const addzeros = n => {
	if(n.toString().length < 2) return "0".concat(n);
	return n;
}

const actualizarHora = ()=>{
	const time = new Date();
	let hora = time.getHours();
	let min = time.getMinutes();
	let seg = time.getSeconds();
	document.querySelector(".hora").textContent = hora;
	document.querySelector(".min").textContent = min;
	document.querySelector(".seg").textContent = seg;

	console.log(seg);
}

actualizarHora();
setInterval(actualizarHora,1000);