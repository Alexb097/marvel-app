const { Marvel } = require('./Marvel');
const { UI } = require('./UI');
const { Store } = require('./Store');

const store = new Store();
const ui = new UI();
const marvel = new Marvel();

require('./index.css');

const providedBy = document.getElementById('providedBy');

async function fetchMarvel() {
    const data = await marvel.getMarvel();
    providedBy.innerHTML = data.attributionHTML;
    console.log(data);
    //ui.copyright(data.copyright);
    ui.render(data.data.results);
}

document.addEventListener('DOMContentLoaded', fetchMarvel);