// Dieses Tool sammelt die html-, css- und js-Teile für die
// Ausgabe als eine ui.html-Datei zusammen.
// Mehrere CSS Dateien in dem Verzeichnis ../styles sind möglich
// Js muss vorher als eine ui.js-Datei in ./build gebundled werden

const fs = require('fs');
const path = require('path');

let css = '';

const cssDir = fs.readdirSync('ui/styles');
for(let i = 0; i < cssDir.length; i++){
	const cssFilepath = path.join('ui/styles', cssDir[i]);
	if(path.extname(cssFilepath) === '.css'){
		css+= fs.readFileSync(cssFilepath, 'utf8') + "\n";
	}
}

const js = fs.readFileSync('ui/bundler/build/ui.js', 'utf8');
const html = fs.readFileSync('ui/index.html', 'utf8');

const output = `
	<style>
		${css}
	</style>

	${html}
	
	<script>
		${js}
	</script>
`;

fs.writeFileSync('ui.html', output);
