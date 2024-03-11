function manejarElemento(id){
		var elementoExistente = document.getElementById(id);
		if (elementoExistente) {
			elementoExistente.parentNode.removeChild(elementoExistente);
			}
		var nuevoElemento = document.createElement("div");
		nuevoElemento.id = id;
		nuevoElemento.textContent = "";
		nuevoElemento.style.position = "absolute";
		nuevoElemento.style.zIndex = "10000"
	document.documentElement.insertBefore(nuevoElemento, document.body);
	//document.body.insertBefore(nuevoElemento, document.body.firstChild);
}
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
if (message === 'scanHorarios-zpkcUqFm.js'  ) {
	manejarElemento("root0");
	sendResponse({ AlreadyOpened: true });
	return
}




if (message.indexOf('.css')>0 ) {
	sendResponse({ AlreadyOpened: true });
	return
}
sendResponse({ AlreadyOpened: false });
return;
});