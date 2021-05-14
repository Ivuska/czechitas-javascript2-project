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





///==============================================================================================================================
///LEKCE 6.5. 2021
const text = 'asfhdh';
const cislo = 3;

///OBJEKT
const automobil = {
    pocetMistKSezeni: 5,
    barvaKaroserie: 'cervena'
}

console.log(automobil.barvaKaroserie);

///DEKLARACE TRIDY
class Operenec {
    constructor(volani) {
        this.zvuk = volani; ///v podstate promenna pro tu tridu
    }

    vydejZvuk() {
        console.log(this.zvuk);
    }

}

///INSTANCE TRIDY
/// to, co ma v zavorkach nam umoznuje nadefinovat nejaky stav ktery si v sobe bude ta trida drzet
///kacer i kohout jsou dve nove hodnoty, instance, ktere o sobe nevedi, ale maji nejake spolecne vlastnosti

class Kacer extends Operenec{

    plavPoJezirku() {
        console.log('plaaavat, plaaavat, plaaavat');
    }

}

class Kohout extends Operenec{
 
    hlasiVychodSlunce() {
        console.log('vychazi');
    }

}

const kacer = new Kacer('kva kva');
kacer.vydejZvuk();
kacer.plavPoJezirku();


const kohout = new Kohout('kikiriki');
kohout.vydejZvuk();
kohout.hlasiVychodSlunce();
///==================================================================================================================