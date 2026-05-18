// array que armazena
let carouselArr = [
    {
        Image: "img/imagem_1.jpg",
        Title: "Esta é a nova ford ranger 2022. Confira as novidades",
        Url: "Lançamento.html"
    },
    {
        Image: "img/imagem_2.jpg",
        Title: "Conheça a nossa história de inovação e tradição de época",
        Url: "Lançamento.html"
    },
    {
        Image: "img/imagem_3.jpg",
        Title: "Descubra a potência e o design do novo Ford Bronco",
        Url: "Lançamento.html"
    }
];

// Classe obrigatoria do desafio
class Carousel {
    static _sequence = 0;
    static _size = 0;
    static _interval = null;

    static Start(arr) {
        if (arr) {
            if (arr.length > 0) {
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); // Executa o primeiro imediatamente

                Carousel._interval = setInterval(function () { Carousel.Next(); }, 4000);
            }
        } /* else {
            throw "Method Start need a Array Variable.";
        } */
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

        // 4. Incrementa o contador para a próxima imagem
        Carousel._sequence++;

        // Se chegar ao fim do array, volta para a primeira imagem (0)
        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }
}

// iniciar a rolagem com a contagem assim que abrir a pgn
window.onload = function () {
    Carousel.Start(carouselArr);
};