import { parseSelection } from './app/parse';
import { receiveMessage } from './messages/backend';

figma.showUI(__html__, { themeColors: true, width: 320, height: 480 });

figma.ui.postMessage(parseSelection(figma.currentPage.selection));

figma.ui.onmessage = msg => {
	receiveMessage(msg);	
}

//figma.closePlugin();

