# Proyecto Hola Mundo con TypeScript 🚀

Este es un proyecto sencillo realizado como ejercicio de aprendizaje, donde se ejecuta un **Hola Mundo** en **TypeScript**, compilado a **JavaScript** y ejecutado en **Node.js**.

---

##  Requisitos previos
Asegúrate de tener instalado en tu sistema:

- [Node.js](https://nodejs.org/) (versión LTS recomendada)
- npm (incluido con Node.js)
- TypeScript como dependencia de desarrollo:

```bash
npm install --save-dev typescript

 Estructura del proyecto

Typescript/
│── holamundo.ts    # Código fuente en TypeScript
│── holamundo.js    # Código compilado en JavaScript
│── package.json    # Configuración del proyecto
│── tsconfig.json   # Configuración de TypeScript (si se genera con `npx tsc --init`, o  nvm que sería más estable)
└── README.md       # Documentación del proyecto

▶ Ejecución paso a paso
1. Compilar el archivo TypeScript

npx tsc holamundo.ts

Esto generará el archivo holamundo.js.
2. Ejecutar el archivo JavaScript con Node.js 

node holamundo.js

 Resultado esperado

Al ejecutar el programa deberías ver en la consola:

Hola Mundo Diego Alejandro Mena Ciceri
