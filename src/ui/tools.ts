export const createSwitch = ( 
	element: HTMLElement, 
	onOn?: (e: MouseEvent) => void,
	onOff?: (e: MouseEvent) => void
) => {

	element.addEventListener("click", (event)=>{

		if(element.classList.contains("on")){
			setSwitchOff(element);
			
			if(typeof onOff !== "undefined"){
				onOff(event);
			}
		}
		else{
			setSwitchOn(element);
		
			if(typeof onOn !== "undefined"){
				onOn(event);
			}			
		}	
			
	});	
}

export const setSwitchOn = (element: HTMLElement) => {
	element.classList.add("on");
}
export const setSwitchOff = (element: HTMLElement) => {
	element.classList.remove("on");
}

// Popup
const popupBG = document.createElement("div");
let onPopupClose = () => {};
popupBG.className = "popupBackground";


export const closePopup = () => {
	while (popupBG.lastChild) {
		popupBG.removeChild(popupBG.lastChild);
	}
	
	popupBG.remove();
	
	onPopupClose();
}

popupBG.addEventListener('click', closePopup);

export const openPopup = (popup: HTMLElement, onClose: () => void) => {
	popupBG.appendChild(popup);
	document.body.appendChild(popupBG);
	
	onPopupClose = onClose;
	
	popup.addEventListener('click', (event) => {
		event.stopPropagation();
	});
}

