interface LayerInfo {
	id: string;
	name: string;
	type: string;
}

export interface CommonLayers {
	commonName: string;
	types: Array<string>;
	layers: Array<LayerInfo>;
}

export interface Commons {
	[key: string]: CommonLayers;
};

export const parseSelection = (selection: readonly SceneNode[]):Commons => {
	
	let output = {} as Commons;
	
	for(let i = 0; i < selection.length; i++){
		output = mergeCommons(output, parseNode(selection[i]));
	}
	
	return output;
}

const parseNode = (node: SceneNode):Commons => {
	let output = {} as Commons;
	
	output[node.name] = {
		commonName: node.name,
		types: [node.type],
		layers: [{
			id: node.id,
			name: node.name,
			type: node.type,
		}]
	}
	
	if('children' in node){
		const children = node.children;
	
		for(let i = 0; i < children.length; i++){
			output = mergeCommons(output, parseNode(children[i]));
		}
	}
	
	return output;
}

const mergeCommons = (c1: Commons, c2: Commons):Commons => {
	const output = {...c1} as Commons;
	
	for(let key in c2){
		if(typeof output[key] === "undefined"){
			output[key] = c2[key];
		}
		else{
			output[key].layers = [... new Set([...output[key].layers, ...c2[key].layers])];
			
			output[key].types = [... new Set([...output[key].types, ...c2[key].types])];
		}
	}
	
	return output;
}