import { Commons, CommonLayers } from '../app/parse';
import { mainDiv, selectionUl } from './global';
import { sendSelectMessage } from '../messages/frontend';

export const createLayerSelector = (layers: CommonLayers, ul: HTMLElement) => {
	
	const selector = document.createElement("li");
	selector.className = "selector";
	selector.innerText = layers.commonName;
	ul.appendChild(selector);
	
	
	const common = {} as Commons;
	common[layers.commonName] = layers;
	
	selector.addEventListener('click', function(){
		sendSelectMessage(common);
	});
		
}

export const updateSelection = (selection: Commons) => {
	if(selectionUl){
		// Liste Leeren
		while (selectionUl.lastChild) {
			selectionUl.removeChild(selectionUl.lastChild);
		}
		
		
		for(let key in selection){
			createLayerSelector(selection[key], selectionUl);
		}
	}
	
}