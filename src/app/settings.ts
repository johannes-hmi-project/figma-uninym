const defaultSettings = {
	traverseInstances: false,
	skipVariants: true,
	showUniqueNames: true,
} as {[key: string]: any};

type Settings = typeof defaultSettings;
const currentSettings = {...defaultSettings} as Settings;

const storageKey = "pluginSettings";

export const loadSettings = (onSettingsLoaded?: () => void) => {	
	figma.clientStorage.getAsync(storageKey)
		.then((settings) => {
			for(let key in settings){
				if(typeof settings[key] === typeof currentSettings[key]){
					currentSettings[key] = settings[key];
				}
			}
			
			if(onSettingsLoaded)
				onSettingsLoaded();
		});
}

const saveSettings = () => {
	figma.clientStorage.setAsync(storageKey, {...currentSettings});
}

export const getSetting = (key: string) => {
	return currentSettings[key];
}

export const getSettings = () => {
	return {...currentSettings};
}

export const setSetting = (key: string, value: any) => {
	if(typeof currentSettings[key] === typeof value)
		currentSettings[key] = value;
	else
		console.log(`The setting "${key}" can not be set to type ${typeof value}.`);
		
	saveSettings();	
}

export const setSettings = (settings: any) => {
	for(let key in settings){
		if(typeof settings[key] === typeof currentSettings[key])
			currentSettings[key] = settings[key];
		else
			console.log(`The setting "${key}" can not be set to type ${typeof settings[key]}.`);
	}
	
	saveSettings();
}
