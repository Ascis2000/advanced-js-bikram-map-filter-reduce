//RESUELVE LOS EJERCICIOS AQUI
/* 
1.- Dado el array numbers cuyo valor sea [4, 5, 6, 7, 8, 9, 10], 
crea una función elevados que devuelva un array con el cuadrado de 
cada uno de los elementos.
*/
const numbers = [4, 5, 6, 7, 8, 9, 10];
function elevados(){
    arr_resultado = numbers.map(function (num) {
        return num ** num;
    });
    return arr_resultado;
}
console.log("// Ejercicio 1");
console.log( "elevados()=", elevados() );
console.log("******************");


/* 
2.- Dado el array foodList con valor 
['Pizza', 'Ramen', 'Paella', 'Entrecot'], generar un segundo array 
que consiga generar de salida el resultado esperado.
*/
let result2;
const foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot'];
const arr_textos = [
    'Como soy de Italia, amo comer Pizza',
    'Como soy de Japón, amo comer Ramen',
    'Como soy de Valencia, amo comer Paella', 
    'Aunque no como carne, el Entrecot es sabroso'
];

function ejercicio_01A(){
    const result2  = foodList.map((food) => {
        if (food === 'Pizza') {
            return 'Como soy de Italia, amo comer Pizza';
        } else if (food === 'Ramen') {
            return 'Como soy de Japón, amo comer Ramen';
        } else if (food === 'Paella') {
            return 'Como soy de Valencia, amo comer Paella';
        } else if (food === 'Entrecot') {
            return 'Aunque no como carne, el Entrecot es sabroso';
        }
    });
    return result2 ;
}

function ejercicio_01B() {
    result2 = foodList.map((food) => {
        // Busca si en la frase está incluida la comida
        // En el array 'arr_textos', 
        // encuentrame por cada texto que tengo
        // si está incluida la palabra 'food'
        const found = arr_textos.find(txt => txt.includes(food)); 

        // Devuelve la frase encontrada
        return (found != undefined) ? found : 'comida no encontrada'; 
    });
    return result2;
}
console.log("// Ejercicio 2");
console.log( "ejercicio_01B()=", ejercicio_01B() );
console.log("******************");


/* 
3.- Dado el array staff, crear un segundo array que forme 
frases como en el ejemplo accediendo a las propiedades del 
objeto proporcionado
*/
let result3;
const staff = [
    {
        name: 'Pepe',
        role: 'The Boss',
        hobbies: ['leer', 'ver pelis']
    },
    {
        name: 'Ana',
        role: 'becaria',
        hobbies: ['nadar', 'bailar']
    },
    {
        name: 'Luis',
        role: 'programador',
        hobbies: ['dormir', 'comprar']
    },
    {
        name: 'Carlos',
        role: 'secretario',
        hobbies: ['futbol', 'queso']
    }
];

function ejercicio_03(){

    // Crear un nuevo array con las frases
    result3 = staff.map(st => {
        // Unimos los st.hobbies el metodo join() utilizando ' y '
        const hobbies = st.hobbies.join(' y ');
        // Retornar la frase formateada
        return `${st.name} es ${st.role} y le gusta ${hobbies}`;
    });
    return result3;
}
console.log("// Ejercicio 3");
console.log( "ejercicio_03()=", ejercicio_03() );
console.log("******************");

/* 
4.- Crea un segundo array result4 a partir del array numbers2 
que devuelva solo los impares
*/
let result4;
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function ejercicio_04(){
    // Crear un nuevo array con las frases
    result4 = numbers2.filter(n => {
        return n % 2 != 0;
    });
    return result4;
}
console.log("// Ejercicio 4");
console.log( "ejercicio_04()=", ejercicio_04() );
console.log("******************");


/* 
5.- Dado el array foodList2, genera un segundo array result5 que 
filtre los platos veganos y saque una sentencia como la del ejemplo
*/
let result5;
const foodList2 =[
{
    name: 'Tempeh',
    isVeggie: true
},
{
    name: 'Cheesbacon burguer',
    isVeggie: false
},
{
    name: 'Tofu burguer',
    isVeggie: true
},
{
    name: 'Entrecot',
    isVeggie: false
}];

// ['Que rico Tempeh me voy a comer!',
// 'Que rica Tofu burguer me voy a comer!']
function ejercicio_05() {
    result5 = foodList2
        .filter(fl2 => fl2.isVeggie) 
        .map(food => {
            let word = (food.name == 'Tempeh') ? 'rico' : 'rica';
            return `Que ${word} ${food.name} me voy a comer!`;
        });
    return result5;
}
console.log("// Ejercicio 5");
console.log( "ejercicio_05()=", ejercicio_05() );
console.log("******************");


/* 
6.- Dado el array inventory, devolver un array con 
los nombres de los elementos que valgan más de 300 euros.
*/
let result6;
const inventory = [
    {
        name: 'Mobile phone',
        price: 199
    },
    {
        name: 'TV Samsung',
        price: 459
    },
    {
        name: 'Viaje a Cancún',
        price: 600
    },
    {
        name: 'Mascarilla',
        price: 1
    }
];

function ejercicio_06() {
    result6 = inventory
        .filter(el => el.price > 300)  // Filtra los elementos cuyo precio sea mayor a 300
        .map(el => el.name); 
    return result6;
}
console.log("// Ejercicio 6");
console.log( "ejercicio_06()=", ejercicio_06() );
console.log("******************");


/* 
7.- Dado el siguiente array numeros [39, 2, 4, 25, 62], obten 
la multiplicación de todos los elementos del array
*/
let result7;
const numeros3 = [39, 2, 4, 25, 62];

function ejercicio_07() {
    result7 = numeros3.reduce(
        (accum, currentValue) => accum * currentValue, (1));
    return result7;
}
console.log("// Ejercicio 7");
console.log( "ejercicio_07()=", ejercicio_07() );
console.log("******************");


/* 
8.- Concatena todos los elementos del array con reduce para 
que devuelva una sola frase
*/
let result8;
const sentenceElements = [
    'Me',
    'llamo',
    'Alberto Serrano',
    'y',
    'quiero',
    'sentir',
    'la',
    'fuerza',
    'con',
    'javascript'
];

function ejercicio_08() {
    result8 = sentenceElements.reduce((accum, currentValue, index) => {
        let espacio = (index === 0) ? "" : " ";
        return accum + espacio + currentValue;
    }, '');
    return result8;
}
console.log("// Ejercicio 8");
console.log( "ejercicio_08()=", ejercicio_08() );
console.log("******************");


/* 
9.- Obtener el monto total de los elementos que pertenecen a 
category "code" en el siguiente array.
*/
let result9;
const books = [
    {
        name: ' JS for dummies',
        author: 'Emily A. Vander Veer',
        price: 20,
        category: 'code'
    },
    {
        name: 'Don Quijote de la Mancha',
        author: 'Cervantes',
        price: 14,
        category: 'novel'
    },
    {
        name: 'Juego de tronos',
        author: 'George R. Martin',
        price: 32,
        category: 'Fantasy'
    },
    {
        name: 'javascript the good parts',
        author: 'Douglas Crockford',
        price: 40,
        category: 'code'
    }
];

function ejercicio_09() {
    result9 = books
        .filter(bk => bk.category == 'code')
        .reduce(
            (accum, currentValue) => accum + currentValue.price, (0)
        );
    return result9;
}
console.log("// Ejercicio 9");
console.log( "ejercicio_09()=", ejercicio_09() );
console.log("******************");

