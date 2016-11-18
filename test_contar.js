/*	
PRACTICA 1.4 - COMPUTACION EN RED
	ALUMNOS: Lazaro Sanchez Campos
		 	 Diego San Cristobal Bastardo 
*/

var assert = require('assert');
var wc = require('./contadores');


assert.equal("12", wc.contadores("Hola, ¿qué tal estás?\nBien. ¿Y tú?\n Bien también , aunque al-\ngo aburrido.").contadordepalabras());
console.log('Test cuentapalabras superado. assert correcto');
assert.equal("73", wc.contadores("Hola, ¿qué tal estás?\nBien. ¿Y tú?\nBien también , aunque al-\ngo aburrido.").contadordecaracteres());
console.log('Test cuentacaracteres superado. assert correcto');
assert.equal("4", wc.contadores("Hola, ¿qué tal estás?\nBien. ¿Y tú?\nBien también , aunque al-\ngo aburrido.").contadordefrases());
console.log('Test cuentafrases superado. assert correcto');

assert.equal("0", wc.contadores("???!¡¿").contadordepalabras());
console.log('Test cuentapalabras 2 superado. assert correcto');
assert.equal("6", wc.contadores("???!¡¿").contadordecaracteres());
console.log('Test cuentacaracteres 2 superado. assert correcto');
assert.equal("1", wc.contadores("???!¡¿").contadordefrases());
console.log('Test cuentafrases 2 superado. assert correcto');
