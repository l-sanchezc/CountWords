/*	
PRACTICA 1.4 - COMPUTACION EN RED
	ALUMNOS: Lazaro Sanchez Campos
		 	 Diego San Cristobal Bastardo
*/

var fs = require('fs');
var wc= require('./contadores');

if (process.argv.length !=3){
	console.log( '    syntax:   "node contadores <file>" ');
	process.exit()

}

fs.readFile(
	process.argv[2],
	'utf8',
	function(err,data) {
		console.log('Palabras :  ' + wc.contadores(data).contadordepalabras() );
		console.log('Caracteres :  ' + wc.contadores(data).contadordecaracteres() );
		console.log('Frases :  ' + wc.contadores(data).contadordefrases() );
	}
	);