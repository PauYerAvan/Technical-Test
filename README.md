
# Prueba técnica 

## **Ejercicio 1 - archivo index1.js**

### En este ejercicio creo dos funciones:

1. `function isMultiple()` para "definir" las condiciones que tiene un numero común múltiplo y poder usarla en la segunda función:
2. `function multiple()` donde mediante un "*for*" recorro los numeros del 1 al 100 y con un "*if*" retorno las palabras indicadas en el enunciado dependiendo de si el numero es multiplo de 3, de 5 o de ambos.

En el mismo archivo hay un `console.log()` con la segunda función para que se imprima el resultado. Ya sea con node index1.js o ejecutando el archivo index.html a traves del navegador.

## **Ejercicio 2 - archivo index2.js**

Primero he creado las funciones con las que verifico si las contraseñas son correctas o incorrectas:
1. `function confirmPassword1( )` para la primera política de contraseñas en el apartado 1.
2. `function confirmPassword2( )` para la segunda política de contraseñas en el apartado 2.

Para evitar confirmar las mil contraseñas una a una he transformado el archivo *input.txt*.

Primero he adaptado el formato de las contraseñas para poder pasarlas como parámetros de la funcion:

- Antes: `1-3 b: cdefg`
- Después: `['1','3','b','cdefg']`

Esta modificación la he realizado con el módulo de administración de archivos "fs" de node. Dejo el código a continuación:


    const fs = require('fs');

    fs.readFile('input.txt', 'utf8', function (err,data) {
        if (err) {
            return console.log(err);
        }

        const newValue = data.replace(/-| |: /gim, '","').replace(/\n/gim,'["').replace(/\r/gim,'"],');
    
        fs.writeFile('input.txt', newValue, 'utf8', function (err) {
            if (err) return console.log(err);
        });
        console.log('Done!');
    });

Estos cambios los he realizado con el objetivo de crear un array de arrays con todas las contraseñas y así recorrer cada una con la función que las verifica.

El resultado del archivo input.txt aparece declarado al principio del archivo index2.js con el nombre de `const dataArray` 

Una vez modificado el archivo y creadas las funciones que necesito realizo el "mapeo" de cada una de ellas con el método `Array.prototype.map()`.

Tanto en la primera como en la segunda parte del ejercico 2 realizo el método map con las funciones verificadoras de contraseña e imprimo mediante `console.log` el array resultante(`solutionsArray1` y `solutionsArray2`)

Por último, uso la función `countRight()` para obtener el número de contraseñas correctas que hay con la primera y la segunda política de contraseñas.

Ambos ejercicios estan preparados para imprimir los resultados tanto en el navegador como con node desde la terminal.
