
// addEventListener()
// document.body.style.backgroundColor
// Math.floor()
// Math.random()
// arreglo.length

const boton_cambiaColor = document.querySelector('.boton_cambia-color');
const body = document.querySelector('.body');
const color = document.querySelector('.color');

const listaColores = ['#ef9a9a', '#e57373', '#e53935', '#c62828', '#ff8a80', '#ff1744', '#d50000', '#f48fb1', '#fce4ec', '#ab47bc',
                     '#8e24aa', '#6a1b9a', '#4a148c', '#ea80fc', '#d500f9', '#aa00ff', '#673ab7', '#512da8', '#311b92', '#7c4dff', 
                     '#7986cb', '#42a5f5', '#1e88e5', '#1565c0', '#AC361D', '#81C903', '#F47416', '#BD906F', '#04D1AB', 
                     '#5CB3FF', '#0013CF', '#3B00A2', '#BE40EE', '#B906C1', '#B98DB9', '#CF0029', '#07D320', '#00D065', '#D8D100', 
                     '#A9A88E', 'B00000', '#FFC300', '#DC959F', '#18ffff'];


const longitud = listaColores.length;

function numAleatorio(min, max){
    return Math.floor(Math.random() * (max - min + 1));
}

let indiceAleatorio = numAleatorio(1, longitud);

boton_cambiaColor.addEventListener('click', () => {
    cambiaColor();
})

const cambiaColor = () => {
    if(listaColores[indiceAleatorio] === '#ef9a9a'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#e57373'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#e53935'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#c62828'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#ff8a80'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#ff1744'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#d50000'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#f48fb1'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#fce4ec'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#ab47bc'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#8e24aa'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#6a1b9a'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#4a148c'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#ea80fc'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#d500f9'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#aa00ff'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#673ab7'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#311b92'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#512da8'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#7c4dff'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#7986cb'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#42a5f5'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#1e88e5'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#1565c0'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#AC361D'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#81C903'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#F47416'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#BD906F'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#04D1AB'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#5CB3FF'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#0013CF'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#3B00A2'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#BE40EE'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#B906C1'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#B98DB9'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#CF0029'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#07D320'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#00D065'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#D8D100'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#A9A88E'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === 'B00000'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#FFC300'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#DC959F'){
        indiceAleatorio = indiceAleatorio + 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`; 
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    } else if (listaColores[indiceAleatorio] === '#18ffff'){
        indiceAleatorio = 1;
        body.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        color.innerText = `${listaColores[indiceAleatorio]}`;
        color.style.color = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.backgroundColor = `${listaColores[indiceAleatorio]}`;
        boton_cambiaColor.style.color = 'white';
    }
}