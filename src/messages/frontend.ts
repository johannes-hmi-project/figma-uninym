import { Commons, CommonLayers } from '../app/parse';

export interface FrontendMassage {
	select?: Commons;
}

export const sendSelectMessage = (layers: Commons) => {
	const message = {
		select: layers,
	} as FrontendMassage;
	
	parent.postMessage( 
		{pluginMessage: message}, 
		'*',
	);
}