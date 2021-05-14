export class Carousel {
    constructor() {
        this.header = document.querySelector('header.header-news > div.header-news__container');
        this.carouselItemCount = 2;
        this.carouselItemStart = 0;
        this.buttonLeft = document.querySelector('#carousel-button-left'); 
        this.buttonRight = document.querySelector('#carousel-button-right'); 
        this.buttonLeft.addEventListener('click', () => {
            this.carouselItemStart --;
            this.populateNewsCarousel(this.articles);
        })
        
        this.buttonRight.addEventListener('click', () => {
            this.carouselItemStart ++;
            this.populateNewsCarousel(this.articles);
        })
    }

    populateNewsCarousel(news) {
        this.articles = news;
        this.header.innerText = '';
        for(let i = this.carouselItemStart; i < this.carouselItemStart + this.carouselItemCount; i ++) {
            const newsValue = news[i];
            const newsArticle = new NewsArticle(newsValue);
            this.header.appendChild(newsArticle);
        }
        this.checkButtonsVisibility(); 
      }

    checkButtonsVisibility() {
        if (this.carouselItemStart === 0) { 
            this.buttonLeft.hidden = true;
        }
        else { 
            this.buttonLeft.hidden = false;
        }
        if (this.carouselItemStart >= (this.articles.length - this.carouselItemCount)) {
            this.buttonRight.hidden = true;
        } else {
            this.buttonRight.hidden = false;
        }
    }   
}