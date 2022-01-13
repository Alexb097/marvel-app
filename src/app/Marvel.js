const md5 = require('js-md5');

export class Marvel {
    constructor() {
        this.publicKey = '';
        this.privateKey = '';
        this.ts = 1;
        this.hash = md5(this.ts+this.privateKey+this.publicKey);
    }

    async getMarvel() {

        const URI = `http://gateway.marvel.com/v1/public/comics?ts=1&apikey=${this.publicKey}&hash=${this.hash}&limit=50`;
        const response = await fetch(URI);
        const data = await response.json();
        return data;
    }
}