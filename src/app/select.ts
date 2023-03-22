import { Commons } from './parse'

export const select = (selection: Commons) => {
	
	const layers = []
	
	for( let key in selection){
		layers.push(selection[key].layers)
	};
	
	//...
	console.log("Select");
	console.log(layers);
}