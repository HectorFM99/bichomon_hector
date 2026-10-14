// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon"

const tituloGeneracion1 = document.querySelector('#gen-1');
tituloGeneracion1.textContent = 'Generasión 1 Pokimon';
console.log('1) Nuevo título:', tituloGeneracion1.textContent);


// 2. Cambia el color de fondo de la primera generación de Pokimon (el primer .infocard-list es el de la generación 1)

const primeraGeneracion = document.querySelector('.infocard-list');
primeraGeneracion.style.backgroundColor = '#ffe9a8';
console.log('2) Fondo 1ª generación:', primeraGeneracion.style.backgroundColor);

// 3. Imprime por consola la URL de la página

console.log('3) URL:', window.location.href);


// 4. Imprime por consola el dominio de la página
//    OJO: document.domain está DEPRECATED (tachado en el editor): relajaba la
//    same-origin policy y los navegadores ya no lo usan. Alternativa moderna:
//    location.hostname (mismo resultado, sin avisos).

console.log('4) Dominio:', location.hostname);
// console.log('4) Dominio (deprecated):', document.domain) el original lo tenía así, pero da warning en la consola y no es recomendable usarlo segun ChatGPT;

// 5. Imprime todos los nodos de imagen

const imagenes = document.querySelectorAll('img');
console.log('5) Nodos de imagen (' + imagenes.length + '):', imagenes);

// 6. Sustituye el atributo "src" de todas las imágenes por el gif indicado

const GIF = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
document.querySelectorAll('img').forEach(function (img) {
	img.setAttribute('src', GIF);
});
console.log('6) Imágenes con el gif:', document.querySelectorAll('img[src="' + GIF + '"]').length);

// 7. Premium / Extra: cambia el fondo de todos los .infocard-lg-data.text-muted de los Pokimon voladores (.itype.flying)

let voladores = 0;
document.querySelectorAll('.infocard-lg-data.text-muted').forEach(function (data) {
	if (data.querySelector('.itype.flying')) {
		data.style.backgroundColor = '#cfe8ff';
		voladores++;
	}
});
console.log('7) Pokimon voladores con fondo cambiado:', voladores);
