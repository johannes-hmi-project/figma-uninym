import { Commons, layersByID } from './parse'

// Layers im Dokument selektieren.
export const select = (selection: Commons) => {
		
	const newSelection = [];
	
	for( let key in selection){
		//layers.push(selection[key].layers)
		
		for(let i = 0; i < selection[key].layers.length; i++){
			
			const layerID = selection[key].layers[i].id;
			//const layer = figma.currentPage.findOne(n => n.id === layerID);
			
			if(layerID in layersByID){
				const layer = layersByID[layerID];
			
				newSelection.push(layer);
			}
		}
	};
	
	
	figma.currentPage.selection = newSelection as readonly SceneNode[];
}