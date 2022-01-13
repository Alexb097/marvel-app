export class UI {
    constructor() {
        this.characters = document.getElementById('characters');
        this.copyright = document.getElementById('marvelCopyright');
    }

    render(characters) {

        characters.forEach(character => {

            var card = document.createElement('div');
            var image = document.createElement('img');
            var name = document.createElement('h1');
            var description = document.createElement('p');

            image.setAttribute('src', `${character.thumbnail.path}.${character.thumbnail.extension}`);
            name.textContent = character.title;
            description.textContent = character.description;

            /* card.classList.add('character');
            image.classList.add('character__image');
            name.classList.add('character__name');
            description.classList.add('character__description'); */

            card.classList.add('comic');
            image.classList.add('comic__image');
            name.classList.add('comic__title');
            description.classList.add('comic__description');

            card.append(image,name,description);

            this.characters.append(card); 
        });
        
    }

    copyright(copyright) {
        this.copyright.textContent = copyright;
    }
}