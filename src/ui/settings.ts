import { 
	createSwitch, 
	setSwitchOff, 
	openPopup, 
	closePopup 
} from './tools';

import { 
	settingsButton, 
	settingsPopup, 
	traverseInstances,
	skipVariants,
	showUniqueNames
} from './global';
import { sendSettingsMessage } from '../messages/frontend/send';

export const initSettings = () => {
	
	if(settingsButton){
		createSwitch(settingsButton, () => {
					
			if(settingsPopup){
				settingsPopup.remove();
				//document.body.appendChild(settingsPopup);
				openPopup(settingsPopup, () => {
					if(settingsButton)
						setSwitchOff(settingsButton);
				});
			}
			
		});
	}
	
	traverseInstances.addEventListener("input", () => {
		sendSettingsMessage("traverseInstances", traverseInstances.checked);
	})
	skipVariants.addEventListener("input", () => {
		sendSettingsMessage("skipVariants", skipVariants.checked);
	})
	showUniqueNames.addEventListener("input", () => {
		sendSettingsMessage("showUniqueNames", showUniqueNames.checked);
	})
}

export const updateSettings = (settings: any) => {
	if(typeof settings.traverseInstances !== "undefined"){
		traverseInstances.checked = settings.traverseInstances;
	}
	if(typeof settings.skipVariants !== "undefined"){
		skipVariants.checked = settings.skipVariants;
	}
	if(typeof settings.showUniqueNames !== "undefined"){
		showUniqueNames.checked = settings.showUniqueNames;
	}
}



export const openSettingsPopup = () => {
	
}