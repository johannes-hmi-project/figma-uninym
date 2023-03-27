import { Commons, CommonLayers } from '../../app/parse';

export interface FrontendMassage {
	select?: Commons;
	settings?: any;
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

export const sendSettingsMessage = (key: string, value: any) => {
	const message = {
		settings: {},
	} as FrontendMassage;
	
	message.settings[key] = value;
	
	parent.postMessage( 
		{pluginMessage: message}, 
		'*',
	);	
}





