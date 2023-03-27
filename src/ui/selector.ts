import { Commons, CommonLayers } from '../app/parse';
import { mainDiv, selectionUl } from './global';
import { sendSelectMessage } from '../messages/frontend/send';

export const createLayerSelector = (layers: CommonLayers, ul: HTMLElement) => {
	
	const selector = document.createElement("li");
	selector.className = "selector";
	ul.appendChild(selector);
	
	const name = document.createElement("span");
	name.className = "name";
	name.innerText = layers.commonName;
	selector.appendChild(name);

	const count = document.createElement("span");
	count.className = "count";
	count.innerText = "(×" + layers.layers.length + ")";
	selector.appendChild(count);
	
	
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