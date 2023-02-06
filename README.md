
# Prueba tecnica Doubles V Partners

### Objetivo

Crear una aplicación que ayude a obtener una lista de usuarios y
muestre la información de sus perfiles, explotando el API Rest pública de
GitHub

### Ejecución de Proyecto

Para la ejecución del proyecto 
En caso de usar NPM:

    npm install
En caso de usar YARN:

    yarn install

### Recursos
Herramientas utilizadas para el desarrollo del proyecto.
 
| Nombre | Descripción | Versión |
| -- | -- | -- |
| [NodeJs](https://nodejs.org/) | es un entorno de servidor de código abierto multiplataforma que puede ejecutarse en Windows, Linux, Unix, macOS y más. | ``v16.15.1`` | 
| [ReactJS](https://reactjs.org/) | es Una biblioteca de JavaScript para construir interfaces de usuario. | ``v18.2.0`` |
| [TailwindCSS](https://tailwindcss.com/)|es un framework de CSS de código abierto​ para el diseño de páginas web. | ``v3.2.4``
|[Axios](https://axios-http.com/docs/intro)|es una librería de JavaScript, Axios es un Cliente HTTP _[basado en promesas](https://javascript.info/promise-basics)_ para [`node.js`](https://nodejs.org/) y el navegador.| ``v1.3.1``
|[FontAwesome](https://fontawesome.com/)|es un conjunto de herramientas de fuentes e íconos basado en CSS y Less.| ``v6.2.1``

### Descripción de solución al proyecto

Aplicación que permite realizar busquedas por nombre de usuario, filtrando por coincidencia o exactitud y que muestra información breve del usuario y de sus mejores repositoriosm, filtro realizado en base a las estrellas del repositorio, se utiliza context para el estado de la aplicación y mantiene un diseño amigable y responsivo.
