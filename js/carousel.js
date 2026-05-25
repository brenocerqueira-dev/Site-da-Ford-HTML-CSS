// array que armazena os dados do carrossel
let carouselArr = [
    {
        Image: "img/imagem_1.jpg",
        Title: "Esta é a nova Ranger Ford 2022. Verifique novidades",
        Url: "Lançamento.html"
    },
    {
        Image: "img/imagem_2.jpg",
        Title: "Ford a nossa história",
        Url: "#"
    },
    {
        Image: "img/imagem_3.jpg",
        Title: "Nova Ford Bronco Sport 2022",
        Url: "Lançamento.html"
    }
];

// Classe obrigatória do desafio
class Carousel {
    static _sequence = 0;
    static _size = 0;
    static _interval = null;

    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next();


                Carousel._interval = setInterval(function () { Carousel.Next(); }, 4000);

                Carousel.ConfigurarManual();
            }
        }
    }


    static Next() {
        let dadosAtual = carouselArr[Carousel._sequence];

        let boxTexto = document.getElementById("carousel-title");
        if (boxTexto) {
            boxTexto.innerHTML = `${dadosAtual.Title} <a href="${dadosAtual.Url}">aqui</a>.`;
        }
        let radioCorrespondente = document.getElementById("radio" + (Carousel._sequence + 1));
        if (radioCorrespondente) {
            radioCorrespondente.checked = true;
        }

        // incrementa o contador para a próxima imagem
        Carousel._sequence++;

        // se chegar ao fim do array, volta para a primeira imagem (0)
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }

    static ResetarEIrPara(index) {
        // para imediatamente a contagem automática antiga
        clearInterval(Carousel._interval);

        Carousel._sequence = index;

        let dadosAtual = carouselArr[Carousel._sequence];
        let boxTexto = document.getElementById("carousel-title");
        if (boxTexto) {
            boxTexto.innerHTML = `${dadosAtual.Title} <a href="${dadosAtual.Url}">aqui</a>.`;
        }

        Carousel._sequence++;
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }

        Carousel._interval = setInterval(function () { Carousel.Next(); }, 4000);
    }
    static ConfigurarManual() {
        let radios = document.querySelectorAll('input[name="btn-radio"]');
        radios.forEach(function (radio, index) {
            radio.addEventListener('change', function () {
                Carousel.ResetarEIrPara(index);
            });
        });
    }
}

// iniciar a rolagem com a contagem assim que abrir a pgn
window.onload = function () {
    Carousel.Start(carouselArr);
};