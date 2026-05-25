//car
let carArr = [];

// Classe Car - Responsável por estruturar os dados técnicos de cada veículo
class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image) {
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

function GetCarArrPosition(arr, carClass) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].nome === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    if (carClass instanceof Car) {
        if (el.checked) {
            carArr.push(carClass);
        } else {
            let posicao = GetCarArrPosition(carArr, carClass);
            if (posicao !== -1) {
                carArr.splice(posicao, 1);
            }
        }
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare() {
    if (carArr.length < 2) {
        alert("É necessário marcar pelo menos 2 carros para apresentar a comparação.");
        return;
    }
    if (carArr.length > 2) {
        alert(`Você selecionou ${carArr.length} carros. Por favor, escolha apenas 2 para fazer a comparação.`);
        return;
    }
    UpdateCompareTable();
    document.getElementById("compare").style.setProperty("display", "block");
}
function HideCompare() {
    document.getElementById("compare").style.setProperty("display", "none");
}

function UpdateCompareTable() {
    for (let i = 0; i < 2; i++) {
        let carro = carArr[i];

        if (!carro) continue;

        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${carro.image}" alt="${carro.nome}" class="photocar">`;
        document.getElementById(`compare_modelo_${i}`).innerText = carro.nome;
        document.getElementById(`compare_alturacacamba_${i}`).innerText = carro.alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).innerText = carro.alturaVeiculo;
        document.getElementById(`compare_alturasolo_${i}`).innerText = carro.alturaSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).innerText = carro.capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).innerText = carro.motor;
        document.getElementById(`compare_potencia_${i}`).innerText = carro.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).innerText = carro.volumeCacamba;
        document.getElementById(`compare_roda_${i}`).innerText = carro.roda;
        document.getElementById(`compare_preco_${i}`).innerText = carro.preco.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    }
}