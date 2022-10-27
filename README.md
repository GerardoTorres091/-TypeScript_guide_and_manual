
TypeScript es un super set de javascript.
Toma todo lo que es js y esNext y le agrega y expande funcionalidades como tipado, ayudas, otro tipo de manejo de clases, otros tipo como las tuplas.
Expande todo que se conoce de js.
TS no puede correr directamente en el navegador.
TS transpila (traduce el codigo) a js el cual si es soportado por el navegador.
Te permite escribir código moderno que será soportado por la mayoría de navegadores web o plataforma objetivo(web, moviles, backend, etc).

Instalar TS de forma global
You can use npm to install TypeScript globally, this means that you can use the tsc command anywhere in your terminal.
To do this, run npm install -g typescript. This will install the latest version (currently 4.8).

> tsc --init  //para crear tsconfig.json, una vez creado el tsconfig podemos ejecutar 
> tsc         //para transpilar todos los .ts de nuestra app 

Para usar watch mode - transpila en tiempo real nuestros archivos .ts
> tsc --watch


## Bases: repaso de las bases de TypreScript

## Express-api: usar expressJs con TypeScript ya que expressjs no soporta nativamente 

## Ts-node: repaso de generics, decorators, interfaces, consumo de api´s, mapeo de datos.