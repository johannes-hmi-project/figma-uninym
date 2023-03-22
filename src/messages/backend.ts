import { FrontendMassage } from './frontend';
import { select } from '../app/select';

export const receiveMessage = (message: FrontendMassage) => {
	if (typeof message.select !== 'undefined'){
		select(message.select);
	}
}