const buildify = require ('buildify'),
	
	// Orden de la concatenación CSS
	filesCSS = [
		'./dist/css/local_styles.css',
		'./dist/css/styles.css',
		'./dist/css/bextlan.css'
	],
	
	// Orden de la concatenación JS
	filesJS = [
		'./src/js/sumar.js',
		'./src/js/restar.js',
		'./src/js/multiplicar.js',
		'./src/js/dividir.js',
		'./src/js/script.js'
	];

	// Construir CSS
	buildify()
		.concat( filesCSS ) // Concatenar
		.cssmin() // Minificar
		.save( './dist/css/styles.min.css' ); // Output Destino

	// Construir JS
	buildify()
		.concat( filesJS ) // Concatenar
		.save( './dist/js/app.js' ) // Output Destino 1
		.uglify() // Minificar
		.save( './dist/js/app.min.js' ); // Output Destino 2