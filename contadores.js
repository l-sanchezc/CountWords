/*	
PRACTICA 1.4 - COMPUTACION EN RED
	ALUMNOS: Lazaro Sanchez Campos
		 	 Diego San Cristobal Bastardo
*/

exports.contadores = function (data){

	return {
		contadordepalabras: function(){
			
			return (data.match(/[a-zñáéíóú]+(-[\n\r\f\v]*[a-zñáéíóú]+)*([a-zñáéíóú?!.,:;]?)| [0-9]+/gim) || []).length ;
			
		},
		contadordecaracteres: function(){
			return data.length  ;
		},
		contadordefrases: function(){
			var frases=[];
			frases= data.match(/[.:;?!]+/gm);
			return frases.length ;
		}
	}
}
