import { FrontendMassage } from '../frontend/send';
import { select } from '../../app/select';
import { setSettings } from '../../app/settings';
import { sendCurrentSelection } from './send';

export const receiveMessage = (message: FrontendMassage) => {
	if (typeof message.select !== 'undefined'){
		select(message.select);
	}
	if (typeof message.settings !== 'undefined'){
		setSettings(message.settings);
		
		// Neue Selection abschicken, Einstellung könnten sich geändert haben
		sendCurrentSelection();
	}
}
