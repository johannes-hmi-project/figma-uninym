import { FrontendMassage } from '../frontend/send';
import { parseSelection } from '../../app/parse';
import { getSettings } from '../../app/settings';
import { Commons, CommonLayers } from '../../app/parse';


export interface BackendMessage {
	selection?: Commons;
	settings?: any;
}

export const sendCurrentSelection = () => {
	figma.ui.postMessage({
		selection: parseSelection(figma.currentPage.selection),
	});
}

export const sendSettings = () => {
	figma.ui.postMessage({
		settings: getSettings(),
	});
}

export const sendAll = () => {
	figma.ui.postMessage({
		selection: parseSelection(figma.currentPage.selection),
		settings: getSettings(),
	});
}