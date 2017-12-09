const copy = require('copy');

// Copiar archivos
copy(
	'./src/statics/*.*', // Fuente
	'./dist', // Destino
	(err, file) => (err) 
		? console.log(err)
		: console.log('Archivos estáticos copiados con éxito')
);