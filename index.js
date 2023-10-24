// console.log("Hola Mundo")

// Tipos de datos en JS
// String: cadena de caracteres
// Boolean: true false
// Null: Nulo
// Number: 123
// "123" es un String, es distinto a 123 que es un number
// Undefined
// Object: Objeto

//Definición de variables
//var
//let
//const

let miPrimeraVariable = 'Mi primera variable!'
//console.log(miPrimeraVariable);

//mutabilidad
miPrimeraVariable = 'Esto ha cambiado'
//console.log(miPrimeraVariable);


//boolean
let miBoolean = true
let miOtroBool = false


//number
let miNumero = 0
let miNumero2 = 12
let miNumero3 = -42
//console.log(miNumero, miNumero2, miBoolean, miPrimeraVariable);


//undefined
let undef 
//console.log(undef);


//null
let nulo = null
//console.log(nulo);


//objeto
const miObjeto = {
    unNumero: 12,
    unString: 'Cadena de caracteres del objeto',
    unaCOndicion: true,
}
//console.log(miObjeto);
//console.log(miObjeto.unString);


//ARREGLOS
const arrVacio = []
const arr = [1, 2, 'Hola mundo', miObjeto]
//console.log(arrVacio,arr);

arrVacio.push(5)
arrVacio.push(7)
//console.log(arrVacio); 


//OPERACIONES

const resto = 10 % 3
//console.log(resto); 
//te da el resto de la operación (1)

let num = 5 //se usa let porque se puede modificar

num++ //te suma 1
num-- //te resta 1
num+= 3 //te suma un número
num-= 3 //te resta un número
num*= 3 //te multiplica por un número
num/= 3 //te divide entre un número

//console.log(num);



//OPERADORES DE COMPARACIÓN

const resultado1 = 5 === '5'  //igualdad estricta
const resultado2 = 5 == '5' //igualdad no estricta
// console.log(resultado1, resultado2);

const resultado3 = 5 < 6
const resultado4 = 7 >= 7
// console.log(resultado3, resultado4);

const resultado5 = 5 !== '5'  //desigualdad estricta
const resultado6 = 5 != '5' //desigualdad no estricta
// console.log(resultado5, resultado6);



//OPERADORES LÓGICOS

// or ||, and &&, not !

const resultadoOr = false || false || true // si hay algún true, el valor de OR es true
// console.log(resultadoOr);

const resultadoAnd = true && true && false // si hay algún false, el valor es false
// console.log(resultadoAnd);  

const resultadoNot = !true // niega el resultado 
// console.log(resultadoNot);



//CONTROL DE FLUJO

//IF

const edad = 5
if (edad > 5 && edad <18) {
    // console.log('El niño puede jugar');
} 
else {
    // console.log('El niño no puede jugar');
}

//WHILE

let numeroo = 4
while (numeroo < 10) {
    numeroo++
    // console.log(numeroo);
}

//SWITCH

switch ('lala') {
    case 1: {
    console.log ('yo soy el caso 1');
    break;
    }
    case 2: {
    console.log('chanchito feliz');
    break;
    }
    case 3:
    console.log('chanchito triste :('); 
    break;

    default:
    // console.log('no hay chanchitos!');
    break;
}

//FOR

/* 
for (let i = 0; i < 10; i++) {
    console.log(i);
} 
*/

//const numeros = [1, 2, 'Hola', 4, 5]
// console.log(numeros[0]);

/*
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}  
*/



//FUNCIONES

function iterar (arg1) {
    for (let i = 0; i < arg1.length; i++) {
            console.log(arg1[i]);
    }
}

const numeros = [1, 2, 3, 4, 5]
const nombres = ['Felipe', 'Pedrito', 'Sofía', 'Isabel']

// iterar(numeros)
// iterar(nombres)



//FUNCION SUMA

function suma (a, b) {
    return a + b;
}

const resultadoSuma1 = suma(1,2) // 3
const resultadoSuma2 = suma(5,8) // 13
const resultadoSuma3 = suma(resultadoSuma1,resultadoSuma2) // 16
// console.log('Tu resultado es:', resultadoSuma3)



//CALLBACK

function sumar (a, b, cb) {
    const r = a + b
    cb(r)
}

function callback(result) {
    console.log('El resultado es:', result);
}

// sumar(2, 3, callback)

