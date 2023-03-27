import { parseSelection } from './app/parse';
import { receiveMessage } from './messages/backend/receive';
import { sendAll, sendCurrentSelection } from './messages/backend/send';
import { loadSettings } from './app/settings';

figma.showUI(__html__, { themeColors: true, width: 320, height: 480 });

loadSettings(() => {
	sendAll();
});

figma.ui.onmessage = msg => {
	receiveMessage(msg);	
}

figma.on("selectionchange", () => { 
	sendCurrentSelection();
});
figma.on("currentpagechange", () => { 
	sendCurrentSelection();
});


//figma.closePlugin();

