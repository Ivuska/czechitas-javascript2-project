import { NewsArticle } from './components/news-article/news-article.js';

const header = document.querySelector('header.header-news > div.header-news__container');

const carouselItemCount = 2;
let carouselItemStart = 0;
let articles;

fetch('http://localhost:3000/news.json')
    .then(serverResponse => serverResponse.text())
    .then(responseText => {
        const data = JSON.parse(responseText);
        articles = data.articles;
        populateNewsCarousel(data.articles, 0);
    });

 // domaci ukol c.2   
function checkButtonsVisibility() {
    if (carouselItemStart === 0) { 
        buttonLeft.hidden = true;
    }
    else { 
        buttonLeft.hidden = false;
    }
    if (carouselItemStart >= (articles.length - carouselItemCount)) {
        buttonRight.hidden = true;
    } else {
        buttonRight.hidden = false;
    }
}

function populateNewsCarousel(news, startAt) {
    header.innerText = '';
    for(let i = startAt; i < startAt + carouselItemCount; i ++) {
        const newsValue = news[i];
        const newsDiv = new NewsArticle().createDivForNews(newsValue);
        header.appendChild(newsDiv);
    }
    checkButtonsVisibility(); //domaci ukol c.2
  }

const buttonLeft = document.querySelector('#carousel-button-left')

const buttonRight= document.querySelector('#carousel-button-right')

buttonLeft.addEventListener('click', () => {
    carouselItemStart --;
    populateNewsCarousel(articles, carouselItemStart);
})

buttonRight.addEventListener('click', () => {
    carouselItemStart ++;
    populateNewsCarousel(articles, carouselItemStart);
})

// Domaci ukol cislo 1
const mainContent = document.querySelector('.main-content')

const daysNumber = 31;
const daysStart = 1;

for(let i = daysStart; i <= daysNumber; i ++) {
    const dayDate = daysNumber[i];
    const divForDay = document.createElement('div');
    divForDay.classList.add('main-content__day');
    mainContent.appendChild(divForDay);
    divForDay.innerText = i;
}


const text = 'asfhdh';
const cislo = 3;

const automobil = {
    pocetMistKSezeni: 5,
    barvaKaroserie: 'cervena'
}

console.log(automobil.barvaKaroserie);

class Operenec {

    constructor(volani) {
        this.zvuk = volani;
    }

    vydejZvuk() {
        console.log(this.zvuk);
    }
}

class Kacer extends Operenec {
    plavPoJezirku() {
        console.log('plavu');
    } 
}

class Kohout extends Operenec{
    hlasiVychodSlunce() {
        console.log('vychazi');
    } 
}

const kacer = new Kacer('kva kva');
kacer.vydejZvuk();

const kohout = new Kohout('kyryky');
kohout.vydejZvuk();




