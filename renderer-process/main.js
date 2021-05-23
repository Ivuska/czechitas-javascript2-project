import { Carousel } from './components/carousel/carousel.js';
import { NewDay } from './components/day/day.js';

fetch('http://localhost:3000/news.json')
    .then(serverResponse => serverResponse.text())
    .then(responseText => {
        const data = JSON.parse(responseText);
        const carousel = document.querySelector('app-carousel');
        carousel.populateNewsCarousel(data.articles);
    })

const sectionContent = document.querySelector('section.main-content');
for (let i = 0; i < 30; i++) {
    sectionContent.appendChild(new NewDay(i));
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

//Podtrida (sub-class - dedi z Operence)
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

///INSTANCE TRIDY
/// to, co ma v zavorkach nam umoznuje nadefinovat nejaky stav ktery si v sobe bude ta trida drzet
///kacer i kohout jsou dve nove hodnoty, instance, ktere o sobe nevedi, ale maji nejake spolecne vlastnosti

const kacer = new Kacer('kva kva');
kacer.vydejZvuk();
kacer.plavPoJezirku();


const kohout = new Kohout('kikiriki');
kohout.vydejZvuk();
kohout.hlasiVychodSlunce();
///==================================================================================================================