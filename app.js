// function suma(a,b){
//     return a+b
// }

// let value=suma(5,2)
// console.log(value)

// const suma=(a,b)=>a+b
// console.log(suma(6,8))

// const opera=(a,b)=>(
//     {
//         suma:a+b,
//         resta:a-b
//     }
// )
// console.log(opera(3,4))

// let persona={
//     nombre:'stivens',
//     edad:23
// }
// // const {nombre,edad}=persona;
// // console.log(nombre,edad)
// const persona2={
//     facultad:'FIS'
// }

// persona={
//     ...persona,
//     ...persona2,
//     hola:'hola'
// }
// console.log(persona)

// let arr1=[1,2,3]
// const arr2=[5,6,7]

// arr1=[...arr2,...arr1,4];
// console.log(arr1)

//practica del carrito

const productos=[
    {
        id:1,
        nombre:'Pizza Aericana',
        precio:25
    },
    {
        id:2,
        nombre:'Pizza Española',
        precio:30
    },
    {
        id:3,
        nombre:'Pizza Latina',
        precio:35
    }
]

let rpt;
let carrito=[];

const agregarCarrito=(productId,quantity)=>{
    const product=productos.find(product=>product.id==productId);
    carrito=[
        ...carrito,
        {
            ...product,
            cantidad:quantity
        }
    ]
    console.log(carrito)
}
let Registro=[];
const RegistroCant=(c)=>{ //Registro de cantidad

    Registro=[
        ...Registro,
        ...c
    ]
}
const calcularTotal=()=>{
    var Precio=0;
    var CAntTotal=0;
    for (let i= 0; i< carrito.length; i++) {
        Precio= carrito[i].precio*Registro[i];
        CAntTotal=CAntTotal+Precio;
    }
    console.log(CAntTotal)
}
while(rpt!=0){
    let productId=prompt('Ingrese el id del producto:\n1:Pizza Aericana\n2:Pizza Española\n3:Pizza Latina');
    let c=prompt('Ingrese la cantidad')
    agregarCarrito(productId,c);
    RegistroCant(c);
    rpt=prompt('Desea continuar: si=cualquier tecla no=0')
    if(rpt==0){
        calcularTotal()
    }
}