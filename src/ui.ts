import { receiveMessage } from './messages/frontend/receive';
import { initSettings } from './ui/settings';


initSettings();

onmessage = (event) => {
  const msg = event.data.pluginMessage;
  
  if(typeof msg !== "undefined"){
	receiveMessage(msg);
  }
}

