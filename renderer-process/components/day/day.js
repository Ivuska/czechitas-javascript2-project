export class NewDay extends HTMLElement { /// diky tomuto vime, ze tato nase trida je novy HTMLElement 
    constructor (newNumber) {
        super(); /// jakmile zavolam super, volam tu vyssi tridu
        this.innerText = 'novy den';
        this.number = newNumber;
        this.addEventListener('click', this.handleClickEvent);
        }
        handleClickEvent() {
            alert('clicked day: ')+ this.number;
        }
}

customElements.define('app-day', NewDay);