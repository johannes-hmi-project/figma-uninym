import { updateSelection } from './ui/selector';

onmessage = (event) => {
  const msg = event.data.pluginMessage;
  
  if(typeof msg !== "undefined"){
	updateSelection(msg);
  }
}