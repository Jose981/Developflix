// capturar los sitios donde pondremos las peliculas
// filtrar peliculas por genero
// poner las peliculas en su sitio dentro del DOM
// filtrer, map, getElementById, literal, template (createElement, appenChild),

// accion -> 28
// thriller -> 53
// aventura -> 12

import peliculas from './peliculas.js'

const accion = document.getElementById("genero-28");
const thriller = document.getElementById("genero-53");
const aventura = document.getElementById("genero-12");

//Filtrar peliculas elemento, indice y array

const peliculasAventura = peliculas.filter(pelicula => pelicula.genre_ids.includes(12));
//const peliculasAccion = peliculas.filter(pelicula => pelicula.genre_ids.includes(53));
//const peliculasThriller = peliculas.filter(pelicula => pelicula.genre_ids.includes(28))

//console.log(peliculasAventura, peliculasAccion, peliculasThriller)

//Funcion para sacar cada id de las peliculas y no repetir funciones

function filtrarPeliculas (generoId){

    const urlImagenBase = "https://image.tmdb.org/t/p/w500";
    const peliculasFiltradas = peliculas.filter(peli => peli.genre_ids.includes(generoId));

    //Sacar los datos de las peliculas filtradas

    const mostrarPeliculas = peliculasFiltradas.map(pelicula => {

    //para hacer el html metemos el literal string

    const template = `
    <div>
    <img src="${urlImagenBase}${pelicula.poster_path}" alt="${pelicula.title}" />
    <h3>${pelicula.title}</h3>
    </div>
   `

   //muy necesario que devuelva algo para mostrarlo
   return template;
}).join("");

    return mostrarPeliculas;
}

accion.innerHTML = filtrarPeliculas(28);
aventura.innerHTML = filtrarPeliculas(12);
thriller.innerHTML = filtrarPeliculas (53);

