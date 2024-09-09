document.addEventListener('DOMContentLoaded', () => {
    const cardArray = [
        {
            name: 'ball',
            img: 'images/ball.png'
        },
        {
            name: 'book',
            img: 'images/book.png'
        },
        {
            name: 'car',
            img: 'images/car.png'
        },
        {
            name: 'duck',
            img: 'images/duck.png'
        },
        {
            name: 'horse',
            img: 'images/horse.png'
        },
        {
            name: 'train',
            img: 'images/train.png'
        },
        {
            name: 'ball',
            img: 'images/ball.png'
        },
        {
            name: 'book',
            img: 'images/book.png'
        },
        {
            name: 'car',
            img: 'images/car.png'
        },
        {
            name: 'duck',
            img: 'images/duck.png'
        },
        {
            name: 'horse',
            img: 'images/horse.png'
        },
        {
            name: 'train',
            img: 'images/train.png'
        }
    ]

    cardArray.sort(() => 0.5 - Math.random());

    const grid = document.querySelector('.grid');
    const result = document.querySelector('#result');
    const message = document.querySelector('#message');
    result.textContent = 0;

    var cardChoosen = [];
    var cardChoosenId = [];
    var cardsFound = [];
    var cardChoosenPath = [];
    //creating board

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img');
            card.setAttribute('src', 'images/blank.png');
            card.setAttribute('data-id', i);
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
            console.log(card);
        }
    }

    //checking matches
    function checkForMatch(){
        var cards = document.querySelectorAll('img');
        const cardOneId = cardChoosenId[0];
        const cardTwoId = cardChoosenId[1];
        if(cardChoosen[0] === cardChoosen[1]){
            cards[cardOneId].setAttribute('src', cardChoosenPath[0]);
            cards[cardTwoId].setAttribute('src', cardChoosenPath[1]);
            cards[cardOneId].removeEventListener('click', flipCard);
            cards[cardTwoId].removeEventListener('click', flipCard);
            cardsFound.push(cardChoosen);
        }else{
            cards[cardOneId].setAttribute('src', 'images/blank.png');
            cards[cardTwoId].setAttribute('src', 'images/blank.png');
        }
        cardChoosen = [];
        cardChoosenId = [];
        cardChoosenPath = [];

        result.textContent = cardsFound.length;
        if(cardsFound.length === cardArray.length/2){
            resetButton.style.display = 'block';
            message.textContent = 'Congratulations! You found them all!';
        }
    }


    //flipCard
    function flipCard() {
        let cardId = this.getAttribute('data-id');
        cardChoosen.push(cardArray[cardId].name);
        cardChoosenPath.push(cardArray[cardId].img)
        //console.log(cardChoosenId);
        cardChoosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);
        if(cardChoosen.length === 2){
            setTimeout(checkForMatch, 300);
        }
    }

    //reset the page
    const resetButton = document.getElementById('reset');
    resetButton.style.display = 'none';
    resetButton.addEventListener('click', () => {
        window.location.reload();
    })

    createBoard()

})