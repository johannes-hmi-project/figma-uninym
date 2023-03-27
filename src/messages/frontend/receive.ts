import { BackendMessage } from '../backend/send';
import { updateSelection } from '../../ui/selector';
import { updateSettings } from '../../ui/settings';


export const receiveMessage = (message: BackendMessage) => {
	if(typeof message.selection !== "undefined"){
		updateSelection(message.selection);
	}
	if(typeof message.settings !== "undefined"){
		updateSettings(message.settings);
	}
}




